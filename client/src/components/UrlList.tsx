import { useUrl } from "@/hooks/useUrl";
import UrlItem from "./UrlItem";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function UrlList() {
  const { urls } = useUrl();

  return (
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead>Original Url</TableHead>
          <TableHead>Short Url</TableHead>
          <TableHead>Visited</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {urls.length > 0 ? (
          urls.map((url) => <UrlItem key={url._id} url={url} />)
        ) : (
          <TableRow>
            <TableCell>You don't have urls yet</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
