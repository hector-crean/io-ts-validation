import React, { useRef, useState } from 'react'
import { useSpring, useSprings, to as interpolate  } from '@react-spring/core'
import { config as defaultConfig, SpringValue } from '@react-spring/three'
import { useGesture, useDrag } from 'react-use-gesture'
import { a as aDom } from '@react-spring/web'


const data: [string, [number, number]][] = [
  ['steelblue', [0.5, 1]],
  ['hotpink', [1, 0.8]],
  ['coral', [1, 1]],
]

export function Move() {

  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    backgroundColor: '#ffffff00',
    opacity: 0,
    scale: 1,
  }))

  const hovering = useRef(false)

  const bind = useGesture<{ move: Event; onClick: string }>({
    onDrag: ({ event }) => console.log(event),
    onMove: ({ xy: [x, y] }) => set({ x, y }),
    onHover: ({ active, xy: [x, y], args: [backgroundColor, scale] }) => {
      if (active) {
        if (!hovering.current) {
          props.x.set(x)
          props.y.set(y)
        }
        hovering.current = true
        set({ opacity: 1, backgroundColor, scale })
      } else set({ opacity: 0, onRest: () => (hovering.current = false) })
    },
    onClick: ({ event }) => console.log(event),
  })

  return (
   <>
   </>
  )
}






/////////////


const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
  ]

const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  })

  const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
  
  export default function Deck() {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.length, i => ({
      ...to(i),
      from: from(i),
    })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
  
      set((i: number) => {
        if (index !== i) return null // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === cards.length) setTimeout(() => void gone.clear() || set(i => to(i)), 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return (
      <div>
        {props.map(({ x, y, rot, scale }, i) => (
          <aDom.div key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <aDom.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
              }}
            />
          </aDom.div>
        ))}
      </div>
    )
  }