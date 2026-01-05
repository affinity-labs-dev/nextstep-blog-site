import careerTransitions from "@/assets/blog/career-transitions.jpg";
import techCareers from "@/assets/blog/tech-careers.jpg";
import interviewPrep from "@/assets/blog/interview-prep.jpg";
import privateEquity from "@/assets/blog/private-equity.jpg";
import workLifeBalance from "@/assets/blog/work-life-balance.jpg";
import compensation from "@/assets/blog/compensation.jpg";
import careerDecisions from "@/assets/blog/career-decisions.jpg";
import networking from "@/assets/blog/networking.jpg";
import successStories from "@/assets/blog/success-stories.jpg";
import consultingSurvey from "@/assets/blog/consulting-survey.jpg";

export const categoryImages: Record<string, string> = {
  "Career Transitions": careerTransitions,
  "Tech Careers": techCareers,
  "Interview Prep": interviewPrep,
  "Private Equity": privateEquity,
  "Work-Life Balance": workLifeBalance,
  "Compensation": compensation,
  "Career Decisions": careerDecisions,
  "Networking": networking,
  "Success Stories": successStories,
};

// Slug-specific images for posts that need custom images
export const slugImages: Record<string, string> = {
  "consulting-survey-2025": consultingSurvey,
};

export const getImageForSlug = (slug: string): string | null => {
  return slugImages[slug] || null;
};

export const getImageForCategory = (category: string): string => {
  return categoryImages[category] || careerTransitions;
};
