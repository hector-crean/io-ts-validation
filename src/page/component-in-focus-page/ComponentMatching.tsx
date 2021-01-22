import { IBuildingComponent } from '../../types/componentTypes'; 
import { match } from 'io-ts-extra'; 
import { SkylarkModule } from '../../meta-data/skylarkComponentData'; 
import * as Models from '../../Models/Skylark/Atoms2/N'


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


