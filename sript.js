//function nFactorielle(n) {
// if (n == 1 || n == 0) return 1;

//if (n < 0) return "error";
// return n * nFactorielle(n - 1);
//}

//console.log(nFactorielle(7));
function fact(nbr) {
  var i,
    nbr,
    f = 1;

  for (i = 1; i <= nbr; i++) {
    f = f * i; // ou f *= i;
  }
  return f;
}

console.log(fact(3));
