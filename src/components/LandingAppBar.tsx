import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

export function LandingAppBar({ page }: { page: string | undefined }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 3, py: 0.5 }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "700" }}>
              {`EXPENSEIT ${page ? `| ${page}` : ""}`}
            </Typography>
          </Link>
          <Button color="inherit" sx={{ fontWeight: "700" }} component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
