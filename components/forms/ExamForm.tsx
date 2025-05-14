"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Info } from "lucide-react";

const formSchema = z.object({
  examName: z.string().min(2, {
    message: "Exam name must be at least 2 characters.",
  }),
  monthsRemaining: z.coerce.number().int().min(1, {
    message: "Preparation time must be at least 1 month.",
  }).max(24, {
    message: "Preparation time cannot exceed 24 months.",
  }),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  examType: z.enum(["academic", "professional", "certification", "language", "other"]),
});

type FormValues = z.infer<typeof formSchema>;

export function ExamForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      examName: "",
      monthsRemaining: 3,
      difficulty: "intermediate",
      examType: "academic",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // In a real app, you might send this data to an API
    // For now, we'll just encode it in the URL
    const params = new URLSearchParams({
      examName: data.examName,
      monthsRemaining: data.monthsRemaining.toString(),
      difficulty: data.difficulty,
      examType: data.examType,
    });
    
    // Simulate a loading delay for better UX
    setTimeout(() => {
      router.push(`/strategy?${params.toString()}`);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="examName" className="block text-sm font-medium">
            Exam Name
          </label>
          <input
            id="examName"
            {...register("examName")}
            className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., GMAT, AWS Solutions Architect, IELTS"
          />
          {errors.examName && (
            <p className="text-destructive text-sm">{errors.examName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="monthsRemaining" className="block text-sm font-medium">
            Months Until Exam
          </label>
          <input
            id="monthsRemaining"
            type="number"
            min="1"
            max="24"
            {...register("monthsRemaining")}
            className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.monthsRemaining && (
            <p className="text-destructive text-sm">{errors.monthsRemaining.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="difficulty" className="block text-sm font-medium">
            Your Current Level
          </label>
          <select
            id="difficulty"
            {...register("difficulty")}
            className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="beginner">Beginner - New to this subject</option>
            <option value="intermediate">Intermediate - Some knowledge</option>
            <option value="advanced">Advanced - Need to refine knowledge</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="examType" className="block text-sm font-medium">
            Exam Type
          </label>
          <select
            id="examType"
            {...register("examType")}
            className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="academic">Academic (School, College)</option>
            <option value="professional">Professional</option>
            <option value="certification">Technical Certification</option>
            <option value="language">Language Proficiency</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="bg-muted rounded-md p-4 text-sm flex items-start gap-3">
        <Info className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
        <p className="text-muted-foreground">
          Your study plan will be generated based on these details. The more specific you are, the better your plan will be.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Generating Plan..." : "Generate Study Plan"}
      </button>
    </form>
  );
}