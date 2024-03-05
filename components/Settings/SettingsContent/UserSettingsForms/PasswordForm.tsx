import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PasswordForm = () => {
  return (
    <div className="space-y-4">
      <p>Change your password</p>
      <div>
        <Label>Current Password</Label>
        <div className="flex gap-2">
          <Input type="password" />
        </div>
        <Label>New Password</Label>
        <div className="flex gap-2">
          <Input type="password" />
        </div>
        <Label>Confirm New Password</Label>
        <div className="flex gap-2">
          <Input type="password" />
        </div>
      </div>
      <Button>Change</Button>
    </div>
  );
};

export default PasswordForm;
