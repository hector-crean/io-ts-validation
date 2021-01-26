
import { Int } from '../Data/Int';
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
} from '../Data/CellState'

// --- Int represents the natural unit of the grid (i.e the unit length in one direcrion.). This obiously only works for symstems that
// --- have the cosistent sizings...
// good reference on refinement types etc.:  https://www.freecodecamp.org/news/typescript-curry-ramda-types-f747e99744ab/


/// ---| Local Grid is the grid of 2, 8, or 26 cells around a cell. This will be useful later when we need to couple
/// ---| the states of adjoining grid cells 


export type Coordinate = [Int, Int, Int]

/*
Rank: https://mathworld.wolfram.com/TensorRank.html:
Borrowing the notion of 'Rank' from mathematics to denote the number of dimensions in our grid.

Rank	    object
0	        scalar
1	        vector
2	        N×N matrix
>=3	        tensor
*/
export enum Rank {
    // R0 = 'R0',
    R1 = 'R1',
    R2 = 'R2',
    R3 = 'R3',
  }
export interface ShapeMap<T> {
    // R0: T;
    R1: [T, T, T];
    R2: [[T, T, T], [T, T, T], [T, T, T]];
    R3: [[[T, T, T], [T, T, T], [T, T, T]], [[T, T, T], [T, T, T], [T, T, T]], [[T, T, T], [T, T, T], [T, T, T]]]; 
  }

export type LocalStateGrid<
  R extends Rank, S extends SkylarkCellState = SkylarkCellState
  > = ShapeMap<S>[R]


