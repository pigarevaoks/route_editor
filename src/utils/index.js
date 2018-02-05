export const insertItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(newArray.length, 0, action.payload);
    return newArray;
}