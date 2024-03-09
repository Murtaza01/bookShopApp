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
    description:
      "the owner of the site, yep, i read books too, who would've known",
  },
  {
    id: id(),
    name: "Malak",
    image: malak,
    description:
      "very curious about books, judges a book by its cover and popularity, plans to read 200 pages a day, ends up reading 2, then questions life purpose",
  },
  {
    id: id(),
    name: "Hala",
    image: hala,
    description: "causal reader",
  },
  {
    id: id(),
    name: "Aws",
    image: aws,
    description:
      "the person that made this site possible, and the reason why i got into programming, a great man and mentor",
  },
  {
    id: id(),
    name: "Mariam",
    image: mariam,
    description:
      '"the reason why i like books because they improve my vocabulary and imagination, makes me escape reality and because they\'re calming"',
  },
  {
    id: id(),
    name: "Mais",
    image: mais,
    description: "",
  },
];

export default userData;
