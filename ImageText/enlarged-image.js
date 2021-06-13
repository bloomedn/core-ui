/** @jsxImportSource theme-ui */
import MobileDesktopImage from "remote/core-ui/MobileDesktopImage";
import SanityImage from "components/SanityImage";

export function EnlargedImage({ image, textOnRight }) {
    return (
        <div
            sx={{
                my: [0, null, null, null, -5],
                borderRadius: ["2rem"],
                overflow: "hidden",
                ...styles.img,
                "&:hover": {
                    border: "4px solid",
                    borderColor: "primary",
                    transform: textOnRight
                        ? "rotate(-2.5deg)"
                        : "rotate(2.5deg)",
                },
            }}
        >
            <MobileDesktopImage
                desktop={<SanityImage photo={image?.defaultImage} />}
                mobile={
                    <SanityImage
                        photo={
                            image?.mobileImage?.asset
                                ? image?.mobileImage
                                : image?.defaultImage
                        }
                    />
                }
            />
        </div>
    );
}

const styles = {
    img: {
        borderBottom: "4px solid",
        borderColor: "primary",
    },
};
