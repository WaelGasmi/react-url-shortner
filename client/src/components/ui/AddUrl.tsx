import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddUrl() {
  const [url, setUrl] = useState<string>("");

  return (
    <div>
      <Label htmlFor="url">URL</Label>
      <Input
        name="url"
        id="url"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
    </div>
  );
}
