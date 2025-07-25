import { useUrl } from "@/hooks/useUrl";
import type { Url } from "@/types/Url";
import { useEffect, useState } from "react";
import UrlItem from "./UrlItem";

type UrlListProps = {
  userId: string;
};

export default function UrlList({ userId }: UrlListProps) {
  const [urls, setUrls] = useState<Url[]>([]);
  const { getUrls } = useUrl();

  useEffect(() => {
    const fetchUrls = async () => {
      const fetchedUrls = await getUrls(userId);
      setUrls(fetchedUrls ?? []);
    };

    fetchUrls();
  }, []);
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
