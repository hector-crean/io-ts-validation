import { useCallback, useEffect } from 'react'
import { useSpring, config } from '@react-spring/core'
import { useGesture } from 'react-use-gesture'
import clamp from 'lodash/clamp'

// declare function doSomethingWith(props: any): any; 


// const bind = useGesture(
//     state => {
//     const {
//       event,       // the source event
//       xy,          // [x,y] values (pointer position or scroll offset)
//       previous,    // previous xy
//       initial,     // xy value when the gesture started
//       intentional, // is the movement intentional -- new in v8
//       movement,    // last gesture offset (xy - initial)
//       delta,       // movement delta (movement - previous movement)
//       offset,      // offset since the first gesture
//       lastOffset,  // offset when the last gesture started
//       vxvy,        // momentum of the gesture per axis
//       velocity,    // absolute velocity of the gesture
//       distance,    // offset distance
//       direction,   // direction per axis
//       startTime,   // gesture start time
//       elapsedTime, // gesture elapsed time
//       timeStamp,   // timestamp of the event
//       first,       // true when it's the first event
//       last,        // true when it's the last event
//       active,      // true when the gesture is active
//       memo,        // value returned by your handler on its previous run
//       cancel,      // function you can call to interrupt some gestures
//       canceled,    // whether the gesture was canceled (drag and pinch)
//       down,        // true when a mouse button or touch is down
//       buttons,     // number of buttons pressed
//       touches,     // number of fingers touching the screen
//       args,        // arguments you passed to bind
//       ctrlKey,     // true when control key is pressed
//       altKey,      // "      "  alt     "      "
//       shiftKey,    // "      "  shift   "      "
//       metaKey,     // "      "  meta    "      "
//       locked,      // whether document.pointerLockElement is set
//       dragging,    // is the component currently being dragged
//       moving,      // "              "              "  moved
//       scrolling,   // "              "              "  scrolled
//       wheeling,    // "              "              "  wheeled
//       pinching     // "              "              "  pinched
//     } = state
//   }, {
//     // global options such as `domTarget`
//     ...genericOptions,
//     // gesture specific options
//     drag:   dragOptions,
//     wheel:  wheelOptions,
//     pinch:  pinchOptions,
//     scroll: scrollOptions,
//     wheel:  wheelOptions,
//     hover:  hoverOptions,
//   }
//   )
