

export const sortedCategory = (context) => {
    let filterArr = new Set([])

    context?.forEach(element => {
        filterArr.add(element.filter[0])
        filterArr.add(element.filter[1])
    });

    const sortedArr = Array.from(filterArr)
    return sortedArr
}