
import { SidebarProvider } from "@/components/ui/sidebar";
import { ContactSidebar } from "./ContactSidebar";
import { ChatArea } from "./ChatArea";
import { useState } from "react";
import { Customer } from "@/types/customer";

const ContactCenterLayout = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <ContactSidebar onSelectCustomer={setSelectedCustomer} selectedCustomer={selectedCustomer} />
        <main className="flex-1 overflow-hidden">
          <ChatArea selectedCustomer={selectedCustomer} />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ContactCenterLayout;
