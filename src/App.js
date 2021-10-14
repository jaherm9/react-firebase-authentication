import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import InitializeAuthentication from './Firebase/firebase.init';


InitializeAuthentication();
const googleProvider = new GoogleAuthProvider();
function App() {
  const auth = getAuth();
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
