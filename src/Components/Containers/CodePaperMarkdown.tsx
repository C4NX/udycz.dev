import {ReactMarkdown} from "react-markdown/lib/react-markdown";
import CodePaper from "./CodePaper";
import {Box, Link, Tooltip} from "@mui/material";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface CodePaperMarkdown {
    children: string;
    title: string;
    textAlign?: "left" | "center" | "right" | "justify" | undefined;
}

export default function CodePaperMarkdown({children, title, textAlign}: CodePaperMarkdown) {
    return (<CodePaper title={title} textAlign={textAlign}>
        <Box p={2} whiteSpace='pre-wrap'>
            <ReactMarkdown
                className={'markdown-container'}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                    a: ({node, ...props}) =>
                        <Tooltip title={props.href} placement='top'>
                            <Link {...props} target='_blank' rel='noreferrer'/>
                        </Tooltip>,
                }}>
                {children.replace(/\\n/g, "\n")}
            </ReactMarkdown>
        </Box>
    </CodePaper>)
        ;
}