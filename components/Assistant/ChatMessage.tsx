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
      <img
        alt="Avatar"
        className={cn("rounded-full", {
            "order-1": isUserMessage,
            "order-0": !isUserMessage,
            
        })}
        height="40"
        src="/placeholder.svg"
        style={{
          aspectRatio: "40/40",
          objectFit: "cover",
        }}
        width="40"
      />
      <div className="bg-gray-100 rounded-xl p-4 text-sm rounded-r-[20px]">
        {children}
      </div>
    </div>
  );
};

export default ChatMessage;
