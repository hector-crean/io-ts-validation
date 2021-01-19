
import * as Eq from 'fp-ts/Eq'
import { IBuildingComponent, matchComponentState, ComponentState } from './Component'; 
import { ContainerState} from './Container'; 
import { v4 as uuidv4 } from 'uuid';




export interface IVertex<V> {
    vertexID: string; 
    data: V
}

export interface IVertexData {
    container: ContainerState
    component: ComponentState
}


//Constructors:

export const makeVertex = <V=IVertexData>(
    data: V,
    vertexID: string = uuidv4(), 
): IVertex<V> => {
    return {vertexID, data}
}



//Eq
const eqContainerState: Eq.Eq<ContainerState> = Eq.fromEquals((x, y) => {
    if (x._tag === 'Site' && y._tag === 'Site') return true
    if (x._tag === 'Building' && y._tag === 'Building') return true
    if (x._tag === 'EnvelopeSection' && y._tag === 'EnvelopeSection') return true
    if (x._tag === 'Roof' && y._tag === 'Roof') return true
    if (x._tag=== 'Balcony' && y._tag === 'Balcony') return true
    if (x._tag === 'Floor' && y._tag === 'Floor') return true
    if (x._tag === 'Room' && y._tag === 'Room') return true
    if (x._tag === 'Wall' && y._tag === 'Wall') return true
    if (x._tag === 'Ceiling' && y._tag === 'Ceiling') return true
    if (x._tag === 'Window' && y._tag === 'Window') return true
    if (x._tag === 'Doorway' && y._tag === 'Doorway') return true
    if (x._tag === 'Void' && y._tag === 'Void') return true
    return false;
  });

const eqDimensions = Eq.getStructEq({
    X: Eq.eqNumber,
    Y: Eq.eqNumber,
    Z: Eq.eqNumber,
    unit: Eq.eqString //bit of a fudge
  })

const eqBuldingComponent = Eq.getStructEq({
    moduleName: Eq.eqString,
    dimensions: eqDimensions, 
    buildingSystem: Eq.eqString,
    locationClass: Eq.eqString,
    // roofProperties?: IRoofProperties
    cost: Eq.getStructEq({amount: Eq.eqNumber, currency: Eq.eqString}),
    assemblyTime: Eq.getStructEq({time: Eq.eqNumber, units: Eq.eqString}), 
})

const eqComponentState: Eq.Eq<ComponentState> = Eq.fromEquals((x, y) => {
    if (x._tag === 'unChosen' && y._tag === 'unChosen' ) return true; 
    if (x._tag === 'chosen' && y._tag === 'chosen') return eqBuldingComponent.equals(x.component, y.component);
    return false;
  });

const eqVertexData = Eq.getStructEq({
    container: eqContainerState,
    component: eqComponentState
})

const eqVertex = Eq.getStructEq({
    name: Eq.eqString,
    data: eqVertexData
})




 