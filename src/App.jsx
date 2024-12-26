import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  const renderSection = () => {
    switch (activeTab) {
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "education": return <Education />;
      case "skills": return <Skills />;
      default: return <Experience />;
    }
  };

  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      <main>{renderSection()}</main>
    </div>
  );
}

export default App;
