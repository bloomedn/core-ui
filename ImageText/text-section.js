/** @jsxImportSource theme-ui */
import Heading from "remote/core-ui/Heading";

export function TextSection({ title, children }) {
  return (
    <div sx={styles.textSection}>
      <Heading as="h2" sx={styles.headingTitle}>
        {title}
      </Heading>
      {children}
    </div>
  );
}

const styles = {
  textSection: {
    py: [6, null, null, 7],
  },
  headingTitle: {
    alignText: "center",
    my: [3],
  },
};
