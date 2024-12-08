import React from "react";
import "./CarList.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

interface Car {
  id: string;
  plate: string;
  model: string;
  status: string; // Например, "В обслуживании", "Готов"
}

interface CarListProps {
  onCarSelect: (carId: string) => void;
}

function CarList({ onCarSelect }: CarListProps) {
  const cars: Car[] = [
    {
      id: "1",
      plate: "A123BC 199",
      model: "Hyundai Solaris",
      status: "В обслуживании",
    },
    {
      id: "2",
      plate: "B456DE 777",
      model: "Kia Rio",
      status: "Готов",
    },
    // Добавьте другие автомобили
  ];

  return (
    <Box sx={{ width: "40%", border: "1px solid #ccc", borderRadius: 2, p: 2 }}>
      <Typography variant="h6" component="h3">
        Список автомобилей
      </Typography>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id} button onClick={() => onCarSelect(car.id)}>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${car.plate} - ${car.model}`}
              secondary={car.status}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CarList;
