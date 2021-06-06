/** @jsxImportSource theme-ui */
import {Grid} from 'theme-ui'

export default function GridBase({ children, sx, ...props }) {
    return (
        <Grid sx={{ color: "text", ...sx }} {...props}>
            {children}
        </Grid>
    );
}
