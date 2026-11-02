import CaseStudyLayout from "@/components/CaseStudyLayout";

const images = {
  cover: "https://images.unsplash.com/10/wii.jpg?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000",
  // Using the Notion S3 signed URLs - note: these might expire eventually, but they are the best source available without user re-upload
  screen1: "https://luxuriant-deal-51a.notion.site/image/attachment%3A394d8370-f67f-41f0-a801-3869416629d4%3AScreenshot_2025-10-13_at_1.31.24_PM.png?table=block&id=28bb0c61-f242-80fb-a690-e8f5e2ba31e7&spaceId=85f0a2e3-b067-4830-a6b8-3f3518799c7e&width=1360&userId=&cache=v2",
  screen2: "https://luxuriant-deal-51a.notion.site/image/attachment%3A7cffc0a3-92e8-41b2-bcb4-76a661c1a8e3%3AScreenshot_2025-10-13_at_1.31.33_PM.png?table=block&id=28bb0c61-f242-8089-8afa-f2f130135f46&spaceId=85f0a2e3-b067-4830-a6b8-3f3518799c7e&width=1360&userId=&cache=v2",
  screen3: "https://luxuriant-deal-51a.notion.site/image/attachment%3A0c1c8f65-a10b-4e8e-89c6-ab3c6f61ceed%3AScreenshot_2025-10-13_at_1.31.41_PM.png?table=block&id=28bb0c61-f242-80ca-9c9c-daa6ad98147e&spaceId=85f0a2e3-b067-4830-a6b8-3f3518799c7e&width=1360&userId=&cache=v2",
  screen4: "https://luxuriant-deal-51a.notion.site/image/attachment%3A526e1529-c897-428a-adb3-4325b6c09abb%3AScreenshot_2025-10-13_at_2.30.23_AM.png?table=block&id=28ab0c61-f242-80f2-8356-f18fd266fdd8&spaceId=85f0a2e3-b067-4830-a6b8-3f3518799c7e&width=1420&userId=&cache=v2",
  screen5: "https://luxuriant-deal-51a.notion.site/image/attachment%3Acd159ed7-00dd-41ad-b64f-8d5c33e8546b%3AScreenshot_2025-10-13_at_2.30.31_AM.png?table=block&id=28ab0c61-f242-8008-b077-ffb44564f8ec&spaceId=85f0a2e3-b067-4830-a6b8-3f3518799c7e&width=1420&userId=&cache=v2",
  screen6: "https://luxuriant-deal-51a.notion.site/image/attachment%3Abe679364-50e8-43af-8a1a-91378def5225%3AScreenshot_2025-10-13_at_2.24.46_AM.png?table=block&id=28ab0c61-f242-8046-98c5-f3b768a623b8&spaceId=85f0a2e3-b067-4830-a6b8-3f3518799c7e&width=1420&userId=&cache=v2"
};

export default function MobileGameGamification() {
  return (
    <CaseStudyLayout
      title="Mobile Game Gamification"
      category="Mobile Growth"
      role="Freelance Assistant PM"
      timeline="6 Weeks"
      heroImage={images.cover}
    >
      <h3>Project Overview</h3>
      <p>
        A casual free-to-play mobile game showed flat D1 and falling D7 retention. Early churn stemmed from low player motivation after the tutorial and the absence of short-term progression cues.
      </p>
      <p>
        My objective was to design and validate a lightweight gamification system — combining daily quests, streak bonuses, and a weekly reward track — to create momentum and bring players back daily.
      </p>

      <h3>Problem Statement</h3>
      <p>
        Players dropped off after day 3–5 because the core loop lacked explicit goals. Existing rewards were small, unpredictable, and disconnected from meaningful milestones.
      </p>
      <blockquote>
        “When I open the game, I want a clear goal so I feel progress and return tomorrow.” — User Interview Insight
      </blockquote>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        <img src={images.screen1} alt="Game UI Analysis" className="w-full" />
        <img src={images.screen2} alt="Game UI Analysis" className="w-full" />
      </div>

      <h3>Discovery & Research</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
        <div>
          <h5 className="font-bold mb-2">Player Research</h5>
          <p className="text-sm text-muted-foreground mb-4">Conducted 20 user interviews and analyzed ~300 store reviews.</p>
          <ul className="text-sm list-disc pl-4 space-y-1 text-muted-foreground">
            <li>“I finish the tutorial and then… what?”</li>
            <li>“Rewards feel random.”</li>
            <li>“I forget the game exists after a few days.”</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Baseline Metrics</h5>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li className="flex justify-between border-b border-border pb-1"><span>D1 Retention</span> <span>34%</span></li>
            <li className="flex justify-between border-b border-border pb-1"><span>D7 Retention</span> <span>9%</span></li>
            <li className="flex justify-between border-b border-border pb-1"><span>Sessions / Day</span> <span>1.2</span></li>
          </ul>
        </div>
      </div>

      <h3>Solution Concept: “Quest + Streak + Weekly Track”</h3>
      <ul>
        <li><strong>Daily Quests:</strong> 3 micro-missions/day (e.g., Win 1 match, Play 10 min). Swap Option adds agency.</li>
        <li><strong>Streak Multiplier:</strong> 7-day arc. Day 1 ×1 → Day 7 ×2.5. Miss a day → drops one tier instead of resetting.</li>
        <li><strong>Weekly Track (Lite Pass):</strong> 7 nodes; free path only in MVP. Visual progress bar and “Claim All” UX.</li>
        <li><strong>Smart Nudge System:</strong> In-app banner: “2 missions left to complete your streak!”</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
        <img src={images.screen4} alt="Quest UI" className="w-full" />
        <img src={images.screen5} alt="Streak UI" className="w-full" />
        <img src={images.screen3} alt="Reward Track UI" className="w-full" />
      </div>

      <h3>Test Results (Simulated / Playtest)</h3>
      <figure className="my-12">
        <img src={images.screen6} alt="Analytics Dashboard" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Retention Analytics Dashboard</figcaption>
      </figure>

      <div className="overflow-x-auto my-8 not-prose">
        <table className="w-full text-left border-collapse border border-border">
          <thead>
            <tr className="bg-secondary/50">
              <th className="p-3 border border-border font-bold text-sm">Metric</th>
              <th className="p-3 border border-border font-bold text-sm">Before</th>
              <th className="p-3 border border-border font-bold text-sm">After</th>
              <th className="p-3 border border-border font-bold text-sm">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-border text-sm font-medium">D1 Retention</td>
              <td className="p-3 border border-border text-sm">34%</td>
              <td className="p-3 border border-border text-sm">37%</td>
              <td className="p-3 border border-border text-sm text-green-600">+3 pp</td>
            </tr>
            <tr>
              <td className="p-3 border border-border text-sm font-medium">D7 Retention</td>
              <td className="p-3 border border-border text-sm">9%</td>
              <td className="p-3 border border-border text-sm">14%</td>
              <td className="p-3 border border-border text-sm text-green-600">+5 pp</td>
            </tr>
            <tr>
              <td className="p-3 border border-border text-sm font-medium">Sessions / Day</td>
              <td className="p-3 border border-border text-sm">1.2</td>
              <td className="p-3 border border-border text-sm">1.45</td>
              <td className="p-3 border border-border text-sm text-green-600">+20%</td>
            </tr>
            <tr>
              <td className="p-3 border border-border text-sm font-medium">ARPDAU</td>
              <td className="p-3 border border-border text-sm">1.00×</td>
              <td className="p-3 border border-border text-sm">1.06×</td>
              <td className="p-3 border border-border text-sm text-green-600">+6%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Impact Summary</h3>
      <ul>
        <li>✅ Increased retention through layered motivators.</li>
        <li>✅ Improved daily activity without breaking balance.</li>
        <li>✅ Clear data structure for LiveOps expansion.</li>
      </ul>
    </CaseStudyLayout>
  );
}
