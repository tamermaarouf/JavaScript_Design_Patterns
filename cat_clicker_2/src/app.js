const leftCount =  document.getElementById('catLeft');
const rightCount =  document.getElementById('catRight');
let count = [0,0];


const cats = document.querySelectorAll('img');

cats.forEach((cat) => {
  cat.addEventListener('click', function(){
    if(this.id === 'left'){
      count[0]++;
      leftCount.textContent = count[0];
    }else if(this.id === 'right'){
      count[1]++;
      rightCount.textContent = count[1];
    }
  }, false);
});

