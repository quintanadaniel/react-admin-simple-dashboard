import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import BarChartTicket from "../../components/BarChartTickets";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
        <BarChartTicket />
      </Box>
    </Box>
  );
};

export default Bar;
