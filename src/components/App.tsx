import { DisplayCodeSnippet } from "./DisplayCodeSnippet";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

export interface Snippet {
    id: number;
    title: string;
    code_snippet: string;
    date: string;
}

export interface NewSnippet {
    title?: string;
    code_snippet: string;
    date: string;
}

export const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://pastebin-a6.onrender.com"
        : "http://localhost:4000";

function App() {
    const [list, setList] = useState<Snippet[]>([]);
    const [titleText, setTitleText] = useState<string>("");
    const [codeText, setCodeText] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [aux, setAux] = useState(0);

    async function fetchCodeSnippets() {
        const res = await axios.get(baseUrl + "/");
        const listOfSnippets = await res.data;
        setList(listOfSnippets);
        console.log("adsfdas");
    }

    useEffect(() => {
        fetchCodeSnippets();
    }, [aux]);

    async function handleSubmitNewSnippet() {
        const newSnippet: NewSnippet = {
            title: titleText,
            code_snippet: codeText,
            date: date,
        };
        await axios.post(baseUrl + "/", newSnippet);
        setAux((prevAux) => prevAux + 1);
    }

    return (
        <div className="App">
            <p>Title (optional)</p>
            <input
                type="text"
                placeholder="add optional title"
                onChange={(e) => setTitleText(e.target.value)}
                value={titleText}
            ></input>
            <p>Code</p>
            <textarea
                placeholder="write your code here..."
                onChange={(e) => setCodeText(e.target.value)}
                value={codeText}
            ></textarea>
            <p>Date (please input in format YYYY-MM-DD)</p>
            <br />
            <input
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            ></input>
            <button onClick={handleSubmitNewSnippet}>Submit</button>
            <button onClick={fetchCodeSnippets}>Refresh</button>
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
