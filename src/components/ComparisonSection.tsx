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
    <section className="px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-12">
          Why Static Analysis Beats Runtime Monitoring
        </h2>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="px-6 py-4 bg-primary/5 border-r border-border">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-primary">Static Analysis (Inkog)</h3>
              </div>
            </div>
            <div className="px-6 py-4 bg-destructive/5">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                <h3 className="font-semibold text-destructive">Runtime Monitoring</h3>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-2">
                <div className="px-6 py-4 bg-primary/5 border-r border-border flex items-center">
                  <p className="text-sm font-medium text-foreground">{comparison.static}</p>
                </div>
                <div className="px-6 py-4 bg-destructive/5 flex items-center">
                  <p className="text-sm font-medium text-destructive/90">{comparison.runtime}</p>
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
