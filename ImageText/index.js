/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";

export default function ImageText({ left = null, right = null, sx, ...props }) {
    return (
        <Grid
            {...props}
            columns={[1, null, null, right ? "60% 1fr" : null]}
            sx={{ columnGap: [4], rowGap: [5, null, null, 6], ...sx }}
        >
            <div>{left}</div>
            <div>{right}</div>
        </Grid>
    );
}

export { EnlargedImage } from "./enlarged-image";
export { TextSection } from "./text-section";
export { Button } from "./button";
export { CustomLink } from "./custom-link";
export { CustomPara } from "./custom-para";
