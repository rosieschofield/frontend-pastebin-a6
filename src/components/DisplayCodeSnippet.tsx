import { Snippet } from "./App";

interface CodeSnippetProps {
    codeSnippet: Snippet;
}

export function DisplayCodeSnippet(props: CodeSnippetProps): JSX.Element {
    return (
        <tr>
            <td>{props.codeSnippet.title}</td>
            <td>{props.codeSnippet.code_snippet}</td>
            <td>{props.codeSnippet.date}</td>
        </tr>
    );
}
