import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";
import { AppBarContainer } from "../../common/AppBarContainer";

export function MainHeader() {
  return (
    <AppBarContainer
      position="static"
      sx={{ borderBottom: "1px solid", borderBottomColor: "divider" }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography variant="h1" sx={{ fontWeight: 900 }}>
          EXPENSEIT
        </Typography>
      </Link>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 3, md: 12 }, ml: "auto" }}
      >
        <Typography
          component="a"
          href="#features"
          sx={{
            cursor: "pointer",
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Features
        </Typography>
        <Typography
          component="a"
          href="#pricing"
          sx={{
            cursor: "pointer",
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Pricing
        </Typography>
        <Typography
          component="a"
          href="#about"
          sx={{
            cursor: "pointer",
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            "&:hover": { textDecoration: "underline" },
          }}
        >
          About
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "600",
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
            textTransform: "none",
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 0.5, sm: 1, md: 1.5 },
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
          component={Link}
          to="/login"
        >
          Login
        </Button>
      </Box>
    </AppBarContainer>
  );
}
