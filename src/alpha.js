/* eslint-disable max-len */
import CategoryGrouped from "./classes/CategoryGrouped";
import { alphaPreInfinity } from "./alpha-pre-infinity";
import { alphaPreEternity } from "./alpha-pre-eternity";
import { alphaPreDilation } from "./alpha-pre-dilation";
import { alphaPreReality } from "./alpha-pre-reality";

export const alpha = new CategoryGrouped({
    name: "Alpha",
    theme: "alpha",
    desc: "After 1.8e308 iM",
    saves: [
        alphaPreInfinity,
        alphaPreEternity,
        alphaPreDilation,
        alphaPreReality,
    ]
});
