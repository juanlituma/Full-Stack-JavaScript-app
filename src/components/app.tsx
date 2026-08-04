import Header from "./header";
// import {useState, useEffect} from "react";

const App = () => {

        // const [counter,setCounter] = useState(0);
        // useEffect(()=>{
        //     console.log("...")
        //     // const intervalId = setInterval(()=>{
        //     //     setCounter(counter+1)
        //     // },1000);

        //     // return () =>{
        //     //     clearInterval(intervalId);
        //     // }
        // },[])

    return <div style = {{color:"green"}} className="container" title=" REACT">

        <Header message ="Naming contest"/>
        
        </div>;

}

export default App;