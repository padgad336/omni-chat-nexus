
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Paperclip, 
  Smile, 
  Send,
  MicIcon
} from "lucide-react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <Button type="button" variant="ghost" size="icon" className="flex-shrink-0">
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <div className="relative flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[60px] resize-none pr-24"
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <Smile className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <MicIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="flex-shrink-0" 
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5 mr-2" />
          Send
        </Button>
      </form>
    </div>
  );
}
