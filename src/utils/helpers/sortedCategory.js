export const sortedCategory = (name) => {
    let filterArr = new Set([])

    name?.forEach(element => {
        filterArr.add(element.filter[0])
        filterArr.add(element.filter[1])
    });

    const sortedArr = Array.from(filterArr)
    return sortedArr
}