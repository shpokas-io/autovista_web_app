import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import NavigationBar from "../components/layout/NavigationBar";
import CarCard from "../components/CarLIstPage/CarCard";
import SearchBar from "../components/CarLIstPage/SearchBar";
import autoVistaLogo from "../assets/images/logo/auto-vista-logo-nobc.png";
import { useFetchCars } from "../hooks/useFetchCars";

const CarListPage: React.FC = () => {
  const { cars, status, error } = useFetchCars();

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
          {status === "loading" && <CircularProgress />}
          {status === "failed" && (
            <Typography variant="h6" color="error">
              {error}
            </Typography>
          )}
          {status === "succeeded" &&
            cars.map((car, index) => (
              <CarCard
                key={index}
                image={car.car_image}
                name={`${car.make} ${car.model}`}
                year={car.year}
                gear={car.transmission}
                power={`${car.power} HP`}
                onSelect={() =>
                  console.log(`Selected ${car.make} ${car.model}`)
                }
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default CarListPage;
