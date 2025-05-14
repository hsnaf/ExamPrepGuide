import { Brain, Presentation, Layout, Timer, AlarmClock, Award, Moon, Target } from "lucide-react";
import { StudyTip } from "@/lib/types";

interface StudyTipsProps {
  tips: StudyTip[];
}

export default function StudyTips({ tips }: StudyTipsProps) {
  // Map the icon strings to the actual icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="h-5 w-5" />;
      case 'presentation':
        return <Presentation className="h-5 w-5" />;
      case 'layout':
        return <Layout className="h-5 w-5" />;
      case 'timer':
        return <Timer className="h-5 w-5" />;
      case 'alarm-clock':
        return <AlarmClock className="h-5 w-5" />;
      case 'award':
        return <Award className="h-5 w-5" />;
      case 'moon':
        return <Moon className="h-5 w-5" />;
      case 'target':
        return <Target className="h-5 w-5" />;
      default:
        return <Brain className="h-5 w-5" />;
    }
  };
  
  // Get the background color based on the category
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'memory':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'productivity':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'technique':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'motivation':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Smart Study Tips</h2>
        <p className="text-muted-foreground">
          These expert tips will help you optimize your study sessions and make the most of your preparation time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tips.map((tip) => (
          <div 
            key={tip.id} 
            className="bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/60 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                {getIcon(tip.icon)}
              </div>
              
              <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryStyle(tip.category)}`}>
                {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
            <p className="text-muted-foreground">{tip.description}</p>
          </div>
        ))}
      </div>
      
      <div className="p-6 border border-border rounded-lg bg-muted/50 text-center">
        <h3 className="font-semibold mb-2">Have your own study tip?</h3>
        <p className="text-muted-foreground text-sm">
          The best study strategies are personalized. Feel free to adapt these tips to your own learning style and preferences.
        </p>
      </div>
    </div>
  );
}