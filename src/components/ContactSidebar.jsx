
import React, { useState } from "react";
import { Input, List, Typography, Badge, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export function ContactSidebar({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Typography.Title level={4} style={{ margin: 0, color: "white" }}>
          Conversations
        </Typography.Title>
        <div className="mt-4">
          <Input
            placeholder="Search contacts..."
            prefix={<SearchOutlined />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <List
          dataSource={filteredCustomers}
          renderItem={(customer) => (
            <List.Item
              key={customer.id}
              onClick={() => onSelectCustomer(customer)}
              style={{
                cursor: "pointer",
                backgroundColor: selectedCustomerId === customer.id ? "rgba(255,255,255,0.1)" : "transparent",
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <List.Item.Meta
                avatar={
                  <div className="relative">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                      }}
                    />
                    {customer.online && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          width: 10,
                          height: 10,
                          backgroundColor: "#52c41a",
                          borderRadius: "50%",
                          border: "2px solid #001529",
                        }}
                      />
                    )}
                  </div>
                }
                title={
                  <div style={{ color: "white", display: "flex", justifyContent: "space-between" }}>
                    <span>{customer.name}</span>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>
                      {customer.lastMessageTime}
                    </span>
                  </div>
                }
                description={
                  <Space>
                    <Badge
                      status="processing"
                      color={
                        customer.channel === "whatsapp" ? "green" :
                        customer.channel === "facebook" ? "blue" :
                        customer.channel === "twitter" ? "cyan" :
                        customer.channel === "email" ? "orange" : "default"
                      }
                    />
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>
                      {customer.lastMessage}
                    </span>
                    {customer.unreadCount > 0 && (
                      <Badge count={customer.unreadCount} style={{ marginLeft: "auto" }} />
                    )}
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
