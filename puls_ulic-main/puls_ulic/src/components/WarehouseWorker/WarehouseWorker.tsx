import React, { useState } from "react";
import "./WarehouseWorker.css";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Box,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import WarehouseWorkerSettings from "./WarehouseWorkerSettings";

const drawerWidth = 240;

interface Part {
  id: string;
  name: string;
  quantity: number;
}

function WarehouseWorker() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [parts, setParts] = useState<Part[]>([
    { id: "1", name: "Тормозные колодки", quantity: 10 },
    { id: "2", name: "Свечи зажигания", quantity: 25 },
    { id: "3", name: "Масляный фильтр", quantity: 15 },
  ]);
  const [requestDetails, setRequestDetails] = useState({
    partName: "",
    quantity: 0,
  });

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleOpenRequestDialog = () => {
    setIsRequestDialogOpen(true);
  };

  const handleCloseRequestDialog = () => {
    setIsRequestDialogOpen(false);
    setRequestDetails({ partName: "", quantity: 0 });
  };

  const handleRequestPart = () => {
    // Здесь будет логика отправки запроса на сервер
    console.log("Запрос на запчасти отправлен:", requestDetails);
    handleCloseRequestDialog();
  };

  return (
    <div className="warehouse-worker">
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Работник склада</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        classes={{
          paper: "drawer-paper",
        }}
      >
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
        </List>
      </Drawer>

      <div className="container">
        <Typography variant="h4" component="h2" gutterBottom>
          Склад запчастей
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DescriptionIcon />}
          onClick={handleOpenRequestDialog}
          sx={{ mb: 2 }}
        >
          Заказать запчасти
        </Button>

        {/* Таблица запчастей */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Количество</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parts.map((part) => (
                <TableRow key={part.id}>
                  <TableCell>{part.name}</TableCell>
                  <TableCell>{part.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Диалог заказа запчастей */}
        <Dialog open={isRequestDialogOpen} onClose={handleCloseRequestDialog}>
          <DialogTitle>Заказ запчастей</DialogTitle>
          <DialogContent>
            <TextField
              label="Название запчасти"
              value={requestDetails.partName}
              onChange={(e) =>
                setRequestDetails({
                  ...requestDetails,
                  partName: e.target.value,
                })
              }
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Количество"
              type="number"
              value={requestDetails.quantity}
              onChange={(e) =>
                setRequestDetails({
                  ...requestDetails,
                  quantity: parseInt(e.target.value, 10) || 0,
                })
              }
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* You can use a different icon for quantity if you like */}
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseRequestDialog}>Отмена</Button>
            <Button onClick={handleRequestPart} color="primary">
              Отправить запрос
            </Button>
          </DialogActions>
        </Dialog>
        <WarehouseWorkerSettings></WarehouseWorkerSettings>
      </div>
    </div>
  );
}

export default WarehouseWorker;
