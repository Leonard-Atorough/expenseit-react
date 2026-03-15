import { Box } from "@mui/material";
import { useCurrentUser } from "../../hooks/useAuth";
import { RecentTransactions, SummaryRow, WelcomeMessage } from "../../components";

export default function Dashboard() {
  const user = useCurrentUser();
  /*
    Dashboard content layout plan:
    - Welcome message with users name at the top (within the content area, not the header)
    - Summary row:
        - Total Income
        - Total Expenses
        - Investments (expenses of type "investment")
        - Savings (expenses of type "savings")
    - Recent Transactions list (table or list format)
    - Monthly Trends chart (line or bar chart showing income vs expenses over the last 6 months)
    - Budget Overview (if budgets are implemented, show how current spending compares to budget limits)
     */
  //Declare uniimplemented components
  return (
    <Box>
      <WelcomeMessage user={user} />
      <SummaryRow />
      <RecentTransactions />
      {/* <MonthlyTrends />
        <BudgetOverview /> */}
    </Box>
  );
}
