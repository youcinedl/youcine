import { generateMeta } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = generateMeta(
  "Our Blog - YouCine News & Guides",
  "Read the latest articles, guides, and news about YouCine and the streaming industry.",
  "blog"
);

const BLOG_POSTS = [
  {
    id: "article-1",
    title: "Top 10 Hidden Gems to Watch on YouCine This Month",
    excerpt: "Discover the best underrated movies and TV shows currently streaming on YouCine. Don't miss these hidden gems.",
    date: "May 10, 2026",
    readTime: "5 min read",
    image: "/images/hero_banner_1778386917716.png",
  },
  {
    id: "article-2",
    title: "How to Fix Buffering Issues on Streaming Apps",
    excerpt: "Experiencing lag while streaming on YouCine? Follow our comprehensive guide to fix buffering issues and enjoy smooth playback.",
    date: "May 8, 2026",
    readTime: "7 min read",
    image: "/images/app_interface_1778387008367.png",
  },
  {
    id: "article-3",
    title: "The Future of Streaming: What to Expect in 2027",
    excerpt: "Explore the upcoming trends in the streaming industry and how apps like YouCine are adapting to new technologies.",
    date: "May 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "article-4",
    title: "Comparing YouCine with Other Streaming Giants",
    excerpt: "An in-depth comparison of YouCine vs Netflix, Prime Video, and Disney+. Find out which service offers the best value.",
    date: "May 1, 2026",
    readTime: "8 min read",
    image: "/images/feature_devices_1778386931912.png",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">YouCine Blog</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Stay updated with the latest news, guides, and tips for the best streaming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="glass-panel overflow-hidden group flex flex-col">
            <div className="relative h-64 overflow-hidden bg-dark-800">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center space-x-4 text-sm text-primary mb-4 font-medium">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 hover:text-primary transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-400 mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.id}`} 
                className="inline-flex items-center text-secondary font-semibold hover:text-white transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
