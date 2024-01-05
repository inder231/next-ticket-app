import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <Image 
      src="/images/dojo.png"
      alt="Dojo HelpDesk logo"
      width={30}
      height={0}
      quality={100}      
        />
      <h1>Dojo Help-Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
