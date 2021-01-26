import React, { Suspense } from 'react'; 
import { Html, Loader } from '@react-three/drei'
import { skyLarkComponentLibrary, SkylarkModule } from '../../meta-data/skylarkComponentData'; 
import { IBuildingComponent } from '../../types/componentTypes'; 
import { IGraph, getVertices} from '../../lib/graph/Graph'; 
import {  IVertex, IVertexData} from '../../lib/graph/Vertex'; 
import {IEdge, IEdgeData } from '../../lib/graph/Edge'; 
import { matchComponentState } from '../../lib/graph/Component'; 
import { match } from 'io-ts-extra'; 
import * as A from 'fp-ts/Array'; 
import * as F from 'fp-ts/function'; 
import * as Models from '../../Models/Skylark/Atoms2/N'
import { Object3DNode } from 'react-three-fiber'
import * as THREE from 'three'; 
//The pattern book
import { wallPatternBook } from '../../pattern-book/skylarkPatterns'; 
import { Vector3 } from 'three';
import { v4 as uuidv4 } from 'uuid';
import { createMatrix4 } from '../../lib/graph/Matrix4'; 
import { matchContainerState, ContainerState, ContainerStateType } from '../../lib/graph';
import { Box } from '../../Models/Box'; 
import { useHover } from '../../Models/modelUtils'; 
// We take the underlying model, and convert it into a view. 




interface ISkylarkBuildingProps{
  buildingGraph: IGraph<IVertexData, IEdgeData>,
  //pattern: PatternString,
  // swiftComponentLibrary: IBuildingComponent[], 
}






export const renderComponentNodes = (g: IGraph<IVertexData, IEdgeData>) => {

  const matchComponentTagToCADModel = (component: IBuildingComponent) => {

    return match(component.moduleName as SkylarkModule)
    .case(SkylarkModule.N_DOOR_12x24x025m, () => {return Models.N_DOOR_12x24x025m})
    .case(SkylarkModule.N_DOOR_12x3x025m, () => {return Models.N_DOOR_12x3x025m})
    .case(SkylarkModule.N_L_WALL_POST_025x30x025m, () => {return Models.N_L_WALL_POST_025x30x025m})
    .case(SkylarkModule.N_S_BLOCK, () => {return Models.N_S_BLOCK})
    .case(SkylarkModule.N_S_FLOOR_BEAM, () => {return Models.N_S_FLOOR_BEAM})
    .case(SkylarkModule.N_S_FLOOR_CST, () => {return Models.N_S_FLOOR_CST})
    .case(SkylarkModule.N_S_HOC_ROOF_END, () => {return Models.N_S_HOC_ROOF_END})
    .case(SkylarkModule.N_S_HOC_ROOF_MID, () => {return Models.N_S_HOC_ROOF_MID})
    .case(SkylarkModule.N_S_WINDOW_24x24x025m_full, () => {return Models.N_S_WINDOW_24x24x025m_full})
    .case(SkylarkModule.N_WALL_CST_06x24x025m, () => {return Models.N_WALL_CST_06x24x025m})
    .case(SkylarkModule.N_WINDOW_12x24x025m, () => {return Models.N_WINDOW_12x24x025m})
    // .default(()=> {console.log(`components ${component.moduleName} did not match with any saved CAD models`)})
    .get()
  }

  return F.pipe(
    getVertices(g),
    A.map(
      (vertex) => 
        F.pipe(
          vertex.data.component,
          matchComponentState(
            (component: IBuildingComponent) => {

              const { worldTransform } = vertex.data.container.data; 
              const mat4 = createMatrix4(worldTransform)
              console.log('position', new Vector3().setFromMatrixPosition(mat4)); 

              return matchComponentTagToCADModel(component)(
                {
                  position: new Vector3().setFromMatrixPosition(mat4),
                  key: uuidv4()
                }
                ); 
            },
            () => { console.log(`container  ${vertex.vertexID} did not contain a component`)}
          )
        )
    )
  )
}     




// return F.pipe(
//   getVertices(g),
//   A.map(
//     (vertex) => {
//         return matchComponentState(
//           (component: IBuildingComponent) => {return matchComponentTagToCADModel(component)},
//           () => { console.log(`container  ${vertex.vertexID} did not contain a component`)}
//         )(vertex.data.component)
//     }
//   )
// )
// }
