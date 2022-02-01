const bigIntTest = (n) => {
    let total = 1n;
    for (let i = BigInt(n); i > 0n; i--) total *= i;
    console.log(total.toString());
};

bigIntTest(25);