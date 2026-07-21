import {createRoot} from "react-dom/client";

const App = () => {
    return <div>Hello React</div>;
}

const container = document.getElementById("app");
if (!container){
    throw new Error("Root container not Found");
}

const root = createRoot(container);

root.render(<App/>)