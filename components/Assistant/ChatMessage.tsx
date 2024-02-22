import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const ChatMessage: FC<ChatMessagesProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("", className)} {...props}>
      <img
        alt="Avatar"
        className="rounded-full"
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
