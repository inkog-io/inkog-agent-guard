const patterns = [
  {
    name: "Prompt Injection",
    impact: "RCE via CVE-2023-44467",
    example: 'prompt = f"Help: {user_input}"',
  },
  {
    name: "Infinite Loops",
    impact: "Reduce massive Cloud bill",
    example: "while not resolved:\n    llm.complete()",
  },
  {
    name: "Hardcoded Keys",
    impact: "Leaked to GPT training data",
    example: 'key = "sk-proj-abc123..."',
  },
  {
    name: "Token Bombing",
    impact: "Cost per attack",
    example: 'tokens = user_input * 10000',
  },
  {
    name: "Unsafe Environment",
    impact: "Exposed .env in logs",
    example: 'print(f"API_KEY={os.getenv()}")',
  },
  {
    name: "Recursive Tools",
    impact: "20x API cost explosion",
    example: 'def tool():\n    agent.run(tool())',
  },
];

const WhatWeCatch = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {patterns.map((pattern, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg p-6 space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{pattern.name}</h3>
                <p className="text-sm text-destructive font-medium">{pattern.impact}</p>
              </div>
              <div className="bg-muted/30 rounded p-3">
                <code className="font-mono text-xs text-muted-foreground whitespace-pre-wrap break-all">
                  {pattern.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCatch;
