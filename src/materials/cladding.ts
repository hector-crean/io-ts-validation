// https://dinesen.assetbank-server.com/assetbank-dinesen/action/browseItems?categoryId=71&categoryTypeId=2&cachedCriteria=1


import {
  BoxBufferGeometry,
  BoxGeometry,
  Color,
  Geometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
} from "three";

const tl = new TextureLoader();
const rpt = function (texture: Texture) {
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1.2, 1.2);
};

export const zinc_cladding = new MeshStandardMaterial({
    color: 0x555555,
    emissive: new Color(0x222222),
    emissiveIntensity: 0.1,
    roughness: 0.75,
    metalness: 0.2,
  
    map: tl.load(
      "/Materials/16_steel zinc coated corrugated metal texture-seamless.jpg",
      rpt
    ),
    // normalMap: tl.load(
    //   "/Materials/16_steel zinc coated corrugated metal texture-seamless_hr/16_steel zinc coated_NORM.jpg",
    //   rpt
    // ),
    normalScale: new Vector2(10, 10),
  
    // side: DoubleSide,
  });
  
  export const plaster_wall = new MeshStandardMaterial({
    // color: "white",
    emissive: new Color(0xffffff),
    emissiveIntensity: 0.14,
    polygonOffsetUnits: 0.1,
    roughness: 2,
  
    map: tl.load(
      "/Materials/149_fine plaster painted wall texture-seamless.jpg",
      rpt
    ),
    // normalMap: tl.load(
    //   "materials/61_clean fine plaster texture-seamless_hr/61_clean fine plaster_NORM.jpg",
    //   rpt
    // ),
    // bumpMap: tl.load(
    //   "materials/61_clean fine plaster texture-seamless_hr/61_clean fine plaster_DISPL.jpg",
    //   rpt
    // ),
    // bumpScale: 0.00001,
    // normalScale: new Vector2(1, 0),
    // side: DoubleSide,
  });


  export const herringbone_floor = new MeshStandardMaterial({
  
    map: tl.load(
      "/Materials/106_herringbone parquet PBR texture-seamless.jpg",
      rpt
    ),
   
    normalScale: new Vector2(10, 10),
  
    // side: DoubleSide,
  });

  export const plankwood_floor = new MeshStandardMaterial({
  
    map: tl.load(
      "public/Materials/97_basic for parquet decorated stencil texture-seamless.jpg",
      rpt
    ),
   
    normalScale: new Vector2(10, 10),
  
    // side: DoubleSide,
  });