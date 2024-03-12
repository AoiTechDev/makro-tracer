import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PasswordForm = () => {
  return (
    <div className="space-y-4">
      <p>Change your password</p>
      <div className="space-y-2">
        <div className=" gap-2">
          <Label>Current Password</Label>
          <Input type="password" />
        </div>
        <div className=" gap-2">
          <Label>New Password</Label>
          <Input type="password" />
        </div>
        <div className=" gap-2">
          <Label>Confirm New Password</Label>
          <Input type="password" />
        </div>
      </div>
      <Button>Change</Button>
    </div>
  );
};

export default PasswordForm;
