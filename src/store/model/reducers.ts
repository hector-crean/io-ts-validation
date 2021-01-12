import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Record";
import { eqString } from "fp-ts/lib/Eq";
import { pipe } from "fp-ts/pipeable";
import { Lens } from "monocle-ts";

import { ModuleName, ModelState, ModelStateActionTypes, ModelStateActions, IdString, NormalizedModulesAlmere, AlmereModule, AlmereModules  } from './types'; 
// import { ModuleName } from "../../types";

/**
 * Optics
 */

const almereModulesLens = Lens.fromPath<ModelState>()(["entities", "almereModules"]);
const atAlmereModule = (moduleName: ModuleName) => Lens.fromProp<NormalizedModulesAlmere>()(moduleName);


export const upsertAlmereModule = (almereModule: AlmereModule) => (state: ModelState): ModelState => {
  return pipe(
    state,
    R.lookup(almereModule.moduleName),
    O.fold(
      () => {
        return pipe(
          state,
          almereModulesLens.compose(atAlmereModule(almereModule.moduleName)).set({
            id: almereModule.id,
            __typename: almereModule.__typename,
            assemblyTimeInDays: almereModule.assemblyTimeInDays,
            buildingSystem: almereModule.buildingSystem,
            locationClass: almereModule.locationClass,
            moduleName: almereModule.moduleName,
            pitchedAngle1: almereModule.pitchedAngle1,
            pitchedAngle2: almereModule.pitchedAngle2,
            primaryMaterial: almereModule.primaryMaterial,
            roofPitchType: almereModule.roofPitchType,
            spansNStories: almereModule.spansNStories,
            thickness: almereModule.thickness,
            unitCost: almereModule.unitCost,
            xDimension: almereModule.xDimension,
            yDimension: almereModule.yDimension,
            zDimension: almereModule.zDimension 
          }),
        );
      },
      (_almereModule) => {
        return pipe(
          state,
          almereModulesLens.compose(atAlmereModule(almereModule.moduleName)).modify(
            (prevModule): AlmereModule => ({
              ...prevModule,
              __typename: almereModule.__typename,
              assemblyTimeInDays: almereModule.assemblyTimeInDays,
              buildingSystem: almereModule.buildingSystem,
              locationClass: almereModule.locationClass,
              moduleName: almereModule.moduleName,
              pitchedAngle1: almereModule.pitchedAngle1,
              pitchedAngle2: almereModule.pitchedAngle2,
              primaryMaterial: almereModule.primaryMaterial,
              roofPitchType: almereModule.roofPitchType,
              spansNStories: almereModule.spansNStories,
              thickness: almereModule.thickness,
              unitCost: almereModule.unitCost,
              xDimension: almereModule.xDimension,
              yDimension: almereModule.yDimension,
              zDimension: almereModule.zDimension 
            }),
          ),
        );
      },
    ),
  );
};






export const INITIAL_STATE: ModelState = {
  entities: {
    almereModules: R.empty,
  },
};


export function modelReducer(
  state = INITIAL_STATE,
  action: ModelStateActionTypes
): ModelState {
  switch (action.type) {
    case ModelStateActions.UPSERT_ALMERE_MODULE:
      return upsertAlmereModule(action.payload.almereModule)(state)
    default:
      return state
  }
}