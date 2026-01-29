import { endgame } from "./endgame";

import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    endgame,
    alpha
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};