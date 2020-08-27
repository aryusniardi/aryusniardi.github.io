import React, { useState } from 'react'
import { TabManager } from './tabManager'
// import component
import About from '../components/sections/aboutSection/about'
import Education from '../components/sections/educationSection/education'
import Project from '../components/sections/projectsSection/project'
import Contact from '../components/sections/contactSection/contact'

const TABS = [
  { label: "About Me", value: 1 },
  { label: "Education", value: 2 },
  { label: "Projects", value: 3 },
  { label: "Contact Me", value: 4 }
];

export default function Tab(props) {
  const [activeTab, handleTab] = useState(1);
  let component

  if(activeTab === 1) {
      component = <About />
  } else if (activeTab === 2) {
    component = <Education />
  } else if (activeTab === 3) {
      component = <Project />
  } else if (activeTab === 4) {
      component = <Contact />
  }
  return (
    <div>
      <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
      <div className="tab-content">
          {component}
      </div>
    </div>
  );
}
