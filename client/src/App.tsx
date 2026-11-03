import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import SaasDashboardRedesign from "@/pages/SaasDashboard";
import AiSentimentAnalysis from "@/pages/AiSentiment";
import MobileGameGamification from "@/pages/MobileGame";
import LessonPlanner from "@/pages/LessonPlanner";
import SpellboundClassroom from "@/pages/SpellboundClassroom";
import DailyDissection from "@/pages/DailyDissection";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects/saas-dashboard" component={SaasDashboardRedesign} />
      <Route path="/projects/ai-sentiment" component={AiSentimentAnalysis} />
      <Route path="/projects/mobile-game" component={MobileGameGamification} />
      <Route path="/projects/lesson-planner" component={LessonPlanner} />
      <Route path="/projects/spellbound-classroom" component={SpellboundClassroom} />
      <Route path="/projects/daily-dissection" component={DailyDissection} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
