import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const ButtonStyle = {
  color: '#FFA500',
  position: "relative",
  overflow: "hidden",
  borderRadius: "10%",
  width: "60px",
  height: "60px",
  padding: "0",
  border: "2px solid #FFA500",
  transition: "background-color 0.3s",
  "&:hover": {
    color: '#fff',
    backgroundColor: "#FF3700",
  },
};

const iconStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "color 0.3s",
};

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <Button sx={ButtonStyle} onClick={onClick}>
      <Add sx={iconStyle} />
    </Button>
  );
};

export default AddButton;
