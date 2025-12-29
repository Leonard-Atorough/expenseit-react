import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";

export function RegisterConfirmation() {
  return (
    <Paper sx={{ p: 4, maxWidth: 500, margin: "auto", mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Thank you for registering!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please confirm your email address by clicking the link we just sent to your inbox.
      </Typography>
      <Typography variant="body1">
        If you did not receive the email, please check your spam folder or click the button below to
        resend the confirmation email.
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary">
          Resend Confirmation Email
        </Button>
      </Box>
    </Paper>
  );
}
