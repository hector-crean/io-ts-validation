import { Quaternion } from 'three';

export type QuaternionTuple = [number, number, number, number];

export const createVector3 = (input: QuaternionTuple): Quaternion => {
    return new Quaternion().set(
        input[0], input[1], input[2], input[3]
    )
}


