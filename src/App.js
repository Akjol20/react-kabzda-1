import React, { Component } from 'react'
import './App.css';
import Navbar from './Components1/Navbar/Navbar';
import { Route, withRouter} from 'react-router-dom';
import UsersContainer from './Components1/Users/UsersContainer';
import HeaderContainer from './Components1/Header/HeaderContainer';
import LoginPage from './Components1/Login/login';
import { connect} from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './Components1/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { withSuspence } from './hoc/withSuspense';
//import ProfileContainer from './Components1/Profile/ProfileContainer'
//import DialogsContainer from './Components1/Dialog/DialogsContainer';
const DialogsContainer = React.lazy(()=> import('./Components1/Dialog/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import('./Components1/Profile/ProfileContainer'));



class App extends Component {
      componentDidMount() {
            this.props.initializeApp();
      }

      render() {
            if(!this.props.initialized){
                  return <Preloader />
            }
            return (
                  <div className='app-wrapper'>
                        <HeaderContainer />
                        <Navbar />
                        <div className='app-wrapper-content'>
                              <Route path='/dialogs'
                                    render={withSuspence(DialogsContainer)} />
                              <Route path='/profile/:userId?'
                                    render={withSuspence(ProfileContainer)} />
                              <Route path='/news' /> 
                              <Route path='/books' />
                              <Route path='/video' />
                              <Route path='/users'
                                    render={withSuspence(UsersContainer)} />
                              <Route path='/login'
                                    render={withSuspence(LoginPage)} />

                        </div>
                  </div>  
            )
      }
}
const mapStateToProps = (state) => ({
      initialized:state.app.initialized
});


let AppContainer = compose(
      withRouter,connect(mapStateToProps,{ initializeApp }))(App);

 const SamuraiJsApp =  () =>{
    return  <BrowserRouter>
      <Provider store={store}>
         <AppContainer /> 
      </Provider>
      </BrowserRouter>
}
export default SamuraiJsApp;
