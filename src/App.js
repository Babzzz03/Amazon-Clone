import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 
"react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";
import Footer from "./Footer";
import Geolocation from "./Geolocation";
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar";

const promise = loadStripe(
  'pk_test_51KrilsFqPsnFWplWd1fkqOAqNkVukDSOSKxjeA3ygjAtWOPGPLAf8QCLo6qFRyoRmN0nspvJK5ZdZ0677oM7ZGLo00a9R1aVs4'
);
function App() {
  
const [{}, dispatch] = useStateValue();
  useEffect(() => {
auth.onAuthStateChanged(authUser => {

  if (authUser) {
dispatch ({
  type: 'SET_USER',
  user: authUser
})
  } else {
dispatch ({
  type: 'SET_USER',
  user: null
  
})
  }
})
  }, [])


    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
      setisOpen(!isOpen);
    };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <Checkout />
          </Route>
          <Route path="/">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <SearchBar />
            <Geolocation />
            <Home />

            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
