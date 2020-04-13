const selectedcourseReducer = (state = 0, action) => {
    switch(action.type){
        case 'SELECTCOURSE':
            return state = action.payload;
        default:
            return state;
    }
}

export default selectedcourseReducer;