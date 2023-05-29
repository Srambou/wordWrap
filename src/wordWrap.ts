export function wrapWord(paragraph: string, columnNumber: number): string {
    if (paragraph.length > columnNumber) {
        let endColumNumber = columnNumber;
        let nextStartColumnNumber = paragraph[columnNumber] === ' ' ? columnNumber + 1 : columnNumber;
        paragraph = paragraph.substring(0, endColumNumber) + '\n' +
            wrapWord(paragraph.substring(nextStartColumnNumber), columnNumber);
    }
    return paragraph;
}