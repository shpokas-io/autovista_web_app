import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../features/cars/carsSlice";
import { RootState } from "../store";

export const useFetchCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars.cars);
  const status = useSelector((state: RootState) => state.cars.status);
  const error = useSelector((state: RootState) => state.cars.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  return { cars, status, error };
};
