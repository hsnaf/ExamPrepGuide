"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { WeeklyGoal } from "@/lib/types";

interface WeeklyPlanProps {
  weeklyGoals: WeeklyGoal[];
}

export default function WeeklyPlan({ weeklyGoals }: WeeklyPlanProps) {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  
  const toggleExpand = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };
  
  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };
  
  // Calculate progress for each week
  const getWeekProgress = (tasks: { id: string, title: string, completed: boolean }[]) => {
    if (tasks.length === 0) return 0;
    
    const completedCount = tasks.filter(task => completedTasks[task.id]).length;
    return Math.round((completedCount / tasks.length) * 100);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Weekly Study Plan</h2>
        <p className="text-muted-foreground">
          Follow this week-by-week plan to stay on track with your exam preparation. 
          Each week has specific tasks designed to build upon your knowledge systematically.
        </p>
      </div>
      
      <div className="space-y-4">
        {weeklyGoals.map((goal) => {
          const progress = getWeekProgress(goal.tasks);
          
          return (
            <div 
              key={goal.week}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200"
            >
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleExpand(goal.week)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">{goal.week}</span>
                    {progress === 100 && (
                      <div className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center border-2 border-background">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{goal.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{progress}% complete</span>
                    </div>
                  </div>
                </div>
                {expandedWeek === goal.week ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              
              {expandedWeek === goal.week && (
                <div className="p-4 border-t border-border bg-background">
                  <p className="text-muted-foreground mb-4">{goal.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium">Weekly Tasks:</h4>
                    {goal.tasks.map((task) => (
                      <label 
                        key={task.id}
                        className="flex items-start gap-3 cursor-pointer p-2 hover:bg-muted/30 rounded-md transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={!!completedTasks[task.id]}
                          onChange={() => toggleTask(task.id)}
                          className="mt-1"
                        />
                        <span className={completedTasks[task.id] ? "line-through text-muted-foreground" : ""}>
                          {task.title}
                        </span>
                      </label>
                    ))}
                  </div>
                  
                  {goal.resources.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Recommended Resources for this Week:</h4>
                      <div className="text-sm text-primary">
                        Review the resources tab for materials related to this week's goals.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}