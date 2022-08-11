import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndSignUpPAge from './pages/sign-in -and-sign-up/sign-in -and-sign-up';

import { auth, createUsetProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
   
  componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
       if (userAuth) {
         const userRef = await createUsetProfileDocument(userAuth);

   

             userRef.onSnapshot(snapShot => {
               this.setState(
                 {
                 currentUser: {
                   id: snapShot.id,
                   ...snapShot.data()
                 }
               }, () => {
                 console.log(this.state)
               }
               );
             });
             console.log(this.state);
           }else{
           this.setState({ currentUser: userAuth });}
         });
    }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <>

   
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} /> 
        <Routes>
          <Route exact path='/' element={<Homepage/> } />
          <Route path='/shop' element={<ShopPage/> } />
          <Route path='/signin' element={<SignInAndSignUpPAge/> } />
      </Routes>  
    </BrowserRouter>
    </>
  );}
}

export default App;
