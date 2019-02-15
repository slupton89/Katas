// function distribute(m, n) {
//   //if n is 0 or less
//     // return empty array
//   if (n <= 0) return [];
//   // need an n length array to store the candies
//     // filled wuth zeros
//   const candies = Array(n).fill(0);
//   while(m > 0) {
//     // iterate up to num of children (n)
//     for (let i = 0; i < candies.length; i++) {
//       // increment the current value at the current index by 1
//       candies[i]++;
//       // decrement number of candies left
//       m--;
//       // if numbers of candies is zero
//         // break
//       if (m === 0) break;
//       // if reach the end of the array and still have candies left, do it again
//     }
//   }
//   return candies;
// }

function distribute(m, n) {
  return n <= 0
    ? []
    : m <= 0
    ? Array(n).fill(0)
    : Array.from({length: n}, (_, i) => i < m % n ? Math.floor(m % n) + 1 : Math.floor(m % n))
}




console.log(distribute( 0, 10).sort((a,b)=>a-b), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 5, 10).sort((a,b)=>a-b), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
console.log(distribute(10, 10).sort((a,b)=>a-b), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(distribute(15, 10).sort((a,b)=>a-b), [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
console.log(distribute(-5,  0), []);
console.log(distribute(-5, 10).sort((a,b)=>a-b), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 0,  0), []);
console.log(distribute( 5,  0), []);
console.log(distribute(10,  0), []);
console.log(distribute(15,  0), []);
console.log(distribute(-5, -5), []);
console.log(distribute( 0, -5), []);
console.log(distribute( 5, -5), []);
console.log(distribute(10, -5), []);
console.log(distribute(15, -5), []);