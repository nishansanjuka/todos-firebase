
type todo = {
    todo:string
    createdAt:any
    finished:boolean
    finishedAt:any
}
type TodoResponse = {
    status:number
    msg:string
}

type UserData = {
    user:User
}

type todoItem = {
    id:string,
    todo:todo
    updates?:todo
}