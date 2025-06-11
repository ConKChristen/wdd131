const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

document.querySelector('.name').textContent = character.name;
document.querySelector('#class').textContent = character.class;
document.querySelector('#level').textContent = character.level;
document.querySelector('#health').textContent = character.health;

function updateStats() {
    document.querySelector('#level').textContent = character.level;
    document.querySelector('#health').textContent = character.health;
}
    
const cardImg = document.querySelector('.picture'); 
cardImg.src = character.image;   
document.body.appendChild;

document.querySelector('#attacked').addEventListener('click', function(){
    const healthNum = document.querySelector('#health').textContent;
    character.attacked(healthNum);
    updateStats();
});

document.querySelector('#levelup').addEventListener('click', function(){
    const levelNum = document.querySelector('#health').textContent;
    character.levelUp(levelNum);
    updateStats();
});

console.log(character.health);