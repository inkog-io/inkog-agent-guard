import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingDown, DollarSign, Clock } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  stat, 
  label, 
  delay 
}: { 
  icon: any; 
  stat: string; 
  label: string; 
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Extract number from stat
  const targetNumber = parseInt(stat.match(/\d+/)?.[0] || "0");
  
  useEffect(() => {
    if (isInView && targetNumber > 0) {
      let current = 0;
      const increment = targetNumber / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:glow-accent group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-warning/10 rounded-xl group-hover:bg-warning/20 transition-colors">
          <Icon className="w-8 h-8 text-warning" />
        </div>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay }}
          className="text-4xl"
        >
          ⚠️
        </motion.div>
      </div>
      
      <div className="text-5xl font-bold mb-2 text-gradient">
        {stat.includes('%') ? `${count}%` : stat.includes('$') ? `$${count}M` : `${count}`}
        {stat.includes('months') && ' months'}
      </div>
      
      <p className="text-muted-foreground text-lg">{label}</p>
    </motion.div>
  );
};

const ProblemStatement = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The AI Agent Security Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production AI agents are failing at an alarming rate. Can you afford the risk?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StatCard
            icon={TrendingDown}
            stat="73%"
            label="of AI agents fail in production"
            delay={0.2}
          />
          <StatCard
            icon={DollarSign}
            stat="$4.4M"
            label="average cost of AI incidents"
            delay={0.4}
          />
          <StatCard
            icon={Clock}
            stat="18 months"
            label="until EU AI Act fines"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
