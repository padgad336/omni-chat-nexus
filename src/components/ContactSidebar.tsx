
import { useState } from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader 
} from "@/components/ui/sidebar";
import { customers } from "@/data/customers";
import { Customer } from "@/types/customer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Phone,
  RefreshCw
} from "lucide-react";
import { CustomerItem } from "./CustomerItem";

interface ContactSidebarProps {
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

export function ContactSidebar({ onSelectCustomer, selectedCustomer }: ContactSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getChannelIcon = (channel: Customer['channel']) => {
    switch (channel) {
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'chat':
        return <MessageCircle className="h-4 w-4" />;
      case 'whatsapp':
        return <Phone className="h-4 w-4" />;
      case 'facebook':
        return <Facebook className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      default:
        return <MessageCircle className="h-4 w-4" />;
    }
  };

  return (
    <Sidebar className="border-r w-80 flex-shrink-0">
      <SidebarHeader className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Contacts</h2>
          <Button variant="ghost" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search contacts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-0">
        <div className="divide-y">
          {filteredCustomers.map((customer) => (
            <CustomerItem
              key={customer.id}
              customer={customer}
              isSelected={selectedCustomer?.id === customer.id}
              onSelect={() => onSelectCustomer(customer)}
              channelIcon={getChannelIcon(customer.channel)}
            />
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
