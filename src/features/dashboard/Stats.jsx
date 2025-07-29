import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1. Number of bookings
  const numberOfBookings = bookings.length;

  //2. Total sales
  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3. Total check-ins
  const numberOfCheckIns = confirmedStays.length;

  //4. Occupancy rate
  const occupatioun =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numberOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check Ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={numberOfCheckIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupatioun * 100) + "%"}
      />
    </>
  );
}

export default Stats;
