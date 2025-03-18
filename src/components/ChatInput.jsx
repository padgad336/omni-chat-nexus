
import React, { useState } from "react";
import { 
  Input, 
  Button, 
  Space, 
  Tooltip, 
  Form
} from "antd";
import { 
  SendOutlined, 
  PaperClipOutlined, 
  SmileOutlined,
  AudioOutlined 
} from "@ant-design/icons";

const { TextArea } = Input;

export function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
      form.resetFields();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div style={{ 
      padding: "16px", 
      backgroundColor: "#fff", 
      borderTop: "1px solid #f0f0f0" 
    }}>
      <Form form={form} onFinish={handleSubmit}>
        <Space.Compact style={{ width: "100%" }}>
          <Form.Item name="message" style={{ flex: 1, marginBottom: 0 }}>
            <TextArea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              autoSize={{ minRows: 1, maxRows: 4 }}
              style={{ resize: "none", paddingRight: "60px" }}
              bordered
            />
          </Form.Item>
          <div style={{ display: "flex", marginLeft: "8px" }}>
            <Tooltip title="Attach file">
              <Button icon={<PaperClipOutlined />} />
            </Tooltip>
            <Tooltip title="Emoji">
              <Button icon={<SmileOutlined />} />
            </Tooltip>
            <Tooltip title="Voice message">
              <Button icon={<AudioOutlined />} />
            </Tooltip>
            <Tooltip title="Send">
              <Button 
                type="primary" 
                icon={<SendOutlined />} 
                onClick={handleSubmit}
                disabled={!message.trim()}
              >
                Send
              </Button>
            </Tooltip>
          </div>
        </Space.Compact>
      </Form>
    </div>
  );
}
