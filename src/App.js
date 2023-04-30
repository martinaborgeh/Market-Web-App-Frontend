
import './App.css';
import { FarmerSignup } from './Components/FarmerComponent/SignupForm';
import {SellerSignup} from './Components/SellerComponents/SignupForm.js'

function App() {
  return (
    <div className="App">
      <SellerSignup/>
      <FarmerSignup/>
      
    </div>
  );
}

export default App;
