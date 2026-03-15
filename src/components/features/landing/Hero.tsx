import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import heroBg from "../../../assets/hero.svg";

export function Hero() {
  // Hero section props
  const props = {
    title: "Expenseit - Your Personal Money Tracker",
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
          textAlign: "right",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "0% 50%",
          boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.2), inset 0 -200px 50px -50px rgba(255, 255, 255, 0.5)",
        }}
      >
        <Stack spacing={4} mb={4} alignItems="center">
          <Typography
            variant="h1"
            component="h2"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "6rem" }, textAlign: "center" }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              maxWidth: { xs: "90%", sm: "80%", md: "600px" },
              lineClamp: 2,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {props.subtitle}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/login"
          sx={{ fontWeight: "600", px: 4, py: 1.5 }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
