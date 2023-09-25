import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex" >
      <div  className="flex">
        <Image src="/taxi.png" alt="logo" width={100} height={60} />
      </div>
      <div className="flex mt-10">
        <ul className="flex gap-10 font-bold">
          <li>Home</li>
          <li>History</li>
                  <li>Help</li>
                  <li>  <UserButton afterSignOutUrl="/"/> </li>
        </ul>
          </div>
          
    </div>
  );
}

export default Navbar;
