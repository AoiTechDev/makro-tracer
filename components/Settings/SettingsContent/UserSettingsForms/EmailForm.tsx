"use client";
import { changeEmail } from "@/app/settings/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signOut } from "next-auth/react";
import React from "react";
import { useFormState } from "react-dom";

const EmailForm = () => {
  const [error, setError] = React.useState<string>("");
  const handleChange = () => {
    setError("");
  };
  return (
    <form
      action={async (formData: FormData) => {
        const res = await changeEmail(formData);

        if (res?.error) {
          setError(res.error);
        } else {
          signOut();
        }
      }}
    >
      <Label>Email</Label>
      <div className="flex gap-2">
        <Input name="email" onChange={handleChange} />
        <Button>Change</Button>
      </div>
     {error ?  <span className="text-red-500">{error}</span> : null}
    </form>
  );
};

export default EmailForm;
