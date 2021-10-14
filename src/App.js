import './App.css';
import InitializeAuthentication from './Firebase/firebase.init';


InitializeAuthentication();

function App() {
  const handleGoogleSignIn = () =>{

  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
