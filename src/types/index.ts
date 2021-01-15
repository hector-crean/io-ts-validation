import * as D from 'io-ts/Decoder';
import { pipe } from 'fp-ts/pipeable';
import * as E from 'fp-ts/Either';

import { QueryResult } from '@apollo/client'; 
import * as t from "io-ts";
import { Subassembly } from '../store/model/types';

/////////
// Utility Types
//////


// https://github.com/gcanti/io-ts-types/tree/master/src
function fromRefinement<A>(name: string, is: (u: unknown) => u is A): t.Type<A, A, unknown> {
    return new t.Type(name, is, (u, c) => (is(u) ? t.success(u) : t.failure(u, c)), t.identity)
}

/*  uuid:   */
const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
interface UUIDBrand { readonly UUID: unique symbol }
type UUID = t.Branded<string, UUIDBrand>
const UUID = t.brand(t.string, (s): s is UUID => regex.test(s), 'UUID')

/* date:  */
interface DateC extends t.Type<Date, Date, unknown> {}
const isDate = (u: unknown): u is Date => u instanceof Date
const date: DateC = fromRefinement('Date', isDate)


/* often we may have encoded data types as string -> check whether we can extract data from string */
interface NonEmptyStringBrand { readonly NonEmptyString: unique symbol }
type NonEmptyString = t.Branded<string, NonEmptyStringBrand>
interface NonEmptyStringC extends t.Type<NonEmptyString, string, unknown> {}
const NonEmptyString: NonEmptyStringC = t.brand(
    t.string,
    (s): s is NonEmptyString => s.length > 0,
    'NonEmptyString'
)

interface NumberFromStringC extends t.Type<number, string, unknown> {}
const NumberFromString: NumberFromStringC = new t.Type<number, string, unknown>(
    'NumberFromString',
    t.number.is,
    (u, c) =>
      E.either.chain(t.string.validate(u, c), s => {
        const n = +s
        return isNaN(n) || s.trim() === '' ? t.failure(u, c) : t.success(n)
      }),
    String
  )

  


const BuildingSystem = t.union([t.literal("WikiHouseSwift"),t.literal("WikiHouseSkylark")])
const LocationClass = t.union([t.literal("EnvelopeSection"), t.literal("Wall")])
const SubassemblyName = t.union([
  t.literal('Module-A1_05'),
  t.literal('Module-A1_04'),
  t.literal('Module-A1_03'),
  t.literal('Module-A1_02'),
  t.literal('Module-A1_01'),
  t.literal('Module-A1_v/a'),
  t.literal('Module-A2_05'),
  t.literal('Module-A2_04'),
  t.literal('Module-A2_03'),
  t.literal('Module-A2_02'),
  t.literal('Module-A2_01'),
  t.literal('Module-A2_v/a'),
  t.literal('Module-B1_07'),
  t.literal('Module-B1_06'),
  t.literal('Module-B1_05'),
  t.literal('Module-B1_04'),
  t.literal('Module-B1_03'),
  t.literal('Module-B1_02'),
  t.literal('Module-B1_01'),
  t.literal('Module-B1_v/a'),
  t.literal('Module-B2_07'),
  t.literal('Module-B2_06'),
  t.literal('Module-B2_05'),
  t.literal('Module-B2_04'),
  t.literal('Module-B2_03'),
  t.literal('Module-B2_02'),
  t.literal('Module-B2_01'),
  t.literal('Module-B2_v/a'),
  t.literal('Module-C1_05'),
  t.literal('Module-C1_04'),
  t.literal('Module-C1_03'),
  t.literal('Module-C1_02'),
  t.literal('Module-C1_01'),
  t.literal('Module-C1_v/a'),
  t.literal('Module-C2_05'),
  t.literal('Module-C2_04'),
  t.literal('Module-C2_03'),
  t.literal('Module-C2_02'),
  t.literal('Module-C2_01'),
  t.literal('Module-C2_v/a'),
  t.literal('Module-D1_04'),
  t.literal('Module-D1_03'),
  t.literal('Module-D1_02'),
  t.literal('Module-D1_01'),
  t.literal('Module-D1_v/a'),
  t.literal('Module-E1_04'),
  t.literal('Module-E1_03'),
  t.literal('Module-E1_02'),
  t.literal('Module-E1_01'),
  t.literal('Module-E1_v/a')
])
type SubassemblyName = t.TypeOf<typeof SubassemblyName>
export type {SubassemblyName}
const PrimaryMaterial = t.literal("Timber.Plywood")
const RoofPitchType = t.union([t.literal('Dual-centre'), t.literal('Mono'), t.literal('Asymetric'), t.literal('Parapet'), t.literal('Flat')])
const SpansNStories = t.union([t.literal('1'), t.literal('2'), t.literal('3')])

const StructureAlmere = t.partial({
    __typename: t.literal("structureDataAlmere"),
    assemblyTimeInDays: t.number,
    buildingSystem: BuildingSystem,
    id: t.string,
    locationClass: LocationClass,
    moduleName: SubassemblyName,
    pitchedAngle1: t.number,
    pitchedAngle2: t.number,
    primaryMaterial: PrimaryMaterial,
    roofPitchType: RoofPitchType,
    spansNStories: SpansNStories,
    thickness: t.number,
    unitCost: t.number,
    xDimension: t.number,
    yDimension: t.number,
    zDimension: t.number 
  })

type StructureAlmere = t.TypeOf<typeof StructureAlmere>
export { StructureAlmere }

const StructureAlmereArray = t.array(StructureAlmere)
type StructureAlmereArray = t.TypeOf<typeof StructureAlmereArray>
export { StructureAlmereArray }




/* Decoding functions */

// type validatorFn = <T, A>(decoder: t.Decoder<T, A>) => (queryResult: QueryResult ) => any; 

// export const validator: validatorFn 
// = (decoder) => (queryResult) => {
//   return pipe(
//     queryResult.data,
//     decoder.decode,
//     // E.map((value) => ({value})),
//     E.fold(
//         // failure handler
//         (errors) => {console.log(`Error: object is ${errors}`)},
//         // success handler
//         (value) => {return value},
//     ),
//   );
// };


//https://dev.to/gillchristian/enough-fp-ts-to-work-with-io-ts-20ip
export const decodeWith 
= <A>(decoder: t.Decoder<unknown, A>) => ( response: unknown ) =>
  pipe(
    response,
    decoder.decode,
    // humanizeErrors,
    E.mapLeft((errors) => ({tag: 'decoding', errors} as const)),
  )
