let its_ok = true;

let customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        if (its_ok) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
}

export default customFetch;