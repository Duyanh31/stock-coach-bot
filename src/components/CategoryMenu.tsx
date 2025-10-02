import { GraduationCap, Newspaper, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryMenuProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  {
    id: "education",
    label: "Học tập",
    icon: GraduationCap,
  },
  {
    id: "news",
    label: "Tin tức",
    icon: Newspaper,
  },
  {
    id: "analysis",
    label: "Phân tích",
    icon: TrendingUp,
  },
  {
    id: "recommendations",
    label: "Gợi ý",
    icon: Sparkles,
  },
];

const CategoryMenu = ({ selectedCategory, onSelectCategory }: CategoryMenuProps) => {
  return (
    <div className="w-20 bg-muted/30 border-r flex flex-col gap-2 py-4">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant="ghost"
            className={`flex flex-col h-auto py-3 px-2 gap-1 transition-smooth ${
              isSelected
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs font-medium leading-tight text-center">
              {category.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
