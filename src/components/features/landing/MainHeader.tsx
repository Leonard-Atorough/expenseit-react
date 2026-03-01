// Using mui for styling and components. Styling a header with  a title (no subtitle), some jump links and a login/signup button.
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import { AppBarContainerCopy } from "../../common/AppBarContainer copy";

export function MainHeader() {
  return (
    <AppBarContainerCopy
    pageTitle="Welcome to ExpenseIt"
      position="static"
      sx={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", cursor: "pointer" }}
        >
          Welcome to ExpenseIt
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Typography
            component="a"
            href="#features"
            sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
          >
            Features
          </Typography>
          <Typography
            component="a"
            href="#pricing"
            sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
          >
            Pricing
          </Typography>
          <Typography
            component="a"
            href="#about"
            sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
          >
            About
          </Typography>
          <Box sx={{ ml: 2 }}>
            <Button color="inherit" sx={{ fontWeight: "600" }} component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </AppBarContainerCopy>
  );
}
