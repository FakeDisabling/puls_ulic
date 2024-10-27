import React, { useState } from "react";
import CarList from "./CarList";
import MaintenanceSettings from "./MaintenanceSettings";
import CarDetails from "./CarDetails"; // Новый компонент для деталей автомобиля
import "./MaintenanceWorker.css";
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
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const drawerWidth = 240;

function MaintenanceWorker() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCarSelect = (carId: string) => {
    setSelectedCar(carId);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="maintenance-worker">
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
          <Typography variant="h6">Тех. обслуживание</Typography>
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
        <Box sx={{ display: "flex", gap: 3, marginTop: 3 }}>
          <CarList onCarSelect={handleCarSelect} />
          {selectedCar && <CarDetails carId={selectedCar} />}
        </Box>
        <MaintenanceSettings />
      </div>
    </div>
  );
}

export default MaintenanceWorker;
