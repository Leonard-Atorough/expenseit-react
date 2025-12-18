import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export function ErrorAlert({ message }: { message: string | null }) {
  if (!message) return null;

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography color="error" align="center" sx={{ mb: 2 }}>
        {message}
      </Typography>
    </Paper>
  );
}
