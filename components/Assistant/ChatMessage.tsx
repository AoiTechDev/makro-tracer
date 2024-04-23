import React from "react";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/store";
import { FC, HTMLAttributes } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import UserAvatar from "../reusable/UserAvatar";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isUserMessage: boolean;
}
const ChatMessage: FC<ChatMessagesProps> = ({
  className,
  isUserMessage,
  children,
  ...props
}) => {
  const { avatar } = useUserStore();
  return (
    <div className={cn("flex", className)} {...props}>
      <Avatar
        className={cn("", {
          "order-2": isUserMessage,
        })}
      >
        <AvatarFallback className={cn(" flex-shrink-0")}>
          {isUserMessage ? <UserAvatar image={avatar} /> : "AI"}
        </AvatarFallback>
      </Avatar>

      <p
        className={cn("bg-gray-100 rounded-xl p-4 text-sm rounded-r-[20px]", {
          "bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-l-[20px] ":
            isUserMessage,
          "bg-gray-100 text-gray-900 rounded-r-[20px]": !isUserMessage,
        })}
      >
        {children}
      </p>
    </div>
  );
};

export default ChatMessage;
