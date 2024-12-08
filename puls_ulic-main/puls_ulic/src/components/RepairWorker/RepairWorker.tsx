import React, { useState } from "react";
import "./RepairWorker.css";
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
import GarageIcon from "@mui/icons-material/Garage"; //  Иконка для гаража
import { Link } from "react-router-dom";
import RepairWorkerSettings from "./RepairWorkerSettings";

const drawerWidth = 240;

interface Car {
  id: string;
  plate: string;
  model: string;
  status: string;
  description: string;
}

function RepairWorker() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isReturnToGarageDialogOpen, setIsReturnToGarageDialogOpen] =
    useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleReturnToGarage = (car: Car) => {
    setSelectedCar(car);
    setIsReturnToGarageDialogOpen(true);
  };

  const handleCloseReturnToGarageDialog = () => {
    setIsReturnToGarageDialogOpen(false);
    setSelectedCar(null);
  };

  const handleConfirmReturnToGarage = () => {
    if (selectedCar) {
      // Логика возврата автомобиля в гараж
      console.log(`Автомобиль ${selectedCar.plate} возвращен в гараж.`);
      handleCloseReturnToGarageDialog();
    }
  };

  const cars: Car[] = [
    {
      id: "1",
      plate: "A123BC 199",
      model: "Hyundai Solaris",
      status: "В ремонте",
      description: "Замена тормозных колодок",
    },
    {
      id: "2",
      plate: "B456DE 777",
      model: "Kia Rio",
      status: "Диагностика",
      description: "Проверка двигателя",
    },
    //  Добавьте другие автомобили
  ];

  return (
    <div className="repair-worker">
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
          <Typography variant="h6">Ремонтный рабочий</Typography>
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
          Список автомобилей в ремонте
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Номер</TableCell>
                <TableCell>Модель</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.plate}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.status}</TableCell>
                  <TableCell>{car.description}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<GarageIcon />}
                      onClick={() => handleReturnToGarage(car)}
                    >
                      Вернуть в гараж
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Диалог подтверждения возврата в гараж */}
        <Dialog
          open={isReturnToGarageDialogOpen}
          onClose={handleCloseReturnToGarageDialog}
        >
          <DialogTitle>Подтверждение</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Вернуть автомобиль {selectedCar?.plate} в гараж?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseReturnToGarageDialog}>Отмена</Button>
            <Button onClick={handleConfirmReturnToGarage} autoFocus>
              Подтвердить
            </Button>
          </DialogActions>
        </Dialog>
        <RepairWorkerSettings></RepairWorkerSettings>
      </div>
    </div>
  );
}

export default RepairWorker;
