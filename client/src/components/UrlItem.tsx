import type { Url } from "@/types/Url";
import { Button } from "./ui/button";
import { useUrl } from "@/hooks/useUrl";
import { TableCell, TableRow } from "./ui/table";

type UrlItemProps = {
  url: Url;
};

export default function UrlItem({ url }: UrlItemProps) {
  const { deleteUrl, getShortUrl } = useUrl();
  const onDeleteUrl = async (_id: string) => await deleteUrl(_id);

  const onGetShortUrl = async (url: Url) => {
    await getShortUrl(url.shortUrl);
    window.open(url.originalUrl, "_Blank");
  };

  return (
    <TableRow>
      <TableCell>{url.originalUrl}</TableCell>
      <TableCell>
        <Button onClick={() => onGetShortUrl(url)}>{url.shortUrl}</Button>
      </TableCell>
      <TableCell>{url.visited}</TableCell>
      <TableCell>
        <Button onClick={() => onDeleteUrl(url._id)}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}
