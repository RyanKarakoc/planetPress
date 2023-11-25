import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const login = async (email, pass) => {
  try {
    console.log(typeof email, typeof pass);
    console.log(email, pass);
    await signInWithEmailAndPassword(auth, email.toString(), pass);
  } catch (err) {
    alert(err.message);
  }
};

export const signUp = async (email, pass) => {
  try {
    console.log(typeof email, typeof pass);
    // Creates new user
    await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
  } catch (err) {
    alert(err.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
