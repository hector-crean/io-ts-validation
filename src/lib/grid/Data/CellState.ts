import * as t from 'io-ts'; 


export const Point3 = t.tuple([t.number, t.number, t.number]); 
// const Cells = new Map<Point3, Cell_State>(); 

// Best to define this with io-ts, so that we may use io-ts; 

export const Building =  t.interface({
    _tag: t.literal('Building'),
    floors: t.number
})
export const Storey = t.interface({
    _tag: t.literal('Storey')
})
export const EnvelopeSection = t.interface({
    _tag: t.literal('EnvelopeSection')
})
export const Room = t.interface({
    _tag: t.literal('Room')
})
export const WallUnit = t.interface({
    _tag: t.literal('WallUnit'),
    wall_unit_state: t.union([
        t.interface({_tag: t.literal('SolidWallUnit'), component: t.string}), 
        t.interface({_tag: t.literal('VoidFloorUnut'), component: t.string}), 
    ])
})
export const FloorUnit = t.interface({
    _tag: t.literal('FloorUnit'),
    floor_unit__state: t.union([
        t.interface({_tag: t.literal('SolidFloorUnit'), component: t.string}), 
        t.interface({_tag: t.literal('Window'), component: t.string}), 
        t.interface({_tag: t.literal('Door'), component: t.string}), 
    ])
})
export const RoofUnit = t.interface({
    _tag: t.literal('RoofUnit'),
    roof_unit_state: t.union([
        t.interface({_tag: t.literal('SolidRoofUnit'), component: t.string}), 
        t.interface({_tag: t.literal('RoofLight'), component: t.string}), 
    ])
})
export const Void = t.interface({
    _tag: t.literal('Void')
})

export const Inactive =  t.interface({
    _tag: t.literal('Inactive'), 
    coordinates: Point3 
})
export const ActiveState = t.union([
    Building,
    Storey,
    EnvelopeSection, 
    Room,
    WallUnit, 
    FloorUnit, 
    RoofUnit,
    Void
 ])
 export const Active = t.interface({
    _tag: t.literal('Active'), 
    coordinates: Point3,
    active_state: ActiveState
})

export const SkylarkCellState = t.union([Active, Inactive])



// static types

export type SkylarkCellState = t.TypeOf<typeof SkylarkCellState>
export type Active = t.TypeOf<typeof Active>
export type Inactive = t.TypeOf<typeof Inactive>

export type ActiveState = t.TypeOf<typeof ActiveState>
export type Building = t.TypeOf<typeof Building>



//initial states
export const skylarkInitialStateInactive: SkylarkCellState = { _tag: 'Inactive', coordinates: [1,2,3] }; 
export const skylarkInitialStateActive: SkylarkCellState = { _tag: 'Active', coordinates: [1,2,3], active_state: { _tag: "Building", floors: 1 }}; 




