import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import saasImage from "@assets/generated_images/minimalist_saas_dashboard_abstract.png";
import aiImage from "@assets/generated_images/ai_sentiment_analysis_abstract.png";
import gameImage from "@assets/generated_images/mobile_game_gamification_abstract.png";
import journalImage from "@assets/journal-home.png";
import wellnessImage from "@assets/generated_images/wellness_app_pomodoro_abstract.png";

const projects = [
  {
    id: 1,
    title: "SaaS Dashboard Redesign",
    category: "UX / UI Design",
    description: "Improving usability and feature adoption for a complex enterprise platform.",
    image: saasImage,
    tags: ["UX Research", "Figma", "Data Vis"],
    link: "/projects/saas-dashboard"
  },
  {
    id: 2,
    title: "AI Sentiment Analysis",
    category: "Product Strategy",
    description: "Feature development for real-time customer feedback analysis.",
    image: aiImage,
    tags: ["AI/ML", "Product Discovery", "Python"],
    link: "/projects/ai-sentiment"
  },
  {
    id: 3,
    title: "Mobile Game Gamification",
    category: "Mobile Growth",
    description: "Retention system design increasing daily active users by 15%.",
    image: gameImage,
    tags: ["Mobile", "Gamification", "A/B Testing"],
    link: "/projects/mobile-game"
  },
  {
    id: 4,
    title: "Lesson Planner",
    category: "EdTech",
    description: "Designing a structured lesson planning tool to help educators streamline curriculum delivery and track student progress.",
    image: wellnessImage,
    tags: ["EdTech", "Mobile App", "0 to 1"],
    link: "/projects/lesson-planner"
  },
  {
    id: 5,
    title: "Spellbound Classroom",
    category: "Educator-led systems",
    description: "An immersive English learning system for 95 students — houses, quests and a humane performance dashboard.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%2320243b'/%3E%3Ccircle cx='620' cy='100' r='180' fill='none' stroke='%23ef7b5d' stroke-width='2' opacity='.5'/%3E%3Ccircle cx='620' cy='100' r='120' fill='none' stroke='%23ef7b5d' stroke-width='2' opacity='.3'/%3E%3Ctext x='70' y='270' fill='%23f6f0e4' font-family='Georgia' font-size='64'%3ESpellbound%3C/text%3E%3Ctext x='74' y='325' fill='%23ef7b5d' font-family='Georgia' font-style='italic' font-size='42'%3EClassroom%3C/text%3E%3C/svg%3E",
    tags: ["Learning Systems", "Dashboard", "EdTech"],
    link: "/projects/spellbound-classroom"
  },
  {
    id: 6,
    title: "Daily Dissection",
    category: "0 to 1 · Content Product",
    description: "A personal publication built around one essay a day. Product thinking applied to a writing habit, from benchmarking to shipping.",
    image: journalImage,
    tags: ["0 to 1", "Habit Design", "Content Strategy"],
    link: "/projects/daily-dissection"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest block mb-2">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Case Studies
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A selection of projects focusing on user-centric design and data-driven product strategy.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 md:gap-20 items-center group cursor-pointer`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="text-sm font-mono text-muted-foreground">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold group-hover:underline decoration-1 underline-offset-4 decoration-black/30">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white border border-border text-xs font-medium uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2 font-medium text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
