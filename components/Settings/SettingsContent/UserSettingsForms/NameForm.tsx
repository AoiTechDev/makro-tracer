'use client'
import { changeName } from "@/app/settings/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef } from "react";
import ChangeButton from "./ChangeButton";

const NameForm = () => {
const ref = useRef<HTMLFormElement>(null)

  return (
    <form ref={ref} action={async (formData: FormData) => {
      await changeName(formData);
      ref.current?.reset();
    }}>
      <Label>Name</Label>
      <div className="flex gap-2">
        <Input name="name" />
        <ChangeButton/>
      </div>
    </form>
  );
};

export default NameForm;
