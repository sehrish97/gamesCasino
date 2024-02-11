import { Box, Typography, CardContent, Card, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ArrowUpwardOutlined } from "@mui/icons-material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import CasinoIcon from "@mui/icons-material/Casino";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LoginIcon from "@mui/icons-material/Login";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const HomeChipColumnOne = [
  {
    id: 1,
    title: "Users",
    fractionOne: "1/",
    fractionTwo: 239,
    icon: PersonIcon,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
  },

  {
    id: 1,
    title: "Users (Refferred)",
    fractionOne: "0/",
    fractionTwo: 3,
    icon: PeopleOutlineOutlinedIcon,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
  },

  {
    id: 1,
    title: "Active Users",
    fractionOne: 1,
    icon: LoginIcon,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
  },

  {
    id: 1,
    title: "Balance",
    fractionOne: "$ 1000.00",
    icon: AccountBalanceWalletIcon,
    cardBorder: "1px solid #FFC99A",
    cardHeight: "4rem",
    color: "#FFC99A",
    hover: true,
    url:"/admin/balance"
  },

  {
    id: 1,
    title: "Games",
    fractionOne: "0.00",
    fractionTwo: "2.8k",
    icon: CasinoIcon,
    cardBorder: "1px solid #9aa1ff",
    cardHeight: "4rem",
    color: "#9aa1ff",
    lastIcon: ArrowForwardIosIcon,
    hover: true,
  },
  {
    id: 1,
    title: "Maintenance",
    fractionOne: "",
    fractionTwo: "",
    icon: ConstructionIcon,
    cardBorder: "1px solid #ef6262",
    color: "#ef6262",
    lastIcon: CloseIcon,
    hover: true,
  },
];

const HomeChipColumnTwo = [
  {
    id: 1,
    title: "Deposits",
    subTitle: "Today's value $0.00",
    fractionOne: "0/",
    fractionTwo: 0,
    fractionThree: 0,
    fractionFour: 0,
    icon: ArrowDownwardIcon,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
    hover: true,
    url:"/admin/deposits"
  },
  {
    id: 1,
    title: "Withdraws",
    subTitle: "Today's value $0.00",
    fractionOne: 0,
    fractionTwo: 1,
    icon: ArrowUpwardOutlined,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
    hover: true,
  },
  {
    id: 1,
    title: "Wagered",
    fractionOne: "$ 0.00",
    fractionTwo: "$ 73.1m",
    icon: PaidIcon,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
  },
  {
    id: 1,
    title: "Profit",
    fractionOne: "$ 0.00",
    fractionTwo: "$ 49.7m",
    icon: PaidIcon,
    cardBorder: "1px solid grey",
    cardHeight: "4rem",
  },
];

const HomeChips = () => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        {HomeChipColumnOne.map((data) => {
          return (
            <>
            {
               data.hover ? (
                <Link to={data.url} >
              <Card
                sx={{
                  minWidth: "250px",
                  m: 1,
                  border: `${data.cardBorder}`,
                  height: `${data.cardHeight}`,
                  borderRadius: "10px",
                  ...(data.hover === true && {
                    ":hover": {
                      cursor: "pointer",
                      transform: "scale(1.05)", // Scale up on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition
                    },
                  }),
                }}
              >
                <CardContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <data.icon
                        sx={{ fontSize: "18px", color: `${data.color}` }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ textIndent: "10px", color: `${data.color}` }}
                      >
                        {data.title}
                      </Typography>
                      {data?.subTitle && (
                        <Typography color="text.secondary" variant="">
                          {data.subTitle}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        textDecorationLine: "underline",
                        color: `${data.color}`,
                      }}
                    >
                      {data.fractionOne}
                    </Typography>

                    {data.fractionTwo >= 0 || data.fractionTwo !== "" ? (
                      <>
                        <Typography
                          variant="h5"
                          sx={{
                            textDecorationLine: "underline",
                            color: `${data.color}`,
                          }}
                        >
                          {data.fractionTwo}
                        </Typography>
                      </>
                    ) : null}
                    {data.fractionThree >= 0 ? (
                      <>
                        <Typography>|</Typography>
                        <Typography variant="h5">
                          {data.fractionThree}
                        </Typography>
                        <Typography>/</Typography>
                        <Typography variant="h5">
                          {data.fractionFour}
                        </Typography>
                      </>
                    ) : data.lastIcon ? (
                      <data.lastIcon
                        sx={{
                          fontSize: "18px",
                          color: `${data.color}`,
                          textIndent: "10px",
                        }}
                      />
                    ) : null}
                  </Box>
                </CardContent>
              </Card>
              </Link>
              ) :(
                <Card
                sx={{
                  minWidth: "250px",
                  m: 1,
                  border: `${data.cardBorder}`,
                  height: `${data.cardHeight}`,
                  borderRadius: "10px",
                  ...(data.hover === true && {
                    ":hover": {
                      cursor: "pointer",
                      transform: "scale(1.05)", // Scale up on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition
                    },
                  }),
                }}
              >
                <CardContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <data.icon
                        sx={{ fontSize: "18px", color: `${data.color}` }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ textIndent: "10px", color: `${data.color}` }}
                      >
                        {data.title}
                      </Typography>
                      {data?.subTitle && (
                        <Typography color="text.secondary" variant="">
                          {data.subTitle}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        textDecorationLine: "underline",
                        color: `${data.color}`,
                      }}
                    >
                      {data.fractionOne}
                    </Typography>

                    {data.fractionTwo >= 0 || data.fractionTwo !== "" ? (
                      <>
                        <Typography
                          variant="h5"
                          sx={{
                            textDecorationLine: "underline",
                            color: `${data.color}`,
                          }}
                        >
                          {data.fractionTwo}
                        </Typography>
                      </>
                    ) : null}
                    {data.fractionThree >= 0 ? (
                      <>
                        <Typography>|</Typography>
                        <Typography variant="h5">
                          {data.fractionThree}
                        </Typography>
                        <Typography>/</Typography>
                        <Typography variant="h5">
                          {data.fractionFour}
                        </Typography>
                      </>
                    ) : data.lastIcon ? (
                      <data.lastIcon
                        sx={{
                          fontSize: "18px",
                          color: `${data.color}`,
                          textIndent: "10px",
                        }}
                      />
                    ) : null}
                  </Box>
                </CardContent>
              </Card>
              )
            }
            </>
          );
        })}
      </Grid>
      <Grid item xs={12} sm={4}>
        {HomeChipColumnTwo.map((data) => {
          return (
            <>
            <Grid xs={12} sm={3}>
            {
               data.hover ? (
                <Link to={data.url} >
                <Card
                  sx={{
                    minWidth: "250px",
                    m: 1,
                    border: `${data.cardBorder}`,
                    height: `${data.cardHeight}`,
                    borderRadius: "10px",
                    ...(data.hover === true && {
                        ":hover": {
                          cursor: "pointer",
                          transform: "scale(1.05)", // Scale up on hover
                          transition: "transform 0.3s ease-in-out", // Smooth transition
                        },
                      }),
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box>
                        <data.icon
                          sx={{ fontSize: "18px", color: `${data.color}` }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ textIndent: "10px", color: `${data.color}` }}
                        >
                          {data.title}
                        </Typography>
                        {data?.subTitle && (
                          <Typography color="text.secondary" variant="">
                            {data.subTitle}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          textDecorationLine: "underline",
                          color: `${data.color}`,
                        }}
                      >
                        {data.fractionOne}
                      </Typography>

                      {data.fractionTwo >= 0 || data.fractionTwo !== "" ? (
                        <>
                          <Typography
                            variant="h5"
                            sx={{
                              textDecorationLine: "underline",
                              color: `${data.color}`,
                            }}
                          >
                            {data.fractionTwo}
                          </Typography>
                        </>
                      ) : null}
                      {data.fractionThree >= 0 ? (
                        <>
                          <Typography>|</Typography>
                          <Typography variant="h5">
                            {data.fractionThree}
                          </Typography>
                          <Typography>/</Typography>
                          <Typography variant="h5">
                            {data.fractionFour}
                          </Typography>
                        </>
                      ) : data.lastIcon ? (
                        <data.lastIcon
                          sx={{
                            fontSize: "18px",
                            color: `${data.color}`,
                            textIndent: "10px",
                          }}
                        />
                      ) : null}
                    </Box>
                  </CardContent>
                </Card>
                </Link>
               ):(
                <Card
                  sx={{
                    minWidth: "250px",
                    m: 1,
                    border: `${data.cardBorder}`,
                    height: `${data.cardHeight}`,
                    borderRadius: "10px",
                    ...(data.hover === true && {
                        ":hover": {
                          cursor: "pointer",
                          transform: "scale(1.05)", // Scale up on hover
                          transition: "transform 0.3s ease-in-out", // Smooth transition
                        },
                      }),
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box>
                        <data.icon
                          sx={{ fontSize: "18px", color: `${data.color}` }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ textIndent: "10px", color: `${data.color}` }}
                        >
                          {data.title}
                        </Typography>
                        {data?.subTitle && (
                          <Typography color="text.secondary" variant="">
                            {data.subTitle}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          textDecorationLine: "underline",
                          color: `${data.color}`,
                        }}
                      >
                        {data.fractionOne}
                      </Typography>

                      {data.fractionTwo >= 0 || data.fractionTwo !== "" ? (
                        <>
                          <Typography
                            variant="h5"
                            sx={{
                              textDecorationLine: "underline",
                              color: `${data.color}`,
                            }}
                          >
                            {data.fractionTwo}
                          </Typography>
                        </>
                      ) : null}
                      {data.fractionThree >= 0 ? (
                        <>
                          <Typography>|</Typography>
                          <Typography variant="h5">
                            {data.fractionThree}
                          </Typography>
                          <Typography>/</Typography>
                          <Typography variant="h5">
                            {data.fractionFour}
                          </Typography>
                        </>
                      ) : data.lastIcon ? (
                        <data.lastIcon
                          sx={{
                            fontSize: "18px",
                            color: `${data.color}`,
                            textIndent: "10px",
                          }}
                        />
                      ) : null}
                    </Box>
                  </CardContent>
                </Card>
               )
            }
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default HomeChips;
