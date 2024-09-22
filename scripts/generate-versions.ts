import { getAllVersions } from "@biomejs/version-utils";
import { coerce, gte } from "semver";

/**
 * Generate a list of all verions of Biome for which we want to create
 * Docker images.
 */
const versions = (await getAllVersions(false))
	?.map((v) => coerce(v))
	.filter((v) => v !== null)
	.filter((v) => gte(v, "1.0.0"));

console.log(JSON.stringify(versions));
