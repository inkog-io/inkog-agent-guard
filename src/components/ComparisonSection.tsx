import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      static: "Catches issues in dev",
      runtime: "Alerts after damage",
      staticWins: true,
    },
    {
      static: "$0 prevented cost",
      runtime: "$4.88M average incident",
      staticWins: true,
    },
    {
      static: "5-second scan",
      runtime: "241 days to detect",
      staticWins: true,
    },
    {
      static: "Fix before commit",
      runtime: "Emergency response",
      staticWins: true,
    },
  ];

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-16">
          Why Static Analysis Beats Runtime Monitoring
        </h2>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card px-6 py-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <h3 className="font-medium">Static Analysis (Inkog)</h3>
              </div>
            </div>
            <div className="bg-card px-6 py-4">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-medium text-muted-foreground">Runtime Monitoring</h3>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-px bg-border">
                <div className="bg-card px-6 py-4 flex items-center">
                  <p className="text-sm font-medium">{comparison.static}</p>
                </div>
                <div className="bg-card px-6 py-4 flex items-center">
                  <p className="text-sm text-muted-foreground">{comparison.runtime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
