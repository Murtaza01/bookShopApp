export default function Heading({ children }) {
  return (
    <dir className="my-5 w-full">
      <h2 className="secondaryFont text-center text-4xl sm:text-5xl ">
        {children}
      </h2>
    </dir>
  );
}
