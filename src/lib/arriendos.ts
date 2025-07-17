import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase'; // Adjust the import based on your firebase configuration file
import { Arriendo } from '@/types/arriendos';

// Function to fetch arriendos from Firestore
export default async function getArriendos(): Promise<Arriendo[]> {
  const snapshot = await getDocs(collection(db, 'arriendos'));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Arriendo[];
}