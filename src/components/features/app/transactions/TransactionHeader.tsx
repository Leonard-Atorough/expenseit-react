import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TransactionHeader() {
    return (
              <>
              <Box mb={4} display="flex" alignItems="flex-start" justifyContent="space-between">
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography variant="h2" gutterBottom>
                    Transactions
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    View and manage your financial transactions.
                </Typography>
            </Box>
            <Box>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                    Add Transaction
                </Button>
                <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
                    Generate PDF
                </Button>
            </Box>
        </Box>
        </>
    );
}