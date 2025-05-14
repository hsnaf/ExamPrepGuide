import { StudyResource, StudyTip } from "./types";

// General study resources that can apply to many exam types
export const generalStudyResources: StudyResource[] = [
  {
    id: "res-001",
    title: "Effective Study Techniques - The Pomodoro Method",
    type: "video",
    url: "https://www.youtube.com/watch?v=VFW3Ld7JO0w",
    description: "Learn how to use the Pomodoro Technique to improve focus and productivity during study sessions.",
    difficulty: "beginner",
    duration: "12 minutes",
    topics: ["study techniques", "time management", "productivity"]
  },
  {
    id: "res-002",
    title: "How to Create Effective Flashcards",
    type: "article",
    url: "https://collegeinfogeek.com/flash-card-study-tips/",
    description: "A comprehensive guide on creating and using flashcards effectively for memorization.",
    difficulty: "beginner",
    topics: ["memorization", "study techniques"]
  },
  {
    id: "res-003",
    title: "Spaced Repetition: The Most Effective Way to Learn",
    type: "video",
    url: "https://www.youtube.com/watch?v=cVf38y07cfk",
    description: "Understanding the science behind spaced repetition and how to implement it in your studies.",
    difficulty: "intermediate",
    duration: "18 minutes",
    topics: ["memorization", "learning techniques"]
  },
  {
    id: "res-004",
    title: "The Complete Guide to Mind Mapping",
    type: "pdf",
    url: "https://simplemind.eu/how-to-mind-map/",
    description: "Learn how to use mind maps to organize information and boost understanding and recall.",
    difficulty: "beginner",
    topics: ["note-taking", "organization", "visualization"]
  },
  {
    id: "res-005",
    title: "Overcoming Exam Anxiety",
    type: "article",
    url: "https://www.verywellmind.com/coping-with-test-anxiety-2671911",
    description: "Strategies for managing test anxiety and performing your best under pressure.",
    difficulty: "intermediate",
    topics: ["stress management", "mental health", "performance"]
  },
  {
    id: "res-006",
    title: "Active Recall: The Best Way to Study",
    type: "video",
    url: "https://www.youtube.com/watch?v=ukLnPbIffxE",
    description: "Learn about active recall and why it's more effective than passive reading.",
    difficulty: "beginner",
    duration: "15 minutes",
    topics: ["study techniques", "memory"]
  },
  {
    id: "res-007",
    title: "How to Create a Study Schedule That Works",
    type: "article",
    url: "https://www.oxfordlearning.com/how-to-create-a-study-schedule/",
    description: "Step-by-step guide to creating a realistic and effective study schedule.",
    difficulty: "beginner",
    topics: ["planning", "time management"]
  },
  {
    id: "res-008",
    title: "The Feynman Technique Explained",
    type: "video",
    url: "https://www.youtube.com/watch?v=_f-qkGJBPts",
    description: "Master the Feynman Technique to learn concepts deeply and identify knowledge gaps.",
    difficulty: "intermediate",
    duration: "10 minutes",
    topics: ["learning techniques", "comprehension"]
  }
];

// Academic-specific resources
export const academicResources: StudyResource[] = [
  {
    id: "acad-001",
    title: "How to Take Effective Notes in Lectures",
    type: "article",
    url: "https://learningcenter.unc.edu/tips-and-tools/effective-note-taking-in-class/",
    description: "Learn different note-taking methods and how to choose the right one for your learning style.",
    difficulty: "beginner",
    topics: ["note-taking", "lectures", "organization"]
  },
  {
    id: "acad-002",
    title: "Essay Writing Tips for Academic Exams",
    type: "pdf",
    url: "https://www.ox.ac.uk/students/academic/guidance/skills/plagiarism",
    description: "Guidelines for structuring and writing essays under exam conditions.",
    difficulty: "intermediate",
    topics: ["writing", "essays", "exams"]
  },
  {
    id: "acad-003",
    title: "Understanding Bloom's Taxonomy for Better Study",
    type: "video",
    url: "https://www.youtube.com/watch?v=ayefSTAnCR8",
    description: "How to use Bloom's Taxonomy to deepen your understanding and prepare for different types of questions.",
    difficulty: "intermediate",
    duration: "14 minutes",
    topics: ["learning theory", "question types"]
  }
];

// Certification-specific resources
export const certificationResources: StudyResource[] = [
  {
    id: "cert-001",
    title: "How to Use Practice Exams Effectively",
    type: "article",
    url: "https://www.cbtnuggets.com/blog/certifications/how-to-use-practice-exams",
    description: "Tips for making the most out of practice exams when preparing for IT certifications.",
    difficulty: "intermediate",
    topics: ["practice exams", "technical certification"]
  },
  {
    id: "cert-002",
    title: "Creating a Hands-On Lab Environment",
    type: "video",
    url: "https://www.youtube.com/watch?v=mZ5H4XCqWFM",
    description: "How to set up a practical lab environment for technical certification practice.",
    difficulty: "advanced",
    duration: "25 minutes",
    topics: ["practical skills", "hands-on learning"]
  }
];

// Language exam resources
export const languageResources: StudyResource[] = [
  {
    id: "lang-001",
    title: "Spaced Repetition for Vocabulary Learning",
    type: "article",
    url: "https://www.fluentin3months.com/spaced-repetition/",
    description: "How to use spaced repetition software to master vocabulary for language exams.",
    difficulty: "beginner",
    topics: ["vocabulary", "memorization", "language learning"]
  },
  {
    id: "lang-002",
    title: "Improving Listening Skills for Language Exams",
    type: "video",
    url: "https://www.youtube.com/watch?v=WMW40ECxFq0",
    description: "Strategies to improve listening comprehension for language proficiency tests.",
    difficulty: "intermediate",
    duration: "20 minutes",
    topics: ["listening", "comprehension", "language skills"]
  }
];

// Professional exam resources
export const professionalResources: StudyResource[] = [
  {
    id: "prof-001",
    title: "Case Study Analysis Techniques",
    type: "pdf",
    url: "https://writingcenter.unc.edu/tips-and-tools/case-analysis/",
    description: "How to approach and analyze case studies for business and professional exams.",
    difficulty: "advanced",
    topics: ["case studies", "analysis", "professional skills"]
  },
  {
    id: "prof-002",
    title: "Managing Long-Term Study for Professional Qualifications",
    type: "article",
    url: "https://www.accountancyage.com/2019/07/29/how-to-study-for-professional-exams-while-working/",
    description: "Balancing work and study for professional qualification exams.",
    difficulty: "intermediate",
    topics: ["work-life balance", "long-term planning"]
  }
];

// Study tips
export const studyTips: StudyTip[] = [
  {
    id: "tip-001",
    title: "Use the 80/20 Rule",
    description: "Apply the Pareto Principle: focus on the 20% of content that gives 80% of results. Identify the most important topics that are likely to be tested.",
    icon: "target",
    category: "productivity"
  },
  {
    id: "tip-002",
    title: "Create a Dedicated Study Space",
    description: "Designate a specific area solely for studying that's free from distractions and has all your study materials within reach.",
    icon: "layout",
    category: "productivity"
  },
  {
    id: "tip-003",
    title: "Teach What You Learn",
    description: "Explaining concepts to others (even imaginary students) helps solidify your understanding and identify knowledge gaps.",
    icon: "presentation",
    category: "technique"
  },
  {
    id: "tip-004",
    title: "Use Multiple Memory Techniques",
    description: "Combine memory palace, mnemonics, and spaced repetition to enhance retention of complex information.",
    icon: "brain",
    category: "memory"
  },
  {
    id: "tip-005",
    title: "Take Strategic Breaks",
    description: "Follow focused study sessions with short breaks. Try the Pomodoro technique: 25 minutes of study followed by a 5-minute break.",
    icon: "timer",
    category: "productivity"
  },
  {
    id: "tip-006",
    title: "Practice Under Exam Conditions",
    description: "Regularly take timed practice tests under conditions similar to the actual exam to build stamina and reduce anxiety.",
    icon: "alarm-clock",
    category: "technique"
  },
  {
    id: "tip-007",
    title: "Visualize Success",
    description: "Spend time each day visualizing yourself performing well on the exam. Mental rehearsal helps reduce anxiety and builds confidence.",
    icon: "award",
    category: "motivation"
  },
  {
    id: "tip-008",
    title: "Review Before Sleep",
    description: "Study important material right before bedtime. Your brain processes and consolidates information during sleep.",
    icon: "moon",
    category: "memory"
  }
];