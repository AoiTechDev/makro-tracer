import { changeName } from "@/app/settings/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const NameForm = () => {


  return (
    <form action={changeName}>
      <Label>Name</Label>
      <div className="flex gap-2">
        <Input name="name"/>
        <Button>Change</Button>
      </div>
    </form>
  );
};

export default NameForm;
