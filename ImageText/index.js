/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";

export default function ImageText({ left = null, right = null, ...props }) {
    return (
        <Grid
            {...props}
            columns={[1, null, null, null, 2]}
            sx={{ columnGap: [5], rowGap: [5, null, null, 6] }}
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
