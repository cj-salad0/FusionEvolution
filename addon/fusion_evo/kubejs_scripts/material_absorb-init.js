/*global.os_materials ={

    name: "material_absorb_stats",

    materials: 
    [
        {
            
            name: "iron",  
            smallAbsorbList: [], 
            medAbsorbList: [], 
            LargeAbsorbList: []
        
        },

         {
            
            name: "wood",  
            smallAbsorbList: [], 
            medAbsorbList: [], 
            LargeAbsorbList: []
        
        },


         {
            
            name: "stone",  
            smallAbsorbList: [], 
            medAbsorbList: [], 
            argeAbsorbList: []
        
        }


    ]


}*/


/*global.os_materialStat={

    name: "mat",

    createdToolDurability: 9,

    extraArmour: 10,

    extraAttack: 5,

    invokeSpecialProperties: function applySpecialProperties(){return;}

}*/

// Factory Method of Creating a Material Type
// WHen you absorb a material you could get an armour
// or attack buff, and speical interactions when you hit someone,
// someone hits you, or take fall damage
global.os_initializeMaterial = (name, toolDurability, armourBuff, attackBuff, onHitProperty, onAttackProperty, onFallProperty) => {

    return {


        name: name,

        toolDurability: toolDurability,

        addedArmour: armourBuff,

        attackBuff: attackBuff,

        onHit: onHitProperty || function(){ return; },

        onAttack: onAttackProperty || function(){ return; },

        onFall: onFallProperty || function(){ return; }

    };


};





global.iron_mat = os_initializeMaterial("iron", 100, 10, 5)

global.stone_mat = os_initializeMaterial("stone", 200, 5, 3)

global.wood_mat = os_initializeMaterial("wood", 50, 3, 2)


// this will store all of the dictionaries 
// used to associate each gameID with it's material
// and each of these will also be defined as a large
// med, or smallAbsorb Item

// Factory Method to make a keyWord Object
// essenitally make a keyword that I can look for in items
// and assign it a material
global.keyWordMapping = (keyWord, material) => {

    return 
    {
        keyword: keyWord

        material: material

    };
};


// Current Keywords and material Assignment
global.plankKW = keyWordMapping("plank", wood_mat)

global.woodKW = keyWordMapping("wood", wood_mat)

global.logKW = keyWordMapping("log", wood_mat)

global.ironKW = keyWordMapping("iron", iron_mat)

global.stoneKW = keyWordMapping("stone", stone_mat)




// Factory Method to create a material Mapping
// tags and keywords are string arrays currently I am only going
// to use tags might use keyWords as specific objects
global.materialMapping = (material, tags, keyWords) => {


    return {

        material: material,

        tags: tags || [],

        keyWords: keyWords || []

    }
}





// *** Defining Wood Material Mappings ***
let woodTags = [ "#minecraft:wooden_fences", 
        
                 "#minecraft:wooden_buttons", 
            
                 "#minecraft:wooden_doors",

                 "#minecraft:wooden_slabs",

                 "#minecraft:wooden_trapdors",
            
                 "#minecraft:logs"]


global.woodMappings(wood_mat, woodTags)


//The main materialIndex for the Powerset
// be generated so easily on certain events
// that return a GameObject I can just quickly see if it 
// has a determined type by looping over the gameObjectIDMappings
global.os_materialIndex = () => {

    
    return {
        
        mappings: [woodMappings],

        gameObjectIDMappings: [],

        largeAbsorbIDs: [],

        medAbsorbIDs: [],

        smallAbsorbIDs: [],

        createMappings: 

            // Expects a item object from minecraft
            // this is supposed to be used on load to map
            // each itemID to a material
            function(gameItem){

                for (const mapping of this.mappings) {

                    for(const tag in mapping.tags){

                        if(gameItem.hasTag(tag)){

                            let newMapping = global.keyWordMapping(gameItem.id, mapping.material);

                            this.gameObjectIDMappings.push(newMapping);
                        };
                    };


                };

            }
    };



};

