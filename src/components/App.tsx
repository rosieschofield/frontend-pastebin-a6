import { MyComponent } from "./MyComponent";
import axios from "axios";
import { useState } from "react";
import "./App.css";

interface Snippets {
    id: number,
    title: string,
    code_snippet: string,
    date: string
}

function App() {
const [list, setList] = useState<Snippets[]>([])

    async function fetchCodeSnippets() {
        const res = await axios.get("https://pastebin-a6.onrender.com/")
        const listOfSnippets = await res.data
        setList(listOfSnippets)
        console.log(list)
    }
    

    fetchCodeSnippets()

    return (
        <div className="App">
            <MyComponent />
            {list.map((elem)=> <li key={elem.id}>{elem.title}</li>)}
        </div>
    );
}

export default App;
