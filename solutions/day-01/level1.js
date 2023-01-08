const empty = Array()
console.log(empty)

const arr1 = ['india', 'kerala', 'tvm', 'atl', 'korani', '3']
console.log('Length: ' + arr1.length)
console.log('First Item: ' + arr1[0])
console.log('Middle Item: ' + arr1[arr1.length/2])
console.log('Last Item: ' +arr1[arr1.length-1])

const name1 = "alsaj"
const mixedDataTypes = [10,'alraj', true, [0,'asd'],{state: [0,1]}, name1]
console.log("Length of mixed data array: " + mixedDataTypes.length)

const itCompanies = [
    "Facebook", 
    "Google", 
    "Microsoft", 
    "Apple", 
    "IBM", 
    "Oracle", 
    "Amazon"
]

console.log(itCompanies)
console.log("Number of companies: " + itCompanies.length)
console.log('First Company: ' + itCompanies[0])
console.log('Middle Company: ' + itCompanies[Math.floor(itCompanies.length/2)])
console.log('Last Company: ' + itCompanies[itCompanies.length-1])

console.log("The list of companies: ")
itCompanies.forEach(
    (company) => console.log(company)
)
// 11
console.log("To Uppercase: ")
itCompanies.forEach(
    (company) => console.log(company.toUpperCase())
)
// 12
console.log("Companies like " + itCompanies.toString() + " are big IT companies.")

// 13
company = "Amazon"
itCompanies.includes(company)
    ? console.log("Found: " + company)
    : console.log("not found")

//  14   
itCompanies.forEach(    
    (company) => {
        let flag = false
        const companyA = company.split("")
        companyA.forEach(
            (c) => {
                if (flag == true && (c ==='o'|| c === 'O')){
                    console.log(company)
                }
                if (flag == false && (c ==='o'|| c === 'O')){
                    flag = true
                }
            }
        )
       
    }
)

// 15
console.log("Sorted Array: " + itCompanies.sort())

// 16
console.log("Sorted Array in reverse: " + itCompanies.reverse())

// 17
console.log("Slicing first 3 companies: " + itCompanies.slice(0,3))

// 18
console.log("Slicing last 3 companies: " + itCompanies.slice(itCompanies.length-3,itCompanies.length))

// 19
console.log("Slicing middle: " + itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))

// 20
console.log("Removed '" + itCompanies.shift() + "' from the Array: " + itCompanies)

// 21
console.log("Removed '" + itCompanies.pop() + "' from the Array: " + itCompanies)

//22
const start = Math.floor(itCompanies.length/2)
console.log("Removed '" + itCompanies.splice(start, 1) + "' from the Array: " + itCompanies)
