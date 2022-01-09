import React from 'react';

export default class UserList extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [

            ],
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/api/users');
        const users = await response.json();
        console.log(users)
        this.setState({ users: users });
    }

    editUser = () => {

    }

    deleteUser = async (_id) => {
        const response = await fetch('http://localhost:3001/api/users/' + _id, { 
            method: 'DELETE',
        })
        
    }

    render() {
        return <>
            <h3><i class="fa fa-angle-right"></i> All users</h3>
            <div class="row mt">
                <div class="col-lg-12">
                    <div class="content-panel">
                        <h4><i class="fa fa-angle-right"></i> User information</h4>
                        <table class="table table-striped table-advance table-hover">
                            <thead>
                                <tr>
                                    <th><i class="fa fa-id-card"></i> ID</th>
                                    <th class="hidden-phone"><i class="fa fa-user"></i> Username</th>
                                    <th><i class="fa fa-bookmark"></i> Display Name</th>
                                    <th><i class=" fa fa-phone"></i> Phone</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map((user) => {
                                    return <tr>
                                        <td>{user._id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.displayName}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button>
                                            <button onclick={e => this.editUser(user._id)} class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button>
                                            <button onClick={e => this.deleteUser(user._id)} class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
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
