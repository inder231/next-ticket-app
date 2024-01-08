import React from "react";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets");
  return res.json();
}

export default async function TicketList() {
  // async function to fetch data
  const tickets = await getTickets();

  return <div>{
    }</div>;
}
