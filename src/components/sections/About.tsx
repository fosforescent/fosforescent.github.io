
// import {
//   EnvelopeClosedIcon,
//   GitHubLogoIcon,
// } from '@radix-ui/react-icons'


export default function Home() {
    

  return (
    <div   style={{
      width: '100%',
      boxSizing: 'border-box',
      padding: '3rem 1rem',
    }}>
     {/* <h3 style={{
        gridColumn: "1/3",
      }}>About</h3> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
{/* 
      <div style={{
          width: '100%',
          maxWidth: '150px',
          margin: '0 auto',
          display: 'block',
          overflow: 'hidden',
      }}>
        <img src={profileImage} style={{
          margin: '0 auto',
          borderRadius: '15%',
          width: '150px',
          height: '150px',
          objectPosition: '0px 0px',
          display: 'block',
          gridColumn: "1",
          objectFit: 'cover',
        }} />
      </div> */}

      <div className="flex flex-col justify-center" style={{}}>

      <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        paddingBottom: '1rem',
        textAlign: 'center',
      }}>Fosforescent</div> 

<div className='grid grid-cols-2'
        >
{/* 
        <div style={{
          padding: '.23rem 0 ',
          textAlign: 'center',
          gridColumn: "1",
        }}>
          <span >  <a className={`text-popover-foreground inline-block`} href="mailto:david.m.noll@gmail.com"> Mail: <EnvelopeClosedIcon className='inline' /></a></span>
        </div>
        <div style={{
          padding: '.23rem 0 ',
          textAlign: 'center',
          gridColumn: "2",
        }}>
          <span ><a className={`text-popover-foreground inline-block`} href={resumeUrl}> Resume: <FileTextIcon className='inline' /></a></span>
        </div>

        <div style={{
          padding: '.23rem 0 ',
          textAlign: 'center',
          gridColumn: "1",
        }}>
          <span > <a className={`text-popover-foreground inline-block`} href="https://github.com/davidmnoll" target="_blank">Github: <GitHubLogoIcon className='inline' /></a></span>
        </div>
        <div style={{
          padding: '.23rem 0 ',
          textAlign: 'center',
          gridColumn: "2",
        }}>
          <span > <a className={`text-popover-foreground inline-block`} href="https://www.linkedin.com/in/nolldavid/" target='_blank'>LinkedIn: <LinkedInLogoIcon className='inline' /></a></span>
        </div> */}
        </div>
        </div>
      </div>
      <p style={{
        gridColumn: "1/3",
        padding: '2rem 0',
        fontSize: '.8rem',
      }}  className="border-whispyblue/10 border-b border-t">
        Fosforescent is a platform and marketplace for checklist-based workflows
      </p>

      {/* <div style={{
          margin: '0 auto',
          width: '100%'
        }}> */}
      {/* <div style={{
        gridColumn: "1/3",
        padding: '1rem 0',
        margin: '1rem 0',
        fontSize: '.8rem',
        // borderTop: '1px solid #333',
        // borderBottom: '1px solid #333',
      }}> */}
        {/* <span style={{
          gridColumn: "1/3",
          fontSize: '1.2rem',
          fontWeight: 'bold',
          // paddingBottom: '1rem',
          display: 'block',
        }}>Projects</span> */}
          {/* <br />
          <span style={{
            fontSize: '1rem',
          }}>Fosforescent</span>: (work in progress) a platform & marketplace for collaborative workflows */}
          {/* <br />
          <div style={{
            padding: '.5rem 0',
          }}>
            <span style={{
              fontSize: '1rem',
              display: 'inline-block',
            }}><a href="https://github.com/davidmnoll/pixel-time">Something:</a></span> something else
          </div>
    */}
          {/* </div> */}
        {/* </div> */}
    </div>
  )
}

