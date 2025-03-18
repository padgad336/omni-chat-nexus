
import { useState } from "react";
import { Empty, Card } from "antd";
import { Customer } from "@/types/customer";
import { messages } from "@/data/messages";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { Message } from "@/types/message";

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
      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Empty
          description="Select a contact to start chatting"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    );
  }

  return (
    <Card style={{ height: "100vh", display: "flex", flexDirection: "column", borderRadius: 0, border: 'none' }}>
      <ChatHeader customer={selectedCustomer} />
      <ChatMessages 
        messages={chatMessages[selectedCustomer.id] || []} 
        customer={selectedCustomer}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </Card>
  );
}
