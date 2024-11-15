import { Button } from "@mui/material";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean; // Add the disabled prop
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
