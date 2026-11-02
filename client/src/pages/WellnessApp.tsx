import CaseStudyLayout from "@/components/CaseStudyLayout";
import wellnessImage from "@assets/generated_images/wellness_app_pomodoro_abstract.png";

export default function WellnessApp() {
  return (
    <CaseStudyLayout
      title="Wellness App & Pomodoro"
      category="Ongoing Project"
      role="Product Manager"
      timeline="Ongoing"
      heroImage={wellnessImage}
    >
      <h3>Project Overview</h3>
      <p>
        I am currently developing a holistic wellness application that combines mood tracking with productivity tools. 
        This "Mood-based Pomodoro Timer" aims to help users balance productivity with mental well-being by suggesting work/break intervals based on their current emotional state.
      </p>

      <h3>Core Concept</h3>
      <p>
        Standard productivity timers force a rigid structure (e.g., 25/5 minutes). However, a user's ability to focus fluctuates with their mood and energy levels.
        This app adapts the technique:
      </p>
      <ul>
        <li><strong>High Energy/Positive Mood:</strong> Suggests longer deep-work sessions (45-50 mins).</li>
        <li><strong>Low Energy/Stressed:</strong> Suggests shorter sprints (15-20 mins) with mindfulness breaks.</li>
      </ul>

      <h3>Planned Features</h3>
      <ul>
        <li>Daily Mood Check-in with simple emoji interface.</li>
        <li>Customizable Timer that auto-adjusts based on check-in.</li>
        <li>Wellness analytics tracking correlation between mood and productivity.</li>
        <li>Integrated mindfulness exercises for break periods.</li>
      </ul>

      <p className="italic text-muted-foreground mt-8">
        This project is currently in the active development and testing phase. Full case study coming soon.
      </p>
    </CaseStudyLayout>
  );
}
