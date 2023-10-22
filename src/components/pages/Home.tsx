// import React, { useEffect, useRef } from 'react'

import Section from '../section'

// import Contact from "@/components/sections/Contact"
import About from "@/components/sections/About"
import Register from "@/components/sections/Register"
import Questions from "@/components/sections/Q&A"
import Front from "@/components/sections/Front"
// import Contact from "@/components/sections/Contact"

export default function Home({ position }: {position: string}) {
    
  console.log(position)

  return (
    <>
    <Section position="" current={position} fullWidth>
      <Front />
    </Section>
    <div  className="grid grid-cols-1 lg:grid-cols-2" style={{
      width: '100%',
      padding: '0',
      boxSizing: 'border-box',
    }}>
      <Section position="about" current={position}>
        <About />
      </Section>
      <Section position="questions" current={position}>
        <Questions />
      </Section>
      {/* <Section position="contact" current={position}>
        <Contact />
      </Section> */}
      {/* <Section position="work" current={position}>
        <Work />
      </Section> */}

    </div>
    <Section position="register" current={position} fullWidth>
      <Register />
    </Section>
    </>
  )
}

