const coursesReducer = (state = [], action) => {
    switch(action.type){
        case 'SAVECOURSES':
            return state = action.payload;
        default:
            return state;
    }
}

export default coursesReducer;