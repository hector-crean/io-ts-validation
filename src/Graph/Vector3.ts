import { Vector3 } from 'three';

export type Vector3Tuple = [number, number, number];

export const createVector3 = (input: Vector3Tuple): Vector3 => {
    return new Vector3().set(
        input[0], input[1], input[2]
    )
}


