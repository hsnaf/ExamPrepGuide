import { ExamForm } from "@/components/forms/ExamForm";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8 md:pt-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Your Personal <span className="text-primary">Exam Preparation</span> Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Input your exam and timeframe, and we'll create a personalized study strategy with curated resources and weekly goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#create-plan" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Create your plan <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-muted text-muted-foreground font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Learn more
            </a>
          </div>
        </div>
        <div className="flex-1 relative h-[350px] w-full">
          <Image 
            src="https://images.pexels.com/photos/6238072/pexels-photo-6238072.jpeg" 
            alt="Student studying for exam" 
            fill
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </section>

      <section id="create-plan" className="pt-8 max-w-3xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Create Your Study Plan</h2>
          <ExamForm />
        </div>
      </section>

      <section id="about" className="max-w-3xl mx-auto text-center space-y-6 pt-8">
        <h2 className="text-3xl font-bold">About ExamPrepGuide</h2>
        <p className="text-lg text-muted-foreground">
          ExamPrepGuide is designed to help students of all levels create structured, effective study plans for any exam. 
          Our intelligent system generates personalized strategies based on exam requirements and available preparation time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="bg-primary/10 text-primary font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">1</span>
                <span>Enter your exam name and preparation time</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-primary/10 text-primary font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">2</span>
                <span>Our system generates a personalized strategy</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-primary/10 text-primary font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">3</span>
                <span>Access a curated list of free study resources</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-primary/10 text-primary font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">4</span>
                <span>Follow your weekly goals and track progress</span>
              </li>
            </ol>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Why Use ExamPrepGuide</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 text-primary flex-shrink-0 mt-0.5">✓</div>
                <span>Personalized strategies based on your specific exam</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 text-primary flex-shrink-0 mt-0.5">✓</div>
                <span>Access to quality, free resources organized by topic</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 text-primary flex-shrink-0 mt-0.5">✓</div>
                <span>Practical weekly goals to keep you on track</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 text-primary flex-shrink-0 mt-0.5">✓</div>
                <span>Expert study tips to maximize your learning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Personalized Strategy",
    description: "Get a study plan tailored to your specific exam needs and available preparation time.",
    icon: BookOpen
  },
  {
    title: "Weekly Goals",
    description: "Clear, achievable weekly goals to keep you on track throughout your preparation period.",
    icon: Calendar
  },
  {
    title: "Curated Resources",
    description: "Access to free, high-quality study materials organized by topic and difficulty level.",
    icon: Clock
  }
];