import { AppBar, Box, Toolbar, Typography } from "@mui/material";

type Props = {};

const NavBarComponent = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Together Udacity
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarComponent;
