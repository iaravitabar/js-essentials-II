// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
function getTotal(inventory){
    let total = 0;
    inventory.forEach(article => {
        total+= article.price * article.quantity;
    });
    return total;
}
let inventory = [
    { article: '🍔', price: 15, quantity: 1 },
    { article: '🍟', price: 10, quantity: 2 }
];

let total = getTotal(inventory);
console.log(total);
// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana (inventory){
    let count = 0;
    for (let i = 0; i< inventory.length; i++){
        if (inventory[i] === "banana"){
            count++;
        }
    }
    console.log(count);
    return count
}

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
function filterEvenNumbers(numbers){
    return numbers.filter(number => number%2===0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers))

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
function squareNumbers(num){
    return num.map(n => n**2)
}
const num = [1, 2, 3, 4, 5];
console.log(squareNumbers(num));

// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5
function findMax(n){
    const max = Math.max(...n)
    return max;
}
const n = [1, 2, 3, 4, 5];
console.log(findMax(n));

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5

function calculateAverageAge(people){
    const totaAge = people.reduce((sum,person)=> sum + person.age,0);
    return totaAge / people.length;
}
const people = [
        { name: "Juan", age: 25 },
        { name: "Carla", age: 30 },
        { name: "Lucia", age: 35 },
        { name: "El Chengue", age: 49 }];
console.log(calculateAverageAge(people));

// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons

// const persons = [
//     {
//       name: 'Paula',
//       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
//     },
//     {
//       name: 'Martin',
//       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
//     },
//     {
//       name: 'Juan',
//       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
//     },
//     {
//       name: 'Veronica',
//       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
//     }
//   ];

// combinedHobbies(persons)
// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]

function  combinedHobbies(persons){
    let result =[]
    persons.forEach(person => {result = result.concat(person.hobbies);});
    return result;
}
const persons = [
        {
          name: 'Paula',
          hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
        },
        {
          name: 'Martin',
          hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
        },
        {
          name: 'Juan',
          hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
        },
        {
          name: 'Veronica',
          hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
        }
      ];
console.log(combinedHobbies(persons))

// 08 - function printChemicalInfo(chemicals)
// const chemicals = [
//     {
//       compoundId: 'CHEM001',
//       name: 'Aspirin',
//       formula: 'C9H8O4',
//       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//       molecularWeight: '180.16 g/mol',
//       meltingPoint: '135°C',
//       boilingPoint: '140°C',
//       solubility: 'Slightly soluble in water'
//     },
//     {
//       compoundId: 'CHEM002',
//       name: 'Caffeine',
//       formula: 'C8H10N4O2',
//       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//       molecularWeight: '194.19 g/mol',
//       meltingPoint: '238°C',
//       boilingPoint: '178°C',
//       solubility: 'Freely soluble in water'
//     },
//     {
//       compoundId: 'CHEM003',
//       name: 'Ethanol',
//       formula: 'C2H6O',
//       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//       molecularWeight: '46.07 g/mol',
//       meltingPoint: '-114.1°C',
//       boilingPoint: '78.37°C',
//       solubility: 'Miscible with water'
//     }
//   ];

//printChemicalInfo(chemicals)
function printChemicalInfo(chemicals){

}
const chemicals = [
        {
          compoundId: 'CHEM001',
          name: 'Aspirin',
          formula: 'C9H8O4',
          description: 'Aspirin is a common medication used to reduce pain and inflammation.',
          molecularWeight: '180.16 g/mol',
          meltingPoint: '135°C',
          boilingPoint: '140°C',
          solubility: 'Slightly soluble in water'
        },
        {
          compoundId: 'CHEM002',
          name: 'Caffeine',
          formula: 'C8H10N4O2',
          description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
          molecularWeight: '194.19 g/mol',
          meltingPoint: '238°C',
          boilingPoint: '178°C',
          solubility: 'Freely soluble in water'
        },
        {
          compoundId: 'CHEM003',
          name: 'Ethanol',
          formula: 'C2H6O',
          description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
          molecularWeight: '46.07 g/mol',
          meltingPoint: '-114.1°C',
          boilingPoint: '78.37°C',
          solubility: 'Miscible with water'
        }
      ];

//Expected output
// +-------------------------------------------------------+
// | Compound ID: CHEM001                                 |
// | Name: Aspirin                                        |
// | Formula: C9H8O4                                      |
// | Description: Aspirin is a common medication used to  |
// | reduce pain and inflammation.                        |
// | Molecular Weight: 180.16 g/mol                       |
// | Melting Point: 135°C                                 |
// | Boiling Point: 140°C                                 |
// | Solubility: Slightly soluble in water                |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                 |
// | Name: Caffeine                                       |
// | Formula: C8H10N4O2                                   |
// | Description: Caffeine is a stimulant found in coffee,|
// | tea, and various energy drinks.                      |
// | Molecular Weight: 194.19 g/mol                       |
// | Melting Point: 238°C                                 |
// | Boiling Point: 178°C                                 |
// | Solubility: Freely soluble in water                  |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                 |
// | Name: Ethanol                                        |
// | Formula: C2H6O                                       |
// | Description: Ethanol, also known as alcohol, is      |
// | commonly used as a solvent and in alcoholic beverages|
// | Molecular Weight: 46.07 g/mol                        |
// | Melting Point: -114.1°C                              |
// | Boiling Point: 78.37°C                               |
// | Solubility: Miscible with water                      |
// +-------------------------------------------------------+

// 09 - function getGetUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
function getGetUniqueGuestList(guestList){
    const sinDup = new Set (guestList);
    return sinDup
}
const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
console.log(getGetUniqueGuestList(guestList));
// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']

// 10 - function showUserProfiles(user)
// User data
function showUserProfiles(users){
    users.forEach(user => {
        console.log("ID:",user.id);
        console.log("Name:",user.name);
        console.log("Profile",user.profile);
        console.log("Twitter:", user.profile?.social?.twitter  ,'N/A');
        console.log("Facebook:", user.profile?.social?.facebook , 'N/A');
        console.log("Email:", user.profile?.email || 'N/A');
    });
}

const users = [{
    id: 1,
    name: 'Carol Smith',
    profile: {
        social: {
        twitter: 'carol.smith',
        facebook: 'carol.smith77'
        }
    }}
, {id:2, name: "jane Smith", profile:{email: "jane.smith@example.com"}}];;

showUserProfiles(users); // Expected output: 'carol.smith, carol.smith77'
//   showUserProfile(user2); // Expected output: 'jane.smith@example.com'

// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output
function sortLeaderBoardByScoreDesc(leaderBoard){
    leaderBoard.sort((a,b)=>b.score-a.score) 
    console.log(leaderBoard);
    return leaderBoard;
}
const leaderBoard = [
      { player: "John", score: 80 },
      { player: "Charlie", score: 20 },
      { player: "Julio", score: 50 },
      { player: "Bob", score: 80 },
      { player: "Bobby", score: 11 },
      { player: "Tommy", score: 43 },
      { player: "Eric", score: 99 },
      { player: "Alice", score: 100 },
      { player: "Alfred", score: 30 },
    ];
sortLeaderBoardByScoreDesc(leaderBoard);
// const leaderBoard = [
//   { player: "John", score: 80 },
//   { player: "Charlie", score: 20 },
//   { player: "Julio", score: 50 },
//   { player: "Bob", score: 80 },
//   { player: "Bobby", score: 11 },
//   { player: "Tommy", score: 43 },
//   { player: "Eric", score: 99 },
//   { player: "Alice", score: 100 },
//   { player: "Alfred", score: 30 },
// ];

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]

// 12 - function

function getTopFiveWorstPlayers(leaderBoard2){
    leaderBoard2.sort((a,b)=>a.score-b.score) 
    console.log(leaderBoard2[0],
                leaderBoard2[1],
                leaderBoard2[2],
                leaderBoard2[3],
                leaderBoard2[4]);
    return leaderBoard2;
}
const leaderBoard2 = [
    { player: "John", score: 80 },
    { player: "Charlie", score: 20 },
    { player: "Julio", score: 50 },
    { player: "Bob", score: 80 },
    { player: "Bobby", score: 11 },
    { player: "Tommy", score: 43 },
    { player: "Eric", score: 99 },
    { player: "Alice", score: 100 },
    { player: "Alfred", score: 30 },
  ];
getTopFiveWorstPlayers(leaderBoard2);


// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

// 13 - function safeCopy()
function safeCopy(companyHierarchy){
  const originalHierarchy = {
        name: 'Company',
        departments: [
          {
            name: 'Engineering',
            head: 'Alice',
            subDepartments: [
              {
                name: 'Backend',
                head: 'Bob',
                employees: ['Charlie', 'David']
              },
              {
                name: 'Frontend',
                head: 'Eve',
                employees: ['Frank', 'Grace']
              }
            ]
          },
          {
            name: 'Sales',
            head: 'Henry',
            employees: ['Isaac', 'Jane']
          }
        ]
      };
  const clonedHierarchy = JSON.parse(JSON.stringify(originalHierarchy));
  clonedHierarchy.departments.push({
        name: 'Marketing',
        head: 'Karen',
        employees: ['Liam', 'Mia']
      });
      console.log('Original Company Hierarchy:');
      console.log(originalHierarchy);
      console.log('Copied Company Hierarchy with Modifications:');
      console.log(clonedHierarchy);
}
safeCopy();

//   // Example usage
//   const copiedHierarchy = safeCopy(companyHierarchy);

//   // Modify the copied hierarchy
//   copiedHierarchy.departments.push({
//     name: 'Marketing',
//     head: 'Karen',
//     employees: ['Liam', 'Mia']
//   });

//   // Verify independence
//   console.log('Original Company Hierarchy:');
//   console.log(companyHierarchy);

//   console.log('Copied Company Hierarchy with Modifications:');
//   console.log(copiedHierarchy);
