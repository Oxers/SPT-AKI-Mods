"use strict";

const KMCapi = require("../../../KMC-Core/src/_api/KMCapi.js");

module.exports.Thumper = () => {
	KMCapi.InfoMessage(`Loading: AMMO_Thumper`);

	const database = DatabaseServer.tables;
	const item = database.templates.items;
	
	const AmmoID = ["5e023e88277cce2b522ff2b1",
					"5efb0c1bd79ff02a1f5e68d9",
					"5e023e53d4353e3302577c4c",
					"5a6086ea4f39f99cd479502f",
					"5a608bf24f39f98ffc77720e",
					"5e023e6e34d52a55c3304f71",
					"58dd3ad986f77403051cba8f"];//Ultra Nosler, M993, FMJ, M61, M62, SP, M80
	const AmmoNames = ["Ultra Nosler","M993","BCP FMJ","M61","M62", "Soft Point", "M80"];// Long Ammo Name
	const AmmoShort = ["UN", "M993","FMJ","M61","62","SP","M80"];// Short Ammo Name
	const Loadings = ["Subsonic","normal","+P"]; // Loadings
	const LoadingsShort = ["SS","N","PP"]
	const LoadVelocities = ["300","580","800"]; //Default loading Velocity
	const LoadPriceMult = [0.8, 1, 1.5]; //Price Multiplier for Loading
	const NewBaseID = "AMMO_Thumper_"; //Ammo Main ItemID
	const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_762x39_bp.bundle"; //Ammo Prefab
	const NewItemCategory = "Ammo"; //Traders Ammo Category
	const NewItemTrader = "Peacekeeper"; //Traders
	const NewItemTraderLoyalty = 1; // Trader LL 
	const NewItemPriceMult = 1.3; //Price multiplier
	const NewItemFleaPriceMult = 1.1; //Price multiplier
	const NewItemCurrency = "";
	const AmmoTypes = []
	


	for (let x in AmmoID) {
		for (let y in Loadings) {
			console.log("Ammo Index: " + x);
			console.log("Loading Index: " + y);
			const NewItemDesc = ["7.62 Thumper "+ AmmoNames[x] + " " + Loadings[y],"THP " + AmmoShort[x] + " " +  LoadingsShort[y],"7.62 Thumper with " + AmmoNames[x] + " Projectile in a "+ Loadings[y] +" load"];
			console.log("Item description: " + NewItemDesc);
			const NewItemID = NewBaseID + AmmoShort[x] + "_" + LoadingsShort[y];
			AmmoTypes.push(NewItemID);
			console.log("NewItemID: " + NewItemID);
			const PriceOld = item[AmmoID[x]]._props.CreditsPrice;
			console.log("Old Price: " + PriceOld);
			const NewItemPrice = Math.floor(NewItemPriceMult * LoadPriceMult[y] * PriceOld);
			console.log("New Price: " + NewItemPrice);
			const RFPriceOld = item[AmmoID[x]]._props.CreditsPrice;
			console.log("Ragfair Old Price: " + RFPriceOld);
			const NewItemFleaPrice = Math.floor(NewItemFleaPriceMult * LoadPriceMult[y] * RFPriceOld);
			console.log("RF New Price: " + NewItemFleaPrice);
			KMCapi.NewItemClone(AmmoID[x], NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemFleaPrice, NewItemCurrency, NewItemDesc);
			item[NewItemID]._props.Caliber = "Caliber762Thumper";
			item[NewItemID]._props.casingName = "7.62x39 мм ПС"
			item[NewItemID]._props.InitialSpeed = LoadVelocities[y];
		}
	}
	for (let x in AmmoTypes){
		console.log("Ammotype " + x + " : " + AmmoTypes[x]);
	}
}