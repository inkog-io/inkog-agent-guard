import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

const SupportAgentDemo = () => {
  const vulnerabilities = [
    {
      type: "Prompt Injection",
      severity: "HIGH",
      code: 'prompt = f"Ticket: {customer_message}\\nResponse:"',
      issue: "User input directly in prompt enables data exfiltration",
    },
    {
      type: "Hardcoded Credentials",
      severity: "CRITICAL",
      code: 'ZENDESK_TOKEN = "sk-proj-abc123..."',
      issue: "Exposed API key grants full account access",
    },
    {
      type: "Infinite Loop",
      severity: "HIGH",
      code: "while True:\\n    try:\\n        handle_ticket()\\n    except:\\n        continue",
      issue: "Unbounded retry logic without max attempts",
    },
  ];

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">
            Real-World Example: Support Agent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A typical customer support agent before <span className="text-primary">Inkog</span> deployment
          </p>
        </div>

        <div className="space-y-6">
          {vulnerabilities.map((vuln, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg p-6 space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{vuln.type}</h3>
                      <span className="text-xs font-mono text-destructive border border-destructive px-2 py-0.5 rounded">
                        {vuln.severity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{vuln.issue}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded p-4">
                <code className="font-mono text-xs text-foreground whitespace-pre-wrap break-all">
                  {vuln.code}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-primary/20 bg-primary/5 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-2">Detected in 3.38ms</h3>
              <p className="text-sm text-muted-foreground">
                All three vulnerabilities caught before deployment. Zero false positives. 
                Prevention cost: $0. Breach cost avoided: $50K+ annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAgentDemo;
