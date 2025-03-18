
import { Customer } from "@/types/customer";
import { 
  Mail, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Phone,
  MoreVertical
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  customer: Customer;
}

export function ChatHeader({ customer }: ChatHeaderProps) {
  const getChannelIcon = (channel: Customer['channel']) => {
    switch (channel) {
      case 'email':
        return <Mail className="h-5 w-5" />;
      case 'chat':
        return <MessageCircle className="h-5 w-5" />;
      case 'whatsapp':
        return <Phone className="h-5 w-5" />;
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return <MessageCircle className="h-5 w-5" />;
    }
  };

  const getChannelName = (channel: Customer['channel']) => {
    switch (channel) {
      case 'email':
        return 'Email';
      case 'chat':
        return 'Website Chat';
      case 'whatsapp':
        return 'WhatsApp';
      case 'facebook':
        return 'Facebook';
      case 'twitter':
        return 'Twitter';
      default:
        return 'Chat';
    }
  };

  return (
    <div className="border-b p-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img 
            src={customer.avatar} 
            alt={customer.name} 
            className="w-10 h-10 rounded-full"
          />
          {customer.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        
        <div>
          <h2 className="font-semibold">{customer.name}</h2>
          <div className="flex items-center text-sm text-muted-foreground">
            {getChannelIcon(customer.channel)}
            <span className="ml-1">{getChannelName(customer.channel)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View customer info</DropdownMenuItem>
            <DropdownMenuItem>Transfer conversation</DropdownMenuItem>
            <DropdownMenuItem>Add to favorites</DropdownMenuItem>
            <DropdownMenuItem>Mark as resolved</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
