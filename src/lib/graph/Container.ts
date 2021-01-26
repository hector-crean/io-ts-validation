import { Matrix4, Vector3, Euler  } from 'three'
import { Matrix4Tuple, createMatrix4 } from './Matrix4'; 
import { Vector3Tuple } from './Vector3'; 
import { Bond } from './Bond'; 
import * as F from 'fp-ts/function'
import { v4 as uuidv4 } from 'uuid';


export interface IFace {
    faceID: string; 
    connectionCapacityID: number;
    connection: {_tag: 'unconnected'} | {_tag: 'connected', connectedTo: IFace, connectedBy: Bond} 
}

export const makeFace = (
    faceID: string = uuidv4(),
    connectionCapacityID: number = 1,
    connection: 
    | {_tag: 'unconnected'} 
    | {_tag: 'connected', connectedTo: IFace, connectedBy: Bond}
    = {_tag: 'unconnected'} 
): IFace => {return {faceID, connectionCapacityID, connection}}


export interface IFaces {
    top: IFace, 
    bottom: IFace,
    front: IFace,
    left: IFace,
    right: IFace,
    back: IFace,
}

export const makeFaces = (
    top: IFace = makeFace(), 
    bottom: IFace = makeFace(),
    front: IFace = makeFace(),
    left: IFace = makeFace(),
    right: IFace = makeFace(),
    back: IFace = makeFace()
): IFaces => { return {top, bottom, front, left, right, back}}




/**
 *  Containers are essential frames of reference. We can define the components with a continer with the container's
 * reference frame
 * 
 *                  |  <-- r1 -->   0   |       where r1 = [x1, y1, z1 ], a basis vector 
 *          T   =   |  <-- r2 -->   0   |       etc. Collectively, {r1,r2,r3} form a basis for the reference frame
 *                  |  <-- r3 -->   0   |
 *                  |  <-- O  -->   1   |       where O is the position of the origin 
 * 
 * 
 *         The world frame is generally defiend by: 
 * 
 *                  |   1   0   0   0   |
 *          Tw =    |   0   1   0   0   |
 *                  |   0   0   1   0   |
 *                  |   0   0   0   1   |
 */                 




export interface IContainer {
    parentContainerID: string | null; 
    containerID: string; 
    faces: IFaces
    worldTransform: Matrix4Tuple; 
    fromParentTransform: Matrix4Tuple; //This stores the local transform of the object. This is the object's transformation relative to its parent.
    // scale: Vector3Tuple; 

}

export const makeContainer = (
    parentContainerID: string | null,
    worldTransform: Matrix4Tuple = [1,0,0,0,  0,1,0,0,  0,0,1,0,  0,0,0,1],
    // scale: Vector3Tuple = [1,1,1],
    fromParentTransform: Matrix4Tuple = [1,0,0,0,  0,1,0,0,  0,0,1,0,  0,0,0,1],
    containerID: string = uuidv4(),
    // rank: number, // we use a chess phrase: rank 0 is the root node. Every level deeper into tree +=1 rank. 
    faces: IFaces = makeFaces(),
    /* 
    Suppose we have a reference frame, R=(𝑟1,𝑟2,𝑟3,𝑜)
    where 𝑟1,𝑟2,𝑟3 are the normalized basis vectors and 𝑜 is the origin. 
    We assume that these are all given in Euclidean space, which we will call world space W

     Suppose we are given a point in world space 𝑝^(W). To find 𝑝 with respect to your reference frame you take the vector from 𝑜 to 𝑝 and project it onto the basis vectors.
    */
    // position_wrt_W: Vector3,
    // scale_wrt_W: Vector3,
    // rotation_wrt_W: Euler
): IContainer => { return { parentContainerID, containerID, faces, worldTransform, fromParentTransform, /*scale , localTransform, worldTransform, position_wrt_W, scale_wrt_W, rotation_wrt_W */}}

export const makeChildContainer = (
    parentContainer: IContainer,
    fromParentTransform: Matrix4,
    scale: Vector3Tuple = [1,1,1],
    containerID: string = uuidv4(),
    faces: IFaces = makeFaces(),
): IContainer => {
    return { 
        parentContainerID: parentContainer.containerID, 
        worldTransform: (createMatrix4(parentContainer.worldTransform).clone().multiply(fromParentTransform)).elements as Matrix4Tuple, //
        fromParentTransform: fromParentTransform.elements as Matrix4Tuple,
        containerID: containerID,
        faces: faces,
        // scale: scale
    }
}

// interface IPattern {
//     patternid: string,
// }

// export const makePattern = (
//     patternid: string
// ): IPattern => { return { patternid }}



// const isContainer = ContainerT.is({ location: "Photographing corgis" })
// const maybeContainer = ContainerT.decode({ location: 10 })


/////////
// States
/////////
/// Create urls for state? Envelope.Room, Envelope.Room.Wall etc? 

// Site, Building, Floor, Room, Wall, Floor, Ceiling, Window, Doorway, void
export enum ContainerStateType {
    Site = 'Site',
    Building = 'Building',
    Floor = 'Floor',
    Room = 'Room',
    Wall = 'Wall',
    Ceiling = 'Ceiling',
    Window = 'Window',
    Doorway = 'Doorway',
    Void = 'Void',
    Roof = 'Roof',
    EnvelopeSection = 'EnvelopeSection',
    Balcony = 'Balcony'
    //U-Shape, L-shape, etc. 
}

// export type PatternedContainer = IPattern & IContainer

// Ought to create brands/refinement types constraining the behaviours of the 
export type Site = { _tag: ContainerStateType.Site, data: IContainer }
// const SiteT = t.type({data: PatternedContainerT }, 'Site'); 
// type _Site = t.TypeOf<typeof SiteT>
export type Building = { _tag: ContainerStateType.Building, data: IContainer }
export type Floor = { _tag: ContainerStateType.Floor; data: IContainer }
export type Room = { _tag: ContainerStateType.Room, data: IContainer } // <- 4 walls and a void 
export type Wall = { _tag: ContainerStateType.Wall; data: IContainer }
export type Ceiling = { _tag: ContainerStateType.Ceiling; data: IContainer }
export type Window = { _tag: ContainerStateType.Window; data: IContainer }
export type Doorway = { _tag: ContainerStateType.Doorway; data: IContainer }
export type Void = { _tag: ContainerStateType.Void; data: IContainer }

export type Roof = { _tag: ContainerStateType.Roof; data: IContainer }
export type EnvelopeSection = { _tag: ContainerStateType.EnvelopeSection; data: IContainer }
export type Balcony = { _tag: ContainerStateType.Balcony; data: IContainer }


export type ContainerState = 
| Site 
| Building 
| Floor 
| Room 
| Wall | Ceiling 
| Window | Doorway | Void 
| Roof | EnvelopeSection | Balcony



// State constructors
export const makeSite = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Site,
    data: data
})
export const makeBuilding = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Building,
    data: data
})
export const makeRoom = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Room,
    data: data
})
export const makeFloor = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Floor,
    data: data
})
export const makeCeiling = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Ceiling,
    data: data
})
export const makeWall = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Wall,
    data: data
})
export const makeWindow = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Window,
    data: data
})
export const makeDoorway = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Doorway,
    data: data
})
export const makeVoid = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Void,
    data: data
})
export const makeRoof = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Roof,
    data: data
})
export const makeEnvelopeSection = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.EnvelopeSection,
    data: data
})
export const makeBalcony = (data: IContainer): ContainerState => ({
    _tag: ContainerStateType.Balcony,
    data: data
})

export const containerConstructors: Record<ContainerStateType, (data: IContainer) => ContainerState> = {
    [ContainerStateType.Site]: makeSite,
    [ContainerStateType.Building]: makeBuilding,
    [ContainerStateType.Room]: makeRoom,
    [ContainerStateType.Floor]: makeFloor,
    [ContainerStateType.Ceiling]: makeCeiling,
    [ContainerStateType.Wall]: makeWall,
    [ContainerStateType.Window]: makeWindow,
    [ContainerStateType.Doorway]: makeDoorway,
    [ContainerStateType.Void]: makeVoid,
    [ContainerStateType.Roof]: makeRoof,
    [ContainerStateType.EnvelopeSection]: makeEnvelopeSection,
    [ContainerStateType.Balcony]: makeBalcony,

}

// export type ContainerState = Site | Building | Floor | Room | Wall | Ceiling | Window | Doorway | Void 

/// Generic pattern matching function
export const matchContainerState = <ReturnType extends any>(

    a: (state: Site) => ReturnType,
    b: (state: Building) => ReturnType,
    c: (state: Floor) => ReturnType,
    d: (state: Room) => ReturnType,
    e: (state: Wall) => ReturnType,
    f: (state: Ceiling) => ReturnType,
    g: (state: Window) => ReturnType,
    h: (state: Doorway) => ReturnType,
    i: (state: Void) => ReturnType,
    j: (state: Roof) => ReturnType,
    k: (state: EnvelopeSection) => ReturnType,
    l: (state: Balcony) => ReturnType

) => (state: ContainerState): ReturnType => {
    switch(state._tag) {
      case ContainerStateType.Site:
          return a(state);
      case ContainerStateType.Building:
          return b(state);
      case ContainerStateType.Floor:
          return c(state);
      case ContainerStateType.Room:
          return d(state);
      case ContainerStateType.Wall:
          return e(state); 
      case ContainerStateType.Ceiling:
          return f(state); 
      case ContainerStateType.Window:
          return g(state); 
      case ContainerStateType.Doorway:
          return h(state); 
      case ContainerStateType.Void:
          return i(state); 
      case ContainerStateType.Roof:
          return j(state); 
      case ContainerStateType.EnvelopeSection:
          return k(state); 
      case ContainerStateType.Balcony:
          return l(state); 
      default:
          return F.absurd(state);
    }
};
// e.g:
export const logState: (state: ContainerState) => void 
= matchContainerState(
    (state) => console.log(state._tag), //Site
    (state) => console.log(state._tag), //Building
    (state) => console.log(state._tag), //Floor
    (state) => console.log(state._tag), //Room
    (state) => console.log(state._tag), //Wall
    (state) => console.log(state._tag), //Ceiling
    (state) => console.log(state._tag), //Window
    (state) => console.log(state._tag), //Doorway
    (state) => console.log(state._tag), //Void
    (state) => console.log(state._tag), //Roof
    (state) => console.log(state._tag), //Envelope
    (state) => console.log(state._tag), //Balcony
);

// Create forest fucnctions: make, unfold:


enum PatternMode {
    'A*' = 0,
    'AB*A' = 1,
    'AB(n)A' = 2,
}

enum Periodicity {
    cylic = 0,
    alternating = 1
}









