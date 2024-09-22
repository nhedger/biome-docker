import { getAllVersions } from "@biomejs/version-utils";
import { coerce, gte } from "semver";

const yankedVersions: string[] = [];

/**
 * Generate a list of all verions of Biome for which we want to create
 * Docker images.
 */
const versions = (await getAllVersions(false))
	?.map((v) => coerce(v))
	.filter((v) => v !== null)
	.filter((v) => gte(v, "1.4.0"))
	.filter((v) => !yankedVersions.includes(v.format()))
	.map((v) => v.format());

console.log(JSON.stringify(versions));
