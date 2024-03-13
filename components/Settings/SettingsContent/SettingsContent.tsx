import React from "react";
import { CardContent } from "../../ui/card";
import ProfileImage from "./ProfileImage";
import EmailForm from "./UserSettingsForms/EmailForm";
import NameForm from "./UserSettingsForms/NameForm";
import PasswordForm from "./UserSettingsForms/PasswordForm";

const SettingsContent = () => {
  return (
    <>
      <CardContent className="flex w-full flex-col-reverse sm:flex-row gap-12 sm:gap-0 ">
        <div className="flex-1 space-y-6 ">
          <div className="space-y-2">
            <NameForm />
            <EmailForm />
          </div>

          <PasswordForm />
        </div>

        <ProfileImage />
      </CardContent>
    </>
  );
};

export default SettingsContent;
