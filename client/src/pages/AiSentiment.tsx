import CaseStudyLayout from "@/components/CaseStudyLayout";

const images = {
  pipeline: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/Semantic-Visuals/persona%20and%20pipeline.png",
  solutionFlow: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/Semantic-Visuals/solution%20flow.png",
  sentimentChart: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/Semantic-Visuals/sentiment%20chart.png",
  trends: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/Semantic-Visuals/trends.png",
  heart: "https://raw.githubusercontent.com/Srivastavabee/Portfolio-Assets/main/Semantic-Visuals/HEART.png",
  cover: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"
};

export default function AiSentimentAnalysis() {
  return (
    <CaseStudyLayout
      title="AI Based Sentiment Analysis Feature"
      category="Product Strategy"
      role="Assistant Product Manager"
      timeline="8 Weeks"
      heroImage={images.cover}
    >
      <h3>Overview</h3>
      <p>
        <strong>Goal:</strong> Turn unstructured reviews into real-time sentiment and topic insights for faster product decisions.<br/>
        PMs and CX teams were reading thousands of reviews manually. This feature analyzes them in seconds.
      </p>

      <h3>Problem Statement</h3>
      <blockquote>
        “How might we help product teams understand user sentiment and pain points at scale without manual effort?”
      </blockquote>
      <p><strong>Pain Points:</strong></p>
      <ul>
        <li>180 min manual analysis per 1,000 reviews</li>
        <li>No quantitative tracking for user mood</li>
        <li>Slow detection of critical issues after releases</li>
      </ul>

      <figure className="my-12">
        <img src={images.pipeline} alt="Persona and Data Pipeline" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Persona & Data Pipeline</figcaption>
      </figure>

      <h3>Hypothesis</h3>
      <p>
        If we automate sentiment classification and topic clustering using NLP, teams can detect emerging issues and fix them 40% faster.
      </p>

      <h3>Solution Overview</h3>
      <figure className="my-12">
        <img src={images.solutionFlow} alt="Solution Architecture" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">End-to-End Solution Architecture</figcaption>
      </figure>

      <p>
        A full AI pipeline that collects reviews, cleans text, classifies sentiment (Positive / Neutral / Negative) via DistilBERT, groups topics via BERTopic, and displays results on an interactive dashboard.
      </p>
      <div className="p-6 bg-secondary/30 font-mono text-sm border border-border my-6">
        Raw Reviews → Cleaning → Tokenization → DistilBERT Sentiment → BERTopic Themes → PostgreSQL Aggregation → React Dashboard
      </div>

      <figure className="my-12">
        <img src={images.sentimentChart} alt="Sentiment Dashboard UI" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Sentiment Analysis Dashboard</figcaption>
      </figure>

      <h3>Success Metrics</h3>
      <div className="overflow-x-auto my-8 not-prose">
        <table className="w-full text-left border-collapse border border-border">
          <thead>
            <tr className="bg-secondary/50">
              <th className="p-3 border border-border font-bold text-sm">Category</th>
              <th className="p-3 border border-border font-bold text-sm">Metric</th>
              <th className="p-3 border border-border font-bold text-sm">Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-border text-sm">Model Accuracy</td>
              <td className="p-3 border border-border text-sm">Sentiment F1</td>
              <td className="p-3 border border-border text-sm">≥ 0.90</td>
            </tr>
            <tr>
              <td className="p-3 border border-border text-sm">Efficiency</td>
              <td className="p-3 border border-border text-sm">Processing time</td>
              <td className="p-3 border border-border text-sm">≤ 3s/review</td>
            </tr>
            <tr>
              <td className="p-3 border border-border text-sm">Business Impact</td>
              <td className="p-3 border border-border text-sm">Manual effort reduction</td>
              <td className="p-3 border border-border text-sm">≥ 80%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className="my-12">
        <img src={images.trends} alt="Sentiment Trends" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">Sentiment Trends Analysis</figcaption>
      </figure>

      <h3>Key Results & Impact</h3>
      <div className="grid grid-cols-2 gap-6 my-8 not-prose">
        <div className="p-6 bg-secondary/50 border border-border">
          <div className="text-3xl font-bold text-black mb-1">92%</div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Accuracy</p>
          <p className="text-xs text-muted-foreground mt-2">Up from 74% (+18pp)</p>
        </div>
        <div className="p-6 bg-secondary/50 border border-border">
          <div className="text-3xl font-bold text-black mb-1">7 min</div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Analysis Time</p>
          <p className="text-xs text-muted-foreground mt-2">Down from 180 min (-96%)</p>
        </div>
        <div className="p-6 bg-secondary/50 border border-border">
          <div className="text-3xl font-bold text-black mb-1">&lt; 1 Day</div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Issue Response</p>
          <p className="text-xs text-muted-foreground mt-2">Down from 3 days (-67%)</p>
        </div>
        <div className="p-6 bg-secondary/50 border border-border">
          <div className="text-3xl font-bold text-black mb-1">-40%</div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Refund Tickets</p>
          <p className="text-xs text-muted-foreground mt-2">Significant ROI win</p>
        </div>
      </div>

      <figure className="my-12">
        <img src={images.heart} alt="HEART Metrics" className="w-full" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">HEART Metrics Evaluation</figcaption>
      </figure>

      <h3>Key Learnings</h3>
      <ul>
        <li>Accuracy is meaningless without trust in AI.</li>
        <li>Visual storytelling drives adoption.</li>
        <li>Balancing precision (0.91) and recall (0.93) prevents false optimism.</li>
      </ul>
    </CaseStudyLayout>
  );
}
