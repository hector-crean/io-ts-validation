  
import { useGLTF } from '@react-three/drei/useGLTF'
import { GLTF  } from 'three/examples/jsm/loaders/GLTFLoader'
  
import { GLTFTypeLookup, SwiftGLTF } from '../../../Models/Swift/GLTF-types'
  
import { matcher } from 'io-ts-extra'; 


export const gltfPicked = matcher<SwiftGLTF>()
  .case(SwiftGLTF.A1, s => [    ((useGLTF('/Swift/A1.glb') as GLTFTypeLookup<typeof s>)).nodes['A-1.001_1'], ((useGLTF('/Swift/A1.glb') as GLTFTypeLookup<typeof s>)).nodes['A-1.001_2']  ]  )
  .case(SwiftGLTF.A2, s => [    ((useGLTF('/Swift/A2.glb') as GLTFTypeLookup<typeof s>)).nodes['A-2_1'], ((useGLTF('/Swift/A2.glb') as GLTFTypeLookup<typeof s>)).nodes['A-2_2']           ] )
//   .case(SwiftGLTF.A3, s => useGLTF('/Swift/A3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.A4, s => useGLTF('/Swift/A4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.A5, s => useGLTF('/Swift/A5.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B1, s => useGLTF('/Swift/B1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B2, s => useGLTF('/Swift/B2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B3, s => useGLTF('/Swift/B3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B4, s => useGLTF('/Swift/B4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B5, s => useGLTF('/Swift/B5.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B6, s => useGLTF('/Swift/B6.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.B7, s => useGLTF('/Swift/B7.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.C1, s => useGLTF('/Swift/C1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.C2, s => useGLTF('/Swift/C2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.C3, s => useGLTF('/Swift/C3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.C4, s => useGLTF('/Swift/C4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.C5, s => useGLTF('/Swift/C5.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.D1, s => useGLTF('/Swift/D1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.D2, s => useGLTF('/Swift/D2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.D3, s => useGLTF('/Swift/D3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.D4, s => useGLTF('/Swift/D4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.E1, s => useGLTF('/Swift/E1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.E2, s => useGLTF('/Swift/E2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.E3, s => useGLTF('/Swift/E3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.E4, s => useGLTF('/Swift/E4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.F1, s => useGLTF('/Swift/F1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.F2, s => useGLTF('/Swift/F2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.F3, s => useGLTF('/Swift/F3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.F4, s => useGLTF('/Swift/F4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.F5, s => useGLTF('/Swift/F5.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G1, s => useGLTF('/Swift/G1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G2, s => useGLTF('/Swift/G2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G3, s => useGLTF('/Swift/G3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G4, s => useGLTF('/Swift/G4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G5, s => useGLTF('/Swift/G5.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G6, s => useGLTF('/Swift/G6.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.G7, s => useGLTF('/Swift/G7.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.H1, s => useGLTF('/Swift/H1.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.H2, s => useGLTF('/Swift/H2.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.H3, s => useGLTF('/Swift/H3.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.H4, s => useGLTF('/Swift/H4.glb') as GLTFTypeLookup<typeof s>)
//   .case(SwiftGLTF.H5, s => useGLTF('/Swift/H5.glb') as GLTFTypeLookup<typeof s>)
.default( s =>  [    ((useGLTF('/Swift/A2.glb') as GLTFTypeLookup<SwiftGLTF.A2>)).nodes['A-2_1'], ((useGLTF('/Swift/A2.glb') as GLTFTypeLookup<SwiftGLTF.A2>)).nodes['A-2_2']           ])
.get
