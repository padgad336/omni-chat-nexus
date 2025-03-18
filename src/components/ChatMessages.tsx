
import { useEffect, useRef } from "react";
import { Message } from "@/types/message";
import { Customer } from "@/types/customer";
import { format } from "date-fns";
import { Check, CheckCheck } from "lucide-react";

interface ChatMessagesProps {
  messages: Message[];
  customer: Customer;
}

export function ChatMessages({ messages, customer }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatMessageTime = (timestamp: string) => {
    return format(new Date(timestamp), "h:mm a");
  };

  const getMessageStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sent":
        return <Check className="h-3 w-3 text-muted-foreground" />;
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-muted-foreground" />;
      case "read":
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "agent" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "customer" && (
              <img
                src={customer.avatar}
                alt={customer.name}
                className="h-8 w-8 rounded-full mr-2 self-end"
              />
            )}
            <div
              className={`max-w-[70%] ${
                message.sender === "agent"
                  ? "bg-primary text-primary-foreground"
                  : "bg-white border"
              } p-3 rounded-lg shadow-sm`}
            >
              <div>{message.text}</div>
              <div className="flex justify-end items-center mt-1 text-xs text-muted-foreground">
                <span className="mr-1">{formatMessageTime(message.timestamp)}</span>
                {message.sender === "agent" && getMessageStatusIcon(message.status)}
              </div>
            </div>
            {message.sender === "agent" && (
              <div className="h-8 w-8 ml-2"></div> // Spacer to align with customer avatar
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
