/** @jsxImportSource theme-ui */
import NextLink from "next/link";

export default function Link(props) {
    return (
        <NextLink
            sx={{
                ...props.sx,
                display: "inline",
                color: "red",
            }}
            {...props}
        />
    );
}
