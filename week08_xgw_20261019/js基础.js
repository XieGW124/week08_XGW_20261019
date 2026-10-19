// alert("测试")
// 区分大小写
// let a = 10
// console.log(a)
// let A = 20
// console.log(A) 
// // 弱类型变量,同一个变量数据类型动态变化
// let b = 30
// console.log(typeof(b))
// b = "Hello"
// console.log(typeof(b))
// TypeScript语言
// 常用函数
// confirm("确认吗？")
// let name = prompt("请输入姓名:")
// console.log(name)
// console.log(typeof(name))

// let age = prompt("请输入年龄:")
// age = parseInt(age)
// console.log(age)
// console.log(typeof(age))

// 模版字符串
// let name2 = "XieGuangwen"
// let age2 = 20
// // alert(`我的名字是${name2},今年${age2}岁。`)

// // 字符串对象
// let str1 = "Hello"
// console.log(str1.length)
// console.log(`字符串长度为${str1.length}。`)
// let char1 = str1.charAt(0)
// console.log(char1)
// let subStr1 = str1.slice(0, 3)
// console.log(subStr1)
// let find1 = str1.indexOf("l")
// console.log(`字符串中第一个l的索引为${find1}。`)
// let find2 = str1.lastIndexOf("l")
// console.log(`字符串中最后一个l的索引为${find2}。`)

let weight = prompt("请输入体重（kg）:")
weight = parseInt(weight)
console.log(weight)
console.log(typeof(weight))
let height = prompt("请输入身高（m）:")
height = parseFloat(height)
console.log(height)
console.log(typeof(height))
let bmi = weight / height ** 2
console.log(`您的BMI值为${bmi.toFixed(2)}。`)


