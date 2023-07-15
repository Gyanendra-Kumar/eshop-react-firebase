import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Footer, Header } from "./components";
// Pages
import { Contact, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
