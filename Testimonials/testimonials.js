/** @jsxImportSource theme-ui */
import { Box, Container, Heading } from "theme-ui";
import Slider from "react-slick";
import { rgba } from "polished";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TestimonialCard from "./test-card";
import Support from "assets/Support.svg";
import Teacher1 from "assets/testimonial/Teacher1.svg";
import Teacher2 from "assets/testimonial/Teacher2.svg";

const data = [
  {
    id: 1,
    author: Teacher2,
    title: "Easy Money",
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: "Ramesh Pathak",
    designation: "Test Prep- IOE Entrance",
  },
  {
    id: 2,
    author: Teacher1,
    title: "Happy Students",
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: "Rojes Rai",
    designation: "Loksewa - Officer",
  },
  {
    id: 3,
    author: Teacher2,
    title: "Comprehensive System",
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: "Bikram Baral",
    designation: "Mathematics - Opt Class 10",
  },
  {
    id: 4,
    author: Teacher1,
    title: "Support and Training",
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: "Pushpa Kharel",
    designation: "Programming - JS and React",
  },
];

const settings = {
  arrows: false,
  dots: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <FaArrowCircleRight />,
  prevArrow: <FaArrowCircleLeft />,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container sx={{ px: "7%" }}>
        <Box sx={{ display: "block" }}>
          <Heading sx={styles.headingFirstSlide} as="h2" variant="heroPrimary">
            {"What do our teachers say?"}
          </Heading>
        </Box>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  img: {
    width: ["70px", null, null, "80px", "90px"],
    height: "auto",
    flexShrink: 0,
    mr: [4],
  },
  section: {
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
  },

  headingFirstSlide: {
    pb: "18px",
    fontWeight: "600",
    fontSize: "34px",
    lineHeight: "120%",
    textAlign: "center",
  },

  slider: {
    ".slick-list": {
      mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      mr: [null, null, null, null, 4, 0],
    },

    ".slick-dots": {
      display: "flex !important",
      margin: 0,
      padding: 0,
      listStyle: "none",
      alignItems: "center",
      justifyContent: "center",
      marginTop: [1, null, null, 1],
      li: {
        mx: 1,
        display: "flex",
      },
      button: {
        backgroundColor: rgba("#2D3D50", 0.15),
        borderRadius: 50,
        border: 0,
        cursor: "pointer",
        padding: 0,
        overflow: "hidden",
        textIndent: "-9999em",
        width: 5,
        height: 3,
        outline: 0,
        transition: "all 0.3s ease-in-out 0s",
      },
      ".slick-active button": {
        backgroundColor: rgba("#F34E4E", 0.9),
        width: 8,
      },
    },
  },
};
