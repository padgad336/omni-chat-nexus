
import { Customer } from "@/types/customer";

export const customers: Customer[] = [
  {
    id: "1",
    name: "John Smith",
    avatar: "https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff",
    lastMessage: "I need help with my recent order",
    lastMessageTime: "10:23 AM",
    unreadCount: 3,
    online: true,
    channel: "chat"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=FF5733&color=fff",
    lastMessage: "When will my package arrive?",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
    online: false,
    channel: "email"
  },
  {
    id: "3",
    name: "Michael Brown",
    avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=28B463&color=fff",
    lastMessage: "Thanks for your help!",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
    online: true,
    channel: "whatsapp"
  },
  {
    id: "4",
    name: "Emily Davis",
    avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=7D3C98&color=fff",
    lastMessage: "I have a question about my account",
    lastMessageTime: "2 days ago",
    unreadCount: 1,
    online: false,
    channel: "facebook"
  },
  {
    id: "5",
    name: "Alex Wilson",
    avatar: "https://ui-avatars.com/api/?name=Alex+Wilson&background=F39C12&color=fff",
    lastMessage: "Can you provide more details?",
    lastMessageTime: "3 days ago",
    unreadCount: 0,
    online: true,
    channel: "twitter"
  },
  {
    id: "6",
    name: "Jennifer Lopez",
    avatar: "https://ui-avatars.com/api/?name=Jennifer+Lopez&background=1ABC9C&color=fff",
    lastMessage: "Is this product still available?",
    lastMessageTime: "3 days ago",
    unreadCount: 2,
    online: false,
    channel: "chat"
  },
  {
    id: "7",
    name: "David Miller",
    avatar: "https://ui-avatars.com/api/?name=David+Miller&background=E74C3C&color=fff",
    lastMessage: "I need a refund for my order",
    lastMessageTime: "4 days ago",
    unreadCount: 0,
    online: false,
    channel: "email"
  },
  {
    id: "8",
    name: "Rebecca Taylor",
    avatar: "https://ui-avatars.com/api/?name=Rebecca+Taylor&background=3498DB&color=fff",
    lastMessage: "The product arrived damaged",
    lastMessageTime: "5 days ago",
    unreadCount: 5,
    online: true,
    channel: "whatsapp"
  }
];
