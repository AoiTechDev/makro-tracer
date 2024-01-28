import { getServerSession } from "next-auth";
import React from "react";
import Logout from "./Logout/Logout";
import Link from "next/link";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <nav>
      {!!session && <Logout/>}
      {!session && <Link href='/login'>Login</Link>}
    </nav>
  );
};

export default Navbar;
