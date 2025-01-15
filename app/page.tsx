import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="relative min-h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Landing />
      </div>
      <div id="about">
        {/* Add your About section content here */}
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

