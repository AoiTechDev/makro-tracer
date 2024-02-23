import { cn } from "@/lib/utils";
import { useSessionStore } from "@/store/store";
import { FC, HTMLAttributes } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

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
  const { userSession } = useSessionStore();
  const avatarFallback = `${userSession?.user?.email
    ?.split("")[0]
    ?.toUpperCase()}${userSession?.user?.email?.split("")[1]?.toUpperCase()}`;
  return (
    <div className={cn("flex", className)} {...props}>
      {/* <div
        className={cn("w-10 h-10 rounded-full flex-shrink-0", {
          "bg-blue-700 order-2": isUserMessage,
          "bg-gray-100": !isUserMessage,
        })}
      ></div> */}
      <Avatar className={cn('',{
        "order-2": isUserMessage,
      
      })}>
        <AvatarFallback
          className={cn(" flex-shrink-0", {
            "bg-blue-700 text-white ": isUserMessage,
            "bg-gray-100": !isUserMessage,
          })}
        >
          {isUserMessage ? avatarFallback : "AI"}
        </AvatarFallback>
      </Avatar>
      <p
        className={cn("bg-gray-100 rounded-xl p-4 text-sm rounded-r-[20px]", {
          "bg-blue-700 text-white rounded-l-[20px] ": isUserMessage,
          "bg-gray-100 text-gray-900 rounded-r-[20px]": !isUserMessage,
        })}
      >
        {children}
      </p>
    </div>
  );
};

export default ChatMessage;
