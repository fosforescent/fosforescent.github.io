
// import {
//   EnvelopeClosedIcon,
//   GitHubLogoIcon,
// } from '@radix-ui/react-icons'


export default function Home() {
    

  return (
    <div   style={{
      width: '100%',
      height: "100%",
      boxSizing: 'border-box',
      padding: '3rem 1rem',
    }}>
     {/* <h3 style={{
        gridColumn: "1/3",
      }}>About</h3> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
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

      {/* <div className="flex flex-col justify-center" style={{}}> */}

      <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        paddingBottom: '1rem',
        textAlign: 'center',
      }}>Fosforescent</div> 
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: 'border-box',
      paddingBottom: "0rem",
      width: "100%",
      height: "100%",
    }}>
{/* <div className='grid grid-cols-2'
        > */}
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
        {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      <div style={{
        gridColumn: "1/3",
        padding: '0',
        fontSize: '1rem',
        minHeight: '300px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: 'auto',
        width: "100%",
        height: "calc(100% - 5rem)",
        position: 'relative',
        
        }}  className="border-whispyblue/10 border-b border-t scrollbar">
          <div style={{
            padding: '2rem',
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
          <p style={{
            paddingBottom: '1rem',
          }}>
            Fosforescent is a platform and marketplace for checklist-based workflows.  It is currently in development.
          </p>
          <p style={{
            paddingBottom: '1rem',
          }}>
            Imagine you and some friends want to go on a RV trip.  None of you have ever done it before, so there are a lot of things that can go wrong.  With Fosforescent, you could search for checklists that other people have made, generate one with AI, or create your own and then tweak it with friends.  Then with a click of a button, you and your friends start getting prompts to add your gear inventory, vote on which campsite to stay at, or add money to a shared pool. 
          </p>
          <p style={{
            paddingBottom: '1rem',
          }}>
            The purposes of Fosforescent are to help people do things together, to help people do new things right the first time, and to help people manage complex parallel tasks and their dependencies.  To this end, there will be a searchable marketplace where people can share their knowledge and be rewarded for it.  Workflows will be collaboratively editable to allow group decisionmaking, and the execution interface will provide task-related context to promote seamless context switching.
          </p>
          <p style={{
            paddingBottom: '1rem',
          }}>
            Users will be able to collaborate with each other to build and execute the workflows.  One goal of Fosforescent is to bring tools available to software developers–-such as version control, typing, exception handling, atomicity, and methods for handling concurrency–-to these workflows.  This should allow people to create efficient and reliable routines and execute them with the peace of mind that they can go heads-down without dropping the ball on other tasks. 
          </p>
 


          </div>
      </div>

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
    </div>
  )
}
