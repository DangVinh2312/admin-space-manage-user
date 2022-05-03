import { Link } from "react-router-dom";
import React from "react";
import FormInput from "../../components/forms/formInput";
import UserUtils from "../../utils/UserUtils";
export default class AddNewUser extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            displayName: "",
            phone: "",
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const addUser = await UserUtils.addNew(this.state);
        if (addUser){
            alert("User is successfully added");
            window.location.replace("/users");
        } else {
            alert("Invalid data");
        }
    }

    render() {
        return <>
            <h3><i className="fa fa-angle-right"></i> User Adding </h3>
            <div className="text-right">
                <Link to="/users" className="btn btn-primary">
                    <i className="fa fa-users"></i> See all users
                </Link>
            </div>
            <div className="row mt">
                <div className="col-lg-12">
                    <div className="form-panel">
                        <h4 className="mb"><i className="fa fa-angle-right"></i> User Details</h4>
                        <form className="form-horizontal style-form" onSubmit={this.handleSubmit}>
                            <FormInput label="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <FormInput label="Display Name" type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange}/>
                            <FormInput label="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            <FormInput label="Phone" type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-theme">
                                    <i className="fa fa-save"></i> Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}