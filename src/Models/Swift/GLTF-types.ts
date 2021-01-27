import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'



export type GLTFTypeLookup<R extends SwiftGLTF> = ShapeMap[R]


export enum SwiftGLTF {
    A1 = 'A1', A2 = 'A2', A3 = 'A3', A4 = 'A4', A5 = 'A5',
    B1 = 'B1', B2 = 'B2', B3 = 'B3', B4 = 'B4', B5 = 'B5', B6 = 'B6', B7 = "B7",
    C1 = 'C1', C2 = 'C2', C3 = 'C3', C4 = 'C4', C5 = 'C5',
    D1 = 'D1', D2 = 'D2', D3 = 'D3', D4 = 'D4',
    E1 = 'E1', E2 = 'E2',  E3 = 'E3', E4 = 'E4',
    F1 = 'F1', F2 = 'F2', F3 = 'F3', F4 = 'F4', F5 = 'F5',
    G1 = 'G1', G2 = 'G2', G3 = 'G3', G4 = 'G4', G5 = 'G5', G6 = 'G6', G7 = 'G7',
    H1 = 'H1', H2 = 'H2', H3 = 'H3', H4 = 'H4',  H5 = 'H5'
  }
export interface ShapeMap {
    // R0: T;
    A1: GLTF &  {
        nodes: {
          ['A-1.001_1']: THREE.Mesh
          ['A-1.001_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.001']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.001']: THREE.MeshStandardMaterial
        }
      },
    A2: GLTF & {
        nodes: {
          ['A-2_1']: THREE.Mesh
          ['A-2_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.002']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.002']: THREE.MeshStandardMaterial
        },
    }
    A3: GLTF & {
        nodes: {
          ['A-3_1']: THREE.Mesh
          ['A-3_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.003']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.003']: THREE.MeshStandardMaterial
        }
      },
    A4: GLTF & {
        nodes: {
          ['A-4_1']: THREE.Mesh
          ['A-4_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.004']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.004']: THREE.MeshStandardMaterial
        }
      },
    A5: GLTF & {
        nodes: {
          ['A-5_1']: THREE.Mesh
          ['A-5_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.005']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.005']: THREE.MeshStandardMaterial
        }
      },
    B1: GLTF & {
        nodes: {
          ['B-1_1']: THREE.Mesh
          ['B-1_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.006']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.006']: THREE.MeshStandardMaterial
        }
      },
    B2: GLTF & {
        nodes: {
          ['B-2_1']: THREE.Mesh
          ['B-2_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.007']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.007']: THREE.MeshStandardMaterial
        }
      },
    B3: GLTF & {
        nodes: {
          ['B-3_1']: THREE.Mesh
          ['B-3_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.008']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.008']: THREE.MeshStandardMaterial
        }
      },
    B4: GLTF & {
        nodes: {
          ['B-4_1']: THREE.Mesh
          ['B-4_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.009']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.009']: THREE.MeshStandardMaterial
        }
      },
    B5: GLTF & {
        nodes: {
          ['B-5_1']: THREE.Mesh
          ['B-5_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.010']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.010']: THREE.MeshStandardMaterial
        }
      },
    B6: GLTF & {
        nodes: {
          ['B-6_1']: THREE.Mesh
          ['B-6_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.011']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.011']: THREE.MeshStandardMaterial
        }
      },
    B7: GLTF & {
        nodes: {
          ['B-7_1']: THREE.Mesh
          ['B-7_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.012']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.012']: THREE.MeshStandardMaterial
        }
      },
    C1: GLTF & {
        nodes: {
          ['C-1_1']: THREE.Mesh
          ['C-1_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.013']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.013']: THREE.MeshStandardMaterial
        }
      },
    C2: GLTF & {
        nodes: {
          ['C-2_1']: THREE.Mesh
          ['C-2_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.014']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.014']: THREE.MeshStandardMaterial
        }
      },
    C3:  GLTF & {
        nodes: {
          ['C-3_1']: THREE.Mesh
          ['C-3_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.015']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.015']: THREE.MeshStandardMaterial
        }
      },
    C4: GLTF & {
        nodes: {
          ['C-4_1']: THREE.Mesh
          ['C-4_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.016']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.016']: THREE.MeshStandardMaterial
        }
      },
    C5: GLTF & {
        nodes: {
          ['C-5_1']: THREE.Mesh
          ['C-5_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.017']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.017']: THREE.MeshStandardMaterial
        }
      },
    D1: GLTF & {
        nodes: {
          ['D-1_1']: THREE.Mesh
          ['D-1_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.018']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.018']: THREE.MeshStandardMaterial
        }
      },
    D2: GLTF & {
        nodes: {
          ['D-2_1']: THREE.Mesh
          ['D-2_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.019']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.019']: THREE.MeshStandardMaterial
        }
      },
    D3: GLTF & {
        nodes: {
          ['D-3_1']: THREE.Mesh
          ['D-3_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.020']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.020']: THREE.MeshStandardMaterial
        }
      },
    D4: GLTF & {
        nodes: {
          ['D-4_1']: THREE.Mesh
          ['D-4_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.021']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.021']: THREE.MeshStandardMaterial
        }
      },
    E1: GLTF & {
        nodes: {
          ['E-1_1']: THREE.Mesh
          ['E-1_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.022']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.022']: THREE.MeshStandardMaterial
        }
      },
    E2: GLTF & {
        nodes: {
          ['E-2_1']: THREE.Mesh
          ['E-2_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.023']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.023']: THREE.MeshStandardMaterial
        }
      },
    E3:  GLTF & {
        nodes: {
          ['E-3_1']: THREE.Mesh
          ['E-3_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.024']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.024']: THREE.MeshStandardMaterial
        }
      },
    E4: GLTF & {
        nodes: {
          ['E-4_1']: THREE.Mesh
          ['E-4_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.025']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.025']: THREE.MeshStandardMaterial
        }
      },
    F1:  GLTF & {
        nodes: {
          ['F-1_1']: THREE.Mesh
          ['F-1_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.026']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.026']: THREE.MeshStandardMaterial
        }
      },
    F2:  GLTF & {
        nodes: {
          ['F-2_1']: THREE.Mesh
          ['F-2_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.027']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.027']: THREE.MeshStandardMaterial
        }
      },
    F3: GLTF & {
        nodes: {
          ['F-3_1']: THREE.Mesh
          ['F-3_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.028']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.028']: THREE.MeshStandardMaterial
        }
      },
    F4:  GLTF & {
        nodes: {
          ['F-4_1']: THREE.Mesh
          ['F-4_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.029']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.029']: THREE.MeshStandardMaterial
        }
      },
    F5: GLTF & {
        nodes: {
          ['F-5_1']: THREE.Mesh
          ['F-5_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.030']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.030']: THREE.MeshStandardMaterial
        }
      },
    G1: GLTF & {
        nodes: {
          ['G-1_1']: THREE.Mesh
          ['G-1_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.031']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.031']: THREE.MeshStandardMaterial
        }
      },
    G2:  GLTF & {
        nodes: {
          ['G-2_1']: THREE.Mesh
          ['G-2_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.032']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.032']: THREE.MeshStandardMaterial
        }
      },
    G3: GLTF & {
        nodes: {
          ['G-3_1']: THREE.Mesh
          ['G-3_2']: THREE.Mesh
        }
        materials: {
          ['Wood-3 Ver.033']: THREE.MeshStandardMaterial
          ['diffuse_0_0_0_255.033']: THREE.MeshStandardMaterial
        }
      },
    G4: GLTF & {
        nodes: {
          ['G-4_1']: THREE.Mesh
          ['G-4_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.034']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.034']: THREE.MeshStandardMaterial
        }
      },
    G5: GLTF & {
        nodes: {
          ['G-5_1']: THREE.Mesh
          ['G-5_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.035']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.035']: THREE.MeshStandardMaterial
        }
      },
    G6: GLTF & {
        nodes: {
          ['G-6_1']: THREE.Mesh
          ['G-6_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.036']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.036']: THREE.MeshStandardMaterial
        }
      },
    G7: GLTF & {
        nodes: {
          ['G-7_1']: THREE.Mesh
          ['G-7_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.037']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.037']: THREE.MeshStandardMaterial
        }
      },
    H1: GLTF & {
        nodes: {
          ['H-1_1']: THREE.Mesh
          ['H-1_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.038']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.038']: THREE.MeshStandardMaterial
        }
      },
    H2: GLTF & {
        nodes: {
          ['H-2_1']: THREE.Mesh
          ['H-2_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.039']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.039']: THREE.MeshStandardMaterial
        }
      },
    H3: GLTF & {
        nodes: {
          ['H-3_1']: THREE.Mesh
          ['H-3_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.040']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.040']: THREE.MeshStandardMaterial
        }
      },
    H4:  GLTF & {
        nodes: {
          ['H-4_1']: THREE.Mesh
          ['H-4_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.041']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.041']: THREE.MeshStandardMaterial
        }
      },
    H5: GLTF & {
        nodes: {
          ['H-5_1']: THREE.Mesh
          ['H-5_2']: THREE.Mesh
        }
        materials: {
          ['diffuse_0_0_0_255.042']: THREE.MeshStandardMaterial
          ['Wood-3 Ver.042']: THREE.MeshStandardMaterial
        }
      }
   
  }




