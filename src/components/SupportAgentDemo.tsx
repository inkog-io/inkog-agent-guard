import { useState } from "react";
import { CheckCircle2, ArrowRight, Shield, AlertTriangle } from "lucide-react";

const SupportAgentDemo = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const beforeCode = `class SupportAgent:
    def handle_ticket(self, customer_message):
        prompt = f"Help customer: {customer_message}"
        
        api_key = "sk-proj-abc123..."
        
        while not resolved:
            response = llm.complete(prompt)`;

  const afterCode = `class SupportAgent:
    def handle_ticket(self, customer_message):
        prompt = sanitize_input(customer_message)
        
        api_key = os.getenv("OPENAI_API_KEY")
        
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
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">
            Example Use Case: AI Customer Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI support agents can leak thousands of customer records, expose API keys in logs, and generate unexpected costs from infinite loops without proper security scanning
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-12 bg-card border border-border rounded-lg p-8">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-center">Customer Query</span>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-center">Support Agent Code</span>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-center">LLM API Call</span>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-center">Response</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm font-medium">Inkog scans code before deployment</p>
                <p className="text-xs text-muted-foreground">Detects vulnerabilities in agent code → Prevents injection attacks, credential leaks & infinite loops</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="border border-border rounded-lg overflow-hidden bg-card max-w-3xl mx-auto">
          <div className="grid grid-cols-2 border-b border-border">
            <div className="px-4 py-2 bg-destructive/10 border-r border-border">
              <p className="text-xs font-medium text-center">Before Inkog</p>
            </div>
            <div className="px-4 py-2 bg-primary/10">
              <p className="text-xs font-medium text-center">After Inkog</p>
            </div>
          </div>
          
          <div 
            className="relative select-none h-[180px]"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Code */}
            <div className="absolute inset-0 p-4 overflow-hidden">
              <pre className="font-mono text-[11px] leading-relaxed text-foreground/90 whitespace-pre-wrap">
                <span>class SupportAgent:</span>{'\n'}
                <span>    def handle_ticket(self, customer_message):</span>{'\n'}
                <span className="bg-destructive/30">        prompt = f"Help: {'{customer_message}'}"</span>{'\n'}
                {'\n'}
                <span className="bg-destructive/30">        api_key = "sk-proj-abc123..."</span>{'\n'}
                {'\n'}
                <span className="bg-destructive/30">        while not resolved:</span>{'\n'}
                <span>            response = llm.complete(prompt)</span>
              </pre>
            </div>

            {/* After Code Overlay */}
            <div 
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="p-4 bg-primary/5 h-full">
                <pre className="font-mono text-[11px] leading-relaxed text-foreground/90 whitespace-pre-wrap">
                  <span>class SupportAgent:</span>{'\n'}
                  <span>    def handle_ticket(self, customer_message):</span>{'\n'}
                  <span className="bg-primary/30">        prompt = sanitize_input(customer_message)</span>{'\n'}
                  {'\n'}
                  <span className="bg-primary/30">        api_key = os.getenv("OPENAI_API_KEY")</span>{'\n'}
                  {'\n'}
                  <span className="bg-primary/30">        for attempt in range(MAX_RETRIES):</span>{'\n'}
                  <span>            response = llm.complete(prompt)</span>
                </pre>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10 hover:w-1.5 transition-all"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-2.5 bg-primary-foreground rounded"></div>
                  <div className="w-0.5 h-2.5 bg-primary-foreground rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="border-t border-border bg-muted/30 px-4 py-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium mb-1">Detected in 3.38ms • Zero false positives</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Protected:</span> Sensitive customer data • API credentials • Runaway costs from infinite loops
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
