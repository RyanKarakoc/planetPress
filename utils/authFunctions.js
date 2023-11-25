import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { auth } from "../config/firebase";

export const login = async (auth, email, pass) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (err) {
    alert(err.message);
  }
};

export const signUp = async (auth, email, pass) => {
  try {
    // Creates new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    const user = userCredential.user;
    console.log(user);
  } catch (err) {
    alert(err.message);
  }
};
