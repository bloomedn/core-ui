/** @jsxImportSource theme-ui */
import { Card, Heading, Text, Box } from "theme-ui";
import Image from "next/image";

export default function CourseCard({ name, program, url, image }) {
  return (
    <a href={url} target="_blank" rel="noopener">
      <Card sx={styles.card}>
        <Box sx={styles.imgBox}>
          <Image src={image} className="courseCard" alt={"Class10Math"} />
        </Box>
        <Box sx={styles.lowerbox}>
          <Box>
            <Heading sx={styles.courseName}>{name}</Heading>
          </Box>
          <Heading sx={styles.institution}>BloomED</Heading>
        </Box>
        <Box>
          <Text sx={styles.price}>Rs 800</Text>
        </Box>
        <Box sx={styles.courseProgram}>
          <Text>{program}</Text>
        </Box>
      </Card>
    </a>
  );
}

// export default function CourseCard(){

//     {/* //   <Card sx={styles.card}>
// //     <Box sx={styles.box1}>
// //       <div>Thurs</div>
// //       <div className="event-day">21</div>
// //     </Box>
// //     <Box>
// //       <div className="event-title">Full Subject Text</div>
// //       <div className="event-date">21 January 2022</div>
// //       <div className="event-time">10AM - 10PM</div>
// //     </Box> */}
//   </Card>
// );
// }

const styles = {
  card: {
    cursor: "pointer",
    // transition: "margin-left 0.3s ease-in-out 0s",
    // my: 2,
    // // border: "solid 1px",
    // backgroundColor: "lightPrimary",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    "&:hover": {
      transform: "translate(0.0% , 1%)",
      transition: "all 0.25s",
    },
  },
  lowerbox: {
    display: "grid",
    gridTemplateColumns: ["75% 1fr"],
    py: 2,
    my: 2,
  },

  imgBox: {
    display: "flex",
    "& .courseCard": {
      flexGrow: 1,
    },
  },

  institution: {
    overFlow: "hidden",
    fontSize: "15px",
    pr: 1,
  },
  courseName: {
    fontSize: "24px",
    overFlow: "hidden",
    px: 4,
  },

  price: {
    fontSize: "15px",
    color: "mutedPrimary",
    px: 4,
  },

  courseProgram: {
    fontSize: "20px",
    color: "mutedPrimary",
    px: 4,
    pb: 2,
    // py: 2,
  },

  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    title: {
      fontSize: [2, 3],
      color: "headingSecondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ["10px", null, "15px"],
    },

    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
  box1: {
    fontWeight: "bold",
    borderRight: "1px solid",
    borderColor: "primary",
    alignItems: "center",
    justifyContent: "center",
    py: [2],
    fontSize: "22px",
    "& .event-day": {
      fontSize: "25px",
    },
  },
};
