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
const handleRegistration = e => {
console.log('registration will be added')
e.preventDefault();
}

  return (
    <div className="App">
      <form onSubmit={handleRegistration}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email"/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
      <br /><br /><br />
      <div>--------------------------------------</div>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
