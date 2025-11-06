import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
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
  useEffect(() => {
    (async function () {
      const cal = await getCalApi("https://meet.inkog.io/embed/embed.js");
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const calLink = `ben/15min?${utm}`;

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      aria-label="Schedule a 15-minute intro call"
      data-cal-namespace="15min"
      data-cal-link={calLink}
      data-cal-origin="https://meet.inkog.io"
      data-cal-config='{"layout":"month_view"}'
    >
      {text}
    </Button>
  );
}
