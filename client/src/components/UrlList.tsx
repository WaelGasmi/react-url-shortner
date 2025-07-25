import { useUrl } from "@/hooks/useUrl";
import UrlItem from "./UrlItem";

export default function UrlList() {
  const { urls } = useUrl();

  return (
    <div>
      {urls.length > 0 ? (
        urls.map((url) => <UrlItem key={url._id} url={url} />)
      ) : (
        <p>You don't have urls yet</p>
      )}
    </div>
  );
}
