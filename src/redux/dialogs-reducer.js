
const SEND_MESSAGE ='SEND_MESSAGE';
let  initialState =
        {
          messages:[
          {id:1, message:'Whats up guys,How are you'},
          {id:2, message:'Whats up guys,How are you'},
          {id:3, message:'Good Day my friends'},
          {id:4, message:'I am trying to work'},
          {id:5, message:'Nurlanov'},
          {id:6, message:'Sultanov'}
        ],
          dialogs:[
          {id: 1, name: 'Akjol'},
          {id: 2, name: 'Green cities'},
          {id: 3, name: 'Kirilov'},
          {id: 4, name: 'Ruslanov'},
          {id: 5, name: 'Nurlanov'},
          {id: 6, name: 'Sultanov'}
        ],
        };
 const dialogsReducer = (state = initialState,action) =>{
   
     switch(action.type){
        case SEND_MESSAGE:
          let body = action.newMessageBody;
          return{
               ...state,
               messages:[...state.messages,{id:7, message: body}]
              };
           
        default:
             return state;
     }
        
}
export const sendMessageCreator = (newMessageBody) => ({type:SEND_MESSAGE,newMessageBody})

export default dialogsReducer;