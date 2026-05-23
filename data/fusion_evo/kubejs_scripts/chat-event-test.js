PlayerEvents.loggedIn(event => {

    let player = event.getPlayer()

    event.server.tell(palladium.powers.getPowerIds(player).toString())
})


PlayerEvents.chat(event => {


    let msg = event.getMessage()

    let player = event.getPlayer()

    

    for(const item in Items){

        item.get

    }
})