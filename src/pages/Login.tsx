import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../services/auth";
import { initializeUserData } from "../services/localStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = authenticateUser(email, password);

    if (user) {
      // get user data if exist or create new user data
      initializeUserData(user);

      // save login data
      const currentUser = { email: user.email, name: user.name };
      if (rememberMe) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      } else {
        sessionStorage.setItem("currentuser", JSON.stringify(currentUser));
      }

      navigate("/app");
    } else {
      setError("invalid email or password");
    }

    console.log(user);
  };
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-4xl font-bold mb-8">
          Orgainze <span className="text-accent">Your Daily</span> Tasks
        </h1>
        <div className="w-1/2 h-1/2 bg-card px-4 md:px-8 shadow-xl rounded-sm space-y-4 py-8">
          {error && <div className="">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
            <div>
              <label className="text-primary/75 font-bold ">Email</label>
              <input
                type="email"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:bg-main hover:bg-main p-2 focus:ring-0 outline-none w-full border-b  border-accent"
              />
            </div>
            <div>
              <label className="text-primary/75 font-bold ">Password</label>
              <input
                type="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:bg-main hover:bg-main p-2 focus:ring-0 outline-none w-full border-b  border-accent"
              />
            </div>
            <div>
              <label className="space-x-2 flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4"
                />
                <span>Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-accent text-card px-2 py-1 rounded-md"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
