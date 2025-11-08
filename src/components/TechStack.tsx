const frameworks = [
  "LangChain",
  "CrewAI",
  "AutoGen",
  "Flowise",
  "Dify",
  "OpenAI",
  "Anthropic",
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium text-center mb-12">
          Works With Your Stack
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {frameworks.map((framework, index) => (
            <span 
              key={index}
              className="text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              {framework}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
