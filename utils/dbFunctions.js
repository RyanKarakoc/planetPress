import { db } from '../config/firebase.js';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';

export const addArticles = async (articles) => {
  try {
    const batch = writeBatch(db);

    articles.forEach((article, index) => {
      // Create a ref to the new article document with an auto-generated ID
      const articleRef = doc(collection(db, 'articles'));
      // Add the article to the batch
      batch.set(articleRef, article);
    });

    // Batch insert all articles at once
    await batch.commit();

    console.log("New documents inserted into 'articles' collection");
  } catch (err) {
    console.error(`Error adding articles via batch: ${err}`);
  }
};

export const old_addArticles = async (articles) => {
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

export const getAllArticles = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    const articles = [];
    querySnapshot.forEach((doc) => {
      const article = doc.data();
      articles.push(article);
    });
    console.log(articles);
    return articles;
  } catch (err) {
    console.error('could not retrieve articles');
  }
};
