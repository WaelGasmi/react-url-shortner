import { Input } from "@/components/ui/input";
 import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { useUrl } from "@/hooks/useUrl";

export default function AddUrl() {
  const [originalUrlInput, setOriginalUrlInput] = useState<string>("");
  const { addUrl } = useUrl();

  const onAddUrl = async (e: FormEvent) => {
    e.preventDefault();
    if (originalUrlInput.trim()) await addUrl(originalUrlInput);
  };

  return (
    <form onSubmit={onAddUrl} className="flex gap-4">
      <Input
        name="url"
        id="url"
        value={originalUrlInput}
        onChange={(e) => {
          setOriginalUrlInput(e.target.value);
        }}
        placeholder="Enter Url"
      />
      <Button type="submit">Short the Url</Button>
    </form>
  );
}
