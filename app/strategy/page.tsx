"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ExamPrepData, StudyStrategy } from "@/lib/types";
import { generateStudyStrategy } from "@/lib/strategy-generator";
import StrategyOverview from "@/components/strategy/StrategyOverview";
import ResourceList from "@/components/strategy/ResourceList";
import WeeklyPlan from "@/components/strategy/WeeklyPlan";
import StudyTips from "@/components/strategy/StudyTips";

export default function StrategyPage() {
  const searchParams = useSearchParams();
  const [strategy, setStrategy] = useState<StudyStrategy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Get query parameters
    const examName = searchParams?.get("examName") || "";
    const monthsRemaining = parseInt(searchParams?.get("monthsRemaining") || "3", 10);
    const difficulty = (searchParams?.get("difficulty") || "intermediate") as ExamPrepData["difficulty"];
    const examType = (searchParams?.get("examType") || "academic") as ExamPrepData["examType"];

    if (!examName) {
      setIsLoading(false);
      return;
    }

    // Generate strategy
    const examPrepData: ExamPrepData = {
      examName,
      monthsRemaining,
      difficulty,
      examType
    };

    // Simulate a loading delay
    setTimeout(() => {
      const generatedStrategy = generateStudyStrategy(examPrepData);
      setStrategy(generatedStrategy);
      setIsLoading(false);
    }, 1000);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <h2 className="text-2xl font-bold">Generating your personalized study strategy...</h2>
          <p className="text-muted-foreground">This may take a moment as we customize your plan.</p>
        </div>
      </div>
    );
  }

  if (!strategy) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-destructive/10 p-6 rounded-lg max-w-xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Missing Information</h2>
              <p className="text-muted-foreground mb-4">
                We couldn't generate a study strategy because some required information is missing.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Go back and try again
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Your {strategy.overview.examName} Study Plan
        </h1>
        <p className="text-muted-foreground text-lg">
          A {strategy.overview.monthsRemaining}-month personalized strategy to help you succeed.
        </p>
      </div>

      <div className="flex overflow-x-auto mb-6 bg-muted rounded-lg p-1">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-md font-medium text-sm ${activeTab === "overview" 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab("weekly")}
          className={`px-4 py-2 rounded-md font-medium text-sm ${activeTab === "weekly" 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          Weekly Plan
        </button>
        <button 
          onClick={() => setActiveTab("resources")}
          className={`px-4 py-2 rounded-md font-medium text-sm ${activeTab === "resources" 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          Resources
        </button>
        <button 
          onClick={() => setActiveTab("tips")}
          className={`px-4 py-2 rounded-md font-medium text-sm ${activeTab === "tips" 
            ? "bg-background text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          Study Tips
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        {activeTab === "overview" && <StrategyOverview strategy={strategy} />}
        {activeTab === "weekly" && <WeeklyPlan weeklyGoals={strategy.weeklyGoals} />}
        {activeTab === "resources" && <ResourceList resources={strategy.resources} />}
        {activeTab === "tips" && <StudyTips tips={strategy.tips} />}
      </div>
    </div>
  );
}