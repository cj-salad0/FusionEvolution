ServerEvents.loaded(event => {

   

})

PlayerEvents.chat(event => {

    if (event.message.contains("oso")){
        event.server.scheduleInTicks(1, event.server, ctx =>{
            ctx.data.tell("Osmosian")

        })
    }
})