function PrintAllOwnProperty(obj)
{
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            console.log(key);
        }
    }
}
/*
const person = {
    'city': 'Surgut'
}

const child = Object.create(person)
child.ownCity = 'Barsovo'
printAllOwnProperty(child)
*/