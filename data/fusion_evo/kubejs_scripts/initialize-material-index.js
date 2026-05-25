let materialDatabase = global.os_materialIndex()

ServerEvents.loaded(event =>{ 

    // This is how we get every item
    // basically I am looking at the regiserty and getting every typeID
    // and converting it to a JavaScript array

    let allItems = Utils.registry('item').getTypeIds().toArray()


    allItems.forEach(id => {

        let itemID = Item.of(id)

        let tags = item.getTags().toArray();

        materialDatabase.createMapping(itemID,tags)
    
        
    });

})
