
import * as t from "io-ts";
import {isNonEmptyString, isIdString, isValidDateString, isBetween0and10 } from './type-guards'
/**
 * Custom codecs
 */

export const NonEmptyString = new t.Type<string, string, unknown>(
    "nonEmptyString",
    isNonEmptyString,
    (input, context) => (isNonEmptyString(input) ? t.success(input) : t.failure(input, context)),
    t.identity,
  );
  
export const UtcDateString = new t.Type<string, string, unknown>(
    "utcDateString",
    isValidDateString,
    (input, context) => (isValidDateString(input) ? t.success(input) : t.failure(input, context)),
    t.identity,
  );
  
export const IdString = new t.Type<string, string, unknown>(
    "idString",
    isIdString,
    (input, context) => (isIdString(input) ? t.success(input) : t.failure(input, context)),
    t.identity,
  );
  
const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
interface UUIDBrand { readonly UUID: unique symbol }
type UUID = t.Branded<string, UUIDBrand>
const UUID = t.brand(t.string, (s): s is UUID => regex.test(s), 'UUID')
export { UUID }  

export const Truthy = t.union([t.literal('true'), t.literal('fase')])
  
interface RatingBrand { readonly Rating: unique symbol}
type Rating = t.Branded<number, RatingBrand>
const Rating = t.brand(t.number, (n): n is Rating => isBetween0and10(n), 'Rating')
export { Rating }  

