"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

const REVIEWS: Review[] = [
  { id: 1, author: "Carlos M.", avatar: "C", rating: 5, date: "2 days ago", content: "Best streaming app I've used. The 4K quality is amazing and no buffering!" },
  { id: 2, author: "Sarah T.", avatar: "S", rating: 5, date: "1 week ago", content: "Love the UI. It's so easy to find what I want to watch. Highly recommend!" },
  { id: 3, author: "Miguel R.", avatar: "M", rating: 4, date: "3 weeks ago", content: "Great collection of shows. Sometimes takes a few seconds to load but overall fantastic." },
  { id: 4, author: "Jessica W.", avatar: "J", rating: 5, date: "1 month ago", content: "Ad-free experience is worth it. I can download episodes for my commute." },
  { id: 5, author: "David K.", avatar: "D", rating: 5, date: "1 month ago", content: "Finally an app that works flawlessly on my Firestick. Perfect." },
  { id: 6, author: "Ana P.", avatar: "A", rating: 5, date: "2 months ago", content: "The dubbing and subtitle options are great. Very good for international content." },
];

export default function ReviewSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Loved by 50,000+ Users</h2>
        <div className="flex items-center justify-center space-x-2 text-yellow-400 text-xl font-bold">
          <span className="text-white">4.9/5</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <span className="text-slate-400 text-base font-normal ml-2">Based on 20,000+ Reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-white shadow-md">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.author}</h4>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-slate-600"}`} />
                ))}
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">"{review.content}"</p>
            <div className="flex items-center text-slate-500 text-xs font-medium cursor-pointer hover:text-primary transition-colors">
              <ThumbsUp className="w-4 h-4 mr-1" />
              Helpful
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button className="btn-secondary">View All 20,000+ Reviews</button>
      </div>
    </section>
  );
}
