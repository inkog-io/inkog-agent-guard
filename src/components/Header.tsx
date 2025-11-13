const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-medium">inkog</div>
        
        <div className="flex gap-8 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Docs
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
