import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css"
import InfoList from './components/information-list.component';
import AddInfo from './components/add-infomation.component';
import AddMember from './components/add-member.component';
import EditMember from './components/edit-member.component';
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/> 
        <br></br>
        <Route path="/" exact component = {InfoList} />
        <Route path="/information" exact component ={AddInfo}/>
        <Route path ="/member" exact component={AddMember}/>
        <Route path = "/edit/:id" exact component = {EditMember} />
      </div>   
    </Router>
     
  );
}

export default App;
