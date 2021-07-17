/** @jsxImportSource theme-ui */
import { Heading } from "theme-ui";

export default function HeadingDefault({ children, sx, ...props }) {
    return (
        <Heading sx={{ color: "text", ...sx }} {...props}>
            {children}
        </Heading>
    );
}

export function HeadingBase({ type, sx, ...props }) {
    switch (type) {
        case "sectionHead":
            return (
                <HeadingDefault
                    as="h2"
                    sx={{ ...styles.sectionHead, ...sx }}
                    {...props}
                />
            );
        case "sectionHeadLarge":
            return (
                <HeadingDefault
                    as="h2"
                    sx={{ ...styles.sectionHeadLarge, ...sx }}
                    {...props}
                />
            );
        case "sectionHeadSmall":
            return (
                <HeadingDefault
                    as="h2"
                    sx={{ ...styles.sectionHeadSmall, ...sx }}
                    {...props}
                />
            );
        case "postHead":
            return (
                <HeadingDefault
                    as="h2"
                    sx={{ ...styles.sectionHead, ...sx }}
                    {...props}
                />
            );
        case "itemHead":
            return (
                <HeadingDefault
                    as="h3"
                    sx={{ ...styles.itemHead, ...sx }}
                    {...props}
                />
            );
        default:
            return <p>heading base without type</p>;
    }
}




const styles = {
    sectionHeadLarge: {
        fontSize: [8],
    },
    sectionHead: {
        fontSize: [6],
        lineHeight: 1.5,
        paddingBottom :['5%'], 
    },
    sectionHeadSmall: {
        fontSize: [5],
    },
    itemHead: {
        fontSize: [4],
    },
};
