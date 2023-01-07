import butterfly from "./assets/photos/butterfly.jpg";
import Calgary from "./assets/photos/Calgary.jpg";
import cirque from "./assets/photos/cirque.jpg";
import niagara from "./assets/photos/niagara.jpg";
import redpanda from "./assets/photos/redpanda.jpg";
import sarrail from "./assets/photos/sarrail.JPG";
import tent from "./assets/photos/tent.jpg";
import younggoat from "./assets/photos/younggoat.jpg";
import moon from "./assets/photos/moon.jpg";

const data = {
  Photo: [
    {
      company: "Butterfly",
      imageURL: butterfly,
      alt: "butterfly",
      order: 1,
    },
    { company: "tent", imageURL: tent, alt: "tent", order: 2 },

    { company: "Cirque", imageURL: cirque, alt: "cirque", order: 3 },
    { company: "Redpanda", imageURL: redpanda, alt: "redpanda", order: 4 },
    { company: "Sarrail", imageURL: sarrail, alt: "sarrail", order: 5 },

    { company: "niagara", imageURL: niagara, alt: "niagara", order: 6 },
    { company: "Younggoat", imageURL: younggoat, alt: "goat", order: 7 },
    {
      company: "Moon",
      imageURL: moon,
      alt: "moon",
      order: 8,
    },

    { company: "Calgary", imageURL: Calgary, alt: "calgary", order: 9 },
  ],
};
export default data;
