import baseApi from "./baseApi";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  car_image: string;
  transmission: string;
  power: number;
}

export const carsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query<Car[], void>({
      query: () => "/cars",
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
