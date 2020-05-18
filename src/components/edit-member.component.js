import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import axios from 'axios'



export default class EditInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeIdMember= this.onChangeIdMember.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail =  this.onChangeEmail.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeClassName = this.onChangeClassName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);        

        
        this.state = {
            major: '',
            description: '',
            className: '',
            phoneNumber: '',
            email: '',
            idMember: '',
            birthday: new Date(),
            members: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/informations/' + this.props.match.params.id)
        .then(res =>{
            this.setState({
                idMember: res.data.idMember,
                major : res.data.major,
                description: res.data.description,
                phoneNumber: res.data.phoneNumber,
                email: res.data.email,
                birthday: new Date(res.data.birthday),
                className: res.data.className

            })
        } )
        .catch((error) => {
            console.log(error) ;
        })
        axios.get('http://localhost:5000/members/')
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    members: res.data.map(member => member.idMember),
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })

    }

    onChangeIdMember(e) {
        this.setState({
            idMember: e.target.value
        })
    }
    
    onChangeMajor(e) {
        this.setState({
            major: e.target.value
        })
    }

    onChangeClassName(e) {
        this.setState({
            className: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

   onChangePhoneNumber(e) {
       this.setState({
           phoneNumber: e.target.value
       })
   }
    onChangeBirthday(birthday) {
        this.setState({
            birthday: birthday
        })
    }
     onChangeDescription(e) {
         this.setState({
           description: e.target.value
         })
     }
    onSubmit(e) {
        e.preventDefault();

        const info = {
            idMember : this.state.idMember,
            major : this.state.major,
            description : this.state.description,
            className : this.state.className,
            birthday : this.state.birthday,
            email : this.state.email,
            phoneNumber : this.state.phoneNumber,
        }
        console.log(info);

        axios.post('http://localhost:5000/informations/update/'+this.props.match.params.id ,info)
        .then(res => console.log(res.data));

      // window.location = '/';
    }
    render(){
        return(
            <div>
                <h3>Edit Information</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Id student: </label>

                        <select ref="memberInput"
                            required
                            className = "form-control"
                            value={this.state.idMember}
                            onChange={this.onChangeIdMember}>
                                {
                                    this.state.members.map(function (member){
                                        return <option key={member}
                                        value ={member} 
                                        >{member}</option>
                                    })
                                }
                        </select>
                    </div>
                    <div className="form-group"> 
                        <label>Major: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.major}
                            onChange={this.onChangeMajor}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Class Name: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.className}
                            onChange={this.onChangeClassName}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Email: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Phone Number: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.phoneNumber}
                            onChange={this.onChangePhoneNumber}
                            />
                    </div>
                    <div className="form-group">
                        <label>Birthday: </label>
                        <div>
                            <DatePicker
                            selected={this.state.birthday}
                            onChange={this.onChangeBirthday}
                            />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <textarea  type="textarea" rows = "5"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Info" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}