
function getRandomString(len: number = 6) {
    return Math.random().toString(16).substr(2, len + 2)
}

export default getRandomString