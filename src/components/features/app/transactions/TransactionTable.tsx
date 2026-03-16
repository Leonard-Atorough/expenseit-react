import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useTransactions } from "../../../../hooks/useData";
import Box from "@mui/material/Box";

export default function TransactionTable() {
  const transactions = useTransactions() || [];

  return (
    <Box sx={{ p: 3 }} style={{ maxHeight: "400px", overflowY: "auto", width: "100%" }}>
      {transactions.length === 0 ? (
        <Typography color="text.secondary" textAlign="center">
          No transactions yet
        </Typography>
      ) : (
        <TableContainer component={Paper} elevation={0} sx={{ maxHeight: "400px" }}>
          <Table stickyHeader aria-label="transactions table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "background.paper" }}>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((t) => (
                <TableRow key={t.id} hover>
                  <TableCell>{t.date ? new Date(t.date).toLocaleDateString() : "-"}</TableCell>
                  <TableCell>{t.description}</TableCell>
                  <TableCell align="right">
                    {Number.isFinite(Number(t.amount)) ? Number(t.amount).toFixed(2) : "-"}
                  </TableCell>
                  <TableCell>{t.category}</TableCell>
                  <TableCell align="right">
                    {t.type ? t.type.charAt(0).toUpperCase() + t.type.slice(1) : "-"}
                  </TableCell>
                  <TableCell align="right">
                    {t.updatedAt ? new Date(t.updatedAt).toLocaleDateString() : "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
