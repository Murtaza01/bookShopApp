import BookCard from "./BookCard";
import booksData from "../../assets/data/booksData";
import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import HR from "./HR";

const philosophyBooks = booksData.filter(({ genre }) => genre === "philosophy");
const fictionBooks = booksData.filter(({ genre }) => genre === "fiction");
const biographyBooks = booksData.filter(({ genre }) => genre === "biography");
const psychologyBooks = booksData.filter(({ genre }) => genre === "psychology");

export default function BooksContainer() {
  const [shownBooks, setShownBooks] = useState(10);
  const [sortedBooks, setSortedBooks] = useState(booksData);
  const [searchedBook, setSearchedBook] = useState("");

  function showMore() {
    setShownBooks((prev) => prev + 5);
    console.log(booksData.length);
  }
  function sortBooks(e) {
    const genre = e.target.value;
    switch (genre) {
      case "Philosophy":
        setSortedBooks(philosophyBooks);
        break;
      case "Fiction":
        setSortedBooks(fictionBooks);
        break;
      case "Biography":
        setSortedBooks(biographyBooks);
        break;
      case "Psychology":
        setSortedBooks(psychologyBooks);
        break;
      default:
        setSortedBooks(booksData);
        break;
    }
  }

  function searchBook(e) {
    const query = e.target.value;
    setSearchedBook(query);
  }

  return (
    <main className="mx-2 min-h-96 py-5 ">
      <div className=" mb-5 flex justify-between sm:mx-3 md:mx-6 lg:mx-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-8 flex-row-reverse  items-center justify-around rounded-sm bg-white px-1 shadow-md "
        >
          <input
            type="text"
            className="headingFont  w-28 bg-transparent px-1 text-lg outline-none xs:w-40"
            placeholder="Search"
            value={searchedBook}
            onChange={searchBook}
          />
          <span className="ml-1 h-[70%] border-l-[1px] border-black"></span>
          <IoSearchOutline className="cursor-pointer text-2xl text-[#00A9FF]" />
        </form>
        <div className="headingFont  xs:text-lg ">
          <select
            name="Sort by Genre "
            className="h-8 rounded-sm  shadow-md outline-none xs:px-2  "
            onChange={sortBooks}
          >
            <option value="all books">Sort By</option>
            <option value="Fiction">Fiction</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Psychology">Psychology</option>
            <option value="Biography">Biography</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-evenly sm:gap-3 lg:gap-8">
        {sortedBooks
          .filter((item) => {
            const name = item.name.toLowerCase();
            const value = searchedBook.toLowerCase();
            return name.startsWith(value);
          })
          .slice(0, shownBooks)
          .map(
            ({
              id,
              name,
              image,
              author,
              description,
              price,
              language,
              email,
              exchangeable,
              lendable,
              year,
              user,
            }) => {
              return (
                <BookCard
                  key={id}
                  name={name}
                  author={author}
                  image={image}
                  price={price}
                  description={description}
                  language={language}
                  email={email}
                  exchangeable={exchangeable}
                  lendable={lendable}
                  user={user}
                  year={year}
                />
              );
            },
          )}
      </div>
      <HR>
        {" "}
        <button
          className=" rounded-full border-black px-2 text-xl font-semibold disabled:cursor-not-allowed disabled:text-black/20"
          onClick={showMore}
          disabled={shownBooks >= sortedBooks.length}
        >
          <span className="center">
            Load More
            <MdOutlineExpandMore className="text-2xl" />
          </span>
        </button>
      </HR>
    </main>
  );
}
