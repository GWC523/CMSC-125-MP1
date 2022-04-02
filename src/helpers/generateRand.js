

//Generate a random number min - max
export const generateRand = (min, max) => {
    const rand = min + Math.random() * (max - min);
    
    return Math.floor(rand)
}