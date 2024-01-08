import { Suspense } from "react";
import TicketList from "./TicketList";
import Link from "next/link";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav className="flex items-center justify-between">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <div>
          <button className="btn-secondary">
            <Link href="/tickets/create">Create Ticket</Link>
          </button>
        </div>
      </nav>
      {/* Creating suspence boundary around a particular component */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
