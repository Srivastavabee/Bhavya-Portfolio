import CaseStudyLayout from "@/components/CaseStudyLayout";
import homeShot from "@assets/journal-home.png";
import essayShot from "@assets/journal-essay.png";

export default function DailyDissection() {
  return (
    <CaseStudyLayout
      title="Daily Dissection"
      category="0 to 1 · Content Product"
      role="Product Manager & Founder"
      timeline="Nov 2026 · Live"
      heroImage={homeShot}
    >
      <h3>Overview</h3>
      <p>
        Daily Dissection is the writing product behind <strong>B's Journal</strong>: a personal publication on biology,
        literature and the human spirit, built around one rule, <em>one essay a day</em>. I treated my own writing
        practice as a product with a user, a problem, a roadmap and a release cadence, then shipped it end to end.
      </p>
      <p>
        <a href="https://essaysby-bhavya.vercel.app/" target="_blank" rel="noopener noreferrer">Visit the live site →</a>
      </p>

      <h3>The Problem</h3>
      <p>
        My ideas were scattered across drafts, a Medium account and my head. Nothing carried my voice, nothing
        invited a reader to stay, and without a visible rhythm there was no habit to build. Two users shared one need:
      </p>
      <ul>
        <li><strong>The writer (me):</strong> a low-friction place to publish daily, and a reason to keep showing up.</li>
        <li><strong>The reader:</strong> a calm, distraction-free place to read thoughtful essays, with enough delight to remember the site.</li>
      </ul>

      <h3>Goals and Success Criteria</h3>
      <ul>
        <li>Publishing a new essay should take minutes, not an afternoon of fiddling.</li>
        <li>The site should feel unmistakably like one person, not a template.</li>
        <li>It should read beautifully on a phone, where most people will meet it.</li>
        <li>It should cost nothing to run and load fast.</li>
      </ul>

      <h3>Research and Benchmarking</h3>
      <p>
        I studied a writer-led blog I admired and broke it down into features: a year archive, subject indexes with
        counts, a featured "current read" and a quiet, typographic layout. I kept what served the reader, rewrote the
        rest in my own language, and cut anything that was decoration without a job.
      </p>

      <h3>Key Product Decisions</h3>
      <ul>
        <li><strong>Reading first.</strong> A dark aubergine and gold palette, serif body text and no cards or shadows, so the words stay in front.</li>
        <li><strong>Navigation kept to four items:</strong> Home, Essays, About and a "Coffee?" page for contact. Removing a gallery section I had built was the right call, because it did not serve the core job.</li>
        <li><strong>Personality through motion, used sparingly.</strong> A slowly turning DNA strand, a rotating "Thinking about…" line, and a small animated header unique to each essay: a codon strip, a planet that cools into oceans, and a thread from cell to constellation.</li>
        <li><strong>Plain-language labels.</strong> "Latest dispatch" became "Current Read", and dates became "3 November 2026" instead of numerals, because clarity beat cleverness.</li>
        <li><strong>A durable series.</strong> The daily essays are grouped under the Daily Dissection banner, so the habit itself becomes the brand.</li>
      </ul>

      <img src={homeShot} alt="B's Journal home page" />
      <img src={essayShot} alt="An essay page with its animated planet header" />

      <h3>Iteration from Real Feedback</h3>
      <p>I shipped early and used my own reactions as the feedback loop. Three examples:</p>
      <ul>
        <li><strong>Animations that did not run on phones.</strong> The cause was my own "respect Reduce Motion" setting switching them off. I made the key interactions run regardless, so the experience matched what I had designed.</li>
        <li><strong>A cluttered top navigation.</strong> I simplified it to a single aligned row with a gold underline that slides between items.</li>
        <li><strong>An overcrowded contact page.</strong> I rebuilt it as an aligned list so each handle is easy to scan.</li>
      </ul>

      <h3>Shipping</h3>
      <p>
        The site is a static Astro build with each essay as a simple Markdown file. Changes flow from a Git repository to
        Vercel automatically, so publishing is a commit away. Free hosting, no database, and pages that load almost
        instantly. I also migrated my best existing writing from Medium and added a share image and tab icon so the
        site looks right when it is linked.
      </p>

      <h3>How I Worked</h3>
      <p>
        I acted as product owner and used AI as my engineering partner. My job was to define the problem, set the
        taste bar, review every iteration on screen and decide what shipped. That meant writing clear requirements,
        giving specific feedback and knowing when to cut. It is the same loop I use with engineers and designers.
      </p>

      <h3>What's Next</h3>
      <ul>
        <li>A Daily Dissection index page showing every entry by day number.</li>
        <li>A lightweight email subscription for readers who want each essay delivered.</li>
        <li>Analytics on which essays hold attention longest, to guide what I write next.</li>
        <li>Reading-time and a "related essay" suggestion at the end of each piece.</li>
      </ul>

      <h3>What I Learned</h3>
      <p>
        A product does not need a team to teach you product thinking. It needs a clear user, a sharp scope and the
        discipline to ship and listen. Making my own habit visible, measurable and kind to the reader taught me more
        about retention than any dashboard I have read.
      </p>
    </CaseStudyLayout>
  );
}
