/** @jsxImportSource theme-ui */

export function CustomPara({ children, sx, ...props }) {
    return <div sx={{mt:[4], ...sx}} {...props}>{children}</div>;
}
