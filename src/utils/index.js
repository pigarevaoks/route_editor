export const insertItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(newArray.length, 0, action.payload);
    return newArray;
}

export const updateItemInArray = (array, action) => {
    return array.map((item, index) => {
        if (index !== action.payload.key) {
            return item;
        }
        return {
            ...item,
            formatted_address: action.payload.formatted_address,
            location: {
                lat: action.payload.lat,
                lng: action.payload.lng
            }
        };
    });
}

export const removeItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.payload.index, 1);
    return newArray;
}

export const updatePositionInAray = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.payload.to, 0, newArray.splice(action.payload.from, 1)[0]);
    return newArray;
}
