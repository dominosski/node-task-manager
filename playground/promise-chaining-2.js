require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('6274e12d99d7d66b80d6190faz').then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)

// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount('6277b278acecf1733c9f8ae6').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})