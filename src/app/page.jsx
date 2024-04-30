import Home from "@/ui/Home";
import AuthContextProvider from "@/context/AuthContext";
//import { getUsers } from "@/services/authApi";
export default async function HomePage() {
  //const user = await getUsers();
  return (
    <div className="text-center">
    <AuthContextProvider>
    <Home />
      {/*   user={user} */}
    </AuthContextProvider>
  </div>
  );
}