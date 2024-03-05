import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const EmailForm = () => {
  return (
    <div>
      <Label>Email</Label>
      <div className="flex gap-2">
        <Input />
        <Button>Change</Button>
      </div>
    </div>
  );
};

export default EmailForm;
