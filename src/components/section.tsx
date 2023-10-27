import { useEffect, useRef } from "react"
import useOnScreen from "./use-on-screen"

const Section = ({ position, children, current, fullWidth } : { current: string, position: string, children?: React.ReactNode, fullWidth?: boolean }) => {

  const ref = useRef<HTMLDivElement>(null)

  const [isVisible] = useOnScreen(ref)


  useEffect(() => {
    if(current === position){
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 50 });

  // console.log('Section', fullWidth, position, isVisible, entryDetail)
  
  return (
    <div style={{
      margin: '0 auto',
      backgroundColor: '#000C',
      width: '100%',

      scrollSnapAlign: 'start',
      // transitionDuration: '500ms',
      // transform: 'translateX(-50%) translateY(-50%)',
      // transitionTimingFunction: 'ease-in-out',
    }}  className={`section-container ${fullWidth ? "col-span-2" : "col-span-1" } ${(isVisible || (position === '')) && 'is-visible'}`}>
      <div style={{
              backgroundColor: '#000C',
              width: '100%',
              height: '100svh',        
      }}>
    <div  className="section" ref={ref} style={{
      // 'backgroundImage': 'radial-gradient(circle, rgba(2,0,36,.05) 0%, rgba(71,71,147,0.1) 31%, rgba(0,212,255,0.05) 100%)',
      'backgroundImage': 'radial-gradient(circle, rgba(30,50,50,.05) 0%, rgba(30,100,50,0.1) 31%, rgba(230,250,250,0.05)',
      // 'padding': '1rem',
      'boxSizing': 'border-box',
      'position': 'relative',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* {current === position 
        ? <h1>Section: {position} </h1>
        : <h3>Section: {position} </h3>
      } */}
      {children}
    </div>
    </div>
    </div>
  )
}

export default Section


