require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('6277a11f3d2480fc3b604619', { age: 1 }).then((user) => {
//     console.log(user)

//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: 0 })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount("6277a11f3d2480fc3b604619", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})