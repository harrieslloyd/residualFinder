function calculate() {
  let m1 = parseFloat(document.getElementById('m1').value)
  console.log('M1: ' + m1)
  let m2 = parseFloat(document.getElementById('m2').value)
  console.log('M2: ' + m2)
  let yInt = parseFloat(document.getElementById('yInt').value)
  console.log('yInt: ' + yInt)
  let x = parseFloat(document.getElementById('x').value)
  console.log('x: ' + x)
  let y = parseFloat(document.getElementById('y').value)
  console.log('y: ' + y)
  c(m1, m2, yInt, x, y)
}

function c(m1, m2, yInt, x, y) {
  let ans = y - (((m1/m2) * x) + yInt)
  document.getElementById('res').innerHTML = ans
  console.log(ans)
  document.getElementById('resSquared').innerHTML = Math.pow(ans, 2)
  console.log(Math.pow(ans, 2))
}