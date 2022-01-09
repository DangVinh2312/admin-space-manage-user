const reactDom = require("react-dom");
const {default: App} = require("./App");

reactDom.render(
    <App />,
    document.querySelector("#root")
);