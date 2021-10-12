/** @jsxImportSource theme-ui */

import { Box } from "@theme-ui/components";

export default function Locmap() {
  return (
    <Box sx={styles.map}>
      <div>
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Bloom%20Nepal%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </Box>
  );
}

const styles = {
  map: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    transition: "ease-in-out 0.4s",
    borderRadius: "8px",
    position: "relative",
    ".maprouter": {
      position: "relative",
      textAlign: "right",
      height: "500px",
      width: "600px",
    },
  },
};
