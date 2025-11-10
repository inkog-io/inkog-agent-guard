import { Code2, Bot, Workflow, Boxes, Settings, MessageSquare, Sparkles } from "lucide-react";

const frameworks = [
  { name: "LangChain", icon: Code2 },
  { name: "CrewAI", icon: Bot },
  { name: "AutoGen", icon: Workflow },
  { name: "Flowise", icon: Boxes },
  { name: "Dify", icon: Settings },
  { name: "OpenAI", icon: MessageSquare },
  { name: "Anthropic", icon: Sparkles },
];

const TechStack = () => {
  return (
    <section className="px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium text-center mb-12">
          Works With Your Stack
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {frameworks.map((framework, index) => {
            const Icon = framework.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-medium">{framework.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
