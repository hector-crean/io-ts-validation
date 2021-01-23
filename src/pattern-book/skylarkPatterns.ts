import {  
    IVertex, IVertexData, containerConstructors, makeVertex,
    makeContainer, IEdge, IEdgeData, makeEdge, getVertices, makeGraph, logState,
    IGraph
} from '../graph'; 
import { v4 as uuidv4 } from 'uuid'; 
import * as A from 'fp-ts/Array'; 
import * as F from 'fp-ts/function'; 
import { SkylarkModule, skyLarkComponentLibrary, skylarkComponentRecord} from '../meta-data/skylarkComponentData'; 
import { Matrix4Tuple, createMatrix4, createMatix4Tuple} from '../graph/Matrix4'
import { Matrix4 } from 'three'; 
import { Box } from '../Models/Box'; 



interface patternCreatorArgs {
    n: number,
    floor: 0 | 1 | 2,
    A: SkylarkModule,
    B?: SkylarkModule,
    C?: SkylarkModule,
    E?: SkylarkModule,
    F?: SkylarkModule 
}

//////////////////////
/// WALL PATTERNS
//////////////////////

export enum WallPattern {
    // '*' = '*',
    'A*' = 'A*',
    'AB*A' = 'AB*A',
    // 'A(BC)*A' = 'A(BC)*A',
    // 'A*B*' = 'A*B*'
}

export const wallPatternBook: Record<WallPattern, (args: any) => IGraph<IVertexData, IEdgeData>> = {
    [WallPattern['A*']]: (args: patternCreatorArgs) => createGraph_Astr(args.n, args.A, args.floor),
    [WallPattern['AB*A']]: (args: {n: number, A: SkylarkModule, B: SkylarkModule, floor: 0 | 1 | 2}) => createGraph_AstrB(args.n, args.A, args.B, args.floor),

    // [WallPattern['AB*A']]: (args: {n: number, A: SkylarkModule, B: SkylarkModule}) => createGraph_A_Bstr_A(args.n, args.A, args.B),
    // [WallPattern['A(BC)*A']]: (args: {n: number, A: SkylarkModule, B: SkylarkModule, C:SkylarkModule}) => createGraph_A_BstrCStra_A(args.n, args.A, args.B, args.C),
    // [WallPattern['A*B*']]: (args: {n: number, A: SkylarkModule, B: SkylarkModule}) => createGraph_Astr_Bstr(args.n, args.A, args.B)
}



const createGraph_basePattern = () => {
    
}


export const createGraph_Astr = (n: number, A: SkylarkModule, floor: 0 | 1 | 2) => {
    const rootVertex: IVertex<IVertexData> = makeVertex<IVertexData>(
        {
            container: containerConstructors.Wall( makeContainer(uuidv4(), [1,0,0,0,  0,1,0,0,  0,0,1,0,  0,0,0,1])),
            component: {_tag: 'unChosen'}
        }
    )
  
    const leafVertices = [...new Array(n)].map((_,i) => i).map(
        (el) => { 
            const { X, Y, Z } = skylarkComponentRecord[A].dimensions; 
            const transformation = new Matrix4().makeTranslation(el*X, Y*floor,0)
            console.log('transformation', transformation); 
            return makeVertex<IVertexData>(
                {
                    container: containerConstructors.Wall(
                        makeContainer( 
                            uuidv4(), 
                            createMatix4Tuple(transformation)
                        )
                    ), 
                    component: {_tag: 'chosen', component: skylarkComponentRecord[A]}
                }
            )
        }
    )
    // const edge1_2: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(leafVertices[0], leafVertices[1], {edgeLogic: {_tag: 'childOf'}})
    // const edge1_3: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(vertex2, vertex3, {edgeLogic: {_tag: 'childOf'}})
    // const edge1_4: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(vertex3, vertex4, {edgeLogic: {_tag: 'childOf'}})
    // const edge1_5: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(vertex4, vertex5, {edgeLogic: {_tag: 'childOf'}})


    const g = makeGraph<IVertexData, IEdgeData>(
        [rootVertex, ...leafVertices], 
        [
        ] 
    ); 
    
    return g; 
}



const createGraph_AstrB = (n: number, A: SkylarkModule, B: SkylarkModule, floor: 0 | 1 | 2) => {
    const rootVertex: IVertex<IVertexData> = makeVertex<IVertexData>(
        {
            container: containerConstructors.Wall( makeContainer(uuidv4(), [1,0,0,0,  0,1,0,0,  0,0,1,0,  0,0,0,1])),
            component: {_tag: 'unChosen'}
        }
    )
  
    const leafVertices = [...new Array(n)].map((_,i) => i).map(
        (el) => { 
            switch(el === 0 || el === n-1){
                case true: 
                const { X: x1, Y: y1, Z: z1 }  = skylarkComponentRecord[A].dimensions; 
                const transformation1 = new Matrix4().makeTranslation(el*x1, y1*floor,0)
                console.log('transformation', transformation1); 
                return makeVertex<IVertexData>(
                    {
                        container: containerConstructors.Wall(
                            makeContainer( 
                                uuidv4(), 
                                createMatix4Tuple(transformation1)
                            )
                        ), 
                        component: {_tag: 'chosen', component: skylarkComponentRecord[A]}
                    }
                )
                case false:
                    const { X: x2, Y: y2, Z: z3 }  = skylarkComponentRecord[B].dimensions; 
                    const transformation2 = new Matrix4().makeTranslation(el*x2, y2*floor,0)
                    console.log('transformation', transformation2); 
                    return makeVertex<IVertexData>(
                        {
                            container: containerConstructors.Wall(
                                makeContainer( 
                                    uuidv4(), 
                                    createMatix4Tuple(transformation2)
                                )
                            ), 
                            component: {_tag: 'chosen', component: skylarkComponentRecord[B]}
                        }
                    )
            }
        }
    )
    // const edge1_2: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(leafVertices[0], leafVertices[1], {edgeLogic: {_tag: 'childOf'}})
    // const edge1_3: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(vertex2, vertex3, {edgeLogic: {_tag: 'childOf'}})
    // const edge1_4: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(vertex3, vertex4, {edgeLogic: {_tag: 'childOf'}})
    // const edge1_5: IEdge<IEdgeData> = makeEdge<IEdgeData, IVertexData>(vertex4, vertex5, {edgeLogic: {_tag: 'childOf'}})


    const g = makeGraph<IVertexData, IEdgeData>(
        [rootVertex, ...leafVertices], 
        [
        ] 
    ); 
    
    return g; 
}




// const getContainerState = () => {
//     return F.pipe( 
//         getVertices(graph1), 
//         A.map((v: IVertex<IVertexData>) => logState(v.data.container))
//     )
// }



