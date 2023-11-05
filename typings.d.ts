type todo = {
    id?:any
    todo:string
    createdAt:string
    finished:boolean
    finishedAt:string
}
type TodoResponse = {
    status:number
    msg:string
}

type UserData = {
    user:User
  }