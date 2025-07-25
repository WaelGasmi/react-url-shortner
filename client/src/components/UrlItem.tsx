import type { Url } from "@/types/Url";

type UrlItemProps = {
  url: Url;
};

export default function UrlItem({ url }: UrlItemProps) {
  return <div>{url.originalUrl}</div>;
}
