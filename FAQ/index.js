/** @jsxImportSource theme-ui */
import { useState } from "react";

export const Faq = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen((open) => !open)}>
            <p>{question}</p>
            {open && <p>{answer}</p>}
        </div>
    );
};

export default Faq;
