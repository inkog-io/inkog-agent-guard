const patterns = [
  // Row 1 - Critical Security
  {
    name: "Prompt Injection",
    impact: "CVE-2023-44467",
    description: "Malicious input overrides agent instructions"
  },
  {
    name: "Hardcoded Credentials",
    impact: "Training data leaks",
    description: "API keys exposed in prompts and logs"
  },
  {
    name: "SQL Injection via LLM",
    impact: "Database compromise",
    description: "Unvalidated LLM output in SQL queries"
  },
  // Row 2 - Cost Control
  {
    name: "Infinite Loops",
    impact: "$50K/month bills",
    description: "Agents running without termination"
  },
  {
    name: "Token Bombing",
    impact: "$7.68 per attack",
    description: "Malicious input causing token explosion"
  },
  {
    name: "RAG Over-fetching",
    impact: "9x cost increase",
    description: "Retrieving excessive context unnecessarily"
  },
  // Row 3 - Production Stability
  {
    name: "Recursive Tool Calling",
    impact: "20x API costs",
    description: "Tools calling themselves infinitely"
  },
  {
    name: "Unvalidated exec/eval",
    impact: "Remote code execution",
    description: "LLM-generated code executed without validation"
  },
  {
    name: "Context Window Accumulation",
    impact: "6x token usage",
    description: "History growing without limits"
  },
  // Row 4 - Data Protection
  {
    name: "Unsafe Environment Access",
    impact: ".env exposure",
    description: "Secrets logged or passed to LLMs"
  },
  {
    name: "Logging Sensitive Data",
    impact: "GDPR violations",
    description: "User data persisted in logs"
  },
  {
    name: "Cross-tenant Data Leakage",
    impact: "Multi-tenant breach",
    description: "Agent accessing wrong user's data"
  },
  // Row 5 - Compliance
  {
    name: "Missing Rate Limits",
    impact: "DoS vulnerability",
    description: "No throttling on agent calls"
  },
  {
    name: "Missing Human Oversight",
    impact: "EU AI Act violation",
    description: "High-risk actions without approval"
  },
  {
    name: "Output Validation Failures",
    impact: "XSS injection",
    description: "Unescaped LLM output rendered in UI"
  },
];

const WhatWeCatch = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          15+ Security & Quality Patterns for Production AI Agents
        </h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
          {patterns.map((pattern, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg p-5 space-y-2 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-base font-semibold">{pattern.name}</h3>
              <p className="text-sm text-destructive font-medium">{pattern.impact}</p>
              <p className="text-sm text-muted-foreground">{pattern.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCatch;
