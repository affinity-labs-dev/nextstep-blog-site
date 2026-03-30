// Maps blog categories to their Open Graph images
export const getOgImageForCategory = (category: string): string => {
  const categoryMap: Record<string, string> = {
    "Career Transitions": "/og-career-transitions.jpg",
    "Tech Careers": "/og-tech-careers.jpg",
    "Interview Prep": "/og-interview-prep.jpg",
    "Private Equity": "/og-private-equity.jpg",
    "Work-Life Balance": "/og-work-life-balance.jpg",
    "Compensation": "/og-compensation.jpg",
    "Career Decisions": "/og-career-decisions.jpg",
    "Networking": "/og-networking.jpg",
    "Success Stories": "/og-success-stories.jpg",
  };

  return categoryMap[category] || "/og-homepage.jpg";
};
