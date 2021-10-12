/** @jsxImportSource theme-ui */
import { Card, Heading, Text, Box } from "theme-ui";
import Image from "next/image";

export default function CourseCard({
  name,
  program,
  url,
  image,
  grade = "Class 10",
}) {
  return name.includes(grade) ? (
    <Card sx={{ display: "flex" }}>
      <a href={url} target="_blank" rel="noopener">
        <Card sx={styles.card}>
          <Card sx={styles.imgBox}>
            <Image src={image} alt={name} height="150px" width="350px" />
          </Card>
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
    </Card>
  ) : null;
}

const styles = {
  card: {
    cursor: "pointer",
    minHeight: "350px",
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
    // bg: "red",
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
  },
};
