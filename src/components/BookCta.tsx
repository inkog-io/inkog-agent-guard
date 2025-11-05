import { useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";

type Props = {
  text?: string;
  utm?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  className?: string;
};

export default function BookCta({
  text = "Book a risk assessment",
  utm = "utm_source=website&utm_medium=cta&utm_campaign=home",
  size = "lg",
  variant = "default",
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const calLink = `ben/15min?${utm}`;

  return (
    <>
      <Button
        size={size}
        variant={variant}
        className={className}
        aria-label="Schedule a 15-minute intro call"
        onClick={() => setIsOpen(true)}
      >
        {text}
      </Button>
      
      <Cal
        namespace="inkog15"
        calLink={calLink}
        config={{
          layout: "month_view",
        }}
        embedJsUrl="https://meet.inkog.io/embed/embed.js"
      />
    </>
  );
}
