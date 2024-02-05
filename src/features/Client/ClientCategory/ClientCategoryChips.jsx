import { Box, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import imgUrl from "../../assets/logo.png";
import EditIcon from "@mui/icons-material/Edit";
import BrandModal from "./BrandModal";
import { useGetAllBrandsQuery } from "../../redux/api/brand/brandApiSlice";
import ClientCategoryModal from "./ClientCategoryModal";

const ClientCategoryChips = ({ companyId }) => {
  const [open, setOpen] = useState(false);
  const [brand, setBrand] = useState("");

  const handleOpen = (brand) => {
    setOpen(true);
    setBrand(brand);
  };

  const handleClose = () => setOpen(false);

  const theme = useTheme();

  // API
  const { data: brands, isSuccess } = useGetAllBrandsQuery();

  console.log(brands)
  let BrandsChip;
  if (isSuccess && brands.length>0 && companyId) {
      BrandsChip = (
        <>
          <Grid container spacing={2}>
            {brands
              .filter((brand) => brand?.company?._id === companyId)
              .map((brand) => (
                <Grid item lg={2} key={brand._id}>
                  <Box sx={{ width: "100%", maxWidth: 250 }}>
                    <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                      <img src={`http://localhost:8000/${brand.imgUrl}`} alt="logo" width={50} height={20} className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200" />
                      <Typography variant="h6">{brand.title}</Typography>
                      <IconButton onClick={() => handleOpen(brand)}>
                        <EditIcon />
                      </IconButton>
                    </Paper>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </>
      );
  }

  let DummyChip = (
    <>
      <Grid item lg={2}>
        <Box sx={{ width: "100%", maxWidth: 250 }}>
          <Paper sx={{ minHeight: 60, borderRadius: theme.mixins.borderRadius, p: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <img src="https://source.unsplash.com/random?logos" alt="logo" width={50} height={20} className="h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-gray-200" />
            <Typography variant="h6">Dummy Brand</Typography>
            <IconButton onClick={() => handleOpen()}>
              <EditIcon />
            </IconButton>
          </Paper>
        </Box>
      </Grid>
    </>
  );

  return (
    <>
      {BrandsChip ? BrandsChip : DummyChip}
      <ClientCategoryModal open={open} onClose={handleClose} brand={brand} />
    </>
  );
};

export default ClientCategoryChips;
