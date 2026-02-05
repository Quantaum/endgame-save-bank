/* eslint-disable max-len */
import CategoryGrouped from "./classes/CategoryGrouped";
import { alphaPreInfinity } from "./alpha-pre-infinity";
import { alphaInfinity } from "./alpha-infinity";
import { alphaEternity } from "./alpha-eternity";
import { alphaTimeDilation } from "./alpha-time-dilation";

export const alpha = new CategoryGrouped({
    name: "Alpha",
    theme: "alpha",
    desc: "After 1.8e308 iM",
    saves: [
        alphaPreInfinity,
        alphaInfinity,
        alphaEternity,
        alphaTimeDilation,
    ]
});
