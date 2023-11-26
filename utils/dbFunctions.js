import { db } from "../config/firebase.js";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { auth } from "../config/firebase.js";

export const addArticles = async (articles) => {
  try {
    const batch = writeBatch(db);

    articles.forEach((article, index) => {
      // Create a ref to the new article document with an auto-generated ID
      const articleRef = doc(collection(db, "articles"));
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

export const getSavedArticles = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return [];
  try {
    // Get array of article IDs from user account
    const userArticleDocRef = doc(db, "user_articles", userId);
    const userArticleDoc = await getDoc(userArticleDocRef);

    // If no saved articles, returns empty array
    if (!userArticleDoc.data()) return [];

    // Get array of article IDs and map through them
    const userArticleRefs = Object.values(userArticleDoc.data());
    const savedArticles = await Promise.all(
      userArticleRefs.map(async (articleId) => {
        const articleCollectionRef = doc(db, "articles", articleId);
        const article = await getDoc(articleCollectionRef);
        return article.data();
      })
    );
    return savedArticles;
  } catch (err) {
    console.error(err);
  }
};
