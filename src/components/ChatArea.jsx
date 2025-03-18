
import React, { useState } from "react";
import { Empty, Card } from "antd";
import { messages } from "../data/messages";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

export function ChatArea({ selectedCustomer }) {
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSendMessage = (text) => {
    if (!selectedCustomer) return;

    const newMessage = {
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
