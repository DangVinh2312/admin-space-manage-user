import React from 'react';
import { Link } from 'react-router-dom';
import UserUtils from '../../utils/UserUtils';

export default class UserList extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [

            ],
        }
    }

    async componentDidMount() {
        const users = await UserUtils.getAll()
        this.setState({ users: users });
    }

    editUser = () => {

    }

    deleteUser = async (_id) => {
        const response = await UserUtils.delete(_id);
        if (response) {
            let { users } = this.state;
            alert('User deleted successfully');
            users = users.filter(user => user._id !== _id)
            this.setState({ users });
        } else {
            alert('Can not delete user');
        }
    }

    render() {
        return <>
            <h3><i className="fa fa-angle-right"></i> All users</h3>
            <div className="text-right">
                <Link to="/users/add" className="btn btn-primary">
                    <i className="fa fa-user-plus"></i> Add new user
                </Link>
            </div>
            <div className="row mt">
                <div className="col-lg-12">
                    <div className="content-panel">
                        <h4><i className="fa fa-angle-right"></i> User information</h4>
                        <table className="table table-striped table-advance table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><i className="fa fa-id-card"></i> ID</th>
                                    <th className="hidden-phone"><i className="fa fa-user"></i> Username</th>
                                    <th><i className="fa fa-bookmark"></i> Display Name</th>
                                    <th><i className=" fa fa-phone"></i> Phone</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map((user, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{user._id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.displayName}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Link className="btn btn-primary btn-xs" to={`/users/${user._id}/edit`}>
                                                <i className="fa fa-pencil"></i>
                                            </Link>
                                            <button onClick={e => this.deleteUser(user._id)} className="btn btn-danger btn-xs"><i className="fa fa-trash-o "></i></button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ >
    }
}
