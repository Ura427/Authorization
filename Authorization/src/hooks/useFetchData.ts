import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export function useFetchData(){
    useEffect(() => {
        // const collectionName = collectionName
     
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
    
        fetchData();
      });
}