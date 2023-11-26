import { db } from "../config/firebase.js";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth } from "../config/firebase.js";

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

export const checkArticleExists = async (url) => {
  try {
    const articleCollectionRef = collection(db, "articles");
    const q = query(articleCollectionRef, where("url", "==", url));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No article with that URL found");
      return false;
    } else {
      console.log("Yes, that article exists!");
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAllArticles = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articles = [];
    querySnapshot.forEach((doc) => {
      const article = doc.data();
      articles.push({ ...article, id: doc.id });
    });
    // console.log(articles);
    return articles;
  } catch (err) {
    console.error("could not retrieve articles");
  }
};

export const saveArticle = async (articleID) => {
  const userId = auth.currentUser.uid;
  try {
    const userArticleDocRef = doc(db, "user_articles", userId);
    const userArticleDoc = await getDoc(userArticleDocRef);

    const existingArticles = userArticleDoc.exists()
      ? userArticleDoc.data() // if exists
      : {}; // if doesnt exist

    await setDoc(userArticleDocRef, {
      ...existingArticles,
      [articleID]: articleID,
    });
    console.log(`Document updated or created with userID: ${userId}`);
  } catch (err) {
    console.error("Could not save article: ", err);
  }
};
