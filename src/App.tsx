

import { Outlet } from "react-router-dom";
import NavBar from "@/components/navbar";

import Background1 from '@/components/background1'

import { Button } from "@/components/ui/button"

import {
  ChevronUpIcon
} from "@radix-ui/react-icons"


function App( { children } : { children?: React.ReactNode }) {


  // console.log('App.tsx', document.body.clientHeight, window.innerHeight )


  return (
    <div style={{
      position: 'relative',
      height: '100%',
      width: '100%',
      padding: '0',
      margin: '0',
      minHeight: '100vh', // '100%
    }}>
      <div style={{
        width: '100%',
        height: '50px',
        position: 'fixed',
        zIndex: 3,
      }}>
        <NavBar />
      </div>

      <div id="main" className="main" style={{
        position: 'relative',
        width: '100%',
        paddingTop: '0',
        paddingBottom: '0',
        margin: '0',
        boxSizing: 'border-box',
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100vh',
        scrollBehavior: 'smooth'
  
      }}>
        { children ?? <Outlet /> }
      </div>

      <div className="footer" style={{
        height: '50px',
        width: '100%',
        padding: '0 6vw',
        display: 'none',

      }}>
        <div style={{
          display: document.body.clientHeight > window.innerHeight ? 'block' : 'none',
        }}><Button variant="link" onClick={() =>{ 
          window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
              in place of 'smooth' */
          }); 
        }} className='text-popover-foreground'>
        <ChevronUpIcon /> scroll to top</Button></div>
      </div>
      <Background1 />
    </div>
  )
}

export default App
