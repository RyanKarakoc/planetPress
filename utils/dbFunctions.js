import { db } from "../config/firebase.js";
import { addDoc, collection } from "firebase/firestore";

export const addArticles = async (articles) => {
  articles.forEach((article) => {
    const articleCollectionRef = collection(db, "articles");
    addDoc(articleCollectionRef, article)
      .then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`);
      })
      .catch((error) => {
        console.error(`Error adding document: ${error}`);
      });
  });
};
