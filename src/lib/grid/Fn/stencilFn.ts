
import { Rank , LocalStateGrid, Coordinate } from '../Data/Stencil'
import { 
    Point3, 
    Building,
    Storey,
    EnvelopeSection, 
    Room,
    WallUnit, 
    FloorUnit, 
    RoofUnit,
    Void,
    Active, 
    Inactive,
    SkylarkCellState,
    ActiveState
} from '../Data/CellState'; 

const isRank1 = (rank: Rank): rank is Rank.R1 => {
    return (rank as Rank.R1) === 'R1'
}
const isRank2 = (rank: Rank): rank is Rank.R2 => {
    return (rank as Rank.R2) === 'R2'
}
const isRank3 = (rank: Rank): rank is Rank.R3 => {
    return (rank as Rank.R3) === 'R3'
}
const localStateGridisRank1 = (localStateGrid: LocalStateGrid<Rank>): localStateGrid is LocalStateGrid<Rank.R1> => {
    return (localStateGrid as LocalStateGrid<Rank.R1>)[0]._tag === ('Active' || 'Inactive'); 
}
const localStateGridisRank2 = (localStateGrid: LocalStateGrid<Rank>): localStateGrid is LocalStateGrid<Rank.R2> => {
    return (localStateGrid as LocalStateGrid<Rank.R2>)[0][0]._tag === ('Active' || 'Inactive');
}
const localStateGridisRank3 = (localStateGrid: LocalStateGrid<Rank>): localStateGrid is LocalStateGrid<Rank.R3> => {
    return (localStateGrid as LocalStateGrid<Rank.R3>)[0][0][0]._tag === ('Active' || 'Inactive');
}

// -- | The stencil function outlaws particular adjacencies. It takes in a coordinate, and returns the allowed states ? 

const stencilFn1D = (localStateGrid: LocalStateGrid<Rank.R1>) => {
    // 1. 
    return true
}
const stencilFn2D = (localStateGrid: LocalStateGrid<Rank.R2>) => {
    // 1. 
    return true
}
const stencilFn3D = (localStateGrid: LocalStateGrid<Rank.R3>) => {
    // 1. 
    return true
}



const stencilFn 
= (p: Coordinate) => (localStateGrid: LocalStateGrid<Rank>): Boolean => {

    // -- | get the local state grid from the coordinate:
    //  We store the grid voxels in a graph data structure. -> Each voxel equally contains a grid data structure outlining the arrangment/connection of elements
    //  in its interior 

    // -- | poor man's pattern matching function: 
    return localStateGridisRank1(localStateGrid) 
    ? stencilFn1D(localStateGrid)
    : localStateGridisRank2(localStateGrid) 
    ? stencilFn2D(localStateGrid)
    : localStateGridisRank3(localStateGrid)
    ? stencilFn3D(localStateGrid)
    : false

}
// can we do some type magic to inger the rank ? 
type LocalStateGridRank<O> = O extends LocalStateGrid<infer R> ? LocalStateGrid<R> : never 



// Refinement types : 
const isActive = (state: SkylarkCellState): state is Active => {
    return (state as Active)._tag === "Active"; 
}
const isNotActive = (state: SkylarkCellState): state is Inactive => {
    return (state as Inactive)._tag === "Inactive"; 
}
const isEnvelopeSection = (activeState: ActiveState): activeState is Building => {
    return (activeState as Building)._tag === "Building"; 
}

const stateIsEnvelopeSection = (state: SkylarkCellState): state is Active => {
    return (state as Active)._tag === "Active" 
    && isEnvelopeSection((state as Active).active_state)
}


// It may be far easiet to do this using a switch/fold function ? 
// equally - our io-ts types have an 'is' method defined on them, which is equivalent. 


// Combiinators for refinement types
type TypeGuard<T, U extends T> = (candidate: T) => candidate is U;

type GetInputType<T extends TypeGuard<any, any>> =
  T extends TypeGuard<infer U, any>
   ? U
   : never;

type GetRefinementType<T extends TypeGuard<any, any>> =
  T extends TypeGuard<any, infer U>
   ? U
   : never;

declare function or<T extends TypeGuard<any, any>, U extends TypeGuard<any, any>>(
  f: T, g: U
): TypeGuard<GetInputType<T | U>, GetRefinementType<T> | GetRefinementType<U>>;


// const isActiveOrInactive = or(isActive, isNotActive);
