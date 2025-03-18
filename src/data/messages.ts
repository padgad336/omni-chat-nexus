
import { Message } from "@/types/message";

export const messages: Record<string, Message[]> = {
  "1": [
    {
      id: "1-1",
      text: "Hello, I need help with my recent order #12345",
      timestamp: "2023-06-15T10:20:00",
      sender: "customer",
      customerId: "1",
      status: "read"
    },
    {
      id: "1-2",
      text: "Hi John, I'd be happy to help with your order. Could you please provide more details about the issue you're experiencing?",
      timestamp: "2023-06-15T10:22:00",
      sender: "agent",
      customerId: "1",
      status: "read"
    },
    {
      id: "1-3",
      text: "I ordered a blue shirt, but received a red one instead.",
      timestamp: "2023-06-15T10:23:00",
      sender: "customer",
      customerId: "1",
      status: "read"
    },
    {
      id: "1-4",
      text: "I apologize for the confusion. I'll create a return label for the red shirt, and we'll ship the correct blue one immediately.",
      timestamp: "2023-06-15T10:25:00",
      sender: "agent",
      customerId: "1",
      status: "delivered"
    }
  ],
  "2": [
    {
      id: "2-1",
      text: "When will my package arrive? Order #54321",
      timestamp: "2023-06-14T14:30:00",
      sender: "customer",
      customerId: "2",
      status: "read"
    },
    {
      id: "2-2",
      text: "Hello Sarah, let me check the status of your order. One moment please.",
      timestamp: "2023-06-14T14:32:00",
      sender: "agent",
      customerId: "2",
      status: "read"
    },
    {
      id: "2-3",
      text: "I can see that your package is currently in transit and scheduled for delivery tomorrow between 9 AM and 12 PM. You should receive a notification with a more precise time window in the morning.",
      timestamp: "2023-06-14T14:35:00",
      sender: "agent",
      customerId: "2",
      status: "read"
    },
    {
      id: "2-4",
      text: "Great, thank you for checking!",
      timestamp: "2023-06-14T14:36:00",
      sender: "customer",
      customerId: "2",
      status: "read"
    }
  ]
};
