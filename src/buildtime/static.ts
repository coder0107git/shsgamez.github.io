import { copyFile, readFile, writeFile } from "fs/promises";
import mkdirp from "mkdirp";
import path from "path";
import games from "../../app/games";
import { getGameID, slug } from "../../app/src/util/gameHash";

(async function(){

	await Promise.all(games
		.sort((a, b) => a.name > b.name ? 1 : -1)
		.map(async game => {
			const out = path.resolve(`../../../public_html/g/${getGameID(game)}/${slug(game.name)}.html`);
			await mkdirp(path.resolve(out, ".."));
			await copyFile(path.resolve("../../../public_html/index.html"), out);
		})
	);

	// Show ads on the most common 404 page.
	await copyFile(path.resolve("../../../public_html/index.html"), "../../../public_html/1.html");

}());
