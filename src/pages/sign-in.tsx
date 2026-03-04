import { MouseEvent, useState } from "react";
import { useAuth } from "@/lib/auth-util";
import { useNavigate, useLocation } from "react-router-dom";
import { decode } from "js-base64";

const loginData = {
  email: "admin@example.com",
  password: "password",
};

export function SignIn() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();

  const [email, setEmail] = useState(loginData.email);
  const [password, setPassword] = useState(loginData.password);

  const login = (e: MouseEvent) => {
    e.preventDefault();

    if (email === loginData.email && password === loginData.password) {
      loginUser();
      const queryParameters = new URLSearchParams(search);
      const redirect = queryParameters.get("redirect");

      console.log("redirect: ", redirect);

      navigate(redirect ? decode(redirect) : "/dashboard");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 ">
                  Email address
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 ">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-6 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-accent-6 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-accent-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-6 cursor-pointer"
                onClick={login}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
