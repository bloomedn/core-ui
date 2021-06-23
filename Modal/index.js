import Link from "next/link";
import Section from "remote/core-ui/Section";

export default function Modal({ backHref, children }) {
    return (
        <div>
            <div>
                <Link href={backHref}>X</Link>
            </div>
            <Section>{children}</Section>
        </div>
    );
}
