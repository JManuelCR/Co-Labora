import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import FiltersBar from "@/components/FiltersBar";
export default function Rent() {
  return (
    <>
      <Navbar page="in rent" />
      <FiltersBar />
      <div className="footers">
        <footer className="hidden md:block">
          <Footer />
        </footer>
        <footer className="block md:hidden">
          <FooterMobile />
        </footer>
      </div>
    </>
  );
}
