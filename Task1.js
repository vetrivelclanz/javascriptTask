
// Javascript implementation
// of the above approach
 
 
// Return the number of odd numbers
// in the range [L, R]
function countOdd( L, R){
 
    let N = Math.floor((R - L) / 2);
 
    // if either R or L is odd
    if (R % 2 != 0 || L % 2 != 0)
        N += 1;
 
    return N;
}
 
 
    // Driver Code
     
    let L = 3, R = 7;
    let odds = countOdd(L, R);
    let evens = (R - L + 1) - odds;
     
    console.log(
    "Count of odd numbers is " + odds 
    );
    console.log(
    "Count of even numbers is " + evens 
    );

// Average Salary Excluding the Minimum and Maximum
    function average(salary) {
        let sum = 0;
        let avg = salary.reduce((a, b) => a+b, 0)/salary.length;
        return avg
    };
    
    let salary =[4000, 3000, 1000, 2000]
    let value2 =average(salary);
    
    console.log(value2)

  // Number of 1 Bits
     function hammingWeight(n) {
        var count = 0;
        var mask = 1;
        for (i=0; i<32; i++) {
            if ((mask & n) != 0 ) {            
                count++;
            }
            mask <<= 1;
        }
        return count;
    };
    let n =00000000000000000000000000001011;
    let result1 = hammingWeight(n)
    console.log(result1);

 // Subtract the Product and Sum of Digits of an Integer
    function subtractProductAndSum(ne){
        let sum = 0 ;
        let product = 1;
        
        while (ne > 0)
        {
            var digit = ne % 10;
            sum += digit;
            product *= digit;
    
            ne = Math.floor(ne / 10);
         }
        
        return product - sum;
    }

    let ne = 234;
    let subresults = subtractProductAndSum(ne);
    console.log(subresults)


    function solution(a) {
        if (a.length < 3) {
            return 0;
        }
        
        a.sort((a, b) => a - b);
        
        for (let i = 0; i < a.length - 2; i++) {
            if (a[i] + a[i + 1] > a[i + 2]) {
                return 1;
            }
        }
        
        return 0;
        }

    let a =[2,1,2];
    let Largest = solution(a);
    console.log(Largest);



    