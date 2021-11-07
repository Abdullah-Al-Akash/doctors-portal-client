import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// Initialize Firebase App:
initializeFirebase();
const useFirebase = () => {
        const [user, setUser] = useState({});
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const [isLoading, setIsLoading] = useState(true);
        const [authError, setAuthError] = useState('');

        // Create New User:
        const register = (email, password) => {
                setIsLoading(true)
                createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                setAuthError('')
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                setAuthError(error.message);
                                // ..
                        })
                        .finally(() => {
                                setIsLoading(false)
                        })
        }

        // Sign With  Using Google:
        const signinWithGoogle = (location, history) => {
                setIsLoading(true)
                signInWithPopup(auth, googleProvider)
                        .then((result) => {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                const credential = GoogleAuthProvider.credentialFromResult(result);
                                const token = credential.accessToken;
                                // The signed-in user info.
                                const user = result.user;
                        }).catch((error) => {
                                const errorCode = error.code;
                                setAuthError(error.message);
                        })
                        .finally(() => {
                                setIsLoading(false)
                        });
        }

        // Login User:
        const loginUser = (email, password, location, history) => {
                setIsLoading(true)
                signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                const destination = location?.state?.from || '/'
                                history.replace(destination)
                                const user = userCredential.user;
                                setAuthError('')
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                setAuthError(error.message);
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
                        setAuthError('')
                }).catch((error) => {
                        setAuthError(error.message);
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
                isLoading,
                authError,
                signinWithGoogle

        }
}

export default useFirebase;