import { v4 as id } from "uuid";
import malak from "../images/users/malak.png";
import hala from "../images/users/hala.png";
import murtaza from "../images/users/murtaza.png";
import aws from "../images/users/aws.png";
import mariam from "../images/users/mariam.png";
import mais from "../images/users/mais.png";

const userData = [
  {
    id: id(),
    name: "Murtaza",
    image: murtaza,
    description: "the owner of the site, yep, i read books too :D",
  },
  {
    id: id(),
    name: "Malak",
    image: malak,
    description: "",
  },
  {
    id: id(),
    name: "Hala",
    image: hala,
    description: "",
  },
  {
    id: id(),
    name: "Aws",
    image: aws,
    description: "",
  },
  {
    id: id(),
    name: "Mariam",
    image: mariam,
    description: "",
  },
  {
    id: id(),
    name: "Mais",
    image: mais,
    description: "",
  },
];

export default userData;
