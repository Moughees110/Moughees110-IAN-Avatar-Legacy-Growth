const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } = require("firebase/auth");
const { auth, db } = require("../Config/firebase");
const { doc, setDoc } = require("firebase/firestore");

// Create a new user with email and password
const signupUser = async ({ firstName, lastName, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save additional user data to Firestore
  await setDoc(doc(db, "users", user.uid), {
    firstName,  
    lastName,
    email,
    createdAt: new Date().toISOString(),
  });

  return user;
};

// Authenticate an existing user
const loginUser = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Send password reset email
const sendResetEmail = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

module.exports = {signupUser,loginUser,sendResetEmail,};
