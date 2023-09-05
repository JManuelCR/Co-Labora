import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
export default function Rent() {
  return (
    <>
      <Navbar page="in rent" />
      <h1>Yos oy una renta</h1>
      <div>
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
