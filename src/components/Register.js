import React from 'react';

class Register extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            txtname:'',
            txtbirthday:'',
            txtemail:'',
            nberphone:''
        };
        this.onHandleChange=this.onHandleChange.bind(this);
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }
    onHandleChange(event){
        var target=event.target;
        var name =target.name;
        var value = target.value;
        this.setState({
            [name]: value
          }); 
    }
    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
  render(){
    return (
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Registration Info</h2>
                    <form method="POST">
                        <div className="input-group">
                            <input 
                            className="input--style-3" 
                            type="text" 
                            placeholder="Name" 
                            name="txtname"
                            onChange={this.onHandleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input 
                            className="input--style-3 js-datepicker" 
                            type="text" 
                            placeholder="Birthdate" 
                            name="txtbirthday"
                            onChange={this.onHandleChange}
                            />
                            <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                        </div>
                        <div className="input-group">
                            <input 
                            className="input--style-3" 
                            type="email" 
                            placeholder="Email" 
                            name="txtemail"
                            onChange={this.onHandleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input 
                            className="input--style-3" 
                            type="text" 
                            placeholder="Phone" 
                            name="nberphone"
                            onChange={this.onHandleChange}
                            />
                        </div>
                        <div className="p-t-10">
                            <button 
                            className="btn btn--pill btn--green" 
                            type="submit">
                            Submit
                            </button>&nbsp;
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
  }
}
export default Register;
