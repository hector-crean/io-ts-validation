import * as t from 'io-ts'; 
import { users, answer } from './iots-types';


export type Users = t.TypeOf<typeof users>
export type Answer = t.TypeOf<typeof answer>