
import * as E from 'fp-ts/Either'
import * as Eq from 'fp-ts/Eq'
import * as F from 'fp-ts/function'
import * as _Map from 'fp-ts/Map'
import * as O from 'fp-ts/Option'
import * as Ord from 'fp-ts/Ord'
import * as S from 'fp-ts/Semigroup'
import  * as Show from 'fp-ts/Show'
import * as C from 'io-ts/Codec'
import * as D from 'io-ts/Decoder'
import * as G from 'io-ts/Guard'
import * as M from 'fp-ts/Monoid'; 
import * as R from 'fp-ts/Record'
import { Matrix4Tuple } from './Matrix4';  
import { v4 as uuidv4 } from 'uuid';

// MetaData
import { SwiftModule } from '../../meta-data/swiftComponentData'
import { SkylarkModule } from '../../meta-data/skylarkComponentData'


///////////////
// This is for situaitons where we want to click on a block, and add a block to it. Or if we drag and drop a block
// onto another block. We check whether the bond is actually possible, and then (if so) we provide the transformation 
// operation to stick the added block on in the right place.
// These sorts of operations are useful, too, when we are doing are pattern definitions


//Bond + utilies 

// A face type has an id, which will be a prime number. A bond id is the multi0lication of the face ids that it is joining.
// A face will also have a 'bondwithID', which is a multiplication of all the faceIDs that it can bind with. If it can bind with all,
// we can set the bondwithID to 1, i.e. universal bonder. 

/*
Face1 ID         2  |----------------------------------------->     .
Face2 ID         2         3         5           7 ..

Bond ID          4          6       10           14       
*/


// bonds occur at the join between grid cells... 


export interface Bond { readonly bondID: number, readonly transform: Matrix4Tuple }

export const makeBond = (bondID: number, transform: Matrix4Tuple): Bond => {
  return {bondID: bondID, transform: transform}
}

type BondKeyString = `${SwiftModule}->${SwiftModule}`


// fp-ts utilities : Equals & Order 
const ordBond = F.pipe( Ord.ordNumber, Ord.contramap((u: Bond) => u.bondID) )
const eqBond: Eq.Eq<Bond> = { equals: ordBond.equals }
const eqBondKeyString: Eq.Eq<BondKeyString> = Eq.fromEquals((x,y) => x === y); 
const ordBondKeyString = Ord.fromCompare<BondKeyString>((x,y) => Ord.ordString.compare(x, y))


export const componentBonds: Map<BondKeyString, Bond> = new Map<BondKeyString, Bond>(); 


// Operations
const elemBond = _Map.elem(eqBond)
const keys = _Map.keys(ordBondKeyString)
const values = _Map.values(ordBond)
const toArray = _Map.toArray(ordBondKeyString)
const lookupWithKey = _Map.lookupWithKey(eqBondKeyString)

export const findBondValue = (bondString: BondKeyString): O.Option<[BondKeyString, Bond]> => {
  return _Map.lookupWithKey(eqBondKeyString)(bondString)(componentBonds)
}

//refinement: 
const isNumber = (u: string | number): u is number => typeof u === 'number'
// const filter = (y:  Map<[SwiftModule,SwiftModule], Bond>) => F.pipe(y, _Map.filter(isNumber))














// connection ids 
export const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 
  83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 
  179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 
  277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 
  383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 
  491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 
  613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 
  733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 
  857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 
  983, 991, 997
]



// a bondID is simply the multiplication of primes.  => our ids are prime factorisation, with unique primes
export interface PrimesMultipliedBrand {
  readonly PrimesMultiplied: unique symbol
}
export type tBondID = number & PrimesMultipliedBrand
export const BondID: D.Decoder<unknown, tBondID> = F.pipe(
  D.number,
  D.refine((n): n is tBondID => {

    const primeFactorization = (number: number, result?: any): any => {
      var result = (result || []);
      var root = Math.sqrt(number);
      var x = 2;
    
      if (number % x) {
        x = 3;
    
        while ((number % x) && ((x = (x + 2)) < root)) {}
      }
    
      x = (x <= root) ? x : number;
    
      result.push(x);
    
      return (x === number) ? result : primeFactorization((number / x), result);
    };

    return (primeFactorization(n) as number[]).every(val => primes.includes(val));

  }, 'BondID')
)

// export type BondID = D.TypeOf<typeof BondID>







