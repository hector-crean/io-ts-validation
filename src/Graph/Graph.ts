// import * as Re from 'fp-ts/Record'; 
import * as S from 'fp-ts/Semigroup'; 
import * as F from 'fp-ts/function'; 
import * as A from 'fp-ts/Array'; 
import * as O from 'fp-ts/Option'; 
import * as _Map from 'fp-ts/Map'; 
import * as _Set from 'fp-ts/Set'; 
import { assoc, prop } from './utility'; 
import * as L from 'monocle-ts'; 
import { getLenses } from 'io-ts-types'; 
import * as t from 'io-ts/Type'; 
import { IBuildingComponent } from './Component'; 
import { swiftComponentLibrary, swiftComponentRecord } from '../MetaData/swiftComponentData'; 
import { IVertex, IVertexData, makeVertex} from './Vertex'
import { IEdge, IEdgeData, makeEdge } from './Edge'



///////////////////////////////////////////////////////////
/// Constants 
///////////////////////////////////////////////////////////
export const ROOT_NODE_KEY = "_root";


///////////////////////////////////////////////////////////
/// Types 
///////////////////////////////////////////////////////////

export interface IGraph<V, E> {
    vertices: IVertex<V>[],
    edges: IEdge<E>[],
}
export type AdjacencyMap<A> = Map<A, Set<A>>;  // for us: A = IVertex<IVertexData>


///////////////////////////////////////////////////////////
/// Constructor
///////////////////////////////////////////////////////////

/**
* () -> IGraph
* 
* Generates new empty graph
* @returns IGraph Graph
*/
export const makeGraph = <V,E>(
    vertices?: IVertex<V>[],
    edges?: IEdge<E>[]
): IGraph<V,E> => ({
    vertices: vertices? vertices: new Array<IVertex<V>>(),
    edges: edges? edges: new Array<IEdge<E>>()
})


///////////////////////////////////////////////////////////
/// Methods 
///////////////////////////////////////////////////////////

/**
* getVertexHash :: IVertex -> String
* 
* Hashing function for IVertex. Can be customized.
* @param IVertex Vertex
* @return String Vertex's hash
*/
export const getVertexHash = <V>(vertex: IVertex<V>) => vertex.vertexID

/**
* getEdgeHash :: IEdge -> String
* 
* Hashing function for IEdge. Can be customized.
* @param IEdge Edge
* @return String Edge's hash
*/
export const getEdgeHash =  <E>(edge: IEdge<E>) => `${edge.link[0]} - ${edge.link[1]}`

/**
* edgeHash :: () -> Array<IVertex>
* 
* Returns a list of all vertices in a graph
* @params IGraph Graph
* @return Array<IVertex> List of all Vertices
*/
export const getVertices = L.Lens.fromProp<IGraph<IVertexData, IEdgeData>>()('vertices').get
// or alteernatively: const getVertices = prop('vertices')

/**
* getEdges :: IGraph -> Array<IEdge>
* 
* Returns a list of all edges in a graph
* @params IGraph Graph
* @return Array<IEdge> List of all Edges
*/
export const getEdges = L.Lens.fromProp<IGraph<IVertexData, IEdgeData>>()('edges').get
// or alternaitvely: const getEdges = prop('edges')


 /**
* addVertex :: IVertex -> IGraph -> IGraph
* 
* Adds Vertex to the graph
* @param IVertex Vertex
* @param IGraph Graph
* @return IGraph Graph
*/
 export const addVertex = (vertex: IVertex<IVertexData>, g: IGraph<IVertexData,IEdgeData>): IGraph<IVertexData,IEdgeData>  => {
    // Below 3 lines is a more ramda-esque approach
    //const vertices = getVertices(g); 
    // const verticesWithAdditionalVertex = A.snoc(vertices, vertex); 
    // return assoc('vertices', verticesWithAdditionalVertex, g);
    const graphSemiGroup: S.Semigroup<IGraph<IVertexData, IEdgeData>> = S.getStructSemigroup({
        vertices: A.getMonoid<IVertex<IVertexData>>(), 
        edges: A.getMonoid<IEdge<IEdgeData>>()
    }); 
    return graphSemiGroup.concat(
        g, 
        makeGraph([vertex], new Array<IEdge<IEdgeData>>())
    ) 
    /// ^ advantage of semigroup approach is that we can add conditions to semigroup, such that
    // we don't have repeated node ids etc. 
}

 /**
* getVertexByHash :: String -> IGraph -> IVertex
* 
* Return Vertex by Hash
* @param String Vertex's hash
* @param IGraph Graph
* @return IVertex Vertex if exists or undefined
*/

export const getVertexByHash = (vertexHash: String, g: IGraph<IVertexData, IEdgeData>)
:O.Option<IVertex<IVertexData>[]> => {
    // type Predicate<A> = (a: A) => boolean
    const predicate: F.Predicate<IVertex<IVertexData>> = (a) => a.vertexID === vertexHash
    const filtered = A.filter(predicate)(getVertices(g))
    return filtered[0] === undefined ? O.none : O.some(filtered)
}

export const addEdge = (edge: IEdge<IEdgeData>, g: IGraph<IVertexData, IEdgeData>)
: IGraph<IVertexData, IEdgeData> => {
    const graphSemiGroup: S.Semigroup<IGraph<IVertexData, IEdgeData>> = S.getStructSemigroup({
        vertices: A.getMonoid<IVertex<IVertexData>>(), 
        edges: A.getMonoid<IEdge<IEdgeData>>()
    }); 
    return graphSemiGroup.concat(
        g, 
        makeGraph(new Array<IVertex<IVertexData>>(), [edge])
    ) 
}
export const getEdgesByHash = (edgeHash: [string,string], g: IGraph<IVertexData, IEdgeData>)
:O.Option<IEdge<IEdgeData>[]> => {
     // type Predicate<A> = (a: A) => boolean
     const predicate: F.Predicate<IEdge<IEdgeData>> = (a) => a.link === edgeHash; //note: this is only for direcred graphs...
     const filtered = A.filter(predicate)(getEdges(g))
     return filtered[0] === undefined ? O.none : O.some(filtered)

}

 /**
* getNeightborEdgesFromVertexHash :: String -> IGraph -> Array<IEdge>
* 
* Get all neightboring Edges from Vertex by Vertex Hash
* @param String Vertex's Hash
* @param IGraph Graph
* @result Array<IEdge> Matched Edges from the Vertex
*/
export const getNeightborEdgesFromVertexHash = (
    vertexHash: String, 
    g: IGraph<IVertexData, IEdgeData>
): O.Option<IEdge<IEdgeData>[]> =>{
    return F.pipe(
    //Likely to be far more edges than vertices. Check for existence of vertex first
    getVertexByHash(vertexHash, g),
    O.fold(
        () => {return O.none},
        (r) => {
            const predicate: F.Predicate<IEdge<IEdgeData>> = (a) => a.link[0] === vertexHash; //note: this is only for direcred graphs...
            const filtered = A.filter(predicate)(getEdges(g))
            return filtered[0] === undefined ? O.none : O.some(filtered)
        }
        )
    )
}



// For each type of edge, we create an adjacency matrix
// We need one ajacency map for each type of edge... 'childOf', 'parentOf', 'neighbourOf'
// export const getAdjacencyMap = (g: IGraph<IVertexData, IEdgeData>) => {

//     // Depending om the edge type, we return a different adjacency matrix: 

//     const vertices = getVertices(g); 
//     const edges = getEdges(g); 
   
//     //const m = monoidSetMap(eqVertex).concat()
//     const s = new Set<IVertex<IVertexData>>()
//     for (const v of vertices){
//         for (const e of edges){

//         }
//     }
// }

///////////////////////////////////////////////////////////
/// Semigroups 
///////////////////////////////////////////////////////////

const vertexSemiGroup = S.getObjectSemigroup<IVertex<IVertexData>>(); 
const edgeSemiGroup = S.getObjectSemigroup<IEdge<IEdgeData>>(); 
// see: https://dev.to/gcanti/getting-started-with-fp-ts-semigroup-2mf7
// const getGraphSemiGroup = <V,E>() => {
//     return S.getStructSemigroup({
//     // accumulate things
//     vertices: A.getMonoid<IVertex<V>>(), // <= getMonoid returns a Semigroup 
//     edges: A.getMonoid<IEdge<E>>()
// })}; 
const graphSemiGroup: S.Semigroup<IGraph<IVertexData, IEdgeData>> = S.getStructSemigroup({
    vertices: A.getMonoid<IVertex<IVertexData>>(), 
    edges: A.getMonoid<IEdge<IEdgeData>>()
}); 


