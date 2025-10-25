import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setJoined(true);
    
    toast({
      title: "Welcome aboard! 🎉",
      description: "You're on the list. Check your email for early access details.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-card border-2 border-accent rounded-3xl p-12 glow-accent">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-accent" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Be First to Secure Your AI Agents
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join the waitlist and get lifetime 20% discount
            </p>

            {!joined ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-lg border-accent/50"
                />
                <Button 
                  type="submit"
                  disabled={loading}
                  className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-accent"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      ⚡
                    </motion.div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl mb-6"
              >
                ✅ You're in!
              </motion.div>
            )}

            {/* Progress indicator */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>247 developers joined</span>
                <span>100 spots for discount</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "74%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-warning"
                />
              </div>
              <p className="text-sm text-warning font-semibold">
                🔥 Only 26 discount spots remaining
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
