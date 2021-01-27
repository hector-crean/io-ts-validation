import React from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";


const stencilMaterial = new THREE.MeshStandardMaterial({
  clippingPlanes: [],
  color: 0x000000,
  metalness: 0,
  roughness: 1,
  stencilFail: THREE.ReplaceStencilOp,
  stencilFunc: THREE.NotEqualStencilFunc,
  stencilRef: 0,
  stencilWrite: true,
  stencilZFail: THREE.ReplaceStencilOp,
  stencilZPass: THREE.ReplaceStencilOp
});




export default function createPlaneStencilGroup(geometry: any, plane: any, renderOrder: any) {
  const group = new THREE.Group();
  const baseMat = new THREE.MeshBasicMaterial();
  baseMat.depthWrite = false;
  baseMat.depthTest = false;
  baseMat.colorWrite = false;
  baseMat.stencilWrite = true;
  baseMat.stencilFunc = THREE.AlwaysStencilFunc;

  // back faces
  const mat0 = baseMat.clone();
  mat0.side = THREE.BackSide;
  mat0.clippingPlanes = [plane];
  mat0.stencilFail = THREE.IncrementWrapStencilOp;
  mat0.stencilZFail = THREE.IncrementWrapStencilOp;
  mat0.stencilZPass = THREE.IncrementWrapStencilOp;

  const mesh0 = new THREE.Mesh(geometry, mat0);
  mesh0.renderOrder = renderOrder;
  group.add(mesh0);

  // front faces
  const mat1 = baseMat.clone();
  mat1.side = THREE.FrontSide;
  mat1.clippingPlanes = [plane];
  mat1.stencilFail = THREE.DecrementWrapStencilOp;
  mat1.stencilZFail = THREE.DecrementWrapStencilOp;
  mat1.stencilZPass = THREE.DecrementWrapStencilOp;

  const mesh1 = new THREE.Mesh(geometry, mat1);
  mesh1.renderOrder = renderOrder;

  group.add(mesh1);

  return group;
}


export const Things = () => {
    const { gl } = useThree();
  
    const planes = [new THREE.Plane(new THREE.Vector3(0, -1, 0), 2.5)];
  
    const planeGeom = new THREE.PlaneBufferGeometry(20, 20);
    const planeObjects = [];
  
    const object = new THREE.Group();
    const poGroup = new THREE.Group();
  
    const geometry = new THREE.TorusKnotBufferGeometry(2.8, 0.3, 220, 60);
  
    const stencilGroup = createPlaneStencilGroup(geometry, planes[0], 1);
  
    const po = new THREE.Mesh(planeGeom, stencilMaterial);
  
    po.onAfterRender = function(renderer) {
      renderer.clearStencil();
    };
  
    po.renderOrder = 3;
  
    object.add(stencilGroup);
    poGroup.add(po);
  
    const material = new THREE.MeshStandardMaterial({
      color: 0xffc107,
      metalness: 0.1,
      roughness: 0.75,
      clippingPlanes: planes,
      clipShadows: true
      // shadowSide: THREE.DoubleSide
    });
  
    const clippedColorFront = new THREE.Mesh(geometry, material);
    clippedColorFront.renderOrder = 6;
    object.add(clippedColorFront);
  
    planeObjects.push(po);
  
    gl.localClippingEnabled = true;
  
    for (let i = 0; i < planeObjects.length; i += 1) {
      const plane = planes[i];
      const planeOb = planeObjects[i];
      plane.coplanarPoint(planeOb.position);
      planeOb.lookAt(
        planeOb.position.x - plane.normal.x,
        planeOb.position.y - plane.normal.y,
        planeOb.position.z - plane.normal.z
      );
    }
  
    return (
      <>
        <primitive object={object} />
        <primitive object={poGroup} />
      </>
    );
  };