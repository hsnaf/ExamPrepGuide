import { ExamPrepData, StudyStrategy, WeeklyGoal, StudyResource, StudyTip } from "./types";
import { generalStudyResources, academicResources, certificationResources, languageResources, professionalResources, studyTips } from "./study-data";

export function generateStudyStrategy(data: ExamPrepData): StudyStrategy {
  const { examName, monthsRemaining, difficulty, examType } = data;
  
  // Calculate total weeks available for preparation
  const totalWeeks = Math.floor(monthsRemaining * 4.3);
  
  // Create phase breakdown based on total weeks
  const phaseBreakdown = createPhaseBreakdown(totalWeeks);
  
  // Generate weekly goals
  const weeklyGoals = generateWeeklyGoals(totalWeeks, examType, difficulty);
  
  // Select appropriate resources
  const resources = selectResources(examName, examType, difficulty);
  
  // Select study tips
  const tips = selectStudyTips();
  
  return {
    overview: {
      examName,
      monthsRemaining,
      totalWeeks,
      phaseBreakdown
    },
    weeklyGoals,
    resources,
    tips
  };
}

function createPhaseBreakdown(totalWeeks: number) {
  // Calculate phase durations based on total weeks
  let foundationWeeks = Math.max(Math.floor(totalWeeks * 0.3), 1);
  let deepLearningWeeks = Math.max(Math.floor(totalWeeks * 0.4), 1);
  let reviewWeeks = Math.max(Math.floor(totalWeeks * 0.2), 1);
  let finalPrepWeeks = totalWeeks - foundationWeeks - deepLearningWeeks - reviewWeeks;
  
  // Ensure at least 1 week for final prep
  if (finalPrepWeeks < 1) {
    if (deepLearningWeeks > 1) {
      deepLearningWeeks -= 1;
      finalPrepWeeks = 1;
    } else if (foundationWeeks > 1) {
      foundationWeeks -= 1;
      finalPrepWeeks = 1;
    }
  }
  
  return [
    {
      name: "Foundation Building",
      weeks: foundationWeeks,
      description: "Focus on understanding fundamental concepts and creating a solid knowledge base."
    },
    {
      name: "Deep Learning",
      weeks: deepLearningWeeks,
      description: "Dive deeper into complex topics and expand your understanding of key concepts."
    },
    {
      name: "Review & Practice",
      weeks: reviewWeeks,
      description: "Reinforce learning through regular review sessions and practice exercises."
    },
    {
      name: "Final Preparation",
      weeks: finalPrepWeeks,
      description: "Focus on practice exams, simulations, and fine-tuning your knowledge."
    }
  ];
}

function generateWeeklyGoals(totalWeeks: number, examType: string, difficulty: string): WeeklyGoal[] {
  const weeklyGoals: WeeklyGoal[] = [];
  
  // Define common tasks for different phases
  const foundationTasks = [
    { id: "task-1", title: "Create a comprehensive study schedule", completed: false },
    { id: "task-2", title: "Identify key topics and learning resources", completed: false },
    { id: "task-3", title: "Set up a note-taking system", completed: false },
    { id: "task-4", title: "Complete initial assessment to identify strengths/weaknesses", completed: false }
  ];
  
  const deepLearningTasks = [
    { id: "task-5", title: "Master complex topics through deep study", completed: false },
    { id: "task-6", title: "Create mind maps or summary notes", completed: false },
    { id: "task-7", title: "Practice with application questions", completed: false },
    { id: "task-8", title: "Seek clarification on difficult concepts", completed: false }
  ];
  
  const reviewTasks = [
    { id: "task-9", title: "Review all topics systematically", completed: false },
    { id: "task-10", title: "Take topic-specific practice tests", completed: false },
    { id: "task-11", title: "Identify and address knowledge gaps", completed: false },
    { id: "task-12", title: "Create concise revision notes", completed: false }
  ];
  
  const finalPrepTasks = [
    { id: "task-13", title: "Take full-length practice exams", completed: false },
    { id: "task-14", title: "Review exam strategies and time management", completed: false },
    { id: "task-15", title: "Focus on weak areas identified in practice tests", completed: false },
    { id: "task-16", title: "Prepare physically and mentally for exam day", completed: false }
  ];
  
  // Determine phase durations
  const foundationWeeks = Math.max(Math.floor(totalWeeks * 0.3), 1);
  const deepLearningWeeks = Math.max(Math.floor(totalWeeks * 0.4), 1);
  const reviewWeeks = Math.max(Math.floor(totalWeeks * 0.2), 1);
  const finalPrepWeeks = totalWeeks - foundationWeeks - deepLearningWeeks - reviewWeeks;
  
  // Generate weekly goals for each phase
  let currentWeek = 1;
  
  // Foundation phase
  for (let i = 0; i < foundationWeeks; i++) {
    const weekGoal: WeeklyGoal = {
      week: currentWeek,
      title: `Foundation Building - Week ${i + 1}`,
      description: "Focus on understanding core concepts and creating a strong knowledge base.",
      tasks: foundationTasks.map(task => ({ ...task, id: `${task.id}-w${currentWeek}` })),
      resources: ["res-001", "res-002", "res-007"]
    };
    
    weeklyGoals.push(weekGoal);
    currentWeek++;
  }
  
  // Deep Learning phase
  for (let i = 0; i < deepLearningWeeks; i++) {
    const weekGoal: WeeklyGoal = {
      week: currentWeek,
      title: `Deep Learning - Week ${i + 1}`,
      description: "Deepen your understanding of complex topics and apply concepts to problems.",
      tasks: deepLearningTasks.map(task => ({ ...task, id: `${task.id}-w${currentWeek}` })),
      resources: ["res-003", "res-004", "res-008"]
    };
    
    weeklyGoals.push(weekGoal);
    currentWeek++;
  }
  
  // Review phase
  for (let i = 0; i < reviewWeeks; i++) {
    const weekGoal: WeeklyGoal = {
      week: currentWeek,
      title: `Review & Practice - Week ${i + 1}`,
      description: "Systematically review all topics and practice with exam-style questions.",
      tasks: reviewTasks.map(task => ({ ...task, id: `${task.id}-w${currentWeek}` })),
      resources: ["res-006", "res-005"]
    };
    
    weeklyGoals.push(weekGoal);
    currentWeek++;
  }
  
  // Final Preparation phase
  for (let i = 0; i < finalPrepWeeks; i++) {
    const weekGoal: WeeklyGoal = {
      week: currentWeek,
      title: `Final Preparation - Week ${i + 1}`,
      description: "Take full-length practice exams and fine-tune your preparation.",
      tasks: finalPrepTasks.map(task => ({ ...task, id: `${task.id}-w${currentWeek}` })),
      resources: ["res-005"]
    };
    
    weeklyGoals.push(weekGoal);
    currentWeek++;
  }
  
  return weeklyGoals;
}

function selectResources(examName: string, examType: string, difficulty: string): StudyResource[] {
  const selectedResources: StudyResource[] = [];
  
  // Add general resources
  selectedResources.push(...generalStudyResources.filter(res => 
    res.difficulty === difficulty || 
    (difficulty === 'advanced' && res.difficulty === 'intermediate') ||
    (difficulty === 'intermediate' && res.difficulty === 'beginner')
  ));
  
  // Add exam-type specific resources
  switch (examType) {
    case 'academic':
      selectedResources.push(...academicResources);
      break;
    case 'certification':
      selectedResources.push(...certificationResources);
      break;
    case 'language':
      selectedResources.push(...languageResources);
      break;
    case 'professional':
      selectedResources.push(...professionalResources);
      break;
    default:
      // Just use general resources for 'other'
      break;
  }
  
  // Limit to a reasonable number of resources
  return selectedResources.slice(0, 12);
}

function selectStudyTips(): StudyTip[] {
  // Randomly select a subset of tips
  return studyTips.sort(() => 0.5 - Math.random()).slice(0, 5);
}