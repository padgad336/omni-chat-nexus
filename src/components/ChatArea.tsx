
import { Customer } from "@/types/customer";
import { messages } from "@/data/messages";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { Message } from "@/types/message";
import { useState } from "react";

interface ChatAreaProps {
  selectedCustomer: Customer | null;
}

export function ChatArea({ selectedCustomer }: ChatAreaProps) {
  const [chatMessages, setChatMessages] = useState<Record<string, Message[]>>(messages);

  const handleSendMessage = (text: string) => {
    if (!selectedCustomer) return;

    const newMessage: Message = {
      id: `${selectedCustomer.id}-${Date.now()}`,
      text,
      timestamp: new Date().toISOString(),
      sender: "agent",
      customerId: selectedCustomer.id,
      status: "sent"
    };

    setChatMessages(prevMessages => ({
      ...prevMessages,
      [selectedCustomer.id]: [
        ...(prevMessages[selectedCustomer.id] || []),
        newMessage
      ]
    }));
  };

  if (!selectedCustomer) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Select a contact to start chatting</h2>
          <p className="mt-2 text-gray-500">Choose from the list on the left</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader customer={selectedCustomer} />
      <ChatMessages 
        messages={chatMessages[selectedCustomer.id] || []} 
        customer={selectedCustomer}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
