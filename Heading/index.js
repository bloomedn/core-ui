/** @jsxImportSource theme-ui */
import { Heading } from "theme-ui";

export default function HeadingBase({ children, sx, ...props }) {
    return (
        <Heading sx={{ color: "text", ...sx }} {...props}>
            {children}
        </Heading>
    );
}
