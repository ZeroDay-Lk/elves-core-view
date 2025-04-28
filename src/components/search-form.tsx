
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchFormProps {
  onSubmit: (domain: string) => void;
  defaultValue?: string;
}

export function SearchForm({ onSubmit, defaultValue = "" }: SearchFormProps) {
  const [domain, setDomain] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      onSubmit(domain.trim());
    }
  };

  return (
    <form 
      className="flex w-full max-w-xl items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="ドメインを入力してください (例: example.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="flex-1 bg-background"
      />
      <Button type="submit" className="bg-tiffany hover:bg-tiffany-dark">
        分析
      </Button>
    </form>
  );
}
