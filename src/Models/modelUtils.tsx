import React, { Fragment, useRef, useEffect, useState, useCallback, useContext, useMemo } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei/OrbitControls'
import { useThree } from 'react-three-fiber'


////////////////////
//  Types
///////////////////


import { MouseEvent, PointerEvent, WheelEvent } from 'react-three-fiber/canvas'

export type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
export type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O
/**
 * Allows using a TS v4 labeled tuple even with older typescript versions
 */
export type NamedArrayTuple<T extends (...args: any) => any> = Parameters<T>

/**
 * If **T** contains a constructor, @see ConstructorParameters must be used, otherwise **T**.
 */
type Args<T> = T extends new (...args: any) => any ? ConstructorParameters<T> : T

export type Euler = THREE.Euler | Parameters<THREE.Euler['set']>
export type Matrix4 = THREE.Matrix4 | Parameters<THREE.Matrix4['set']>
export type Vector2 = THREE.Vector2 | Parameters<THREE.Vector2['set']>
export type Vector3 = THREE.Vector3 | Parameters<THREE.Vector3['set']>
export type Color = THREE.Color | number | string // Parameters<T> will not work here because of multiple function signatures in three.js types
export type Layers = THREE.Layers | Parameters<THREE.Layers['set']>
export type Quaternion = THREE.Quaternion | Parameters<THREE.Quaternion['set']>

export type EventHandlers = {
  onClick?: (event: MouseEvent) => void
  onContextMenu?: (event: MouseEvent) => void
  onDoubleClick?: (event: MouseEvent) => void
  onPointerUp?: (event: PointerEvent) => void
  onPointerDown?: (event: PointerEvent) => void
  onPointerOver?: (event: PointerEvent) => void
  onPointerOut?: (event: PointerEvent) => void
  onPointerMove?: (event: PointerEvent) => void
  onPointerMissed?: (event: React.MouseEvent) => void
  onWheel?: (event: WheelEvent) => void
}

export interface NodeProps<T, P> {
  /** Attaches this class onto the parent under the given name and nulls it on unmount */
  attach?: string
  /** Appends this class to an array on the parent under the given name and removes it on unmount */
  attachArray?: string
  /** Adds this class to an object on the parent under the given name and deletes it on unmount */
  attachObject?: NamedArrayTuple<(target: string, name: string) => void>
  /** Constructor arguments */
  args?: Args<P>
  children?: React.ReactNode
  ref?: React.Ref<React.ReactNode>
  key?: React.Key
  onUpdate?: (self: T) => void
}

export type Node<T, P> = Overwrite<Partial<T>, NodeProps<T, P>>

export type Object3DNode<T, P> = Overwrite<
  Node<T, P>,
  {
    position?: Vector3
    up?: Vector3
    scale?: Vector3
    rotation?: Euler
    matrix?: Matrix4
    quaternion?: Quaternion
    layers?: Layers
    dispose?: (() => void) | null
  }
> &
  EventHandlers


export type MeshProps = Object3DNode<THREE.Mesh, typeof THREE.Mesh>





export const useHover = () => {
    const [hovered, setHovered] = useState<boolean>(); 
    const [active, setActive] = useState<boolean>(); 

    useEffect(()=> void (document.body.style.cursor = hovered ? 'pointer' : 'auto'))

    const hover = useCallback((e: PointerEvent) => (e.stopPropagation(), setHovered(true)), [])
    const unhover = useCallback((e) => setHovered(false), [])

    return [{
        onClick: (e: MouseEvent) => {
          e.stopPropagation(); 
          setActive(!active)
        },
        onPointerOver: (e: PointerEvent) => hover(e),
        onPointerOut: (e: PointerEvent) => unhover(e),
        'material-color': hovered ? 'pink' : 'gray',
        'material-transparent': active ? 'false': 'true',
        'material-opacity': active ? 0.1 : 1
      }, hovered]
  }
  


//   const camContext = React.createContext({})

//   function Controls({ children }: {children: any}) {
//   const { gl, camera } = useThree()
//   const api = useState(true)
//   return (
//     <Fragment>
//       <OrbitControls args={[camera, gl.domElement]} enableDamping enabled={api[0]} />
//       <camContext.Provider value={api}>{children}</camContext.Provider>
//     </Fragment>
//   )
// }