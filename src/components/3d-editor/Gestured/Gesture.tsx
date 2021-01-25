import React, { Suspense, useState, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { useSpring, useSprings, config as defaultConfig } from '@react-spring/core'
import { a } from '@react-spring/three'
import { a as aDom } from '@react-spring/web'
import { EffectComposer, SSAO, SMAA } from 'react-postprocessing'

// -- scroller
import { useCallback, useEffect } from 'react'
import { useGesture } from 'react-use-gesture'
import { Bounds, UseGestureConfig, State, UserHandlers, EventTypes, NativeHandlers, ReactEventHandlers } from 'react-use-gesture/dist/types'



type Fn = ( 
    _handlers: Partial<UserHandlers<EventTypes> & NativeHandlers<EventTypes>>, 
    config?: UseGestureConfig | undefined
) => (...args: any[]) => ReactEventHandlers



// type useGestureFn = (
//     _handlers: {
//       onDrag: (s: State) => State,
//       onDragStart: (s: State) => State,
//       onDragEnd: (s: State) => State,
//       onPinch: (s: State) => State,
//       onPinchStart: (s: State) => State,
//       onPinchEnd: (s: State) => State,
//       onScroll: (s: State) => State,
//       onScrollStart: (s: State) => State,
//       onScrollEnd: (s: State) => State,
//       onMove: (s: State) => State,
//       onMoveStart: (s: State) => State,
//       onMoveEnd: (s: State) => State,
//       onWheel: (s: State) => State,
//       onWheelStart: (s: State) => State,
//       onWheelEnd: (s: State) => State,
//       onHover: (s: State) => State,
//     },
//     config?: {
//         // drag?: DragConfig;
//         // wheel?: CoordinatesConfig<'wheel'>;
//         // scroll?: CoordinatesConfig<'scroll'>;
//         // move?: CoordinatesConfig<'move'>;
//         // pinch?: DistanceAngleConfig<'pinch'>;
//         // hover?: {
//         //     enabled?: boolean;
//         // };
//         // domTarget?: DomTarget;
//         // window?: EventTarget;
//         // eventOptions?: {
//         //     capture?: boolean;
//         //     passive?: boolean;
//         // };
//         // enabled?: boolean;
//         // transform?: (v: Vector2) => Vector2;
//     }
//   )
