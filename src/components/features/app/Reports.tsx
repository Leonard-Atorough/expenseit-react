import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export function Reports() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Reports
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Spending Analysis
            </Typography>
            <Typography color="text.secondary">
              Reports and analytics will be displayed here
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
