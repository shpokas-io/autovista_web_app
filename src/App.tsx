import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import HomePage from "./pages/HomePage";
import CarListPage from "./pages/CarListPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/cars"
        element={isAuthenticated ? <CarListPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/cars/:id"
        element={
          isAuthenticated ? <CarDetailsPage /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
}
export default App;
