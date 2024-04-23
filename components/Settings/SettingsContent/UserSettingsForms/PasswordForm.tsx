"use client";
import { changePassword } from "@/actions/settins";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors } from "@/types/types";
import { signOut } from "next-auth/react";
import React from "react";

const PasswordForm = () => {
  const [error, setError] = React.useState<FieldErrors | string>({});

  return (
    <form
      action={async (formData: FormData) => {
        const res = await changePassword(formData);

        if ("error" in res) {
          setError(res.error);
        } else if ("success" in res) {
          setError("");
          signOut({
            callbackUrl: "/login",
          });
        }
      }}
      className="space-y-4"
    >
      <p>Change your password</p>
      <div className="space-y-2">
        <div className=" gap-2">
          <Label>Current Password</Label>
          <Input type="password" name="currentPassword" />
          {typeof error !== "string" && error?.currentPassword ? (
            <span className="text-red-500 text-sm">
              {error.currentPassword}
            </span>
          ) : null}
        </div>
        <div className=" gap-2">
          <Label>New Password</Label>
          <Input type="password" name="newPassword" />
          {typeof error !== "string" && error?.newPassword ? (
            <span className="text-red-500 text-sm">{error.newPassword}</span>
          ) : null}
        </div>
        <div className=" gap-2">
          <Label>Confirm New Password</Label>
          <Input type="password" name="confirmPassword" />
          {typeof error !== "string" && error?.confirmPassword ? (
            <div className="text-red-500 text-sm flex flex-col">
              {error.confirmPassword.map((error, index) => (
                <span key={index}>{error}</span>
              ))}
            </div>
          ) : null}
        </div>

        {typeof error === "string" && error ? (
          <span className="text-red-500">{error}</span>
        ) : null}
      </div>
      <Button>Change</Button>
    </form>
  );
};

export default PasswordForm;
