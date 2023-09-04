export function cutSnippetToFiveLines(code: string): string {
    const codeArray = code.split("\n");
    if (codeArray.length < 6) {
        return code;
    } else {
        let shortCode = codeArray[0];
        for (let i = 1; i < 5; i++) {
            shortCode += `\n${codeArray[i]}`;
        }
        return shortCode;
    }
}
