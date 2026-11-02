import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/profile-new.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                Bhavya <br />
                Srivastava
              </h1>
              <div className="h-1 w-24 bg-black mb-8" />
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed">
                Product Manager (MBA – IT & Systems Management) based in Bangalore. <br />
                Driving MVP launches, user research, and analytics-driven strategy across SaaS, Gaming, & EdTech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 flex gap-4"
            >
              <Button size="lg" className="rounded-none px-8 text-md h-12" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                View Work
              </Button>
              <Button variant="outline" size="lg" className="rounded-none px-8 text-md h-12 border-black hover:bg-black hover:text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-5 lg:col-span-5 hidden md:flex justify-end"
          >
            <div className="relative">
              <div className="w-80 lg:w-96 overflow-hidden border-4 border-black">
                <img
                  src={profilePhoto}
                  alt="Bhavya Srivastava"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-black/20 -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-b from-gray-50 to-transparent -z-10 opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      <Projects />

      {/* Building Now Section */}
      <section className="border-y border-border bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-12 md:items-start"
          >
            <div className="md:col-span-4">
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                Building Now
              </span>
            </div>

            <div className="md:col-span-8">
              <div className="mb-8 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-30" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-black" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Work in progress
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                B&apos;s Journal
              </h2>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                A personal collection of essays on biology, literature, and the
                cultural architecture of the human spirit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest block mb-4">
                About Me
              </span>
              <h2 className="text-4xl font-display font-bold mb-8">
                Turning chaos into clarity through product discovery and strategy.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a Product Manager (MBA – IT & Systems Management) with hands-on experience leading end-to-end product lifecycles, driving MVP launches, user research, and analytics-driven strategy.
                </p>
                <p>
                  I have proven success in increasing user retention, adoption, and engagement across gaming, SaaS, edtech, and wellness products. My approach combines agile methodologies, data analysis, and deep stakeholder collaboration to build products that matter.
                </p>
              </div>
              
              <div className="mt-12 p-6 bg-secondary/30 border border-border">
                <h4 className="font-display font-bold mb-4">Certifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Agile Product Management (Google)</li>
                  <li>• Product Management Foundation (Coursera)</li>
                  <li>• Product Management Nanodegree (Udemy)</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-xl font-display font-bold mb-6 border-b border-black pb-2">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Agile Methodologies", 
                    "Wireframing & Prototyping", 
                    "A/B Testing & KPI Tracking", 
                    "Customer Segmentation", 
                    "UX & User Research", 
                    "Roadmapping",
                    "Feature Adoption",
                    "Monetization Strategy"
                  ].map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-6 border-b border-black pb-2">Tools</h3>
                <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="flex flex-col gap-2">
                    <span className="text-foreground font-medium">Strategy</span>
                    <span>Notion</span>
                    <span>Miro</span>
                    <span>Jira</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-foreground font-medium">Design</span>
                    <span>Figma</span>
                    <span>Whimsical</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-foreground font-medium">Analytics</span>
                    <span>Mixpanel</span>
                    <span>Amplitude</span>
                    <span>GA4</span>
                    <span>Firebase</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Let's work together.
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Currently available for freelance projects and full-time opportunities.
            </p>
            
            <a 
              href="mailto:bhavyasrivastava184@gmail.com" 
              className="inline-block text-2xl md:text-4xl border-b-2 border-white/30 hover:border-white hover:text-white pb-1 mb-16 transition-all"
            >
              bhavyasrivastava184@gmail.com
            </a>

            <div className="flex justify-center gap-8">
              <a href="https://www.linkedin.com/in/bhavya-srivastava-67b105230" target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://medium.com/@chibiPM" target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-full">
                <span className="font-serif font-bold text-lg leading-none">M</span>
              </a>
              <a href="mailto:bhavyasrivastava184@gmail.com" className="p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-full">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="mt-24 text-sm text-gray-500">
              © 2024 Bhavya Srivastava. Made with Replit.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
