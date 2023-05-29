import { LoginButton, LogoutButton } from "@/src/component/button/loginButton";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";

const Login = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LoginButton />
      <div>hello</div>
      <LogoutButton />
    </div>
  );
};

export default Login;
