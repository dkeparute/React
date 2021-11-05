function animalSort(state, by) {
    const animals = state.slice();

    switch (by) {
        case 'name_asc':
            // sort by name
            animals.sort(function (a, b) {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            break;
        default:
    }
    return animals

}
export default animalSort;