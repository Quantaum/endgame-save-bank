import { endgame } from "./endgame";
import { alpha } from "./alpha";
import { celDimExpansion } from "./cel-dim-expansion"

import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    endgame,
    alpha,
    celDimExpansion
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};