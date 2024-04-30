"use client";
import Link from "next/link";
import { useAuthCont } from  "@/context/AuthContext";

const Home = () => { //{ user }
  const { isAuth, user } = useAuthCont();
  {console.log("user",user)}
  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-24 mb-64"}>

      <img className={"rounded-t-lg"} src="img/bg.jpg" alt="" />
          <div className={"p-5 bg-white"}>
              <h5 className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 "}>Welcome {isAuth ? user.firstName : "Guest"}</h5>
              <p className={"mb-3 font-normal text-gray-700"}>Hey, welcome aboard! We’re thrilled to have you in our online community. Happy browsing!</p>
              <br/><br/><br/>
              <Link href="/fishes" className={"w-full px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded-md hover:bg-green-700"}>See list</Link>
          </div>
      </div>
   </div>
  );
};

export default Home;
