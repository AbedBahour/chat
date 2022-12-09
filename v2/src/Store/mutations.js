export function sendMsg1(state,payload){
    state.chat.push(
        {
            id:"11",
            type:'sender',
            image : 'https://pickaface.net/gallery/avatar/20151205_194059_2696_Chat.png',
            messageType:'text',
            messageContent:payload,
            messageTime:'07:44 am',
        },
    );
}
