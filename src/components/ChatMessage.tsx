import { MessageCircle, User, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Message } from "./ChatWidget";

interface ChatMessageProps {
  message: Message;
  onFeedback: (messageId: string, feedback: "useful" | "not-useful") => void;
}

const ChatMessage = ({ message, onFeedback }: ChatMessageProps) => {
  const isAI = message.type === "ai";

  return (
    <div className={`flex gap-2 items-start ${!isAI ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isAI ? "bg-primary/10" : "bg-accent/10"
        }`}
      >
        {isAI ? (
          <MessageCircle className="h-4 w-4 text-primary" />
        ) : (
          <User className="h-4 w-4 text-accent" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex flex-col gap-2 max-w-[75%] ${!isAI ? "items-end" : ""}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isAI
              ? "bg-muted rounded-tl-sm"
              : "gradient-primary text-white rounded-tr-sm"
          }`}
        >
          <p className="text-sm whitespace-pre-line">{message.content}</p>
        </div>

        {/* Timestamp */}
        <span className="text-xs text-muted-foreground">
          {message.timestamp.toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>

        {/* Feedback Buttons (only for AI messages) */}
        {isAI && (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`h-7 px-2 ${
                message.feedback === "useful" ? "text-accent" : "text-muted-foreground"
              }`}
              onClick={() => onFeedback(message.id, "useful")}
            >
              <ThumbsUp className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-7 px-2 ${
                message.feedback === "not-useful" ? "text-destructive" : "text-muted-foreground"
              }`}
              onClick={() => onFeedback(message.id, "not-useful")}
            >
              <ThumbsDown className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
