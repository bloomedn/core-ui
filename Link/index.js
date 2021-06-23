import NextLink from "next/link";

export default function Link({ name, href }) {
    return <NextLink href={href}>{name}</NextLink>;
}
