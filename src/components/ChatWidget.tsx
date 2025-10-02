import { useState } from "react";
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ChatMessage from "./ChatMessage";
import FeedbackDialog from "./FeedbackDialog";
import CategoryMenu from "./CategoryMenu";
import { findRelevantModule, findRelevantFAQ, educationModules } from "@/data/educationContent";

export interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  feedback?: "useful" | "not-useful";
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Xin chào! Tôi là AI Broker của TCInvest. Tôi sẽ giúp bạn bắt đầu hành trình đầu tư chứng khoán. Bạn muốn tìm hiểu về gì hôm nay?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("education");
  const [progress, setProgress] = useState(30);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: getDemoResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getDemoResponse = (input: string) => {
    const lower = input.toLowerCase();
    
    // Check for FAQ matches first
    const faqMatch = findRelevantFAQ(input);
    if (faqMatch) {
      return `**${faqMatch.question}**\n\n${faqMatch.answer}\n\n_Từ module: ${faqMatch.module}_`;
    }
    
    // Check for module matches
    const moduleMatch = findRelevantModule(input);
    if (moduleMatch) {
      let response = `📚 **${moduleMatch.title}**\n\n${moduleMatch.content}`;
      
      if (moduleMatch.faqs.length > 0) {
        response += `\n\n**Câu hỏi thường gặp:**\n`;
        moduleMatch.faqs.slice(0, 2).forEach((faq: any, idx: number) => {
          response += `\n${idx + 1}. ${faq.question}`;
        });
      }
      
      return response;
    }
    
    // General education intro
    if (lower.includes("học") || lower.includes("education") || lower.includes("bắt đầu")) {
      return `🎓 **Chào mừng đến với chương trình Học tập TCInvest!**

Tôi sẽ hướng dẫn bạn qua ${educationModules.length} module kiến thức:

1️⃣ Tổng quan Thị trường Chứng khoán
2️⃣ Cổ phiếu là gì?
3️⃣ Các loại sản phẩm đầu tư
4️⃣ Cách sử dụng TCInvest
5️⃣ Phân tích Cơ bản
6️⃣ Phân tích Kỹ thuật
7️⃣ Quản trị rủi ro
8️⃣ Thực hành đầu tư
9️⃣ Lộ trình học tập

Bạn muốn tìm hiểu về chủ đề nào trước? Hoặc hỏi tôi bất kỳ câu hỏi nào!`;
    }
    
    // TCInvest platform questions
    if (lower.includes("tcinvest") || lower.includes("nền tảng") || lower.includes("platform")) {
      return `💼 **TCInvest - Nền tảng giao dịch của bạn**

TCInvest giúp bạn:
✅ Mở tài khoản trực tuyến qua eKYC
💰 Nạp/rút tiền liên kết ngân hàng
📊 Đặt lệnh LO, ATO, ATC, MP
📈 Theo dõi danh mục real-time
📱 Giao dịch mọi lúc, mọi nơi

Bạn muốn tìm hiểu chi tiết về tính năng nào?`;
    }
    
    return "Cảm ơn câu hỏi! Tôi có thể giúp bạn về:\n• Kiến thức đầu tư chứng khoán\n• Cách sử dụng TCInvest\n• Phân tích cơ bản và kỹ thuật\n• Quản lý rủi ro\n\nBạn muốn biết về chủ đề nào?";
  };

  const handleFeedback = (messageId: string, feedback: "useful" | "not-useful") => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, feedback } : msg
      )
    );
    if (feedback === "not-useful") {
      setShowFeedback(messageId);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-chat gradient-primary hover:scale-110 transition-smooth z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[400px] h-[600px] shadow-chat flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="gradient-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Broker</h3>
                <p className="text-white/80 text-xs">TCInvest Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 pt-3 pb-2 bg-muted/30">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>Tiến độ học tập</span>
              <span className="font-semibold text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Content Area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Category Menu */}
            <CategoryMenu
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Messages */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={message}
                    onFeedback={handleFeedback}
                  />
                ))}
                {isTyping && (
                  <div className="flex gap-2 items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1">
                        <span className="animate-typing">●</span>
                        <span className="animate-typing" style={{ animationDelay: "0.2s" }}>●</span>
                        <span className="animate-typing" style={{ animationDelay: "0.4s" }}>●</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Nhập câu hỏi của bạn..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="gradient-primary"
                    size="icon"
                  >
                    <Send className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Feedback Dialog */}
      <FeedbackDialog
        isOpen={!!showFeedback}
        onClose={() => setShowFeedback(null)}
        onSubmit={(feedback) => {
          console.log("Feedback submitted:", feedback);
          setShowFeedback(null);
        }}
      />
    </>
  );
};

export default ChatWidget;
