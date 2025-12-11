import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import heroBg from "../../assets/hero_bg.jpg";

export function Hero() {
  // Hero section props
  const props = {
    title: "Welcome to ExpenseIt",
    subtitle:
      "Join us today and take control of your finances! Manage your expenses effortlessly and stay on top of your budget.",
    bgImage: heroBg,
  };

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          textAlign: "center",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "0% 50%",
          color: "#fff",
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.35)",
        }}
      >
        <Stack spacing={4} mb={4} alignItems="center">
          <Typography variant="h1" component="h2" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" component="h3">
            {props.subtitle}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          size="large"
          href="/login"
          sx={{ fontWeight: "500", px: 4, py: 1.5, fontSize: "1.25rem" }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
