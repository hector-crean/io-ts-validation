import { Matrix4 } from 'three';

export type Matrix4Tuple = [
	number, number, number, number,
	number, number, number, number,
	number, number, number, number,
	number, number, number, number,
];

export const createMatrix4 = (input: Matrix4Tuple): Matrix4 => {
    return new Matrix4().set(
        input[0], input[4], input[8], input[12],
		input[1], input[5], input[9], input[13],
		input[2], input[6], input[10], input[14],
		input[3], input[7], input[11], input[15]
    )
}


export const createMatix4Tuple = (matrix4: Matrix4): Matrix4Tuple =>  {return matrix4.elements as Matrix4Tuple; }

