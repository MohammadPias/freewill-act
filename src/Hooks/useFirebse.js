import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";


const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoding, setIsLoding] = useState(true);

    initializeAuthentication();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // handle google log in

    const handleGoogleLogin = () => {
        setIsLoding(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoding(false);
            })
    };

    // handle SignOut

    const handleSignOut = () => {
        setIsLoding(true);
        signOut(auth)
            .then(result => {

            })
            .finally(() => { setIsLoding(false) });
    };

    // On Auth State Change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoding(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        handleGoogleLogin,
        handleSignOut,
        isLoding
    }
}

export default useFirebase;