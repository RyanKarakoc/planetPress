import { db } from '../config/firebase.js';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

export const addArticles = async (articles) => {
  articles.forEach((article) => {
    const articleCollectionRef = collection(db, 'articles');
    addDoc(articleCollectionRef, article)
      .then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`);
      })
      .catch((error) => {
        console.error(`Error adding document: ${error}`);
      });
  });
};

export const checkArticleExists = async (url) => {
  try {
    const articleCollectionRef = collection(db, 'articles');
    const q = query(articleCollectionRef, where('url', '==', url));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No article with that URL found');
      return false;
    } else {
      console.log('Yes, that article exists!');
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};
