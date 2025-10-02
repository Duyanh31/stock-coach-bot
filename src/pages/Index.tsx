import ChatWidget from "@/components/ChatWidget";
import { TrendingUp, Shield, Users, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Investment Assistant</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Bắt đầu hành trình đầu tư với
              <span className="gradient-primary bg-clip-text text-transparent"> AI Broker</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Trợ lý AI thông minh giúp bạn học cách đầu tư chứng khoán từ con số 0,
              với lộ trình cá nhân hóa và hỗ trợ 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại sao chọn AI Broker?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8 text-primary" />}
              title="Học từng bước"
              description="Lộ trình học tập được cá nhân hóa, từ cơ bản đến nâng cao"
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-accent" />}
              title="Phân tích thông minh"
              description="Nhận phân tích thị trường và gợi ý đầu tư phù hợp"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="An toàn & tin cậy"
              description="Được phát triển bởi TCInvest - nền tảng giao dịch uy tín"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Trải nghiệm ngay
              </h2>
              <p className="text-muted-foreground">
                Nhấn vào nút ở góc phải để bắt đầu trò chuyện với AI Broker
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <StepCard
                number="1"
                title="Bắt đầu trò chuyện"
                description="Nhấn vào nút chat để mở AI Broker"
              />
              <StepCard
                number="2"
                title="Chọn chủ đề"
                description="Chọn học tập, tin tức, phân tích hoặc gợi ý"
              />
              <StepCard
                number="3"
                title="Học và thực hành"
                description="Theo dõi tiến độ và hoàn thành các bài học"
              />
              <StepCard
                number="4"
                title="Bắt đầu đầu tư"
                description="Thực hiện giao dịch đầu tiên với sự tự tin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-smooth">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold">{number}</span>
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

export default Index;
