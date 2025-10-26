import { motion } from "framer-motion";
import { TrendingDown, DollarSign, Clock } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  stat, 
  label 
}: { 
  icon: any; 
  stat: string; 
  label: string; 
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-muted rounded-md">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
      </div>
      
      <div className="text-3xl font-bold mb-2">
        {stat}
      </div>
      
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const ProblemStatement = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            The AI Agent Security Crisis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production AI agents are failing at an alarming rate. Can you afford the risk?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StatCard
            icon={TrendingDown}
            stat="73%"
            label="of AI agents fail in production"
          />
          <StatCard
            icon={DollarSign}
            stat="$4.4M"
            label="average cost of AI incidents"
          />
          <StatCard
            icon={Clock}
            stat="18 months"
            label="until EU AI Act fines"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
