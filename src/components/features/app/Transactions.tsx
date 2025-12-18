import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export function Transactions() {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h3">Transactions</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add Transaction
        </Button>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography color="text.secondary">No transactions yet</Typography>
      </Paper>
    </Container>
  );
}
