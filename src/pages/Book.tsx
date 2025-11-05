import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
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
            <div className="bg-card border border-border rounded-lg p-8">
              <div 
                className="cal-inline"
                data-cal-namespace=""
                data-cal-link="ben/15min"
                data-cal-config='{"layout":"month_view"}'
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
              />
            </div>
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
