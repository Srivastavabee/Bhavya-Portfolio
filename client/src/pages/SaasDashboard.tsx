import CaseStudyLayout from "@/components/CaseStudyLayout";

const images = {
  dashboard1: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/SaaS-Redesign-App-Visuals/dashboard%201.png",
  dashboard2: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/SaaS-Redesign-App-Visuals/analytics%20dashboard%202.png",
  infoArch: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/SaaS-Redesign-App-Visuals/info%20arch.png",
  lofi: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/SaaS-Redesign-App-Visuals/lofi%20wireframe.png",
  heart: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/SaaS-Redesign-App-Visuals/HEART%20infographics.png",
  dataFlow: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/SaaS-Redesign-App-Visuals/data%20flow%20diagram.png"
};

export default function SaasDashboardRedesign() {
  return (
    <CaseStudyLayout
      title="SaaS Dashboard Redesign"
      category="UX / UI Design"
      role="Freelance Product Manager"
      timeline="6 Weeks"
      heroImage={images.dashboard1}
    >
      <h3>Project Overview</h3>
      <p>
        The project aimed to improve usability and feature adoption for a SaaS analytics platform used by small to mid-sized businesses. 
        The existing dashboard presented valuable data but suffered from low user engagement and confusion regarding navigation.
      </p>
      <p>
        My objective was to identify usability bottlenecks, validate design hypotheses through user feedback, and deliver a new dashboard experience that drove adoption and reduced decision fatigue.
      </p>

      <h3>Problem Statement</h3>
      <p>
        Users reported difficulty in locating the most relevant KPIs, leading to:
      </p>
      <ul>
        <li>Low engagement with advanced analytics features.</li>
        <li>High drop-off after onboarding.</li>
        <li>Increased customer support queries regarding “where to find” metrics.</li>
      </ul>
      <p>
        The challenge was to simplify the dashboard’s information hierarchy and create a more intuitive navigation flow without compromising analytical depth.
      </p>

      <h3>Discovery & Research</h3>
      <figure className="my-12">
        <img src={images.dataFlow} alt="Data Flow Diagram" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Data Flow Analysis</figcaption>
      </figure>

      <h4>User Research</h4>
      <p>Conducted 15 semi-structured interviews with product managers and data analysts using the platform. Identified 3 recurring pain points:</p>
      <ul>
        <li>Overwhelming data density.</li>
        <li>Lack of personalization (everyone saw the same layout).</li>
        <li>Poor visibility of actionable insights.</li>
      </ul>

      <h4>Quantitative Analysis</h4>
      <p>Studied feature usage data from Mixpanel dashboards. Observed that only 42% of users interacted with advanced filters and segmentation tools. 68% of total dashboard visits were under 3 minutes, signaling quick exits.</p>

      <h3>Insights & Opportunities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
        <div className="p-6 bg-secondary/50 border border-border">
          <h5 className="font-bold mb-2">Overwhelmed Users</h5>
          <p className="text-sm text-muted-foreground">Too much data at once → Simplify visual hierarchy</p>
        </div>
        <div className="p-6 bg-secondary/50 border border-border">
          <h5 className="font-bold mb-2">Lack of Personalization</h5>
          <p className="text-sm text-muted-foreground">One view fits all → Add customizable layouts</p>
        </div>
        <div className="p-6 bg-secondary/50 border border-border">
          <h5 className="font-bold mb-2">Hidden Actions</h5>
          <p className="text-sm text-muted-foreground">Key filters buried → Improve affordance</p>
        </div>
      </div>

      <h3>Solution Strategy</h3>
      <figure className="my-12">
        <img src={images.infoArch} alt="Information Architecture" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Revised Information Architecture</figcaption>
      </figure>

      <p>The goal was to create a modular dashboard design that adapts to user needs while highlighting actionable metrics.</p>
      <ul>
        <li><strong>Progressive Disclosure:</strong> Show critical KPIs first; let users expand for deeper insights.</li>
        <li><strong>Customizable Layouts:</strong> Allow users to pin favorite widgets.</li>
        <li><strong>Visual Hierarchy:</strong> Use whitespace and card-based grouping for quick scanning.</li>
        <li><strong>Actionable Insights Section:</strong> A dynamic panel summarizing anomalies and trends.</li>
      </ul>

      <figure className="my-12">
        <img src={images.lofi} alt="Low Fidelity Wireframes" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Low Fidelity Wireframes</figcaption>
      </figure>

      <h3>Validation & Metrics</h3>
      <figure className="my-12">
        <img src={images.heart} alt="HEART Framework Metrics" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">HEART Framework Results</figcaption>
      </figure>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
        <div className="p-4 border border-black/10 text-center">
          <div className="text-2xl font-bold text-black">+26%</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Task Success</div>
        </div>
        <div className="p-4 border border-black/10 text-center">
          <div className="text-2xl font-bold text-black">-42%</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Time to Find Metric</div>
        </div>
        <div className="p-4 border border-black/10 text-center">
          <div className="text-2xl font-bold text-black">+38%</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">CSAT Score</div>
        </div>
        <div className="p-4 border border-black/10 text-center">
          <div className="text-2xl font-bold text-black">+18%</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Feature Adoption</div>
        </div>
      </div>

      <h3>Outcome Summary</h3>
      <p>
        The redesigned dashboard prototype improved key usability metrics and became the foundation for the platform’s next release roadmap. 
        The case demonstrates my ability to blend data analysis, UX strategy, and business alignment into a cohesive product improvement cycle.
      </p>
    </CaseStudyLayout>
  );
}
