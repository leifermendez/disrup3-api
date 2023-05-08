const bcryptjs = require('bcryptjs')

/**
 * 
 * @param {*} passwordPlain 
 * @returns 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 8)
    return hash
}

/**
 * 
 * @param {*} passwordPlain 
 * @param {*} hash 
 * @returns 
 */
const compare = async (passwordPlain, hash) => {
    return await bcryptjs.compare(passwordPlain, hash)
}

module.exports = {encrypt, compare}