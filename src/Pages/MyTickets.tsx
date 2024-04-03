import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface MyTicketsProps {
  onShowReservations: () => void;
}

const MyTickets = ({ onShowReservations }: MyTicketsProps) => {
  const handleShowReservations = () => {
    onShowReservations();
  };

  return (
    <Link to={"/"}>
      <Button onClick={handleShowReservations} width={100}>
        My Tickets
      </Button>
    </Link>
  );
};

export default MyTickets;
