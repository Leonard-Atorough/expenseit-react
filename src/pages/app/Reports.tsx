import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Report() {
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: "0 auto" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reports
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is a placeholder for the Reports page. Here you will be able to view and generate
          expense reports.
        </Typography>
      </Paper>
    </Box>
  );
}
