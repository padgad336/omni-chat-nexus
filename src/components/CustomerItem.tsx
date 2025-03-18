
import React, { ReactNode } from "react";
import { Customer } from "../types/customer";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/badge";

interface CustomerItemProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
  channelIcon: ReactNode;
}

export function CustomerItem({ 
  customer, 
  isSelected, 
  onSelect,
  channelIcon
}: CustomerItemProps) {
  return (
    <div 
      className={cn(
        "p-3 cursor-pointer hover:bg-sidebar-accent transition-colors",
        isSelected && "bg-sidebar-accent"
      )}
      onClick={onSelect}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <img 
            src={customer.avatar} 
            alt={customer.name} 
            className="w-10 h-10 rounded-full"
          />
          {customer.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-sidebar rounded-full"></span>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate">{customer.name}</h3>
            <span className="text-xs text-sidebar-foreground/60">{customer.lastMessageTime}</span>
          </div>
          
          <div className="flex items-center mt-1">
            <div className="mr-1 text-sidebar-foreground/60">
              {channelIcon}
            </div>
            <p className="text-sm text-sidebar-foreground/80 truncate">{customer.lastMessage}</p>
          </div>
        </div>
        
        {customer.unreadCount > 0 && (
          <Badge variant="default" className="bg-sidebar-primary text-white ml-1">
            {customer.unreadCount}
          </Badge>
        )}
      </div>
    </div>
  );
}
