import baseApi from "./baseApi";

export const carsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query<any, void>({
      query: () => "/cars",
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
