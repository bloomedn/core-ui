/** @jsxImportSource theme-ui */
import { Box, Grid } from "theme-ui";
import Link from "next/link";

export default function SideBarNavigation({ navigation, child, pageTitle }) {
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
      <Box sx={styles.linkTitle}> {title} </Box>
    </Link>
  );
}

const styles = {
  grid: { gridTemplateColumns: ["25% 5px 2fr"], gap: [6] },
  line: { width: "5px", height: "100%", bg: "lightestPrimary" },
  child: {},

  linkTitle: {
    cursor: "pointer",
    justifyContent: "center",
  },
};
