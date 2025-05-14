export interface ExamPrepData {
  examName: string;
  monthsRemaining: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  examType: 'academic' | 'professional' | 'certification' | 'language' | 'other';
}

export interface StudyResource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'pdf' | 'course' | 'practice';
  url: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration?: string;
  topics: string[];
}

export interface WeeklyGoal {
  week: number;
  title: string;
  description: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  resources: string[]; // Resource IDs
}

export interface StudyTip {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'memory' | 'productivity' | 'motivation' | 'technique';
}

export interface StudyStrategy {
  overview: {
    examName: string;
    monthsRemaining: number;
    totalWeeks: number;
    phaseBreakdown: {
      name: string;
      weeks: number;
      description: string;
    }[];
  };
  weeklyGoals: WeeklyGoal[];
  resources: StudyResource[];
  tips: StudyTip[];
}