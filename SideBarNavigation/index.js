/** @jsxImportSource theme-ui */
import { Box, Grid } from "theme-ui";
import Link from "next/link";

export default function SideBarNavigation({ navigation, child }) {
  return (
    <Box sx={styles.grid}>
      <div sx={styles.navigator}>{navigation}</div>
      <div sx={styles.line}></div>
      <div sx={styles.child}>{child}</div>
    </Box>
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
  grid: {
    display: [null, null, null, "grid"],
    gridTemplateColumns: [null, null, null, "250px 5px 1fr", "25% 5px 2fr"],
    gap: [6],
  },
  line: { width: "5px", height: "100%", bg: "lightestPrimary" },
  child: {},

  linkTitle: {
    cursor: "pointer",
    justifyContent: "center",
  },
};
