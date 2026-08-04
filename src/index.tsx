import {createRoot} from "react-dom/client";
import App from "./components/app";
import axios from "axios";

import { API_SERVER_URL } from "./public-config";

const TODOS = ["the First", "The second"]



const container = document.getElementById("app");
if (!container){
    throw new Error("Root container not Found");
}
const root = createRoot(container);


axios.get(`${API_SERVER_URL}/contests`)
.then((resp)=>{
    console.log(resp.data);
    root.render(<App /*initialData = {{contests:resp.data}}*/ />)
})

