export default function Hero() {
  return (
    <section className="mb-10 min-h-[160px] w-full px-2 pt-[100px] min-[340px]:px-5  ">
      <div className="mx-auto  max-w-[750px] space-y-2 leading-7 sm:space-y-5 ">
        <h1 className="primaryFont  text-center text-3xl font-semibold xs:text-4xl ">
          <span className="gradientLetter">B</span>uy,
          <span className="gradientLetter">R</span>ent,
          <span className="gradientLetter">E</span>xchange{" "}
          <span className="gradientLetter">Books</span>
        </h1>
        <p className="paragraphFont capitalize sm:text-[18px]">
          a place where you can buy books, rent a book from a user,or exchange a
          book, we provide serval stores you can buy from, and serval users to
          rent/exchange, our goal is to provide you with the books you desire
        </p>
      </div>
    </section>
  );
}
