import { db } from "../firebase-config";

const eventsCollectionRef = db.collection("events");

export const apiGetAllEvents = async () => {
  const events = await eventsCollectionRef.get();
  const eventsArray = events.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return eventsArray;
};

// export const apiAddNewEvent = async (eventData) => {
//   return await addDoc(eventsCollectionRef, eventData);
// };

// export const apiupdateEventById = async (updatedEventData, eventId) => {
//   const eventDoc = doc(db, "events", eventId);
//   return await updateDoc(eventDoc, updatedEventData);
// };

// export const apiDeleteEventById = async (eventId) => {
//   const eventDoc = doc(db, "events", eventId);
//   return await deleteDoc(eventDoc);
// };

// export const uploadImage = async (imageFile) => {};
