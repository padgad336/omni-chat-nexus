
import { useEffect, useRef } from "react";
import { List, Avatar, Typography, Space } from "antd";
import { CheckOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Message } from "@/types/message";
import { Customer } from "@/types/customer";
import { format } from "date-fns";

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

  const MessageStatusIcon = ({ status }: { status: Message["status"] }) => {
    switch (status) {
      case "sent":
        return <CheckOutlined style={{ fontSize: 12, color: "rgba(0,0,0,0.45)" }} />;
      case "delivered":
        return <CheckOutlined style={{ fontSize: 12, color: "rgba(0,0,0,0.45)" }} />;
      case "read":
        return <CheckCircleOutlined style={{ fontSize: 12, color: "#1890ff" }} />;
      default:
        return null;
    }
  };

  return (
    <div 
      style={{ 
        flex: 1, 
        overflow: "auto", 
        padding: "16px", 
        backgroundColor: "#f5f5f5" 
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(message) => {
          const isAgent = message.sender === "agent";
          
          return (
            <List.Item style={{ 
              padding: "8px 0", 
              display: "flex", 
              justifyContent: isAgent ? "flex-end" : "flex-start" 
            }}>
              {!isAgent && (
                <Avatar 
                  src={customer.avatar} 
                  style={{ marginRight: 8 }} 
                  size="small"
                />
              )}
              
              <div style={{ 
                maxWidth: "70%", 
                padding: "12px 16px", 
                borderRadius: "8px", 
                backgroundColor: isAgent ? "#1890ff" : "#fff",
                color: isAgent ? "#fff" : "inherit",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
              }}>
                <div>{message.text}</div>
                <Space style={{ 
                  marginTop: 4, 
                  fontSize: "11px",
                  display: "flex",
                  justifyContent: "flex-end", 
                  color: isAgent ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.45)"
                }}>
                  <span>{formatMessageTime(message.timestamp)}</span>
                  {isAgent && <MessageStatusIcon status={message.status} />}
                </Space>
              </div>
            </List.Item>
          );
        }}
      />
      <div ref={messagesEndRef} />
    </div>
  );
}
