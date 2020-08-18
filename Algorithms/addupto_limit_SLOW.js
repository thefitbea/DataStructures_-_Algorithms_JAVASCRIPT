var total;//varaiable declaration takes time and memory

function addUpto(limit) {
  total = 0;//time is taken for initialisation
  for (var i = 1; i <= limit; i++) {//loops takes time and memory allocation
    total = total + i;
  }
  return total;
}
