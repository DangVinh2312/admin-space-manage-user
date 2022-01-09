// function App () {
//     return <h1> Hello from function component</h1>
// }
import React from "react";
import Aside from "./components/aside";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./pages/user_list/UserList";

class App extends React.Component {

    render() {
        return <section id="container">
            <Header />

            <Aside />

            <section id="main-content">
                <UserList />
            </section>

            <Footer />

        </section>
    }
}

export default App;