import React, { useReducer } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Modal,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useCreateRoleMutation, useGetAllModelsQuery } from "../../../../../redux/api/role/roleApiSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "0.75rem",
  boxShadow: 24,
  p: 2,
};

const menuItems = [
  { label: "Create Lead", key: "create-lead" },
  { label: "Lead Funnel", key: "lead-funnel" },
];

const AddRoleAndPermission = ({ open, onClose }) => {

  const initialState = {
    title: "",
    visible: [],
    permissions: [],
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  // API
  const [createRole] = useCreateRoleMutation();

  const { data: models, isSuccess: isModelSuccess } = useGetAllModelsQuery();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { data } = await createRole({
      title: state.title,
      visible: state.visible,
      permissions:state.permissions
    });
    if (data) {
      onClose();
      dispatch({ ...initialState, visible: [...state.visible] });
    }
  };

  const handleChange = (name) => {
    const isItemInArray = state.visible.includes(name);

    dispatch({
      visible: isItemInArray ? state.visible.filter((item) => item !== name) : [...state.visible, name],
    });
  };

  const handleModelChange = (permissionName, actionsMethod) => {
    const existingPermissionIndex = state.permissions.findIndex((m) => m.model === permissionName);

    if (existingPermissionIndex !== -1) {
      const updatedModel = {
        ...state.permissions[existingPermissionIndex],
        actions: state.permissions[existingPermissionIndex].actions.includes(actionsMethod)
          ? state.permissions[existingPermissionIndex].actions.filter((a) => a !== actionsMethod)
          : [...state.permissions[existingPermissionIndex].actions, actionsMethod],
      };

      dispatch({
        permissions: [...state.permissions.slice(0, existingPermissionIndex), updatedModel, ...state.permissions.slice(existingPermissionIndex + 1)],
      });
    } else {
      dispatch({
        permissions: [...state.permissions, { model: permissionName, actions: [actionsMethod] }],
      });
    }
  };

// console.log(state)

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Box>
            <Typography
              id="modal-modal-title"
              color="primary"
              variant="h5"
              component="h2"
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              Create Role And Permission
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              mt: 2,
              mb: 4,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TextField fullWidth id="standard-basic" label="Role Name" variant="standard" onChange={(e) => dispatch({ title: e.target.value })} />
            <Table size="small" sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1">Menu Item</Typography>
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {menuItems.map((menuItem) => (
                  <TableRow key={menuItem.key}>
                    <TableCell>{menuItem.label}</TableCell>
                    <TableCell>
                      <Switch checked={state.visible.includes(menuItem.key)} onChange={() => handleChange(menuItem.key)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {isModelSuccess && (
              <div style={{ height: "400px", overflow: "auto" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Model Name</TableCell>
                      <TableCell>Create</TableCell>
                      <TableCell>Read</TableCell>
                      <TableCell>Update</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {models.map((item) => (
                      <TableRow key={item.model}>
                        <TableCell>{item.model}</TableCell>
                        {item.actions.map((action) => (
                          <TableCell key={action.title}>
                            <Switch
                              checked={state.permissions.some((m) => m.model === item.model && m.actions.includes(action.method))}
                              onChange={() => handleModelChange(item.model, action.method)}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </Box>
          <Button fullWidth variant="outlined" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddRoleAndPermission;
