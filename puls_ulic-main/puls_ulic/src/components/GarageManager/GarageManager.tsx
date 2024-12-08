import React, { useState } from "react";
import "./GarageManager.css";
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
  DialogContentText,
  DialogActions,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import GarageManagerSettings from "./GarageManagerSettings";

const drawerWidth = 240;

interface Car {
  id: string;
  plate: string;
  model: string;
  status: string;
}

function GarageManager() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSendToMaintenanceDialogOpen, setIsSendToMaintenanceDialogOpen] =
    useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleSendToMaintenance = (car: Car) => {
    setSelectedCar(car);
    setIsSendToMaintenanceDialogOpen(true);
  };

  const handleCloseSendToMaintenanceDialog = () => {
    setIsSendToMaintenanceDialogOpen(false);
    setSelectedCar(null);
  };

  const handleConfirmSendToMaintenance = () => {
    if (selectedCar) {
      console.log(`Автомобиль ${selectedCar.plate} отправлен на обслуживание.`);
      //  Здесь должна быть логика отправки данных на сервер
      handleCloseSendToMaintenanceDialog();
    }
  };

  const cars: Car[] = [
    {
      id: "1",
      plate: "A123BC 199",
      model: "Hyundai Solaris",
      status: "В гараже",
    },
    {
      id: "2",
      plate: "B456DE 777",
      model: "Kia Rio",
      status: "На ремонте",
    },
    //  Добавьте другие автомобили
  ];

  return (
    <div className="garage-manager">
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
          <Typography variant="h6">Заведующий гаражом</Typography>
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
          Список автомобилей
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Номер</TableCell>
                <TableCell>Модель</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.plate}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<BuildIcon />}
                      onClick={() => handleSendToMaintenance(car)}
                    >
                      Отправить на обслуживание
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/*  Диалог подтверждения отправки на обслуживание  */}
        <Dialog
          open={isSendToMaintenanceDialogOpen}
          onClose={handleCloseSendToMaintenanceDialog}
        >
          <DialogTitle>Подтверждение</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Отправить автомобиль {selectedCar?.plate} на ремонт/обслуживание?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSendToMaintenanceDialog}>Отмена</Button>
            <Button onClick={handleConfirmSendToMaintenance} autoFocus>
              Подтвердить
            </Button>
          </DialogActions>
        </Dialog>
        <GarageManagerSettings />
      </div>
    </div>
  );
}

export default GarageManager;
