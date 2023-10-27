import { useState } from 'react'
import imageUrl from '@/assets/space-1278869_1920.jpg';
// import Background2 from '../background2';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { Checkbox } from '../ui/checkbox';
import { Toaster } from "@/components/ui/toaster"
// import { Textarea } from '../ui/textarea';

export default function Register() {
    
  const { toast } = useToast()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [options, setOptions] = useState({
    use: false,
    contribute: false,
    invest: false,
    // donate: false,
    info: false
  })
  // const [message, setMessage] = useState('')

  const submitFields = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('EMAIL', email)
    formData.append('b_c1057953c1f1f355cb15b5260_0f51e20ed7', '')
    formData.append('FNAME', name)
    formData.append('LNAME', Object.keys(options).map((key) => `${key}-${(options[key as keyof typeof options])}`).join(','))

    const res = await fetch('https://gmail.us9.list-manage.com/subscribe/post-json?u=c1057953c1f1f355cb15b5260&amp;id=0f51e20ed7&amp;f_id=00031ae1f0', {
      body: formData,
      method: 'POST',
      mode: 'no-cors',
    })

    if (res) {
      toast({
        // title: 'Thank you',
        description: "Thank you for submitting your information.",
        duration: 9000,
      })
      setHasSubmitted(true)

    }
  }




  return (
    <div   style={{
      width: '100%',
      boxSizing: 'border-box',
      backgroundImage: `url('${imageUrl}')`,
      backgroundColor: 'transparent',
      backgroundSize: 'cover',
      opacity: 1,
      position: 'relative',
    }} className="content-container">

    <div className="register-content" style={{
      zIndex: 7,
      // position: 'absolute',
      // top: 0,
      // left: 0,    
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      position: "relative",
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',      
      }}>

        <div style={{
          padding: '30px',
          backgroundColor: 'rgba(0,0,0,.5)',
          // marginTop: "33vh",   
        }} className="items-center">
 
        {hasSubmitted ? 
          <div>
            <h1> You have submitted your information</h1>
          </div>
        :(
          <form action="none">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: "80%",
            margin: '0 auto',

          }}>
            <div style={{
              flexGrow: 1,
              flexBasis: '60%',
              width: '80%',
              minWidth: "200px",

              padding: '.5rem',
            }}>
            <Input placeholder="Email" className={`bg-transparent ${email ? 'border-white' : 'border-fosred'} focus-visible:border-white focus-visible:ring-transparent ring-white outline-none focus:ring-0`} value={email} onChange={(e) => setEmail(e.target.value)} /> 
            </div>
            <div style={{
              maxWidth: '100%',
              flexBasis: "150px",
              flexGrow: 1,
              width: "20%",
              minWidth: "150px",
              padding: '.5rem', 
            }}>
            <Button variant="outline" className={`bg-transparent ${email ? 'border-fosorange' : 'border-white'}`} onClick={submitFields}>Get Notified</Button>
            </div>
          </div>
          <div style={{
            margin: '0 auto',
            // padding: '3rem',
            
          }} className={`w-full tagalong-form ${email.length > 0 && !hasSubmitted ? 'is-visible' : 'is-hidden'} `}>
            <div style={{
              padding: '3rem',
              paddingBottom: '0',
            }} className='grid grid-cols-1 md:grid-cols-2'>

              <div style={{
                flexBasis: '50%',
                minWidth: '50%',
              }} className="col-start-1">
                <Input placeholder="Name" className="bg-transparent border-white focus-visible:ring-transparent" value={name} onChange={(e) => setName(e.target.value)} />
                {/* <Textarea placeholder="message" className="bg-transparent border-white focus-visible:ring-none" value={message} onChange={(e) => setMessage(e.target.value)} /> */}
              <br />
              </div>
              <div className='lg:grid-cols-1 grid-cols-1' style={{
                display: 'flex',
                maxWidth: "100%",
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                <div style={{
                  minWidth: '150px',
                  flexGrow: 1,
                }}>
                I want to:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="text-left md:text-center" style={{
                  minWidth: '150px',
                  }}>
                  <Checkbox checked={options.use} onClick={() => setOptions({...options, use: !options.use})} /> Use
                </div>
                <div className="text-left md:text-center" style={{
                  minWidth: '150px',
                }}>
                  <Checkbox className="square" checked={options.contribute} onClick={() => { console.log('clicked'); setOptions({...options, contribute: !options.contribute})} }  /> Contribute
                </div>
                {/* <div>
                  <Checkbox checked={options.invest} onChange={(e) => setOptions(e)} />
                </div> */}
                <div className="text-left md:text-center" style={{
                  minWidth: '150px',
                }}>
                  <Checkbox checked={options.info} onClick={() => setOptions({...options, info: !options.info})} /> Get Info
                </div>

                </div>
              </div>
            </div>

          </div>
          </form>)}
        </div>

        <Toaster />
    </div>


    <div  style={{
      width: '100%',
      height: "100%",
      boxSizing: 'border-box',
      background: `radial-gradient(circle at 40% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 33%, rgba(224,114,29,.05) 40%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%) `,
      backgroundSize: 'cover',
      zIndex: 3,
      position: 'absolute',
      top: 0,
      left: 0,
      }}>

      &nbsp;

    </div>

    <div  style={{
      width: '100%',
      height: "100%",
      boxSizing: 'border-box',
      backgroundImage: `radial-gradient(circle at 60% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 33%, rgba(214,214,29,.05) 40%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)`,
      backgroundSize: 'cover',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      }}>

      &nbsp;
    </div>
 
    <div  style={{
      width: '100%',
      height: "100%",
      boxSizing: 'border-box',
      backgroundImage: `radial-gradient(circle at 60% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,.6) 100%)`,
      backgroundSize: 'cover',
      zIndex: 5,
      position: 'absolute',
      top: 0,
      left: 0,
      }}>

      &nbsp;
    </div>
 
{/* 	
      <Background2 style={{

      }} /> */}
    </div>
  )
}

