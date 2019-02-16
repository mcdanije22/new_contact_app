const initialState ={
    modalIsOpen: false
}

const modalToggle = (state=initialState, action={})=>{
    switch(action.type){
        case 'MODAL_OPEN' :
        return{
        ...state,
        modalIsOpen:!state.modalIsOpen?true:false
        };
        default:
        return state
    }
}
export default modalToggle;