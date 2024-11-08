
let n;
n = prompt();
n = parseInt(n);
switch (true) {
    case n <= 1:
        console.log("no");
        break;
    case n === 2:
        console.log("yes");
        break;
    case n > 2:
        if (n % 2 === 0) {
            console.log("no");
        }
        else {
            let isPrime = true;
            for (let i = 3; i <= Math.sqrt(n); i+=2) {
                if (n % i === 0) {
                    isPrime = false;
                    break;
                }
                
            }
            console.log(isPrime ? "yes" : "no");
        }
        break;

    default:
        break;
}