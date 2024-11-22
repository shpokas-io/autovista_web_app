export const useFetchCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars.cars);
  const status = useSElector((state: RootState) => state.cars.status);
  const error = useSelector((state: RootState) => state.cars.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  return { cars, status, error };
};
