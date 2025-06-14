import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import PortfolioChatbot from './components/PortfolioChatbot';
import CustomCursor from './components/CustomCursor';
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
          <CustomCursor/>
        </main>
        <Footer />
        <PortfolioChatbot/>
        <a
  href="https://wa.me/918286194040"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.902 11.902 0 0 0 12 0C5.372 0 0 5.372 0 12c0 2.122.555 4.104 1.516 5.84L0 24l6.335-1.646A11.932 11.932 0 0 0 12 24c6.628 0 12-5.372 12-12 0-3.193-1.243-6.168-3.48-8.52zM12 22c-1.869 0-3.623-.486-5.166-1.366l-.369-.211-3.771.979 1.006-3.679-.24-.378A9.943 9.943 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5.081-7.474c-.276-.138-1.635-.807-1.889-.898-.254-.092-.44-.138-.626.138-.184.276-.719.898-.882 1.083-.161.184-.322.207-.598.069-.276-.138-1.165-.428-2.22-1.364-.82-.732-1.374-1.636-1.535-1.912-.161-.276-.017-.425.121-.563.125-.124.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.069-.138-.626-1.507-.857-2.065-.23-.552-.463-.476-.626-.485-.161-.008-.345-.01-.53-.01-.184 0-.483.069-.736.345s-.966.944-.966 2.304c0 1.36.99 2.673 1.127 2.854.138.184 1.944 2.973 4.716 4.17.66.284 1.174.453 1.576.579.661.21 1.262.18 1.736.109.529-.078 1.635-.667 1.867-1.309.23-.644.23-1.195.161-1.309-.069-.115-.253-.184-.529-.322z" />
  </svg>
</a>

      </div>
    </ThemeProvider>
  );
}

export default App;