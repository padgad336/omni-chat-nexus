
import React from "react";
import ContactCenterLayout from "../components/ContactCenterLayout";
import { ConfigProvider } from "antd";

const Index: React.FC = () => {
  return (
    <ConfigProvider>
      <ContactCenterLayout />
    </ConfigProvider>
  );
};

export default Index;
