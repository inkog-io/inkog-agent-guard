import { Check } from "lucide-react";

const frameworks = [
  "Microsoft Semantic Kernel",
  "LangChain",
  "LlamaIndex",
  "CrewAI"
];

const ProofSection = () => {
  return (
    <section className="px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Battle-tested on 350K+ Lines of Production Code
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">{framework}</span>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground font-medium">
          Less than 5% false positives guaranteed
        </p>
      </div>
    </section>
  );
};

export default ProofSection;