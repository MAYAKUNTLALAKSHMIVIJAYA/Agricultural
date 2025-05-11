const initialVal = [
   
]


//create reducer , which we have to connect with storage

const Farmerreducer = (state = initialVal , action)=>{
     console.log("farmer Reducer");
     console.log(action);// {type:"add" ,payload:{}}
    switch(action.type){
        case "ADD":
           
            state = [ action.payload];
            return state;
            // case 'CLEAR':
            //     state=action.log.
            //     break;
            
        default:
            return state;
    }
     //return state;
}

export default Farmerreducer;