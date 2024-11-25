import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../features/cars/carsSlice";
import { RootState, AppDispatch } from "../store";

export const useCars = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading, error } = useSelector(
    (state: RootState) => state.cars
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return { cars, loading, error };
};
