import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


// Initialize Firebase App:
initializeFirebase();
const useFirebase = () => {
        const [user, setUser] = useState({});
        const auth = getAuth();

        // Create New User:
        const register = (email, password) => {
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
                        });
        }

        // Observe User State:
        useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, (user) => {
                        if (user) {
                                setUser(user);
                        } else {
                                setUser({});
                        }
                });
                return () => unSubscribe;
        }, [])

        // LogOut:
        const logOut = () => {
                signOut(auth).then(() => {
                        // Sign-out successful.
                }).catch((error) => {
                        // An error happened.
                });
        }

        return {
                user,
                register,
                signOut,

        }
}

export default useFirebase;