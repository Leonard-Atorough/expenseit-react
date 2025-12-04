import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export function Hero() {
  return (
    <Box>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Stack spacing={4} mb={4} mt={8} alignItems="center">
          <Typography variant="h2" component="h2" gutterBottom>
            Welcome to ExpenseIt
          </Typography>
          <Typography variant="h5" component="h3" color="text.secondary">
            Join us today and take control of your finances! Manage your expenses effortlessly and
            stay on top of your budget.
          </Typography>
        </Stack>
        <Button variant="contained" size="large" href="/login">
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
