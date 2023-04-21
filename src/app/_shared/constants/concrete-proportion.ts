const SAND = 0.5;
const GRAVEL = 1;

export const CONCRETE_PROPORTIONS = [
    {
        class: 'AA',
        proportion: [1, 1.5, 3],
        cementInBag40kg: 12,
        cementInBag50kg: 9.5,
        sand: SAND,
        gravel: GRAVEL
    },
    {
        class: 'A',
        proportion: [1, 2, 4],
        cementInBag40kg: 9,
        cementInBag50kg: 7,
        sand: SAND,
        gravel: GRAVEL
    },
    {
        class: 'B',
        proportion: [1, 2.5, 5],
        cementInBag40kg: 7.5,
        cementInBag50kg: 6,
        sand: SAND,
        gravel: GRAVEL
    },
    {
        class: 'C',
        proportion: [1, 3, 6],
        cementInBag40kg: 6,
        cementInBag50kg: 5,
        sand: SAND,
        gravel: GRAVEL
    },
]