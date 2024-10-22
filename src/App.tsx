import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { LanguageProvider, useLanguage } from "./LanguageContext"; // استخدم LanguageProvider هنا
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurCenter from "./pages/OurCenter/OurCenter";
import OurServices from "./pages/OurServices/OurServices";
import PhotosGallery from "./pages/PhotosGallery/PhotosGallery";
import { useEffect, useRef, useState } from "react";
import SeoComponnent from "./components/SeoComponnent/SeoComponnent";
import ar from "./locales/ar";
import en from "./locales/en";

// نقل الكود الذي يستخدم useLanguage داخل AppContent
const AppContent = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  const [currentSection, setCurrentSection] = useState<
    'hero' | 'about' | 'ourCenter' | 'OurServices' | 'gallery' | 'contact'
  >('hero');

  const horoRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id as 'hero' | 'about' | 'ourCenter' | 'OurServices' | 'gallery' | 'contact');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (horoRef.current) observer.observe(horoRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (centerRef.current) observer.observe(centerRef.current);

    return () => {
      if (horoRef.current) observer.unobserve(horoRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (centerRef.current) observer.unobserve(centerRef.current);
    };
  }, []);

  const seoData = {
    hero: {
      title: translations.HeroTitle,
      description: translations.AboutDesc,
      keywords: translations.AboutKeys,
      url:"http://localhost:5173/#hero"
    },
    about: {
      title: translations.AboutTitle,
      description: translations.AboutDesc,
      keywords: translations.AboutKeys,
      url:"http://localhost:5173/#about"
    },
    ourCenter: {
      title: translations.OurCenterTitle,
      description: translations.OurCenterDesc,
      keywords: translations.OurCenterKeys,
      url:"http://localhost:5173/#ourCenter"
    },
    OurServices: {
      title: translations.OurServicesTitle,
      description: translations.OurServicesDesc,
      keywords: translations.OurServicesKeys,
      url:"http://localhost:5173/#OurServices"
    },
    gallery: {
      title: translations.GalleryTitle,
      description: translations.GalleryDesc,
      keywords: translations.GalleryKeys,
      url:"http://localhost:5173/#gallery"
    },
    contact: {
      title: translations.ContactUsTitle,
      description: translations.ContactUsDesc,
      keywords: translations.ContactUsKeys,
      url:"http://localhost:5173/#contact"
    },
  };

  const { title, description, keywords,url } = seoData[currentSection];

  return (
    <>
      <SeoComponnent
        title={title}
        description={description}
        type="website"
        keyword={keywords}
        url={url}
      />
      <div id="hero" ref={horoRef}>
        <Navbar />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      
      <div id="OurServices" ref={servicesRef}>
        <OurServices />
      </div>
      <div id="gallery" ref={galleryRef}>
        <PhotosGallery />
      </div>
      <div id="ourCenter" ref={centerRef}>
        <OurCenter />
      </div>
      <div id="contact" ref={contactRef}>
        <ContactUs />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

// وضع LanguageProvider في مستوى أعلى
const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="App">
          <AppContent />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
