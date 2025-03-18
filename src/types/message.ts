
export interface Message {
  id: string;
  text: string;
  timestamp: string;
  sender: 'customer' | 'agent';
  customerId: string;
  status: 'sent' | 'delivered' | 'read';
}
