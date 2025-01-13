import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.css";
// import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurCenter from "./pages/OurCenter/OurCenter";
import OurServices from "./pages/OurServices/OurServices";
import PhotosGallery from "./pages/PhotosGallery/PhotosGallery";
import { useEffect, useRef, useState } from "react";
import SeoComponnent from "./components/SeoComponnent/SeoComponnent";
import ar from "./locales/ar";
import en from "./locales/en";
import WhatsAppBtn from "./components/WhatsAppBtn/WhatsAppBtn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import ModalPopUp from "./components/ModalPopUp/ModalPopUp";

// Helper function to push events to dataLayer
// Helper function to push events to dataLayer
// Define the global 'dataLayer'
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}
export const pushToDataLayer = (event: string, details: object) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...details,
  });
};

// Component for tracking page and user interactions
const AppContent = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  const [showModal, setShowModal] = useState(true); // Track modal visibility
  const [currentSection, setCurrentSection] = useState<'hero' | 'about' | 'ourCenter' | 'OurServices' | 'gallery' | 'contact'>('hero');
  const [sectionStartTime, setSectionStartTime] = useState<number>(Date.now());

  const horoRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  // Track time spent on each section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newSection = entry.target.id as 'hero' | 'about' | 'ourCenter' | 'OurServices' | 'gallery' | 'contact';
          const timeSpent = Date.now() - sectionStartTime;

          // Record time spent on the previous section
          pushToDataLayer('timeSpent', { section: currentSection, timeSpent });

          // Update section start time and current section
          setSectionStartTime(Date.now());
          setCurrentSection(newSection);

          // Push page visit event to dataLayer
          pushToDataLayer('pageVisit', { section: newSection });
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
      observer.disconnect();
    };
  }, [currentSection, sectionStartTime]);

  return (
    <>
      <SeoComponnent
        title={translations[currentSection].title}
        description={translations[currentSection].description}
        type="website"
        keyword={translations[currentSection].keywords}
        url={translations[currentSection].url}
      />
       {showModal && (
        <ModalPopUp
          message="'' The Clinic Under New Canadian Management ! ''"
          onClose={() => setShowModal(false)}
        />
      )}
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
      {/* <BackToTop /> */}
      <WhatsAppBtn/>
    </>
  );
};

// Main App component including Helmet with GTM
const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Google Tag Manager Script */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTH49SGN');`}
        </script>
      </Helmet>
      <LanguageProvider>
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<AppContent />} />
              <Route path="/thankyoupage" element={<ThankYouPage />} /> {/* Define ThankYouPage route */}
              {/* Add more routes if needed */}
            </Routes>
          </div>
        </BrowserRouter>
      </LanguageProvider>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MTH49SGN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </HelmetProvider>
  );
};

export default App;
