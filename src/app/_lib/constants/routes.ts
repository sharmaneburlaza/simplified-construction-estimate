export enum Item {
    CONCRETE = 'concrete',
    MASONRY = 'masonry',
    METAL_REINFORCEMENT = 'metal-reinforcement',
    LUMBER = 'lumber',
    FORMS_SCAFFOLDING_AND_STAGING = 'forms-scaffolding-and-staging',
    ROOFING_MATERIALS = 'roofing-materials',
    TILEWORK = 'tilework',
    HARDWARE = 'hardware',
    PAINTING = 'painting'
}

export enum Path {
    // Concrete
    CONCRETE_SLAB = 'concrete-slab',
    POST_AND_FOOTING = 'post-and-footing',
    SQUARE_CONCRETE_COLUMN = 'square-concrete-column',
    RECTANGULAR_COLUMN = 'rectangular-column',
    RECTANGULAR_BEAM_AND_GIRDER = 'rectangular-beam-and-girder',
    CIRCULAR_COLUMN = 'circular-column',
    CONCRETE_PIPE = 'concrete-pipe',

    // Masonry
    CONCRETE_HOLLOW_BLOCKS = 'concrete-hollow-blocks',
    ADOBE_STONE = 'adobe-stone',
    RIPRAP = 'riprap',
    CONCRETE_RETAINING_WALL = 'concrete-retaining-wall',
    GABIONS_AND_MATTRESS = 'gabion-and-mattress',

    // Metal Reinforcement
    REINF_OF_CHB = 'reinf-of-chb',
    TIE_WIRE = 'tie-wire',
    ISOLATED_FOOTING_REINF = 'isolated-footing-reinf',
    POST_AND_COLUMN_REINF = 'post-and-column-reinf',
    SPIRAL_AND_COLUMN_TIES = 'spiral-and-column-ties',
    ONE_WAY_REINF_CONCRETE_SLAB = 'one-way-reinf-concrete-slab',
    TWO_WAY_REINF_CONCRETE_SLAB = 'two-way-reinf-concrete-slab',
    CONCRETE_PIPE_REINF = 'concrete-pipe-reinf',

    // Lumber
    WOOD_POST = 'wood-post',
    GIRDER = 'girder',
    FLOOR_JOIST_AND_WOOD_FLOORING = 'floor-joist-and-wood-flooring',
    SIDING_WOOD_BOARD = 'siding-wood-board',
    STUD = 'stud',
    CEILING_JOIST = 'ceiling-joist',
    CEILING_BOARD = 'ceiling-board',
    DOOR_FRAME = 'door-frame',
    WINDOW_FRAME = 'window-frame',
    
    // Forms, Scaffolding and Staging
    // Roofing Materials
    // Tilework
    // Hardware
    // Painting

}

const CONCRETE_ROUTER = Item.CONCRETE + '/';

export const ROUTERLINK = {
    // Concrete
    concreteSlab: CONCRETE_ROUTER + Path.CONCRETE_SLAB,
    postAndFooting: CONCRETE_ROUTER + Path.POST_AND_FOOTING,
    squareConcreteColumn: CONCRETE_ROUTER + Path.SQUARE_CONCRETE_COLUMN,
    rectangularColumn: CONCRETE_ROUTER + Path.RECTANGULAR_COLUMN,
    rectangularBeamAndGirder: CONCRETE_ROUTER + Path.RECTANGULAR_BEAM_AND_GIRDER,
    circularColumn: CONCRETE_ROUTER + Path.CIRCULAR_COLUMN,
    concretePipe: CONCRETE_ROUTER + Path.CONCRETE_PIPE

    // Masonry
    // Metal Reinforcement
    // Lumber
    // Forms, Scaffolding and Staging
    // Roofing Materials
    // Tilework
    // Hardware
    // Painting
}

