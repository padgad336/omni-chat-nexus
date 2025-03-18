
import { Typography, Button, Space, Tooltip, Badge, Divider } from "antd";
import { 
  PhoneOutlined, 
  VideoCameraOutlined, 
  InfoCircleOutlined,
  MoreOutlined
} from "@ant-design/icons";
import { Customer } from "@/types/customer";

interface ChatHeaderProps {
  customer: Customer;
}

export function ChatHeader({ customer }: ChatHeaderProps) {
  return (
    <div style={{ 
      padding: "16px", 
      display: "flex", 
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #f0f0f0"
    }}>
      <Space>
        <div style={{ position: "relative" }}>
          <img 
            src={customer.avatar} 
            alt={customer.name} 
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
          {customer.online && (
            <Badge 
              status="success" 
              style={{ 
                position: "absolute", 
                bottom: 0, 
                right: 0 
              }} 
            />
          )}
        </div>
        <div>
          <Typography.Title level={5} style={{ margin: 0 }}>
            {customer.name}
          </Typography.Title>
          <Space size={4}>
            <Badge 
              status="processing" 
              color={
                customer.channel === "whatsapp" ? "green" :
                customer.channel === "facebook" ? "blue" :
                customer.channel === "twitter" ? "cyan" :
                customer.channel === "email" ? "orange" : "default"
              }
            />
            <Typography.Text type="secondary" style={{ fontSize: "12px" }}>
              {customer.channel.charAt(0).toUpperCase() + customer.channel.slice(1)}
              {customer.online ? " • Online" : ""}
            </Typography.Text>
          </Space>
        </div>
      </Space>
      
      <Space>
        <Tooltip title="Call">
          <Button shape="circle" icon={<PhoneOutlined />} />
        </Tooltip>
        <Tooltip title="Video call">
          <Button shape="circle" icon={<VideoCameraOutlined />} />
        </Tooltip>
        <Tooltip title="Customer info">
          <Button shape="circle" icon={<InfoCircleOutlined />} />
        </Tooltip>
        <Tooltip title="More options">
          <Button shape="circle" icon={<MoreOutlined />} />
        </Tooltip>
      </Space>
    </div>
  );
}
