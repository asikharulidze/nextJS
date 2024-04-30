"use client";


import { useReducer } from "react";
import { useRouter } from "next/navigation";
import fishReducer from "@/context/fishReducer";
import styles from "./FishWrapper.module.css";
import FishCard from "../FishCard/FishCard";
import { useAuthCont } from "../../context/AuthContext";


const FishWrapper = ({ fish, children }) => {
  const { isAuth, user } = useAuthCont();
  const router = useRouter();

  const [cardsState, dispatchCards] = useReducer(fishReducer, {
    fishList: fish,
    loading: false,
  });

  return (
    <div  className={styles.FishWrapper}>
      {isAuth ? 
        <button onClick={() => router.push("/fishes/create")} className={"p-4 mb-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50"}>
          Create New Card
        </button>
      : 
      <div className={"p-4 mb-4 mt-4 text-sm text-blue-800 rounded-lg bg-blue-50"} role="alert">
        <span className={"font-medium"}>Info alert!</span> To create a new card please login first.
      </div>
      }
      

      {children}
      <div className={styles.cardsContainer}>
        {cardsState.fishList.map((fish) => {
          return (
            <FishCard 
                    key={fish.id}
                    id={fish.id}
                    src={fish?.img || "fishes/demo.jpg"} 
                    title={fish.scientificName}
                    region={fish.region}
                    name={fish.name}
                    info={fish.info}
                    dispatchCards={dispatchCards}
                    onCloseModal={() => router.push("/fishes")}
                    />
          );
        })}
      </div>
    </div>
  );
};

export default FishWrapper;
