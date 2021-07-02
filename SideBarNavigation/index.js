/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";
import Link from "next/link";

export default function SideBarNavivation({ navigation, child }) {
    return (
        <Grid sx={styles.grid}>
            <div sx={styles.navigator}>{navigation}</div>
            <div sx={styles.line}></div>
            <div sx={styles.child}>{child}</div>
        </Grid>
    );
}

export function SiderBarNavigationItem({ title, href }) {
    return (
        <Link href={href} scroll={false}>
            <div sx={{ cursor: "pointer" }}> {title} </div>
        </Link>
    );
}

const styles = {
    grid: { gridTemplateColumns: ["300px 5px 1fr"], gap: [6] },
    line: { width: "5px", height: "100%", bg: "lightestPrimary" },
    child: {},
};
