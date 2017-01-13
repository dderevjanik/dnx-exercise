/**
 * Immutable add value at the end of list
 * @param {array} list
 * @param {any} value
 * @return {array}
 */
export const add = (list, value) => [...list, value];

/**
 * Immutable remove item on specific index from list
 * @param {array} list
 * @param {number} index - index of item that'll be removed from list
 * @return {array}
 */
export const remove = (list, index) => {
    return list
        .slice(0, index)
        .concat(list.slice(index + 1))
};
