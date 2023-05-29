export function wrapWord(paragraph: string, columnNumber: number): string {
    if (paragraph.length > columnNumber) {
        const space = ' ';
        const breakLine = '\n';
        let endColumNumber = paragraph[columnNumber - 1] === space ? columnNumber - 1 : columnNumber;
        let nextStartColumnNumber = paragraph[columnNumber] === space ? columnNumber + 1 : columnNumber;
        paragraph = paragraph.substring(0, endColumNumber) + breakLine +
            wrapWord(paragraph.substring(nextStartColumnNumber), columnNumber);
    }
    return paragraph;
}