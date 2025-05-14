"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Calendar, BookOpen, FileText, TimerReset } from 'lucide-react';
import { StudyStrategy } from '@/lib/types';

interface StrategyOverviewProps {
  strategy: StudyStrategy;
}

export default function StrategyOverview({ strategy }: StrategyOverviewProps) {
  const { overview } = strategy;
  
  // Data for pie chart
  const phaseData = overview.phaseBreakdown.map(phase => ({
    name: phase.name,
    value: phase.weeks
  }));
  
  // Colors for pie chart
  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Study Plan Overview</h2>
          <p className="text-muted-foreground mb-6">
            This {overview.monthsRemaining}-month study plan for {overview.examName} is divided into {overview.totalWeeks} weeks of structured learning, designed to help you succeed.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Duration</h3>
              </div>
              <p className="text-2xl font-bold">{overview.monthsRemaining} months</p>
              <p className="text-muted-foreground text-sm">{overview.totalWeeks} weeks total</p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Resources</h3>
              </div>
              <p className="text-2xl font-bold">{strategy.resources.length}</p>
              <p className="text-muted-foreground text-sm">Curated materials</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={phaseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              
              >
                {phaseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} weeks`, name]}
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                
                itemStyle={{ color: 'white' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Study Phases</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {overview.phaseBreakdown.map((phase, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:border-primary/60 transition-colors duration-200">
              <div className="w-8 h-8 rounded-full mb-3" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <h4 className="font-semibold mb-1">{phase.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{phase.weeks} weeks</p>
              <p className="text-sm">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6 border border-border">
        <div className="flex items-start gap-3">
          <TimerReset className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Getting Started</h3>
            <p className="text-muted-foreground">
              Begin by reviewing the weekly plan and exploring the curated resources. 
              Each week has specific tasks designed to build your knowledge systematically.
              Track your progress by marking tasks as complete and regularly reviewing your strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}