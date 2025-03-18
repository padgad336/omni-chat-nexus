
import { useState } from "react";
import { Layout, theme } from "antd";
import { Customer } from "@/types/customer";
import { customers } from "@/data/customers";
import { ChatArea } from "./ChatArea";
import { ContactSidebar } from "./ContactSidebar";

const { Content, Sider } = Layout;

const ContactCenterLayout = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={300}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <ContactSidebar 
          customers={customers} 
          selectedCustomerId={selectedCustomer?.id} 
          onSelectCustomer={handleSelectCustomer}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: 0, minHeight: "100vh" }}>
          <div
            style={{
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ChatArea selectedCustomer={selectedCustomer} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ContactCenterLayout;
