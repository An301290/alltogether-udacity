import React from "react";
import { Button, Container } from "@mui/material";

type Props = {};

const AddButton = (props: Props) => {
  return (
    <Button type="submit" variant="contained" color="primary">
      Add
    </Button>
  );
};

export default AddButton;
