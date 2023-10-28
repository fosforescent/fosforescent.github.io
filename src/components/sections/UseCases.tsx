import React from 'react'

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

 
type SliderProps = React.ComponentProps<typeof Slider>
 
export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}


export default function UseCases() {


  return (
    <div   style={{
      width: 'calc(100% - 2rem)',
      boxSizing: 'border-box',
      height: "calc(100% - 2rem)",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '1rem',
      paddingRight: 'calc(1rem - 5px)'
    }}>
      {/* <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',

      }}>Uses</div> */}

    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: 'border-box',
      paddingBottom: "0rem",
      height: "100%",
      overflowY: 'auto',
      overflowX: 'hidden',
      width: "100%",
      position: 'relative',
      alignContent: 'center',
      alignItems: 'center',
      justifyItems: 'center',
      paddingRight: '5px',
      marginRight: '-5px',

  }} className="scrollbar">
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        minHeight: '100%',
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '.5rem 0',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        }}>
          <div style={{
            width: 'calc(100% - 1rem)',
            textAlign: 'justify',
            textJustify: 'inter-word',
            margin: 'auto',
            borderRadius: '5px',
            padding: '1rem',
            backgroundColor: '#0007'
          }}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-whispyblue/10">
          <AccordionTrigger>Why Checklists?</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
          Checklists have saved lives in the medical industry.  However they have many other benefits.  For instance, planning complex procedures, providing a template for automating procedures, context switching between tasks, as well as a store of shared knowledge.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-whispyblue/10">
          <AccordionTrigger>Do new things right the first time</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
            With a repository of checklists created by users who know the domain, or checklists generated by AI, you can have greater confidence that you're not leaving something out when planning important tasks, even if you're doing them for the first time.  

            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-whispyblue/10">
          <AccordionTrigger>Focus</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
              From the comfort of your phone you can plan your tasks.  When it's time to execute, you can step through each task.  Need to switch tasks?  All the information will be right there when you need to switch back. 

            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-whispyblue/10">
          <AccordionTrigger>Group Planning</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
              Make sure everyone is on the same page by communicating with precision, and easily integrate group feedback into your plan with votes or approvals.

            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-whispyblue/10">
          <AccordionTrigger>Analysis</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
            Make sure that your manual processes make sense and achieve the desired result. Easily generate dozens of variations of expected budgets, expected task assignments and schedules etc. to envision how your plans will play out
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-whispyblue/10">
          <AccordionTrigger>Versioned Manual Processes</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
    
            By putting manual processes into systematic checklists, they can be tested and refactored just like software.  This can allow for continuous improvement and cutting out unnecessary red tape while still minimizing negative tradeoffs.

            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-whispyblue/10">
          <AccordionTrigger>Progressively Automate </AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
              If you find one step of your checklist can be automated, easily integrate it into your existing manual process.  Don't worry about spinning up a cloud service yourself just to run a little script.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="border-whispyblue/10">
          <AccordionTrigger>No Code Backend</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
              Since Fosforescent is capable of coordinating and automating parallel tasks, it can integrate information from various API's and send it wherever it needs to go.  But you won't need a backend coder to do it, you can create a workflow from your phone.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    </div>

    </div>
  )
}

