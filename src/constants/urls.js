export const baseURL='http://owu.linkpc.net/carsAPI/v1/cars';
export const saveCar = (car) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
    })

}