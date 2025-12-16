import { useState } from "react";
import BlogCard from "./BlogCard";
import { blogPosts, categories } from "@/data/blogPosts";

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <nav aria-label="Blog categories" className="mb-10">
          <ul className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Section Heading */}
        <h2 className="sr-only">Latest Articles</h2>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              {...post}
              featured={index === 0 && activeCategory === "All"}
              isFirstCard={index === 0}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No posts found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
