import { Footer } from "./Footer";
import { Header } from "./Header";
import "./GlobalLayout.css";

export const GlobalLayout = ({ children }) => (
  <>
    <Header />
    <main className="main-layout">{children}</main>
    <Footer />
  </>
);
