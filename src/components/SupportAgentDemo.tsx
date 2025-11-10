import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const SupportAgentDemo = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const beforeCode = `# ❌ VULNERABLE CODE

class SupportAgent:
    def handle_ticket(self, customer_message):
        # PROMPT INJECTION - User controls prompt
        prompt = f"Help customer: {customer_message}"
        
        # HARDCODED KEY - Exposed in logs
        api_key = "sk-proj-abc123..."
        
        # INFINITE LOOP - No max_attempts
        while not resolved:
            response = llm.complete(prompt)`;

  const afterCode = `# ✅ SECURED BY INKOG

class SupportAgent:
    def handle_ticket(self, customer_message):
        # Validated input with sanitization
        prompt = sanitize_input(customer_message)
        
        # Environment variable
        api_key = os.getenv("OPENAI_API_KEY")
        
        # Bounded retry with max attempts
        for attempt in range(MAX_RETRIES):
            response = llm.complete(prompt)`;

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">
            Example Use Case: AI Customer Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI support agents can leak thousands of customer records, expose API keys in logs, and generate unexpected costs from infinite loops without proper security scanning
          </p>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card">
          {/* Interactive Before/After Slider */}
          <div 
            className="relative select-none h-[280px]"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Code */}
            <div className="absolute inset-0 p-6 overflow-hidden">
              <pre className="font-mono text-xs leading-relaxed text-foreground whitespace-pre-wrap">
                {beforeCode}
              </pre>
            </div>

            {/* After Code Overlay */}
            <div 
              className="absolute top-0 left-0 h-full overflow-hidden bg-card"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="p-6">
                <pre className="font-mono text-xs leading-relaxed text-foreground whitespace-pre-wrap">
                  {afterCode}
                </pre>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-primary-foreground rounded"></div>
                  <div className="w-0.5 h-4 bg-primary-foreground rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics - Integrated */}
          <div className="border-t border-primary/20 bg-primary/5 px-6 py-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1">Detected in 3.38ms</p>
                <p className="text-sm text-muted-foreground">
                  All three vulnerabilities caught before deployment. Zero false positives.
                  <span className="block mt-1"><span className="font-medium text-foreground">Impact prevented:</span> Protected sensitive customer data • Eliminated credential exposure • Prevented runaway API costs</span>
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
