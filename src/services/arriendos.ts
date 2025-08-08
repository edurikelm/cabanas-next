'use server';

import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Adjust the import based on your firebase configuration file
import { Arriendo } from '@/types/arriendos';
import { revalidatePath } from 'next/cache';

// Function to fetch arriendos from Firestore
export async function getArriendos() {
  const snapshot = await getDocs(collection(db, 'arriendos'));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Arriendo[];
}

export async function postArriendo(data: Arriendo) {
  const docRef = await addDoc(collection(db, 'arriendos'), data);
  // console.log(docRef);
  revalidatePath('/dashboard');
  return docRef;
}