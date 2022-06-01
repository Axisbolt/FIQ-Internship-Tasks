import React from 'react'
import {AccordionHeader,AccordionItem,AccordionBody, UncontrolledAccordion} from "reactstrap"

const Accord = () => {
  return (
    
<div style={{ textAlign: "center" }}> 
<h4>Movies on Steve Jobs</h4>
  <UncontrolledAccordion

  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Jobs (2013)
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <strong>
          College dropout Steve Jobs (Ashton Kutcher),
        </strong>
           together with his friend, technical whiz-kid Steve Wozniak (Josh Gad), sparks a revolution in home computers with the invention of the Apple 1 in 1976. Built in the garage of Jobs' parents, the device -- and the subsequent formation of Apple Inc. -- have changed the world for all time. Though he is viewed as a visionary, Jobs' tenure as Apple's leader is a rocky one, leading to his eventual ouster from the company he co-founded.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">
        Steve Jobs (2015)
      </AccordionHeader>
      <AccordionBody accordionId="2">
        <strong>
        With public anticipation running high, Apple Inc.
        </strong>
      co-founders Steve Jobs (Michael Fassbender) and Steve "Woz" Wozniak get ready to unveil the first Macintosh in 1984. Jobs must also deal with personal issues related to ex-girlfriend Chrisann Brennan and their young daughter Lisa. Eventually fired, Jobs launches NeXT Inc. and prepares to release a new computer model in 1988. Ten years later, Jobs is back at Apple Inc. and about to revolutionize the industry once again with the iMac.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="3">
        Pirates Of Silicon Valley (1999)
      </AccordionHeader>
      <AccordionBody accordionId="3">
      The accomplishments of visionaries Steve Jobs (Noah Wyle) and Bill Gates (Anthony Michael Hall) revolutionize the 20th century.
      </AccordionBody>
    </AccordionItem>
  </UncontrolledAccordion>
  <br></br>
  <br></br>
</div>
  )
}

export default Accord