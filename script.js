const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const resetModal = document.querySelector('.modal-game')
const reset = document.querySelector('.reset')

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=>{
        
        mario.classList.remove('jump')

    }, 500)
}

const loop = setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudPosition = clouds.offsetLeft;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
    



}, 10); 

reset.addEventListener('click', ()=>{

    resetModal.style.display = 'none'

  
})

document.addEventListener('click', jump)