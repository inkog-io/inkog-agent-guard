import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const Book = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Initialize Cal.com inline embed
    (async () => {
      const cal = await getCalApi();
      cal("inline", {
        elementOrSelector: "#cal-inline",
        calLink: "ben/15min?utm_source=website&utm_medium=inline",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-bold hover:text-primary transition-colors">
              Inkog
            </a>
            <a 
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Book Your Risk Assessment
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Free 15-minute consultation with our security team. First 10 companies only.
              </p>
            </div>

            {/* Cal.com Inline Embed */}
            <div id="cal-inline" className="min-h-[760px] rounded-lg border border-border" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p>© 2025 Inkog. Ship AI agents without fear.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Book;
