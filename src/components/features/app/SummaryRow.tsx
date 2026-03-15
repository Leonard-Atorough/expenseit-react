import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export function SummaryRow() {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textTransform: "uppercase", fontSize: "12px" }}
          >
            Total Balance
          </Typography>
          <Typography variant="h1" color="primary" sx={{ mt: 2 }}>
            $0.00
          </Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textTransform: "uppercase", fontSize: "12px" }}
          >
            Transactions
          </Typography>
          <Typography variant="h1" color="primary" sx={{ mt: 2 }}>
            0
          </Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textTransform: "uppercase", fontSize: "12px" }}
          >
            Investments
          </Typography>
          <Typography variant="h1" color="primary" sx={{ mt: 2 }}>
            $0.00
          </Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textTransform: "uppercase", fontSize: "12px" }}
          >
            Savings
          </Typography>
          <Typography variant="h1" color="primary" sx={{ mt: 2 }}>
            $0.00
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
