import { Alert } from "@mui/material";

interface AlertsProps {
  successMessage: string;
  error: string | null;
}

const Alerts: React.FC<AlertsProps> = ({ successMessage, error }) => (
  <>
    {successMessage && (
      <Alert severity="success" sx={{ mb: 2 }}>
        {successMessage}
      </Alert>
    )}
    {error && (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    )}
  </>
);

export default Alerts;
