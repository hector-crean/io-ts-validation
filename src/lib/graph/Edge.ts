
import * as F from 'fp-ts/function'; 
import * as Eq from 'fp-ts/Eq'
import { SwiftModule } from '../../meta-data/swiftComponentData'
import {componentBonds, tBondID, Bond, BondID } from './Bond'; 
import { v4 as uuidv4 } from 'uuid';
import { IVertex } from './Vertex'; 
//   receptor = binding => effector function
// If a block is connected to another block, this must update the state of the original block? 
// lock & key ? receptor & antigen?  




export interface IEdge<E> {
    link: [string,string],
    data: E; 
}

export type EdgeLogic = 
| {_tag: 'childOf' }  
| {_tag: 'parentOf' }
| {_tag: 'neighbourOf', bond: Bond}
// | {_tag: 'x', bond: Bond -> will relate how the two components are joined together. i.e the transformation}

export interface IEdgeData{
    // All our edges will be directed to keep things simple. 

    // type Predicate<A> = (a: A) => boolean
    // predicate is defined by truth tables, which are designer set. 
    edgeLogic: EdgeLogic

}

//Constructors:

export const makeEdge = <E, V>(
    vertex1: IVertex<V>,
    vertex2: IVertex<V>,
    data: E
): IEdge<E> => {
    return {
      link: [vertex1.vertexID, vertex2.vertexID], data: data
    }
}


export const matchEdge = <R1, R2, R3>(
    onChildOf: () => R1,
    onParentOf: () => R2,
    onNeighbourOf: (bond: Bond) => R3
) => (edgeLogic: EdgeLogic): any => {
    switch (edgeLogic._tag) {
      case 'childOf':
        return onChildOf()
      case 'parentOf':
        return onParentOf()
      case 'neighbourOf':
        return onNeighbourOf(edgeLogic.bond)
    }
  }




//Eq
const eqEdgeLogic: Eq.Eq<EdgeLogic> = Eq.fromEquals((x, y) => {
    if (x._tag === 'childOf' && y._tag === 'childOf') return true
    return false;
  });


const eqEdge = Eq.getStructEq({
    link: Eq.getTupleEq(Eq.eqString, Eq.eqString),
    data: eqEdgeLogic
})


// Truth tables: which components can be joined to one another?

// Can we use an analogy from lego, or protein-protein interaction? 


// type Predicate<A> = (a: A) => boolean


