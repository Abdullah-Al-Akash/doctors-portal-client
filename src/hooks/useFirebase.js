import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


// Initialize Firebase App:
initializeFirebase();
const useFirebase = () => {
        const [user, setUser] = useState({});
        const auth = getAuth();
        const [isLoading, setIsLoading] = useState(true);

        // Create New User:
        const register = (email, password) => {
                setIsLoading(true)
                createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // ...
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
                        })
                        .finally(() => {
                                setIsLoading(false)
                        })
        }

        // Login User:
        const loginUser = (email, password) => {
                setIsLoading(true)
                signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // ...
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                        })
                        .finally(() => {
                                setIsLoading(false)
                        })
        }

        // Observe User State:
        useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, (user) => {
                        if (user) {
                                setUser(user);
                        } else {
                                setUser({});
                        }
                        setIsLoading(false);
                });
                return () => unSubscribe;
        }, [])

        // LogOut:
        const logOut = () => {
                setIsLoading(true);
                signOut(auth).then(() => {
                        // Sign-out successful.
                }).catch((error) => {
                        // An error happened.
                })
                        .finally(() => {
                                setIsLoading(false)
                        })
        }

        return {
                user,
                register,
                logOut,
                loginUser,
                isLoading
        }
}

export default useFirebase;