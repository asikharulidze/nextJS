"use client"
import { useRouter } from "next/navigation";
import { useAuthCont } from "@/context/AuthContext";
import NavBar from "@/components/NavBar/NavBar";
import NavBarItem from "@/components/NavBar/NavBarItem/NavBarItem";
import styled from "styled-components";

const Styledbg = styled.div`
  background-image: url(img/home.jpg);
  background-color: #cccccc;
  min-height: 94vh;
  width: 100%;
  background-size: cover;


`;
function AppLayout({ children }) {
  const router = useRouter();
  const { isAuth, logout } = useAuthCont();

  const handleAuthAction = () => {
    if (isAuth) {
      logout();
      router.push("/"); 
    } else {
      router.push("/auth/login"); 
    }
  };

  return (
    <div className="App">

      <NavBar>
        <NavBarItem title="Home" href="/" />
        <NavBarItem title="fishes" href="/fishes" />
        <NavBarItem title="About" href="/about" />
        <NavBarItem title="Favorites" href="/favorites" />
        <button className="text-white pl-3" onClick={handleAuthAction}>
          {isAuth ? "Log out" : "Log in"}
        </button>
      </NavBar>
      <Styledbg>{children}</Styledbg>
      
      
    </div>
  );
}

export default AppLayout;
