/** @jsxImportSource theme-ui */
import Heading from "remote/core-ui/Heading";

export function TextSection({ title, children }) {
    return (
        <div>
            <h1>Test Text Section </h1>
            <Heading>{title}</Heading>
        </div>
    );
}
