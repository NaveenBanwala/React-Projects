import "./App.css";
import {useEffect,useState} from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Main from "../components/Main";

function App(){
    const [inital,setNext] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
        setNext(window.scrollY);
    }
    window.addEventListener("scroll",handleScroll);

},[])
    return(
        <>
        <Header/>
        <Section inital={inital}/>
        <Main/>
        </>
    );
}

export default App;