import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Arriendo } from "@/types/arriendos";

export const obtenerArriendos = async (): Promise<Arriendo[]> => {
  const snapshot = await getDocs(collection(db, "arriendos"));
  return snapshot.docs.map((doc) => doc.data() as Arriendo);
};
