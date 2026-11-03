import Navigation from "@/components/Navigation";
import { ArrowLeft, Download, Mail, Linkedin, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-black selection:text-white">
      <Navigation />
      
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-black mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">Bhavya Srivastava</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Product Manager (MBA – IT & Systems Management) with hands-on experience leading end-to-end product lifecycles, driving MVP launches, user research, and analytics-driven strategy.
            </p>
          </div>
          <Button className="rounded-none h-12 px-6 bg-black text-white hover:bg-black/80" onClick={() => window.print()}>
            <Download className="mr-2 w-4 h-4" /> Download PDF
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Contact & Skills */}
          <div className="md:col-span-1 space-y-12">
            <section>
              <h3 className="font-display font-bold text-lg mb-4 border-b border-black pb-2">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bhavyasrivastava184@gmail.com" className="hover:underline">bhavyasrivastava184@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://www.linkedin.com/in/bhavyasrivastav/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <a href="https://medium.com/@chibiPM" target="_blank" rel="noreferrer" className="hover:underline">Blog (Medium)</a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-display font-bold text-lg mb-4 border-b border-black pb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agile & Scrum", 
                  "Wireframing (Figma)", 
                  "A/B Testing", 
                  "KPI Tracking", 
                  "Customer Segmentation", 
                  "Mixpanel & GA4", 
                  "User Research", 
                  "Roadmapping",
                  "Feature Adoption",
                  "Game Economy"
                ].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-secondary text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="font-display font-bold text-lg mb-4 border-b border-black pb-2">Education</h3>
              <div className="text-sm space-y-4">
                <div>
                  <p className="font-bold">MBA – IT & Systems Management</p>
                  <p className="text-muted-foreground">NMIMS, Mumbai | Nov 2023</p>
                  <p className="text-xs text-muted-foreground mt-1">CGPA: 7.9</p>
                </div>
                <div>
                  <p className="font-bold">M.Sc. Botany</p>
                  <p className="text-muted-foreground">Banaras Hindu University | Oct 2019</p>
                  <p className="text-xs text-muted-foreground mt-1">CGPA: 9.0</p>
                </div>
                <div>
                  <p className="font-bold">B.Sc. Botany</p>
                  <p className="text-muted-foreground">Banaras Hindu University | Jul 2017</p>
                  <p className="text-xs text-muted-foreground mt-1">CGPA: 8.0</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-display font-bold text-lg mb-4 border-b border-black pb-2">Certifications</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Agile Product Management (Google)</li>
                <li>• Product Management Nanodegree (Udemy)</li>
                <li>• Product Management Foundation (Coursera)</li>
              </ul>
            </section>
          </div>

          {/* Right Column - Experience */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="font-display font-bold text-2xl mb-8 border-b border-black pb-4">Professional Experience</h3>
              
              <div className="space-y-10">
                <div className="group">
                  <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2">
                    <h4 className="text-xl font-bold font-display">Product Manager (Freelance)</h4>
                    <span className="text-sm font-mono text-muted-foreground">Feb 2024 – Present</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-3 text-sm text-gray-700 leading-relaxed mt-4">
                    <li>Drove end-to-end product lifecycle across 4 MVP launches in gaming, SaaS, edtech, and wellness.</li>
                    <li>Conducted user research & market validation, achieving ~70% problem–solution fit.</li>
                    <li>Designed wireframes & PRDs (Figma, Notion), cutting design-to-development cycle by 25%.</li>
                    <li>Built analytics dashboards (DAU, retention, churn, conversion funnels), resulting in a 25% improvement in retention and 12% reduction in drop-off.</li>
                    <li>Proposed & implemented gamified streak tracking which boosted DAU by 17%.</li>
                    <li>Designed rewards & progression system for a mobile game, increasing session length by 20%.</li>
                    <li>Improved feature adoption & onboarding, reducing first-week drop-off by 15%.</li>
                    <li>Led sprint planning & backlog prioritization, reducing release delays by 30%.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-display font-bold text-2xl mb-8 border-b border-black pb-4">Key Projects</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg">SaaS Analytics Dashboard Redesign</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Redesigned dashboard information architecture to improve feature discoverability. Increased task success rate by 26% and reduced time-to-find metric by 42%. Validated designs through 15+ user interviews.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">AI Sentiment Analysis Feature</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Led development of an AI pipeline to automate customer review analysis, reducing manual effort by 96%. Achieved 92% accuracy using DistilBERT and reduced issue response time to under 24 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mobile Game Gamification</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                     Designed retention system increasing D7 retention by 5pp and daily sessions by 20% through quests and streak mechanics.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
