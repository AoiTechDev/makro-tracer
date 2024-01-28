import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <Link href="/login" className="">
      <Button> Login</Button>
    </Link>
  );
};

export default Login;
