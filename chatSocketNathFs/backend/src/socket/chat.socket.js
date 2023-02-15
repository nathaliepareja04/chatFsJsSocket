let messages=[{message:"que mas ps",hour:1676133498585}]

export const chatSocket=(fastify)=>{

    fastify.io.on("connection",(socket)=>{
        console.log("user conectado",socket.id
        )

        const sendMsj=()=>{
            fastify.io.emit("server:getMsj",messages)
        }

        sendMsj()

        socket.on("client:addMsj",(message)=>{
            messages.push(message)
            sendMsj()
        })

        socket.on("disconnect",()=>{
            console.log("user desconectado",socket.id)
        })
    })
}