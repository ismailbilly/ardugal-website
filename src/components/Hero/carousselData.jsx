import img1 from "../../assets/carousel/civil1.jpg";
import img2 from "../../assets/carousel/civil.jpg";
import img3 from "../../assets/carousel/construction.jpg";
import img4 from "../../assets/carousel/street-light-1.jpg";


export const carousselData = [
  {
    image: img2,
    aosDelay: "200",
    text: {
      heading: "Innovating the Future",
      highlight: { word: "Future", color: "yellow" },
      subheading: "Specializing in Diverse Engineering Fields",
      callToAction: "Discover Our Services",
    },
  },
  {
    image: img1,
    aosDelay: "400",
    text: {
      heading: "Engineering Excellence",
      highlight: { word: "Excellence", color: "red" },
      subheading: "Transforming Ideas into Reality",
      callToAction: "Contact Us",
    },
  },
  {
    image: img3,
    aosDelay: "200",
    text: {
      heading: "Building Tomorrow, Today",
      highlight: { word: "Tomorrow", color: "yellow" },
      subheading: "Your Trusted Engineering Partner",
      callToAction: "Learn More",
    },
  },
  {
    image: img4,
    aosDelay: "200",
    text: {
      heading: "Where Innovation Meets Expertise",
      highlight: { word: "Meets", color: "red" },
      subheading: "Expert Solutions Across Engineering Disciplines",
      callToAction: "Explore Our Work",
    },
  },
];

const HighlightedHeading = ({ text, highlight }) => {
    const parts = text.split(new RegExp(`(${highlight.word})`, "gi"));
    return (
      <h1>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.word.toLowerCase() ? (
            <span
              key={index}
              style={{ color: highlight.color, fontStyle: "italic" }}
            >
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </h1>
    );
};
  
export default HighlightedHeading;