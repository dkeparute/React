// domino kauliuku archyvas vietoj DB
const dominoGenerator = (key = 'lastId') => {

    let id = localStorage.getItem(key);
    if(null === id) {
        localStorage.setItem(key, 1);
        return 1;
    }
    id =parseInt(id);
    id++;
    localStorage.setItem(key, id);
    return id;
}
export default dominoGenerator;