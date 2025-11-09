const patterns = [
  {
    name: "Prompt Injection",
    example: 'prompt = f"Help: {user_input}"',
    description: "User input directly controls system prompts without validation",
  },
  {
    name: "Infinite Loops",
    example: "while not resolved:\n    llm.complete()",
    description: "Unbounded retry logic without exit conditions or max attempts",
  },
  {
    name: "API Keys in Code",
    example: 'key = "sk-proj-abc123..."',
    description: "Hardcoded credentials exposed in logs, Git history, and training data",
  },
];

const WhatWeCatch = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-16">
          <span className="text-primary">Inkog</span> Supports more than 15+ patterns, including:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {patterns.map((pattern, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-medium">{pattern.name}</h3>
              <div className="bg-muted/50 rounded p-3 border border-border">
                <code className="font-mono text-xs text-warning whitespace-pre-wrap break-all">
                  {pattern.example}
                </code>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pattern.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCatch;
