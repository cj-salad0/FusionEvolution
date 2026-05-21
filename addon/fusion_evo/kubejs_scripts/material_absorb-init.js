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


global.os_initializeMaterial = (name, toolDurability, armourBuff, attackBuff, propertyFunction) => {

    return {


        name: name,

        toolDurability: toolDurability,

        addedArmour: armourBuff,

        attackBuff: attackBuff,

        specialProperties: propertyFunction || function(){ return; }

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


//The main materialIndex for the Powerset
// be generated so easily on certain events
// that return a GameObject I can just quickly see if it 
// has a determined type by looping over the gameObjectIDMappings
global.os_materialIndex = () => {

    
    return {
        
        keyWords: [plankKW, logKW, ironKW, stoneKW],

        gameObjectIDMappings: [],

        definedMaterials: [iron_mat, stone_mat, wood_mat],

        largeAbsorbIDs: [],

        medAbsorbIDs: [],

        smallAbsorbIDs: [],

        createMappings: 
        
            function(objectID){

                for (const element of this.keyWords) {

                    // check if objectID contains the current keyword if it does
                    // add the objectID and the following material of the current keyword
                    // use the keyWordMapping Factory but instead pass the objectID as the keyword and append
                    // it to the gameObjectIDMappings array so it makes a direct mapping between the objectID and the material
                    // also determine based on the type it is like tool or block depends on if the
                    // id gets addedd to large, med or small Absorb ID's
                }

            }
    };



};

