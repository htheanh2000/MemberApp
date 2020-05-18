import React, {Component} from 'react';
import axios from 'axios' ;


export default class AddMember extends Component {
    constructor(props){
        super(props);

        this.onChangeMemberName = this.onChangeMemberName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onchangeIdMember = this.onchangeIdMember.bind(this);

        this.state = {
            memberName: '',
            idMember: '',
        }

    }
    onChangeMemberName(e) {
        this.setState({
            memberName: e.target.value
        })
    }
    onchangeIdMember(e) {
        this.setState({
            idMember: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const member = {
            memberName: this.state.memberName,
            idMember: this.state.idMember
        }

        console.log(member);

        axios.post('http://localhost:5000/members/add', member)
            .then(res => console.log(res.data));    
        this.setState({
            memberName: '',
            idMember: ''
        })    
    }
    render(){
        return(
            <div>
                <h3> Add new member</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Member ID: </label>
                        <input type="text"
                            required
                            className= "form-control"
                            value={this.state.idMember}
                            onChange={this.onchangeIdMember}></input>
                    </div>  
                    <div className="form-group">
                        <label>Member Name: </label>
                        <input type="text"
                            required
                            className= "form-control"
                            value={this.state.memberName}
                            onChange={this.onChangeMemberName}></input>
                    </div>  
                    <div className="form-group">
                        <input type="submit" value="Add Member" 
                        className = "btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}