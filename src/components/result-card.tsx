
import { Check, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ResultCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function ResultCard({ title, description, children, className }: ResultCardProps) {
  return (
    <div className={cn("result-card", className)}>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Popover>
          <PopoverTrigger>
            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">{description}</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

interface StatusItemProps {
  label: string;
  value: string | React.ReactNode;
  description?: string;
  status?: "good" | "bad" | "neutral";
}

export function StatusItem({ label, value, description, status = "neutral" }: StatusItemProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{label}</span>
        {description && (
          <Popover>
            <PopoverTrigger>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">{description}</p>
            </PopoverContent>
          </Popover>
        )}
      </div>
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

export function ListItem({ label, value, description }: { label: string, value: string | React.ReactNode, description?: string }) {
  return (
    <div className="flex items-center py-1">
      <div className="flex items-center gap-2 text-muted-foreground w-1/3">
        <span>{label}</span>
        {description && (
          <Popover>
            <PopoverTrigger>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">{description}</p>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <span className="font-medium">{value}</span>
    </div>
  );
}
