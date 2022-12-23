// function query<T>(
//     items: T[],
//     query: Record<keyof T, (value: T[keyof T]) => boolean>
//     //first and easy way, however, name still can be string or number
// ) {
function query<T>(
    items: T[],
    query: {
        // []:(val)=>boolean
        // [TProp in keyof T]:(val)=>boolean// for each property in T, create a key with the same name and a value of a function that takes a value of type T[TProp] and returns a boolean
        // [TProp in keyof T]:(val:T[TProp])=>boolean //all properties of T must be passed in the query object, Do optional properties
        [TProp in keyof T]?:(val:T[TProp])=>boolean
    }
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })
