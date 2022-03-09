let data = [
    {id : 1, parent_id : 0, child : []},
    {id : 2, parent_id : 1, child : []},
    {id : 3, parent_id : 2, child : []},
    {id : 4, parent_id : 0, child : []},
    {id : 5, parent_id : 2, child : []},
    {id : 6, parent_id : 1, child : []},
    {id : 7, parent_id : 3, child : []},
    {id : 8, parent_id : 4, child : []},
    {id : 9, parent_id : 5, child : []},
    {id : 10, parent_id : 0, child : []},
    {id : 11, parent_id : 5, child : []},
    {id : 12, parent_id : 0, child : []},
    {id : 13, parent_id : 1, child : []},
];

function getChild(arr, parent){
    
    if (parent !== null){
        let arrChild = [];
        arr.map((item) => {
            if (item.parent_id === parent.id){
                item.child = getChild(arr, item)
                arrChild.push(item)
            }
        });
        return arrChild;
    }
    let final = []
    arr.map( ( item ) => {
        if (item.parent_id === 0){
            item.child = getChild(arr, item)
            final.push(item);
        }
    });
    return final;
}


final = JSON.stringify(getChild(data,null));

console.log(final);

child = JSON.stringify(getChild(data,data[4]))

console.log(child);
