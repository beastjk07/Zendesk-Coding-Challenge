import React from "react";

import ZendeskIcon from "./ZendeskIcon";
import TicketIcon from "./TicketIcon";
const Sidebar = () => {
  return (
    <nav className="green-bg">
      <ZendeskIcon className="zendesk-icon" />
      <TicketIcon
        className="ticket-icon"
      />
    </nav>
  );
};

export default Sidebar;
