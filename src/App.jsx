import BooksContainer from "./Components/BooksUI/BooksContainer";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import Hero from "./Components/Hero";
import Contributors from "./Components/ContributorsUI/Contributors";
import Faq from "./Components/FaqUI/Faq";
import Footer from "./Components/Footer";
import CartContext from "./Components/store/CartContext";
function App() {
  return (
    <CartContext>
      <Header />
      <div className="mainBg">
        <Hero />
        <Heading>Our Books</Heading>
        <BooksContainer />
        <Heading>Our Contributors</Heading>
        <Contributors />
        <Heading>Frequently Asked Questions</Heading>
        <Faq />
      </div>
      <Footer />
    </CartContext>
  );
}

export default App;
