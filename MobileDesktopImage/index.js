/** @jsxImportSource theme-ui */
export default function MobileDesktopImage({ mobile, desktop }) {
    return (
        <>
            <div sx={{ display: [null, null, null, "none"] }}>{mobile}</div>
            <div sx={{ display: ["none", null, null, "block"] }}>
                {desktop}
            </div>
        </>
    );
}
