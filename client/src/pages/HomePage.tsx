import AddUrl from "@/components/AddUrl";
import { Button } from "@/components/ui/button";
import UrlList from "@/components/UrlList";
import { useAuth } from "@/hooks/useAuth";
import { UrlProvider } from "@/services/providers/urlProvider";

export default function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <div>
        <h1>Hi {user?.firstName}</h1>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
      <UrlProvider>
        <AddUrl />
        <UrlList />
      </UrlProvider>
    </div>
  );
}
