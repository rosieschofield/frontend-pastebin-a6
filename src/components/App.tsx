import { DisplayCodeSnippet } from "./DisplayCodeSnippet";
import axios from "axios";
import { useState } from "react";
import "./App.css";

export interface Snippet {
    id: number;
    title: string;
    code_snippet: string;
    date: string;
}

function App() {
    const [list, setList] = useState<Snippet[]>([]);

    async function fetchCodeSnippets() {
        const res = await axios.get("https://pastebin-a6.onrender.com/");
        const listOfSnippets = await res.data;
        setList(listOfSnippets);
        console.log(list);
    }

    fetchCodeSnippets();

    return (
        <div className="App">
            <textarea></textarea>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Code</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((elem) => (
                        <DisplayCodeSnippet key={elem.id} codeSnippet={elem} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
