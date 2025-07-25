import AddUrl from "@/components/ui/AddUrl";
import { Button } from "@/components/ui/button";
import UrlList from "@/components/UrlList";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <div>
        <h1>Hi {user?.firstName}</h1>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
      <div className="">
        <AddUrl />
      </div>
      <UrlList userId={user?._id ?? ""} />
    </div>
  );
}
