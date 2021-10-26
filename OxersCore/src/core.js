// by Oxers
"use strict";
const { Thumper } = require("./AMMO/Thumper.js");
class Mod {
	constructor() {
		this.mod = "Oxers Coremod";

		Logger.info(`Loading: ${this.mod}`);
		ModLoader.onLoad[this.mod] = this.load.bind(this);
	}
	load() {
		//7.62x39mm Thumper
		Thumper();
		
	}

}
module.exports.Mod = Mod;
