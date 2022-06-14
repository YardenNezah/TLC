import "./App.scss";
import HomePage from "./components/pages/homePage/HomePage";
import "./fonts/Nimbus-Sans-D-OT-Ultra-Light_32757.ttf";
import { BrowserRouter, Route } from "react-router-dom";
import AllAssociations from "./components/pages/allAssociationsPage/AllAssociations";
import AllFounders from "./components/pages/allFoundersPage/AllFounders";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import TermsOfUse from "./components/footer/TermsOfUse";
import ContactUs from "./components/footer/ContactUs";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import AssociationPage from "./components/pages/associationPage/AssociationPage";
 import FounderPage from "./components/pages/founderPage/FounderPage";
import CartPage from "./components/pages/cartPage/CartPage";
import AllVolunteeringPage from "./components/pages/allVolunteeringPage/AllVolunteeringPage";
import CalendarPage from "./components/pages/calendarPage/CalendarPage";
import Profile from "./components/user/Profile";
import NewVolunteering from "./components/pages/newVolunteering/newVolunteering";
import { authMiddleware } from "./utils";
import { useEffect } from "react";
import ForYou from "./components/pages/ForYou/ForYou";

function App() {
  useEffect(() => {
    authMiddleware(false, false, true)
  }, [])
  return (
    <BrowserRouter>
      <Route path="/Home" exact>
        <HomePage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/associations" exact>
        <AllAssociations />
      </Route>
      <Route path="/volunteering" exact>
        <AllVolunteeringPage />
      </Route>
      <Route path="/forYou" exact>
        <ForYou />
      </Route>
      <Route path="/About" exact>
        <AllFounders />
      </Route>
      <Route path="/PrivacyPolicy" exact>
        <PrivacyPolicy />
      </Route>
      <Route path="/TermsOfUse" exact>
        <TermsOfUse />
      </Route>
      <Route path="/ContactUs" exact>
        <ContactUs />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/founder/:founderName" exact>
        <FounderPage />
      </Route>
      <Route path="/associations/:associationName" exact>
        <AssociationPage />
      </Route>  
      <Route path="/cart" exact>
        <CartPage />
      </Route>
      <Route path="/calendar" exact>
        <CalendarPage />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/newVolunteering" exact>
        <NewVolunteering/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
