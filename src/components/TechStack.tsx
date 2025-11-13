const frameworks = [
  "LangChain",
  "CrewAI",
  "AutoGen",
  "Flowise",
  "Dify",
  "OpenAI",
  "Anthropic",
  "Cohere",
  "Hugging Face",
  "Vertex AI",
];

const TechStack = () => {
  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Works With Your Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
          {frameworks.map((framework, index) => (
            <span key={index} className="text-base font-medium">
              {framework}
              {index < frameworks.length - 1 && " •"}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
