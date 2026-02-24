import { Navigate, Outlet, useLocation } from "react-router-dom";
import { encode } from "js-base64";
import { useAuth } from "@/lib/auth-util";

export function PrivateRoute({ loginUrl }: { loginUrl: string }) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`${loginUrl}?redirect=${encode(pathname)}`} replace />
  );
}
