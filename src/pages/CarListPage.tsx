import React from "react";
import { Box } from "@mui/material";
import NavigationBar from "../components/layout/NavigationBar";
import CarCard from "../components/CarLIstPage/CarCard";
import SearchBar from "../components/CarLIstPage/SearchBar";
import autoVistaLogo from "../assets/images/logo/auto-vista-logo-nobc.png";

const CarListPage: React.FC = () => {
  const cars = [
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Car Model 1",
      year: 2021,
      gear: "Automatic",
      power: "200 HP",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Car Model 2",
      year: 2020,
      gear: "Manual",
      power: "180 HP",
    },
  ];

  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          pt: "64px",
          backgroundImage: `linear-gradient(to right, #1b1b1b, #3e3e3e)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30vh",
            color: "white",
            textAlign: "center",
            px: 2,
            backgroundImage: `url(${autoVistaLogo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <SearchBar />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            p: 2,
          }}
        >
          {cars.map((car, index) => (
            <CarCard
              key={index}
              image={car.image}
              name={car.name}
              year={car.year}
              gear={car.gear}
              power={car.power}
              onSelect={() => console.log(`Selected ${car.name}`)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CarListPage;
