import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-util";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  function handleRedirect() {
    return isAuthenticated ? navigate("/dashboard") : navigate("/sign-in");
  }

  return (
    <div>
      <h2>404 Error</h2>
      <p>Oops! The page you're looking for does not exist.</p>
      <Button className="cursor-pointer" onClick={handleRedirect}>
        Go Back
      </Button>
    </div>
  );
}
