import butterfly from "./assets/photos/butterfly.jpg";
import Calgary from "./assets/photos/Calgary.jpg";
import cirque from "./assets/photos/cirque.jpg";
import owl from "./assets/photos/owl.jpg";
import redpanda from "./assets/photos/redpanda.jpg";
import sarrail from "./assets/photos/sarrail.JPG";
import tent from "./assets/photos/tent.jpg";
import younggoat from "./assets/photos/younggoat.jpg";

const data = {
  Photo: [
    {
      company: "Butterfly",
      imageURL: butterfly,
      alt: "butterfly",
      order: 1,
    },
    { company: "Calgary", imageURL: Calgary, alt: "butterfly", order: 2 },
    { company: "Cirque", imageURL: cirque, alt: "cirque", order: 3 },
    { company: "Owl", imageURL: owl, alt: "owl", order: 4 },
    { company: "Redpanda", imageURL: redpanda, alt: "redpanda", order: 5 },
    { company: "Sarrail", imageURL: sarrail, alt: "sarrail", order: 6 },
    { company: "tent", imageURL: tent, alt: "tent", order: 7 },
    { company: "Younggoat", imageURL: younggoat, alt: "goat", order: 8 },
  ],
};
export default data;
