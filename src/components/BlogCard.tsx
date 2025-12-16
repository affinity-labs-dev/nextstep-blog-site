import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const BlogCard = ({ slug, title, excerpt, category, readTime, date, featured = false }: BlogCardProps) => {
  return (
    <article className={`group bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
      <div className={`bg-gradient-to-br from-primary/10 to-accent aspect-video ${featured ? 'md:aspect-auto md:h-full' : ''}`} />
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        
        <h2 className={`font-semibold text-foreground group-hover:text-primary transition-colors mb-3 ${featured ? 'text-2xl' : 'text-lg'}`}>
          <Link to={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
          
          <Link 
            to={`/blog/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
          >
            Read more
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
