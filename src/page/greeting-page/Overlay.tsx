import React from 'react'
import { a } from '@react-spring/web'
import { SpringValue } from '@react-spring/core'; 

export default function Overlay({ fill }: {fill: SpringValue<string>}) {
  // Just a Figma export, the fill is animated
  const text = {
        date: '20/01/20',
        title: {
            main: 'H4.0E', sub: 'Sustainable', sub_sub: 'Building'
        },
        body: {
            buildingSystem: 'Skylark',
            designedBy: 'designed by OSL',
            buildingComponent: 'building component X',
            buildingComponentMeta: 'This and that and the other about this particular bit of kit'
        }
    }
  return (
    <div className="greeting-page overlay">
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        {/* <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M61 40H50.5v9H61v10.5h9V40h-9z" fill="#E8B059" /> */}
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={328} y={46.182} children={text.date} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={392} y={46.182} children={text.title.main} />
          <tspan x={392} y={54.182} children={text.title.sub} />
          <tspan x={392} y={62.182} children={text.title.sub_sub} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={175.318} children={text.body.buildingSystem} />
          <tspan x={40} y={188.318} children={text.body.designedBy} />
        </text>
        <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={52} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={257.909} children={text.body.buildingComponent} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={48} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={321.909} children=" " />
          <tspan x={40} y={372.909} children=" " />
          <tspan x={40} y={423.909} children=" " />
          <tspan x={40} y={474.909} children="" />
          <tspan x={40} y={525.909} children=" " />
          <tspan x={40} y={576.909} children=" " />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
        </text>
      </a.svg>
    </div>
  )
}
