import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

 const Information = props => (
     <tr>
         <td>{props.information.idMember}</td>
         <td>{props.information.major}</td>
         <td>{props.information.className}</td>
         <td>{props.information.phoneNumber}</td>
         <td>{props.information.email}</td>
         <td>{props.information.birthday.substring(0,10)}</td>
         <td>{props.information.description}</td>
        <td>
            <Link to={"/edit/" + props.information._id}>edit </Link>
            | <a href="#" onClick={() => {props.deleteInfo(props.information._id) }}>delete</a>
        </td>
    </tr>
)

export default class InfoList extends Component {   
     constructor(props) {
        super(props);

        this.deleteInfo = this.deleteInfo.bind(this);

        this.state = {informations: []};
     }

     componentDidMount() {
         axios.get('http://localhost:5000/informations/')
         .then(res =>{
             this.setState({informations: res.data})
         })
         .catch((error) => {
             console.log(error);
         })
     }

     infoList() {
         return this.state.informations.map(currentinfo => {
             return <Information information = {currentinfo} deleteInfo={this.deleteInfo} key={currentinfo._id}/>
         })
     }

     deleteInfo(id) {
        axios.delete('http://localhost:5000/informations/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          exercises: this.state.informations.filter(el => el._id !== id)
        })

        window.location = '/';
      }

    render(){
        return(
            <div>
                <h3>Information</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Major</th>
                            <th>Class</th>
                            <th>Phone number</th>
                            <th>Email</th>
                            <th>Birthday</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.infoList() }
                    </tbody>
                </table>
            </div>
        );
    }
}