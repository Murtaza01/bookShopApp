import { v4 as id } from "uuid";

const faqData = [
  {
    id: id(),
    question: "What is this site for?",
    answer: "You seem to have skipped the first paragraph!",
  },
  {
    id: id(),
    question: "how do you get a book?",
    answer:
      "there is three ways of getting a book: buying it directly,exchange or lend by asking the user who uploaded the book to either exchange it with another book or lend it from him",
  },
  {
    id: id(),
    question: "how to know wether the user accept lending or exchanging?",
    answer:
      "there is an indicator when you click on the (show more info) button, you'll see wether the user accept lending his books or not",
  },
  {
    id: id(),
    question: "how to contact a user?",
    answer:
      "using the email button, the email will be copied to your clipboard, you can paste it in gmail and ask the user for a specific book",
  },
  {
    id: id(),
    question: "why the only way of contact is through email?",
    answer: "for privacy !",
  },
  {
    id: id(),
    question: "why some emails are red?",
    answer:
      "that means the user didn't provide an email and there is no other way of contacting him",
  },

  {
    id: id(),
    question: "how to become a contributor?",
    answer:
      "sadly there is no direct way of becoming a contributor yet, so the only way is by contacting me and adding your books into the site",
  },
  {
    id: id(),
    question: "how do i contact the owner of the site?",
    answer:
      "why? what do you want ? :)... you can easily do that through the icons of social media below",
  },
];

export default faqData;
