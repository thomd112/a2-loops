// Your code here
const squares = (initialWidth, n) => {
  let width = initialWidth;
  let color = '#0000ff';

  if (n === 0) {
    return { width: initialWidth,color:'#0000ff' };
  }
  
  for (let i = 1; i <= n; i++) {

    width= width*0.75;
    color = 

    $colourChange



  return {
    'width': width,
    'color': color,
  };
}
// End your code

export { squares };
console.log(squares(500, 2));