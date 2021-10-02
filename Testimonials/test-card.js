/** @jsxImportSource theme-ui */

import { Card, Text, Box, Heading } from "theme-ui";
import Image from "next/image";

export default function TestimonialCard({ data }) {
  return (
    <section id="testimonial">
      <Box sx={styles.reviewCard} key={`testimonial--key${data.id}`}>
        <Heading as="h3" sx={styles.title}>
          {data.title}
        </Heading>
        <Text sx={styles.description}>{data.text}</Text>
        <Box sx={styles.cardFooter}>
          <div className="image">
            <Image
              src={data.author}
              height="100px"
              width="100px"
              alt="Teacher's Image"
            />
          </div>
          <div className="reviewer-info">
            <Heading as="h4" sx={styles.heading}>
              {data.authorName}
            </Heading>
            <Text sx={styles.designation}>{data.designation}</Text>
          </div>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    marginTop: [5, null, null, "33px"],
    ".image": {
      mr: [3, null, null, 4],
      display: "flex",
      img: {
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        objectFit: "cover",
      },
    },
  },

  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "mutedPrimary",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: 1.4,
  },
};
