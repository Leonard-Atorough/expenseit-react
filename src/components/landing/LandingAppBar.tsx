import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function LandingAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 3, py: 0.5 }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1, fontWeight: "700" }}>
            ExpenseIt
          </Typography>
          <Button color="inherit" sx={{ fontWeight: "700" }} href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
