import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useAuth } from "../../../hooks/Auth";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.firstName}!
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="text.secondary">
              Total Balance
            </Typography>
            <Typography variant="h4" sx={{ mt: 2 }}>
              $0.00
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="text.secondary">
              This Month
            </Typography>
            <Typography variant="h4" sx={{ mt: 2 }}>
              $0.00
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="text.secondary">
              Transactions
            </Typography>
            <Typography variant="h4" sx={{ mt: 2 }}>
              0
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Recent Transactions
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography color="text.secondary">No transactions yet</Typography>
        </Paper>
      </Box>
    </Container>
  );
}
