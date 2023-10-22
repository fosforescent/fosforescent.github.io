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


export default function Questions() {


  return (
    <div   style={{
      width: '100%',
      boxSizing: 'border-box',
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '3rem 2rem',
    }}>
      <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',

      }}>Questions & Answers</div>

    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: 'border-box',
      paddingBottom: "0rem",
      height: "100%",
    }}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-whispyblue/10">
          <AccordionTrigger>Backend</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
adsfadf
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-whispyblue/10">
          <AccordionTrigger>Front End</AccordionTrigger>
          <AccordionContent>
            <div style={{
              padding: '1rem 0',
            }}>
   asdfasdf

            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-whispyblue/10">
          <AccordionTrigger>Database / ORM</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
asdfafsd
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-whispyblue/10">
          <AccordionTrigger>Devops / Infrastructure</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
    asdfadsf

            </div>
          </AccordionContent>
        </AccordionItem>      
        <AccordionItem value="item-5" className="border-whispyblue/10">
          <AccordionTrigger>Soft</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
asdfasdfa
            </div>
          </AccordionContent>
        </AccordionItem>      

        <AccordionItem value="item-6" className="border-whispyblue/10">
          <AccordionTrigger>Domain Specific</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
asdfasdfasdfasdf

            </div>
          </AccordionContent>
        </AccordionItem>      

        <AccordionItem value="item-7" className="border-whispyblue/10">
          <AccordionTrigger>How can it do X?</AccordionTrigger>
          <AccordionContent>
            <div style={{
                padding: '1rem 0',
              }}>
                asdfasdfasd
            </div>
          </AccordionContent>
        </AccordionItem>    
      </Accordion>

    </div>

    </div>
  )
}

