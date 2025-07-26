import AddUrl from "@/components/AddUrl";
import { Button } from "@/components/ui/button";
import UrlList from "@/components/UrlList";
import { useAuth } from "@/hooks/useAuth";
import { UrlProvider } from "@/services/providers/urlProvider";

export default function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div className="m-auto mt-16 grid grid-cols-[20%_60%_20%] ">
      <div className="flex flex-col justify-start items-center">
        <h1>Hi {user?.firstName}</h1>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
      <UrlProvider>
        <div>
          <AddUrl />
          <UrlList />
        </div>
      </UrlProvider>
    </div>
  );
}
