
export interface Customer {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  online: boolean;
  channel: 'email' | 'chat' | 'whatsapp' | 'facebook' | 'twitter';
}
