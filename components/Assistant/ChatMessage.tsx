import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

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
  return (
    <div className={cn("flex", className)} {...props}>
      <div className={cn('w-10 h-10 rounded-full flex-shrink-0',{
        "bg-blue-700 order-2": isUserMessage,
        "bg-gray-100": !isUserMessage
      
      })}></div>
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
