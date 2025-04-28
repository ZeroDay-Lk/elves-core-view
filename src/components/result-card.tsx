
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ResultCard({ title, children, className }: ResultCardProps) {
  return (
    <div className={cn("result-card", className)}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

interface StatusItemProps {
  label: string;
  value: string | React.ReactNode;
  status?: "good" | "bad" | "neutral";
}

export function StatusItem({ label, value, status = "neutral" }: StatusItemProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-muted-foreground">{label}</span>
      {status === "good" ? (
        <span className="status-good">
          <Check className="w-4 h-4" />
          {value}
        </span>
      ) : status === "bad" ? (
        <span className="status-bad">
          <X className="w-4 h-4" />
          {value}
        </span>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export function ListItem({ label, value }: { label: string, value: string | React.ReactNode }) {
  return (
    <div className="flex items-center py-1">
      <span className="text-muted-foreground w-1/3">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
