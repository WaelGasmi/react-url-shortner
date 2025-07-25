import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <form onSubmit={onAddUrl}>
      <Label htmlFor="url">URL</Label>
      <Input
        name="url"
        id="url"
        value={originalUrlInput}
        onChange={(e) => {
          setOriginalUrlInput(e.target.value);
        }}
      />
      <Button type="submit">Short the Url</Button>
    </form>
  );
}
