import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { getImageForCategory, getImageForSlug } from "@/data/blogImages";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const BlogCard = ({ slug, title, excerpt, category, readTime, date, featured = false, isFirstCard = false }: BlogCardProps & { isFirstCard?: boolean }) => {
  const image = getImageForSlug(slug) || getImageForCategory(category);
  const imgWidth = featured ? 758 : 366;
  const imgHeight = featured ? 426 : 206;
  const sizes = featured
    ? "(max-width: 768px) 100vw, 50vw"
    : "(max-width: 768px) 100vw, 33vw";

  return (
    <article className={`group bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
      <Link to={`/blog/${slug}`} className={`block overflow-hidden ${featured ? 'md:h-full' : 'aspect-video'}`}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${image.smWebp} 400w, ${image.webp} 800w`}
            sizes={sizes}
          />
          <source
            type="image/jpeg"
            srcSet={`${image.smJpg} 400w, ${image.jpg} 800w`}
            sizes={sizes}
          />
          <img
            src={image.jpg}
            alt={`${title} - ${category} article thumbnail`}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${featured ? 'aspect-video md:aspect-auto md:h-full' : ''}`}
            loading={isFirstCard ? "eager" : "lazy"}
            decoding="async"
            width={imgWidth}
            height={imgHeight}
            fetchPriority={isFirstCard ? "high" : "auto"}
          />
        </picture>
      </Link>
      
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            {category}
          </span>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        
        <h3 className={`font-semibold text-foreground group-hover:text-primary transition-colors mb-3 ${featured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
          <Link to={`/blog/${slug}`} className="inline-link hover:underline">
            {title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
          
          <Link 
            to={`/blog/${slug}`}
            className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:gap-2.5 transition-all py-2 -mr-2 pr-2"
          >
            Read more
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
