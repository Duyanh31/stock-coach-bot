export interface EducationModule {
  id: string;
  title: string;
  content: string;
  faqs: { question: string; answer: string }[];
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export const educationModules: EducationModule[] = [
  {
    id: "market-overview",
    title: "Tổng quan Thị trường Chứng khoán Việt Nam",
    content: `**Thị trường là gì?**
Nơi giao dịch cổ phiếu, trái phiếu, chứng chỉ quỹ...

**Hai Sở chính:**
• HOSE (TP.HCM): Giao dịch các công ty lớn, vốn hóa cao
• HNX (Hà Nội): Giao dịch cổ phiếu vừa và nhỏ, trái phiếu Chính phủ

**UPCoM:** Nơi tập trung các công ty chưa niêm yết

**Các loại nhà đầu tư:**
• Cá nhân (retail investors)
• Tổ chức (quỹ đầu tư, ngân hàng, bảo hiểm)

**Quy định cơ bản:** T+2 (mua hôm nay, 2 ngày sau mới nhận cổ phiếu)`,
    faqs: [
      {
        question: "Mất bao lâu để mở tài khoản chứng khoán?",
        answer: "Thông thường mất 1-2 ngày làm việc với eKYC trực tuyến, hoặc ngay trong ngày nếu mở tại quầy."
      },
      {
        question: "Khác nhau giữa HOSE và HNX là gì?",
        answer: "HOSE là sàn giao dịch các công ty lớn với vốn hóa cao, trong khi HNX tập trung vào các doanh nghiệp vừa và nhỏ."
      },
      {
        question: "Có thể mua bán ngay sau khi đặt lệnh không?",
        answer: "Lệnh sẽ được khớp trong phiên giao dịch, nhưng cổ phiếu chỉ về tài khoản sau T+2 (2 ngày làm việc)."
      }
    ],
    quiz: [
      {
        question: "Quy định T+2 có nghĩa là gì?",
        options: [
          "Mua hôm nay, 2 ngày sau mới nhận cổ phiếu",
          "Giao dịch 2 lần mỗi tuần",
          "Chỉ được mua 2 mã cổ phiếu",
          "Phải nắm giữ 2 ngày mới bán được"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "what-is-stock",
    title: "Cổ phiếu là gì?",
    content: `**Định nghĩa:**
Cổ phiếu là giấy chứng nhận sở hữu một phần công ty

**Phân loại:**
• Cổ phiếu phổ thông
• Cổ phiếu ưu đãi

**Quyền lợi khi sở hữu:**
• Nhận cổ tức (tiền mặt hoặc cổ phiếu)
• Quyền biểu quyết trong ĐHCĐ
• Hưởng lợi từ tăng giá cổ phiếu`,
    faqs: [
      {
        question: "Cổ tức là gì? Khi nào được chia cổ tức?",
        answer: "Cổ tức là phần lợi nhuận công ty chia cho cổ đông. Thời điểm chia cổ tức do ĐHCĐ quyết định, thường là sau khi có BCTC năm."
      },
      {
        question: "Khác nhau giữa cổ phiếu phổ thông và ưu đãi?",
        answer: "Cổ phiếu phổ thông có quyền biểu quyết nhưng cổ tức không cố định. Cổ phiếu ưu đãi có cổ tức ưu tiên nhưng thường không có quyền biểu quyết."
      }
    ],
    quiz: [
      {
        question: "Khi sở hữu cổ phiếu, bạn có quyền gì?",
        options: [
          "Chỉ được nhận cổ tức",
          "Chỉ được bán lại cổ phiếu",
          "Được nhận cổ tức, biểu quyết và hưởng lợi từ tăng giá",
          "Không có quyền gì"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "investment-products",
    title: "Các loại sản phẩm đầu tư",
    content: `**Trái phiếu:**
Cho vay tiền cho doanh nghiệp/Chính phủ, nhận lãi định kỳ

**Chứng chỉ quỹ (ETF, quỹ mở):**
Đầu tư gián tiếp, quản lý chuyên nghiệp

**Phái sinh (HĐTL chỉ số VN30):**
Cho phép giao dịch 2 chiều, có thể phòng ngừa rủi ro`,
    faqs: [
      {
        question: "ETF là gì và có nên mua không?",
        answer: "ETF (Exchange Traded Fund) là quỹ được niêm yết và giao dịch như cổ phiếu. ETF phù hợp với nhà đầu tư muốn đa dạng hóa với chi phí thấp."
      },
      {
        question: "Trái phiếu doanh nghiệp có rủi ro không?",
        answer: "Có, trái phiếu doanh nghiệp có rủi ro tín dụng. Cần đánh giá năng lực tài chính của doanh nghiệp và xếp hạng tín nhiệm trước khi đầu tư."
      }
    ],
    quiz: [
      {
        question: "Sản phẩm nào phù hợp nhất cho người mới muốn đa dạng hóa?",
        options: [
          "Phái sinh VN30",
          "ETF",
          "Trái phiếu doanh nghiệp",
          "Một mã cổ phiếu"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "using-tcinvest",
    title: "Cách sử dụng TCInvest",
    content: `**Mở tài khoản:**
Trực tuyến qua eKYC hoặc tại quầy

**Nạp tiền:**
Liên kết ngân hàng, chuyển khoản trực tiếp

**Đặt lệnh:**
• Lệnh LO (Limit Order) - đặt giá cụ thể
• Lệnh ATO, ATC - khớp giá mở/đóng cửa
• Lệnh MP (Market Price) - khớp giá thị trường

**Theo dõi danh mục:**
Cập nhật giá trị thị trường, lãi/lỗ real-time

**Báo cáo giao dịch:**
Có sẵn theo ngày/tháng`,
    faqs: [
      {
        question: "Làm sao biết lệnh đã khớp chưa?",
        answer: "Kiểm tra trong phần 'Lệnh đã khớp' hoặc nhận thông báo qua app/email khi lệnh được khớp."
      },
      {
        question: "Có cần duy trì số dư tối thiểu không?",
        answer: "Không có yêu cầu số dư tối thiểu, nhưng cần đủ tiền để thanh toán lệnh mua và phí giao dịch."
      }
    ],
    quiz: [
      {
        question: "Lệnh LO là gì?",
        options: [
          "Lệnh khớp với giá thị trường",
          "Lệnh đặt giá cụ thể mong muốn",
          "Lệnh tự động",
          "Lệnh khớp cuối phiên"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "fundamental-analysis",
    title: "Phân tích Cơ bản (Fundamental Analysis)",
    content: `**Báo cáo tài chính:**
• Doanh thu, lợi nhuận, EPS
• Nợ vay, dòng tiền

**Chỉ số cơ bản:**
• P/E (Price to Earnings)
• P/B (Price to Book)
• ROE (Return on Equity)
• ROA (Return on Assets)

**Ngành nghề:**
Xem xét tăng trưởng, chu kỳ, rủi ro ngành`,
    faqs: [
      {
        question: "P/E thấp có nghĩa là cổ phiếu rẻ?",
        answer: "Không hoàn toàn đúng. P/E thấp có thể do cổ phiếu rẻ hoặc do triển vọng kinh doanh kém. Cần phân tích kỹ hơn."
      },
      {
        question: "ROE cao thì có nên mua không?",
        answer: "ROE cao là dấu hiệu tích cực về hiệu quả sử dụng vốn, nhưng cần xem xét thêm các yếu tố khác như nợ vay, triển vọng ngành."
      }
    ],
    quiz: [
      {
        question: "P/E là chỉ số đo lường điều gì?",
        options: [
          "Lợi nhuận ròng",
          "Tỷ lệ giá trên thu nhập",
          "Tổng tài sản",
          "Dòng tiền"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "technical-analysis",
    title: "Phân tích Kỹ thuật (Technical Analysis)",
    content: `**Khái niệm:**
Dựa trên đồ thị giá, khối lượng để dự đoán xu hướng

**Chỉ báo phổ biến:**
• MA (Moving Average) - đường trung bình động
• RSI (Relative Strength Index) - chỉ số sức mạnh tương đối
• MACD (Moving Average Convergence Divergence)

**Mẫu hình nến Nhật:**
Doji, Hammer, Shooting Star`,
    faqs: [
      {
        question: "Chỉ báo RSI quá mua/quá bán nghĩa là gì?",
        answer: "RSI > 70 là vùng quá mua (có thể điều chỉnh giảm), RSI < 30 là vùng quá bán (có thể hồi phục)."
      },
      {
        question: "Có nên mua khi giá vượt MA20 không?",
        answer: "Đây là tín hiệu tích cực, nhưng nên kết hợp thêm các chỉ báo khác và xác nhận khối lượng giao dịch."
      }
    ],
    quiz: [
      {
        question: "RSI > 70 có nghĩa là gì?",
        options: [
          "Cổ phiếu rẻ, nên mua",
          "Vùng quá mua, có thể điều chỉnh",
          "Cổ phiếu đang giảm",
          "Không có ý nghĩa gì"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "risk-management",
    title: "Quản trị rủi ro",
    content: `**Đa dạng hóa danh mục:**
Không bỏ tất cả vốn vào một mã

**Cắt lỗ:**
Xác định ngưỡng lỗ trước khi mua (thường 5-10%)

**Tâm lý đầu tư:**
• Tránh FOMO (Fear of Missing Out)
• Tránh bán tháo khi hoảng loạn

**Đòn bẩy (margin):**
Hiểu rủi ro trước khi sử dụng - có thể mất nhiều hơn vốn ban đầu`,
    faqs: [
      {
        question: "Nên cắt lỗ khi nào?",
        answer: "Khi giá giảm đến mức đã định trước (VD: -7% đến -10%), hoặc khi cơ bản doanh nghiệp thay đổi xấu."
      },
      {
        question: "Margin có nguy hiểm không?",
        answer: "Có, margin có thể khuếch đại lỗ. Chỉ nên dùng khi đã có kinh nghiệm và hiểu rõ cơ chế."
      }
    ],
    quiz: [
      {
        question: "Đa dạng hóa danh mục có nghĩa là gì?",
        options: [
          "Mua nhiều cổ phiếu cùng lúc",
          "Phân bổ vốn vào nhiều mã/ngành khác nhau",
          "Mua một mã nhiều lần",
          "Giao dịch thường xuyên"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "investment-practice",
    title: "Thực hành đầu tư",
    content: `**Bắt đầu với số vốn nhỏ**
Thử nghiệm với số tiền có thể chấp nhận mất

**Theo dõi danh mục và ghi chú**
Ghi lại lý do mua/bán để rút kinh nghiệm

**Đọc báo cáo phân tích từ CTCK**
Tham khảo ý kiến chuyên gia nhưng tự quyết định

**Tự học thêm qua demo/giả lập đầu tư**
Luyện tập trước khi đầu tư thật`,
    faqs: [
      {
        question: "Người mới nên mua mã nào đầu tiên?",
        answer: "Nên chọn cổ phiếu blue-chip (vốn hóa lớn, thanh khoản tốt) hoặc ETF để giảm rủi ro."
      },
      {
        question: "Có nên đầu tư dài hạn hay lướt sóng?",
        answer: "Người mới nên ưu tiên đầu tư dài hạn (3-5 năm) với các công ty tốt. Lướt sóng đòi hỏi kinh nghiệm và thời gian."
      }
    ],
    quiz: [
      {
        question: "Người mới bắt đầu nên làm gì trước tiên?",
        options: [
          "Vay tiền để đầu tư nhiều",
          "Bắt đầu với số vốn nhỏ và học hỏi",
          "Mua cổ phiếu penny",
          "Giao dịch margin ngay"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "learning-roadmap",
    title: "Lộ trình học cho Nhà đầu tư mới",
    content: `**Bước 1:** Hiểu thị trường chứng khoán Việt Nam

**Bước 2:** Biết cách mở tài khoản & sử dụng TCInvest

**Bước 3:** Học phân tích cơ bản + kỹ thuật

**Bước 4:** Nắm vững quản lý rủi ro

**Bước 5:** Thực hành đầu tư với số vốn nhỏ

**Bước 6:** Nâng cao kỹ năng qua báo cáo và demo

🎯 Mục tiêu cuối: Tự tin thực hiện giao dịch đầu tiên!`,
    faqs: [
      {
        question: "Mất bao lâu để hoàn thành lộ trình?",
        answer: "Tùy vào tốc độ học của mỗi người, thường 2-4 tuần để nắm vững kiến thức cơ bản."
      },
      {
        question: "Có cần học hết mới được giao dịch không?",
        answer: "Không bắt buộc, nhưng nên hoàn thành ít nhất 4 module đầu để hiểu rõ cơ bản trước khi giao dịch."
      }
    ],
    quiz: [
      {
        question: "Bước quan trọng nhất trước khi đầu tư là gì?",
        options: [
          "Có nhiều tiền",
          "Hiểu rõ kiến thức và quản lý rủi ro",
          "Biết nhiều chỉ báo kỹ thuật",
          "Có bạn bè đầu tư"
        ],
        correctAnswer: 1
      }
    ]
  }
];

export const getModuleById = (id: string): EducationModule | undefined => {
  return educationModules.find(module => module.id === id);
};

export const findRelevantModule = (query: string): EducationModule | null => {
  const lowerQuery = query.toLowerCase();
  
  // Keyword mapping
  const keywords: Record<string, string> = {
    "thị trường": "market-overview",
    "sàn": "market-overview",
    "hose": "market-overview",
    "hnx": "market-overview",
    "cổ phiếu": "what-is-stock",
    "cổ tức": "what-is-stock",
    "trái phiếu": "investment-products",
    "etf": "investment-products",
    "quỹ": "investment-products",
    "phái sinh": "investment-products",
    "tcinvest": "using-tcinvest",
    "mở tài khoản": "using-tcinvest",
    "đặt lệnh": "using-tcinvest",
    "nạp tiền": "using-tcinvest",
    "p/e": "fundamental-analysis",
    "p/b": "fundamental-analysis",
    "roe": "fundamental-analysis",
    "phân tích cơ bản": "fundamental-analysis",
    "báo cáo tài chính": "fundamental-analysis",
    "rsi": "technical-analysis",
    "ma": "technical-analysis",
    "macd": "technical-analysis",
    "phân tích kỹ thuật": "technical-analysis",
    "nến": "technical-analysis",
    "rủi ro": "risk-management",
    "cắt lỗ": "risk-management",
    "margin": "risk-management",
    "đa dạng": "risk-management",
    "lộ trình": "learning-roadmap",
    "bắt đầu": "learning-roadmap",
    "thực hành": "investment-practice"
  };
  
  for (const [keyword, moduleId] of Object.entries(keywords)) {
    if (lowerQuery.includes(keyword)) {
      return getModuleById(moduleId) || null;
    }
  }
  
  return null;
};

export const findRelevantFAQ = (query: string): { question: string; answer: string; module: string } | null => {
  const lowerQuery = query.toLowerCase();
  
  for (const module of educationModules) {
    for (const faq of module.faqs) {
      if (faq.question.toLowerCase().includes(lowerQuery) || 
          lowerQuery.includes(faq.question.toLowerCase().substring(0, 10))) {
        return { ...faq, module: module.title };
      }
    }
  }
  
  return null;
};
