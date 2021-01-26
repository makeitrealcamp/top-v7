// let num = 1;
// num = []
// num = 'string'

let num = 1
let str = 'wstring'

let bool: boolean;
bool = true
let num2: number = 1;
let und: undefined | null;
let foo: any;
foo = 1;
foo = 'string'
foo = null

console.log(und)

// type aliases
type barTypes = string | number

let bar: barTypes = 1;
bar = ''

// Arrays
// let arr: string[] = ['']
// let arr: string[] | number[]
// let arr: Array<barTypes>
let arr: Array<string | number>
arr = ['', 1]

// Tuples
let tup: [string, number, boolean] = ['', 1, true]

// interface
interface IUser {
  name: string;
  age: number;
  working?: boolean;
}

interface IPost {
  title: string;
  user: IUser;
}

interface IComment {
  comments: string[];
  add: (s: string) => string
}

// Duck Typing
// if it quacks like a duck and walks like a duck. Then it is a duck

// class User implements IUser {}
// class User implements IUser {
//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }
// }

// const user: IUser = new User('Juan', 28)
const user1: IUser = {
  name: 'maria',
  age: 30
}

const post: IPost & IComment = {
  title: 'title',
  user: user1,
  comments: [],
  add(s) {
    return s
  }
}

// post.add(1)

// if(working && age > 20)
// functions
function sum(a: number, b: number): number {
  return a + b
}

sum(1, 2)





