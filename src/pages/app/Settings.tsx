import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Settings() {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This is a placeholder for your settings page. Configure your preferences here.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};
