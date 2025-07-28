import type { Url } from "@/types/Url";
import { Button } from "./ui/button";
import { useUrl } from "@/hooks/useUrl";
import { TableCell, TableRow } from "./ui/table";
import { Trash, ArrowUpNarrowWideIcon, Copy } from "lucide-react";

type UrlItemProps = {
  url: Url;
};

export default function UrlItem({ url }: UrlItemProps) {
  const { deleteUrl, getShortUrl } = useUrl();
  const onDeleteUrl = async (_id: string) => await deleteUrl(_id);

  const onCopy = async (originalUrl: string) => {
    navigator.clipboard.writeText(originalUrl);
  };

  const onGetShortUrl = async (url: Url) => {
    await getShortUrl(url.shortUrl);
    window.open(url.originalUrl, "_Blank");
  };

  return (
    <TableRow>
      <TableCell>{url.originalUrl}</TableCell>
      <TableCell className="flex items-center">
        <p>{url.shortUrl}</p>
        <Button onClick={() => onCopy(url.originalUrl)} variant={"ghost"}>
          <Copy />
        </Button>{" "}
        <Button onClick={() => onGetShortUrl(url)} variant={"ghost"}>
          <ArrowUpNarrowWideIcon />
        </Button>
      </TableCell>
      <TableCell>{url.visited}</TableCell>
      <TableCell>
        <Button onClick={() => onDeleteUrl(url._id)}>
          <Trash />
        </Button>
      </TableCell>
    </TableRow>
  );
}
