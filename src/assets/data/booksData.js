import { v4 as id } from "uuid";
import meditation from "../images/books/meditation.jpg";
import the_last_days_of_socrates from "../images/books/the_last_days_of_socrates.jpg";
import the_red_book from "../images/books/the_red_book.jpg";
import the_symposium from "../images/books/the_symposium.jpg";
import the_road from "../images/books/the_road.jpg";
import im_ok_your_ok from "../images/books/im_ok_your_ok.jpg";
import the_adv_of_tom_sawyer from "../images/books/the_adv_of_tom_sawyer.jpg";
import the_odyssey from "../images/books/the_odyssey.jpg";
import the_imp_of_being_earnest from "../images/books/the_imp_of_being_earnest.jpg";
import the_great_gatsby from "../images/books/the_great_gatsby.jpg";
import selected_poems from "../images/books/selected_poems.jpg";
import tale_of_two_cities from "../images/books/tale_of_two_cities.jpg";
import the_shining from "../images/books/the_shining.jpg";
import king_lear from "../images/books/king_lear.jpg";
import portiat_young_man from "../images/books/portiat_young_man.jpg";
import little_women from "../images/books/little_women.jpg";
import the_social_contract from "../images/books/the_social_contract.jpg";
import the_art_of_war from "../images/books/the_art_of_war.jpg";
import know_your_iq from "../images/books/know_your_iq.jpg";
import the_psychology_of_feelings from "../images/books/the_psychology_of_feelings.jpg";
import the_letters_of_mozart from "../images/books/the_letters_of_mozart.jpg";
import who_was_mozart from "../images/books/who_was_mozart.jpg";
import swinging_to_the_abyss from "../images/books/swinging_to_the_abyss.jpg";
import learn_python from "../images/books/learn_python.jpg";
import learn_python_2 from "../images/books/learn_python_2.jpg";
import computer_science from "../images/books/computer_science.jpg";
import cool_shell_scripts from "../images/books/cool_shell_scripts.jpg";
import make_it_stick from "../images/books/make_it_stick.jpg";
import the_god_that_failed from "../images/books/the_god_that_failed.jpg";
import up_at_the_villa from "../images/books/up_at_the_villa.jpg";
import the_last_battle from "../images/books/the_last_battle.jpg";

const booksData = [
  {
    id: id(),
    name: "Meditation",
    user: "Murtaza",
    year: "181",
    price: 6,
    email: "Murtaza.alkabie@gmail.com",
    author: "Marcus Aurelius",
    genre: "philosophy",
    image: meditation,
    description:
      "Meditations is a series of personal writings by Marcus Aurelius, Roman Emperor from AD 161 to 180, recording his private notes to himself and ideas on Stoic philosophy. Marcus Aurelius wrote the 12 books of the Meditations in Koine Greek as a source for his own guidance and self-improvement...",
    lendable: false,
    exchangeable: true,
  },

  {
    id: id(),
    name: "The Adventures of Tom Sawyer",
    user: "Malak",
    email: "",
    price: 8,
    year: "1876",
    author: "Mark Twain",
    genre: "fiction",
    image: the_adv_of_tom_sawyer,
    description:
      "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840's in the town of St. Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the Odyssey",
    user: "Malak",
    email: "",
    price: 9,
    year: "701",
    author: "Homer",
    genre: "fiction",
    image: the_odyssey,
    description:
      "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences. As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the social contract",
    user: "Murtaza",
    email: "",
    price: 4,
    year: "1762",
    author: "Jean-Jacques Rousseau",
    genre: "philosophy",
    image: the_social_contract,
    description:
      "Man is born free; and everywhere he is in chains...These are the famous opening words of a treatise that has not ceased to stir vigorous debate since its first publication in 1762. Rejecting the view that anyone has a natural right to wield authority over others, Rousseau argues instead for a pact",
    lendable: true,
    exchangeable: true,
  },
  // {
  //   id: id(),
  //   name: "",
  //   user: "Malak",
  //   email: "",
  //   price: "",
  //   year: "",
  //   author: "",
  //   genre: "fiction",
  //   image: "",
  //   description: "",
  //   lendable: true,
  //   exchangeable: true,
  // },
  {
    id: id(),
    name: "The Last Battle",
    user: "Hala",
    email: "",
    price: 3.5,
    year: "1956",
    author: "C.S. Lewis",
    genre: "fiction",
    image: the_last_battle,
    description:
      "For the first time, an edition of Lewis's classic fantasy fiction packaged specifically for adults. Complementing the look of the author's non-fiction books, and anticipating the forthcoming Narnia feature films, this edition contains an exclusive P.S. section about the history of the book, plus",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Up at the Villa",
    user: "Hala",
    email: "",
    price: 5,
    year: "1941",
    author: "W. Somerset Maugham",
    genre: "fiction",
    image: up_at_the_villa,
    description:
      "On the day her older and prosperous friend asks her to marry him, Mary Leonard demurs and decides to postpone her reply a few days. But driving into the hills above Florence alone that evening, Mary offers a ride to a handsome stranger. And suddenly, her life is utterly, irrevocably altered.",
    lendable: true,
    exchangeable: true,
  },

  {
    id: id(),
    name: "Make It Stick: The Science of Successful Learning",
    user: "Aws",
    email: "",
    price: 5,
    year: "2014",
    author: "Peter C. Brown",
    genre: "",
    image: make_it_stick,
    description:
      "To most of us, learning something “the hard way” implies wasted time and effort. Good teaching, we believe, should be creatively tailored to the different learning styles of students and should use strategies that make learning easier. Make It Stick turns fashionable ideas like these on their head.",
    lendable: true,
    exchangeable: true,
  },

  {
    id: id(),
    name: "Letters of Wolfgang Amadeus Mozart",
    user: "Malak",
    email: "",
    price: 6,
    year: "1928",
    author: "Wolfgang Amadeus Mozart",
    genre: "biography",
    image: the_letters_of_mozart,
    description:
      "Mozart was a faithful correspondent, and this full and expert collection of more than 100 letters covers his brief and tumultuous life, from the years when the child prodigy astonished the courts of Europe to his final days, when he wrote loving notes to his wife and long, money-seeking letters to friends and patrons.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "The psychology of feelings and attention",
    user: "Murtaza",
    email: "Murtaza.alkabie@gmail.com",
    price: 2,
    year: "1908",
    author: "Edward B. Titchener",
    genre: "psychology",
    image: the_psychology_of_feelings,
    description:
      "Excerpt from Lectures on the Elementary Psychology of Feeling and Attention I have not been able, either in the lectures themselves or in the appended notes, to take account of all that is important in the current psychology of feeling and attention. Indeed, my sins of omission are Obvious",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the last days of socrates",
    user: "Murtaza",
    email: "Murtaza.alkabie@gmail.com",
    price: 4,
    year: "181",
    author: "Plato",
    genre: "philosophy",
    image: the_last_days_of_socrates,
    description:
      "The trial and death of Socrates (469-399 BCE) have almost as central a place in Western consciousness as the trial and death of Jesus. In four superb dialogues, Plato provides the classic account. Euthyphro finds Socrates outside the court-house",
    lendable: false,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Know your own I.Q",
    user: "Murtaza",
    email: "",
    price: 1,
    year: "1962",
    author: "Hans Jürgen Eysenck",
    genre: "psychology",
    image: know_your_iq,
    description:
      "intelligence quotient, as a useful means of measuring brain capacity, has come increasingly into the public eye in recent years. This famous book (and its sequel Check Your Own IQ) enables the reader to estimate and confirm his/her own IQ rating.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the art of war",
    user: "Murtaza",
    email: "",
    price: 4,
    year: "401",
    author: "Sun Tzu",
    genre: "philosophy",
    image: the_art_of_war,
    description:
      "Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life.",
    lendable: true,
    exchangeable: true,
  },

  {
    id: id(),
    name: "Little Women",
    user: "Malak",
    email: "",
    price: 6,
    year: "1868",
    author: "Louisa May Alcott",
    genre: "fiction",
    image: little_women,
    description:
      " The story follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—and details their passage from childhood to womanhood.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "A Portait of the Artist as a Young Man",
    user: "Malak",
    email: "",
    price: 7,
    year: "1916",
    author: "James Joyce",
    genre: "fiction",
    image: portiat_young_man,
    description:
      "The portrayal of Stephen Dedalus's Dublin childhood and youth, his quest for identity through art and his gradual emancipation from the claims of family, religion and Ireland itself, is also an oblique self-portrait of the young James Joyce and a universal testament to the artist's 'eternal imagination'",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "king lear",
    user: "Malak",
    email: "",
    price: 4,
    year: "1605",
    author: "William Shakespeare",
    genre: "fiction",
    image: king_lear,
    description:
      "Shakespeare's King Lear challenges us with the magnitude, intensity, and sheer duration of the pain that it represents. Its figures harden their hearts, engage in violence, or try to alleviate the suffering of others. Lear himself rages until his sanity cracks. What, then, keeps bringing us back to King Lear?",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Democracy: The God That Failed",
    user: "Aws",
    email: "",
    price: 6,
    year: "2001",
    author: "Hans-Hermann Hoppe",
    genre: "fiction",
    image: the_god_that_failed,
    description:
      "The core of this book is a systematic treatment of the historic transformation of the West from monarchy to democracy. Revisionist in nature, it reaches the conclusion that monarchy is a lesser evil than democracy, but outlines deficiencies in both. Its methodology is axiomatic-deductive, allowing the writer to derive economic and sociological theorems, and then apply them to interpret historical events.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Computer Science Distilled",
    user: "Aws",
    email: "",
    price: 9,
    year: "2017",
    author: "Wladston Ferreira Filho",
    genre: "",
    image: computer_science,
    description: "",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "The Shining",
    user: "Malak",
    email: "",
    price: 5,
    year: "1977",
    author: "Stephen King",
    genre: "fiction",
    image: the_shining,
    description:
      "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "A Tale of Two Cities",
    user: "Malak",
    email: "",
    price: 7,
    year: "1859",
    author: "Charles Dickens",
    genre: "fiction",
    image: tale_of_two_cities,
    description:
      "A Tale of Two Cities is a historical novel published in 1859 by Charles Dickens, set in London and Paris before and during the French Revolution",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Wicked Cool Shell Scripts",
    user: "Aws",
    email: "",
    price: 6,
    year: "2004",
    author: "Dave Taylor",
    genre: "",
    image: cool_shell_scripts,
    description:
      "The UNIX shell is the main scripting environment of every Linux, Mac OS X and UNIX system, whether a rescued laptop or a million-dollar mainframe. This cookbook of useful, customizable, and fun scripts gives you the tools to solve common Linux, Mac OS X and UNIX problems and personalize your computing environment. Among the more than 100 scripts",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Selected Poems",
    user: "Malak",
    email: "",
    price: 6,
    year: "1981",
    author: "Sylvia Plath",
    genre: "fiction",
    image: selected_poems,
    description:
      "This selection of Sylvia Plath's poetry - chosen by Ted Hughes - shows Plath to be a major poet of the 20th century.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the great gatsby",
    user: "Malak",
    email: "",
    price: 4,
    year: "1925",
    author: "Scott Fitzgerald",
    genre: "fiction",
    image: the_great_gatsby,
    description:
      "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Learn Python 3 the Hard Way simple introduction",
    user: "Aws",
    email: "",
    price: 7,
    year: "2017",
    author: "Shaw Zed A.",
    genre: "",
    image: learn_python,
    description:
      "In Learn Python 3 the Hard Way, you’ll learn Python by working through 52 brilliantly crafted exercises. Read them. Type their code precisely. (No copying and pasting!) Fix your mistakes. Watch the programs run. As you do, you’ll learn how a computer works; what good programs look like; and how to read, write, and think about code",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Who Was Wolfgang Amadeus Mozart?",
    user: "Malak",
    email: "",
    price: 1.5,
    year: "2002",
    author: "Yona Zeldis McDonough",
    genre: "biography",
    image: who_was_mozart,
    description:
      "Born in Austria in 1756, Wolfgang Amadeus Mozart composed his first piece of music, a minuet, when he was just five years old! Soon after, he was performing for kings and emperors. Although he died at the young age of thirty-five, Mozart left a legacy of more than 600 works",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "The Importance of Being Earnest",
    user: "Malak",
    email: "",
    price: 5,
    year: "1895",
    author: "Oscar Wilde",
    genre: "fiction",
    image: the_imp_of_being_earnest,
    description:
      "The Importance of Being Earnest, A Trivial Comedy for Serious People is a play by Oscar Wilde. First performed on 14 February 1895 at the St James's Theatre in London, it is a farcical comedy in which the protagonists maintain fictitious personae to escape burdensome social obligations.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the symposium",
    user: "Murtaza",
    price: 4,
    year: "381",
    author: "Plato",
    image: the_symposium,
    description:
      "In the course of a lively drinking party, a group of Athenian intellectuals exchange views on eros, or desire. From their conversation emerges a series of subtle reflections on gender roles, sex in society and the sublimation of basic human instincts.",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "the Road",
    user: "Murtaza",
    price: 1,
    year: "2006",
    genre: "fiction",
    author: "Cormac McCarthy",
    image: the_road,
    description:
      "A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they dont know what, if anything, awaits them there. They have nothing",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "Learn Python 3 the Hard Way The Next Step",
    user: "Aws",
    email: "",
    price: 8,
    year: "2016",
    author: "Shaw Zed A.",
    genre: "",
    image: learn_python_2,
    description:
      "Transform Your Ideas into High-Quality Python Code! Zed Shaw has perfected the world's best system for becoming a truly effective Python 3.x developer. Follow it and you will succeed--just like the tens of millions of programmers he's already taught. You bring the discipline, commitment, and persistence; the author supplies everything else. ",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "I'm OK - You're OK",
    user: "Murtaza",
    price: 1,
    year: "1967",
    genre: "psychology",
    author: "Thomas A.Harris",
    image: im_ok_your_ok,
    description:
      "Transactional analysis delineates three ego-states (parent, adult and child) as the basis for the content and quality of interpersonal communication.",
    lendable: true,
    exchangeable: true,
  },

  {
    id: id(),
    name: "الكتاب الاحمر",
    user: "Malak",
    price: 12,
    year: "181",
    language: "Arabic",
    genre: "biography",
    author: "كارل غوستاف يونغ ",
    image: the_red_book,
    description:
      "إن ما يجعل هذا الكتاب مختلفاً عن غيره هو أنه لم يطرح مشكلة أو حلا لمشكلة, ولم يقدم محاضرة ولا عظة يمكن للقارئ أن يتبناها أو يعمل عليها لحل مشكلته, وإنما قام بدراسة معمقة على نفسه واعتبرها طريقا خاصا به, لم يتبع عبرها شخصا آخر, ولا ينصح أحداً بان يتبعه عبرها, بل يمكن للمرء من خلالها أن يراقب ويرى ويخلق طريقه الخاص بنفسه ولنفسه. لكن ما انتهى إليه في نهاية المطاف, هو أن الحياة تقوم على المتناقضات",
    lendable: true,
    exchangeable: true,
  },
  {
    id: id(),
    name: "التأرجح على الهاوية",
    user: "Malak",
    price: 7,
    year: "1990",
    language: "Arabic",
    genre: "biography",
    author: "ايغور فولغين",
    image: swinging_to_the_abyss,
    description:
      "لتأرجح على الهاوية (العام الأخير من حياة دوستويفسكي) للمؤلف إيغور فولغين وهو من ترجمة موفق الدليمي. يتحدث الكتاب عن علاقات دوستويفسكي بالثورة الروسية حيث لم يكن دوستويفسكي مجرد شاهد عيان يراقب هذه الدراما، إنما بات طرفاً من أطرافها، وإلى حد ما بطلاً من أبطالها.",
    lendable: true,
    exchangeable: true,
  },
];

export default booksData;
