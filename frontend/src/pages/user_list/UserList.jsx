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
        const response = await fetch('http://localhost:3001/api');
        const users = await response.json();
        console.log(users)
        this.setState({users: users});
    }

    render() {
        return <section class="wrapper site-min-height">
            <h3><i class="fa fa-angle-right"></i> All users</h3>
            <div class="row mt">
                <div class="col-lg-12">
                    <table className="table table-hover">
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Display name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>

                        {this.state.users.map((user) => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.displayName}</td>
                                <td>{user.phone}</td>
                                <td></td>
                            </tr>
                        })}

                    </table>
                </div>
            </div>
        </section>
    }
}