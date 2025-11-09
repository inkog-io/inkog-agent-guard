import { CheckCircle2 } from "lucide-react";

const SupportAgentDemo = () => {
  const codeExample = `# Before Inkog: This agent leaked 10,000 customer records

class SupportAgent:
    def handle_ticket(self, customer_message):
        # ❌ PROMPT INJECTION - User controls system prompt
        prompt = f"Help customer: {customer_message}"
        
        # ❌ HARDCODED KEY - Exposed in logs, Git history
        api_key = "sk-proj-abc123..."
        
        # ❌ INFINITE LOOP - $12K OpenAI bill in 3 hours
        while not resolved:
            response = llm.complete(prompt)  # No max_attempts!

# After Inkog: All issues caught in 3.38ms before deployment`;

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">
            Real-World Example: Support Agent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This agent cost one company 10,000 leaked records and $12K in 3 hours
          </p>
        </div>

        <div className="border border-border rounded-lg p-6">
          <div className="bg-card border border-border rounded p-4 mb-6">
            <code className="font-mono text-xs text-foreground whitespace-pre leading-relaxed">
              {codeExample}
            </code>
          </div>

          <div className="border border-primary/20 bg-primary/5 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Detected in 3.38ms</h3>
                <p className="text-sm text-muted-foreground">
                  All three vulnerabilities caught before deployment. Zero false positives. 
                  <br />
                  <span className="font-medium text-foreground">Actual impact prevented:</span> 10,000 customer records protected • $12K API costs avoided • Zero breach response cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAgentDemo;
