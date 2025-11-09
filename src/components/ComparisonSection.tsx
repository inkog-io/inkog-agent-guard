const ComparisonSection = () => {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-16">
          Why Static Analysis Beats Runtime Monitoring
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-medium">Static Analysis (Inkog)</th>
                <th className="text-left py-4 px-6 font-medium">Runtime Monitoring</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-4 px-6">Catches issues in dev</td>
                <td className="py-4 px-6 text-muted-foreground">Alerts after damage</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 px-6">$0 prevented cost</td>
                <td className="py-4 px-6 text-muted-foreground">$4.88M average incident</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 px-6">5-second scan</td>
                <td className="py-4 px-6 text-muted-foreground">241 days to detect</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 px-6">Fix before commit</td>
                <td className="py-4 px-6 text-muted-foreground">Emergency response</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
