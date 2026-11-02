import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface CaseStudyLayoutProps {
  title: string;
  role: string;
  timeline: string;
  category: string;
  heroImage: string;
  children: ReactNode;
}

export default function CaseStudyLayout({
  title,
  role,
  timeline,
  category,
  heroImage,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-black selection:text-white">
      <Navigation />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-black mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 mb-12"
          >
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap gap-8 md:gap-16 pt-8 border-t border-border">
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                  Role
                </span>
                <span className="font-medium">{role}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                  Timeline
                </span>
                <span className="font-medium">{timeline}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full h-[50vh] md:h-[70vh] bg-gray-100 overflow-hidden mb-24"
        >
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-600 prose-img:rounded-none prose-img:w-full prose-img:border prose-img:border-border"
          >
            {children}
          </motion.div>
        </div>
      </article>

      <section className="bg-secondary/30 py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Next Project</h2>
          <Link href="/#projects" className="inline-block px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors">
            View All Work
          </Link>
        </div>
      </section>
    </div>
  );
}
