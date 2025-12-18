import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../../../hooks/Auth";

export function Settings() {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Account Information
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label="First Name" defaultValue={user?.firstName} disabled />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label="Last Name" defaultValue={user?.lastName} disabled />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Email" defaultValue={user?.email} disabled />
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth type="password" label="Current Password" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth type="password" label="New Password" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth type="password" label="Confirm New Password" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button variant="contained" color="primary">
              Update Password
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
