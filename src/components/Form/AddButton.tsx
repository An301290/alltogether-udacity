import React from "react";
import { Button } from "@mui/material";

interface Props {
  isFormIncomplete: boolean;
}

const AddButton = (props: Props) => {
  const { isFormIncomplete } = props;
  return (
    <Button
      disabled={isFormIncomplete}
      type="submit"
      variant="contained"
      color="primary"
    >
      Add
    </Button>
  );
};

export default AddButton;
