/** @jsxImportSource theme-ui */
import React from "react";
import { Grid } from "theme-ui";

export default function ImageText({
  left = null,
  right = null,
  wide = true,
  textOnRight = false,
  sx,
  columns,
  ...props
}) {
  return (
    <Grid
      {...props}
      columns={
        columns || [
          1,
          null,
          null,
          textOnRight ? "48% 1fr" : "1ft 48%",
          textOnRight ? "40% 1fr" : "1fr 40%",
        ]
      }
      sx={{
        columnGap: [5, null, null, null, wide ? 7 : 4],
        rowGap: [5, null, null, 6],
        ...sx,
        ...styles.grid,
      }}
      {...props}
    >
      <div>{React.cloneElement(left, { textOnRight })}</div>
      <div>{React.cloneElement(right, { textOnRight })}</div>
    </Grid>
  );
}

const styles = {
  grid: {
    "&:hover": {
      "& h2": { color: "primary" },
    },
  },
};

export { EnlargedImage } from "./enlarged-image";
export { TextSection } from "./text-section";
export { Button } from "./button";
export { CustomLink } from "./custom-link";
export { CustomPara } from "./custom-para";
