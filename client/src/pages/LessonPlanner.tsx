import CaseStudyLayout from "@/components/CaseStudyLayout";
import screenshotLanding from "@assets/Screenshot_2026-06-19_at_8.30.37_PM_1781881510116.png";
import screenshotLogin from "@assets/Screenshot_2026-06-19_at_8.30.45_PM_1781881510116.png";
import screenshotDashboard from "@assets/WELCOMEBACK_1781881986703.png";
import screenshotGenerating from "@assets/Screenshot_2026-06-19_at_8.31.43_PM_1781881510118.png";
import screenshotOutput from "@assets/Screenshot_2026-06-19_at_8.32.11_PM_1781881510118.png";

function FlowStep({ label, last = false }: { label: string; last?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="px-6 py-3 border-2 border-black bg-white text-sm font-medium text-center min-w-[180px]">
        {label}
      </div>
      {!last && (
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-black" />
          <div
            className="w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "8px solid black",
            }}
          />
        </div>
      )}
    </div>
  );
}

function CurrentWorkflowDiagram() {
  const steps = [
    "Create Lesson",
    "Open Claude / ChatGPT",
    "Generate Content",
    "Copy to Word",
    "Format Template",
    "Create Worksheet",
    "Create Assessment",
    "Submit to Principal",
  ];
  return (
    <div className="not-prose my-10">
      <div className="border border-border bg-secondary/20 p-8">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 text-center">
          Current Teacher Workflow
        </p>
        <div className="flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <FlowStep key={step} label={step} last={i === steps.length - 1} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Multiple AI prompts per lesson",
            "Repetitive manual formatting",
            "Manual documentation each time",
            "No centralised lesson repository",
            "No structured review workflow",
          ].map((pt) => (
            <div
              key={pt}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 w-2 h-2 rounded-full bg-black/60 shrink-0 inline-block" />
              {pt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeforeAfterDiagram() {
  return (
    <div className="not-prose my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Before */}
      <div className="border border-border p-6 bg-secondary/20">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 text-center">
          Before
        </p>
        <div className="flex flex-col items-center gap-0">
          {["Teacher", "Claude / ChatGPT", "Word Document", "Email", "Principal"].map(
            (step, i, arr) => (
              <FlowStep key={step} label={step} last={i === arr.length - 1} />
            )
          )}
        </div>
        <p className="text-xs text-center text-muted-foreground mt-4">
          5 disconnected tools — no visibility, no structure
        </p>
      </div>

      {/* After */}
      <div className="border-2 border-black p-6 bg-white">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 text-center">
          After
        </p>
        <div className="flex flex-col items-center gap-0">
          {["Teacher", "Academic Planner AI", "Principal Dashboard"].map(
            (step, i, arr) => (
              <FlowStep key={step} label={step} last={i === arr.length - 1} />
            )
          )}
        </div>
        <p className="text-xs text-center text-muted-foreground mt-4">
          1 unified platform — structured, traceable, fast
        </p>
      </div>
    </div>
  );
}

function TeacherWorkflowDiagram() {
  const steps = ["Login", "Create Lesson", "Generate", "Save / Draft", "Submit for Review"];
  return (
    <div className="not-prose my-10">
      <div className="border-2 border-black p-8">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 text-center">
          New Teacher Workflow
        </p>
        <div className="flex flex-wrap justify-center gap-0 items-center">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="px-5 py-3 border border-black bg-white text-sm font-medium whitespace-nowrap">
                {step}
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center">
                  <div className="w-6 h-px bg-black" />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "7px solid black",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-muted-foreground mt-5">
          End-to-end in a single platform — no context switching
        </p>
      </div>
    </div>
  );
}

function PrincipalWorkflowDiagram() {
  const steps = ["Review Queue", "Add Comments", "Request Revisions / Approve", "Archive"];
  return (
    <div className="not-prose my-10">
      <div className="border border-border bg-secondary/20 p-8">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 text-center">
          Principal Workflow
        </p>
        <div className="flex flex-wrap justify-center gap-0 items-center">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="px-5 py-3 border border-black bg-white text-sm font-medium whitespace-nowrap text-center">
                {step}
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center">
                  <div className="w-6 h-px bg-black" />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "7px solid black",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const layers = [
    { label: "Teacher Dashboard", sub: "Create · Generate · Save · Submit" },
    { label: "AI Lesson Generator", sub: "Bloom's Mapping · SDG · Templates" },
    { label: "Supabase Database", sub: "Lessons · Drafts · Users · Approvals" },
    { label: "Principal Dashboard", sub: "Review Queue · Approve · Archive" },
  ];
  return (
    <div className="not-prose my-10">
      <div className="border border-border p-8">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 text-center">
          Product Architecture
        </p>
        <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
          {layers.map((layer, i) => (
            <div key={layer.label} className="flex flex-col items-center w-full">
              <div
                className={`w-full px-6 py-4 border-2 text-center ${
                  i === 0 || i === 3
                    ? "border-black bg-white"
                    : "border-black bg-black text-white"
                }`}
              >
                <p className="font-bold text-sm">{layer.label}</p>
                <p
                  className={`text-xs mt-1 ${
                    i === 0 || i === 3 ? "text-muted-foreground" : "text-white/70"
                  }`}
                >
                  {layer.sub}
                </p>
              </div>
              {i < layers.length - 1 && (
                <div className="flex flex-col items-center">
                  <div className="w-px h-4 bg-black" />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "8px solid black",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LessonPlanner() {
  return (
    <CaseStudyLayout
      title="Academic Planner AI"
      category="EdTech"
      role="Product Manager"
      timeline="4 Weeks · MVP Design"
      heroImage={screenshotLanding}
    >
      {/* Project Snapshot */}
      <h3>Project Snapshot</h3>
      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {[
              ["Role", "Product Manager"],
              ["Industry", "EdTech"],
              ["Users", "Teachers, Principals"],
              ["Duration", "4 Weeks"],
              ["Stage", "MVP Design"],
              ["Goal", "Reduce lesson planning time by 80%"],
            ].map(([cat, detail]) => (
              <tr key={cat} className="border-b border-border">
                <td className="py-3 pr-6 font-mono text-xs uppercase tracking-widest text-muted-foreground w-32">
                  {cat}
                </td>
                <td className="py-3 font-medium">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The Problem */}
      <h3>The Problem</h3>
      <p>
        Teachers across schools are spending 30–120 minutes planning a single
        lesson. Most of them already use AI tools like ChatGPT or Gemini — yet
        their workflow remains entirely manual: generate content in one tab,
        copy to Word, format a template, create worksheets and assessments, then
        email everything to a principal for review. Every lesson repeats this
        cycle from scratch.
      </p>

      <CurrentWorkflowDiagram />

      {/* User Research */}
      <h3>User Research</h3>
      <p>
        I conducted surveys and interviews with 4 teachers to understand their
        planning habits and frustrations. The findings were clear — teachers
        already had access to AI, but lacked a structured workflow around it.
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="text-left py-3 pr-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Insight
              </th>
              <th className="text-left py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Observation
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AI Adoption", "100% already use ChatGPT or Gemini"],
              ["Planning Time", "30–120 minutes per lesson"],
              ["Assessment Time", "1–5 hours per week"],
              ["Main Need", "Faster documentation & formatting"],
              ["Willingness to Try", "75% said Yes to a dedicated platform"],
            ].map(([insight, obs]) => (
              <tr key={insight} className="border-b border-border">
                <td className="py-3 pr-6 font-medium">{insight}</td>
                <td className="py-3 text-muted-foreground">{obs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Root Cause */}
      <h3>Root Cause Analysis</h3>
      <p>
        The research revealed a critical distinction: the problem was never
        about generating ideas or content — teachers could do that with AI
        already. The problem was everything that came after.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border p-6 bg-secondary/20">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            Existing Situation
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-black rounded-full shrink-0" />
              <span>AI generates content ✓</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground line-through">
              <span className="w-2 h-2 bg-black/30 rounded-full shrink-0" />
              <span>AI manages the workflow ✗</span>
            </div>
          </div>
        </div>
        <div className="border-2 border-black p-6 bg-white">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            The Real Problem
          </p>
          <p className="text-sm font-medium leading-relaxed">
            Teachers have a <span className="underline">workflow problem</span>,
            not a content problem. The gap is structure, documentation, and
            approvals — not idea generation.
          </p>
        </div>
      </div>

      {/* Opportunity */}
      <h3>The Opportunity</h3>
      <p>
        Every tool on the market is trying to become a better ChatGPT for
        teachers. The real opportunity is the layer above: an academic planning
        platform that wraps AI generation inside a structured, institution-ready
        workflow.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border p-6 bg-secondary/20">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            What Everyone Builds
          </p>
          <p className="text-sm text-muted-foreground line-through">
            Another ChatGPT for teachers
          </p>
        </div>
        <div className="border-2 border-black p-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            What We Build
          </p>
          <p className="text-sm font-medium">
            Academic Planning &amp; Approval Platform
          </p>
        </div>
      </div>

      {/* Solution */}
      <h3>Solution</h3>
      <p>
        Academic Planner AI replaces the fragmented tool-hopping with a single
        platform. Teachers log in, create a lesson, generate structured content
        in one click, save it, and submit directly to their principal — all
        within the same interface.
      </p>

      <BeforeAfterDiagram />

      <figure className="not-prose my-10">
        <img
          src={screenshotLogin}
          alt="Academic Planner AI — Sign in screen"
          className="w-full border border-border"
        />
        <figcaption className="text-center text-xs font-mono text-muted-foreground mt-3 uppercase tracking-widest">
          Google Sign-In — authentication screen
        </figcaption>
      </figure>

      <TeacherWorkflowDiagram />
      <PrincipalWorkflowDiagram />

      {/* MVP Features */}
      <h3>MVP Features</h3>

      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-border p-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Teacher
          </p>
          <ul className="space-y-2">
            {[
              "Google Login",
              "Generate Lesson Plan (AI)",
              "Save Drafts",
              "Search Lessons",
              "Export as PDF",
              "Submit for Review",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="w-4 h-4 border border-black flex items-center justify-center shrink-0 text-xs">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-border p-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Principal
          </p>
          <ul className="space-y-2">
            {[
              "View Submitted Plans",
              "Approve Plans",
              "Request Revisions",
              "Add Comments",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="w-4 h-4 border border-black flex items-center justify-center shrink-0 text-xs">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="not-prose my-10">
        <img
          src={screenshotDashboard}
          alt="Academic Planner AI — Teacher dashboard"
          className="w-full border border-border"
        />
        <figcaption className="text-center text-xs font-mono text-muted-foreground mt-3 uppercase tracking-widest">
          Teacher Dashboard — draft, submitted, approved &amp; revision status at a glance
        </figcaption>
      </figure>

      {/* Lesson Planning Template */}
      <h3>Lesson Planning Template</h3>
      <p>
        The AI generates a complete, structured lesson document covering all
        the dimensions a school curriculum requires — not just objectives and
        activities, but Bloom's Taxonomy mapping, SDG alignment, Multiple
        Intelligence theory, and more.
      </p>

      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { icon: "📚", label: "Learning Outcomes" },
          { icon: "🧠", label: "Bloom's Taxonomy Mapping" },
          { icon: "🎯", label: "Lesson Objectives" },
          { icon: "⚠️", label: "Common Misconceptions" },
          { icon: "💡", label: "Icebreakers" },
          { icon: "📖", label: "Teaching Aids" },
          { icon: "✍️", label: "Exit Tickets" },
          { icon: "🤖", label: "AI Integration Points" },
          { icon: "🏠", label: "Homework" },
          { icon: "🌍", label: "SDG Mapping" },
          { icon: "🎭", label: "Multiple Intelligence Mapping" },
          { icon: "💼", label: "Career Connections" },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-border p-3 flex items-start gap-2"
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-xs font-medium leading-snug">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="not-prose my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <img
            src={screenshotGenerating}
            alt="Lesson plan generating with AI"
            className="w-full border border-border"
          />
          <figcaption className="text-center text-xs font-mono text-muted-foreground mt-3 uppercase tracking-widest">
            AI generation in progress — 20–40 seconds
          </figcaption>
        </figure>
        <figure>
          <img
            src={screenshotOutput}
            alt="Generated lesson plan output table"
            className="w-full border border-border"
          />
          <figcaption className="text-center text-xs font-mono text-muted-foreground mt-3 uppercase tracking-widest">
            Generated output — structured by period &amp; editable
          </figcaption>
        </figure>
      </div>

      {/* Prioritization */}
      <h3>Prioritization</h3>
      <p>
        With a 4-week MVP horizon, I applied strict scoping — focusing only on
        features that validate the core hypothesis: that a structured workflow
        saves teachers significant time.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-black p-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Must Have (MVP)
          </p>
          <ul className="space-y-2">
            {[
              "Authentication (Google Login)",
              "Lesson Generation (AI)",
              "Save Draft",
              "Approval Workflow",
              "PDF Export",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 bg-black rounded-full shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-border bg-secondary/20 p-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Excluded from MVP
          </p>
          <ul className="space-y-2">
            {[
              "Payment Gateway",
              "Parent Portal",
              "Mobile App",
              "Coordinator Role",
              "Multi-School Support",
              "Analytics Dashboard",
            ].map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-2 h-2 bg-black/30 rounded-full shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Architecture */}
      <h3>Product Architecture</h3>
      <p>
        The stack is deliberately lean for MVP — a React frontend, AI generation
        layer, Supabase for auth and database, and two distinct dashboard views
        separated by role.
      </p>

      <ArchitectureDiagram />

      {/* Success Metrics */}
      <h3>Success Metrics</h3>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { metric: "< 3 min", label: "Lesson plan generated" },
          { metric: "80%", label: "Reduction in planning effort" },
          { metric: "100%", label: "Standardised lesson format" },
          { metric: "1 place", label: "Reusable lesson repository" },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-border p-6 flex flex-col gap-1"
          >
            <span className="text-3xl font-display font-bold">{item.metric}</span>
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Key Learning */}
      <h3>Key Learning</h3>
      <div className="not-prose my-8 border-l-4 border-black pl-6 py-2">
        <p className="text-lg font-medium leading-relaxed">
          "Teachers already have AI. They don't have workflow automation."
        </p>
      </div>
      <p>
        The biggest shift during discovery was reframing the problem. The
        initial hypothesis was about better AI prompts for lesson content. The
        research showed the real gap was the system around the content — the
        formatting, the approval loop, the institutional memory. The product
        evolved from an AI Lesson Planner into an Academic Planning &amp;
        Approval Platform as a result.
      </p>
    </CaseStudyLayout>
  );
}
