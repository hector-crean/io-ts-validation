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
    _tag: t.literal('Inactive')
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
    active_state: ActiveState
})

export const CellState = t.interface({
    id: t.string, 
    coordinates: Point3,
    rotation: t.tuple([t.number, t.number, t.number]),
    cell: t.union([Active, Inactive])
})
// static types

export type CellState = t.TypeOf<typeof CellState>
export type Active = t.TypeOf<typeof Active>
export type Inactive = t.TypeOf<typeof Inactive>

export type ActiveState = t.TypeOf<typeof ActiveState>
export type Building = t.TypeOf<typeof Building>





