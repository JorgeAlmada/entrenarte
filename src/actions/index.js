export const saveCourses = (nr) => {
    return{
        type: 'SAVECOURSES',
        payload: nr
    };
}

export const selectCourse = (nr) => {
    return{
        type: 'SELECTCOURSE',
        payload: nr
    };
}