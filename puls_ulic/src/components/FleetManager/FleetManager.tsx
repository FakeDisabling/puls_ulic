import React, { useState } from "react";
import "./FleetManager.css";
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
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { Link } from "react-router-dom";
import FleetManagerSettings from "./FleetManagerSettings";

const drawerWidth = 240;

interface Driver {
  id: string;
  name: string;
  phone: string;
  car: string;
  plate: string;
  status: string;
}

function FleetManager() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const drivers: Driver[] = [
    {
      id: "1",
      name: "Иван Иванов",
      phone: "+375 (29) 123-45-67",
      car: "Hyundai Solaris",
      plate: "A123BC 199",
      status: "Онлайн",
    },
    {
      id: "2",
      name: "Петр Петров",
      phone: "+375 (17) 654-32-10",
      car: "Kia Rio",
      plate: "B456DE 777",
      status: "Офлайн",
    },
    //  Добавьте других водителей
  ];

  return (
    <div className="fleet-manager">
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
          <Typography variant="h6">Начальник автоколонны</Typography>
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
          Список водителей
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Водитель</TableCell>
                <TableCell>Телефон</TableCell>
                <TableCell>Автомобиль</TableCell>
                <TableCell>Статус</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar sx={{ width: 40, height: 40, mr: 1 }}>
                        <PersonIcon />
                      </Avatar>
                      {driver.name}
                    </Box>
                  </TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DirectionsCarFilledIcon sx={{ mr: 1 }} />
                      {driver.car}, {driver.plate}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={driver.status}
                      color={driver.status === "Онлайн" ? "success" : "default"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <FleetManagerSettings></FleetManagerSettings>
      </div>
    </div>
  );
}

export default FleetManager;
