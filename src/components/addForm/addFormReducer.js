const initialState ={
    addFormModalToggle: false
}

const modalToggle = (state=initialState, action={})=>{
    switch(action.type){
        case 'MODAL_TOGGLE' :
         return{       
 addFormModalToggle:this.addFormModalToggle?false:true
        };
        default:
        return state
    }
}
export default modalToggle;