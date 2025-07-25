import type { Url } from "@/types/Url";
import { Button } from "./ui/button";
import { useUrl } from "@/hooks/useUrl";

type UrlItemProps = {
  url: Url;
};

export default function UrlItem({ url }: UrlItemProps) {
  const { deleteUrl } = useUrl();

  const onDeleteUrl = async (_id: string) => await deleteUrl(_id);
  return (
    <div className=" flex gap-2.5">
      <p>{url.originalUrl}</p>
      <p>{url.shortUrl}</p>
      <Button onClick={() => onDeleteUrl(url._id)}>Delete</Button>
    </div>
  );
}
