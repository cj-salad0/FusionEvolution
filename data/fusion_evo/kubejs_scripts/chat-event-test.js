PlayerEvents.loggedIn(event => {

    let player = event.player

    event.server.tell(palladium.powers.getPowerIds(player).toString())
})