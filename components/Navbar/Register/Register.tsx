import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
const Register = () => {
  return (
    <Link href="/register" className="">
      <Button variant={"outline"}> Register</Button>
    </Link>
  );
};

export default Register;
