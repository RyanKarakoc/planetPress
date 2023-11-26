import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

export const login = async (email, password) => {
  try {
    if (!email || !password) {
      alert('Invalid credentials');
      return;
    }

    await signInWithEmailAndPassword(auth, email.toString(), password);
  } catch (err) {
    alert(err.message);
  }
};

export const signUp = async (email, password) => {
  try {
    if (!email || !password) {
      alert('Invalid credentials');
      return;
    }

    // Creates new user
    await createUserWithEmailAndPassword(auth, email, password);
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
