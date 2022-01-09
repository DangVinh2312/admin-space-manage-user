// function App () {
//     return <h1> Hello from function component</h1>
// }
import React from "react";
import { Route, Routes } from "react-router";
import Aside from "./components/aside";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./pages/user_list/UserList";
import AddNewUser from "./pages/user_list/AddNewUser";

class App extends React.Component {

    render() {
        return <section id="container">
            <Header />

            <Aside />

            <section id="main-content">

                <Routes>
                    <section class="wrapper site-min-height">
                        <Route path="/users" element={<UserList />} />
                        <Route path="/users/add" element={<AddNewUser />} />
                    </section>
                </Routes>

            </section>

            <Footer />

        </section>
    }
}

export default App;