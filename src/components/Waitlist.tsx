import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setJoined(true);
    
    toast({
      title: "Welcome aboard!",
      description: "You're on the list. Check your email for early access details.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Be First to Secure Your AI Agents
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Join the waitlist and get lifetime 20% discount
            </p>

            {!joined ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            ) : (
              <div className="text-lg mb-8 text-accent font-medium">
                ✓ You're on the list!
              </div>
            )}

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>247 developers joined</span>
                <span>100 spots for discount</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-foreground" style={{ width: "74%" }} />
              </div>
              <p className="text-xs text-muted-foreground">
                Only 26 discount spots remaining
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
