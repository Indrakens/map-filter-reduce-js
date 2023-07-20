/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
//const nums1 = [0, 1, 2, 3, 4];
//let sum1 = nums1.reduce((acc, curr) => {
//    console.log(
//        "Accumulator:", acc,
//        "Curent Value:", curr,
//        "Total:", acc + curr
//    );
//    return acc + curr;
//}, 10); //can change a number   
//console.log(sum1);

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // can change number
console.log(sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); //specifay value-number
  console.log(totalExperience);
  
  
  // Grouping by a property, and totaling it too
  // {Developer: 12, Designer: 4} <-- this is result for this code
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let kay = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});

  console.log(experienceByProfession);