import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

interface CarCardProps {
  image: string;
  name: string;
  year: number;
  gear: string;
  power: string;
  onSelect: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  image,
  name,
  year,
  gear,
  power,
  onSelect,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 2,
        color: "white",
      }}
    >
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gear: {gear}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Power: {power}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onSelect}
          sx={{ mt: 2 }}
        >
          Select
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
