import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FeedbackDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
}

const FeedbackDialog = ({ isOpen, onClose, onSubmit }: FeedbackDialogProps) => {
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (feedback.trim()) {
      onSubmit(feedback);
      toast({
        title: "Cảm ơn góp ý của bạn!",
        description: "Chúng tôi sẽ sử dụng thông tin này để cải thiện AI Broker.",
      });
      setFeedback("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Góp ý thêm</DialogTitle>
          <DialogDescription>
            Vui lòng cho chúng tôi biết cách cải thiện câu trả lời này
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Câu trả lời có thể tốt hơn nếu..."
            className="min-h-[120px]"
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>
              Hủy
            </Button>
            <Button onClick={handleSubmit} className="gradient-primary">
              Gửi góp ý
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
