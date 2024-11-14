import { Button } from "@mui/material";

type SubmitButtonProps = {
  label: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      style={{ marginTop: 16 }}
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
