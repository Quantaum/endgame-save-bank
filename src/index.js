import { endgame } from "./endgame";
import { alpha } from "./alpha";
/*import { celDimExpansion } from "./cdexpansion"
import { slabdrill } from "./slabdrill";
import { expanse } from "./expanse";
import { existence } from "./existence";
import { shatteredReality } from "./shattered-reality";*/

import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    endgame,
    alpha,
    /*celDimExpansion,
    slabdrill,
    expanse,
    existence,
    shatteredReality*/
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};