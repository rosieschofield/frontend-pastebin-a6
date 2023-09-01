import { Snippet } from "./App";
import "./App.css";
import { cutSnippetToFiveLines } from "./cutSnippetToFiveLines";

interface CodeSnippetProps {
    codeSnippet: Snippet;
}

export function DisplayCodeSnippet(props: CodeSnippetProps): JSX.Element {
    return (
        <tr>
            <td>{props.codeSnippet.title}</td>
            <td className="display-linebreak">
                {cutSnippetToFiveLines(props.codeSnippet.code_snippet)}
            </td>
            <td>{props.codeSnippet.date}</td>
        </tr>
    );
}
