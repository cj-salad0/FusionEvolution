let materialDatabase = global.os_materialIndex()

ServerEvents.loaded(event =>{ 

    // This is how we get every item
    // basically I am getting the ingrient of all by using '*'

    let allItems = Ingredient.of("*").getItems()


    allItems.forEach(item => {

        let itemID = item.id 

        let tags = item.getTags().toArray();

        materialDatabase.createMapping(itemID,tags)
    
        
    });

    for(mapping of  materialDatabase.gameObjectIDMappings){

        console.log(mapping.keyWord +  "| material: " +  mapping.material.name)
    }

})
