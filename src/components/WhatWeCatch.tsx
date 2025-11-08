const patterns = [
  {
    name: "Prompt Injection",
    cve: "CVE-2023-44467",
    description: "Remote code execution via untrusted input in prompts",
  },
  {
    name: "Infinite Loops",
    incident: "$50K/month bills",
    description: "Unbounded retry logic without exit conditions",
  },
  {
    name: "API Keys in Code",
    incident: "Training data leaks",
    description: "Hardcoded credentials exposed in agent code",
  },
];

const WhatWeCatch = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-16">
          <span className="text-primary">Inkog</span> Supports more than 70+ patterns, including:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {patterns.map((pattern, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg p-6 space-y-3"
            >
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-medium">{pattern.name}</h3>
                <span className="text-xs text-muted-foreground">→</span>
                <span className="text-xs font-mono text-destructive">
                  {pattern.cve || pattern.incident}
                </span>
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
