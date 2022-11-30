import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

export const parseMessageBody = (body: string, belongToCurrentUser: boolean) => {
    const renderedResult: Array<ReactElement | string> = [];

    // Show user input exactly as placed in textbox
    if (belongToCurrentUser) {
        renderedResult.push(body);
    } else {
        renderedResult.push(<ReactMarkdown>{body}</ReactMarkdown>);
    }

    return renderedResult;
};
