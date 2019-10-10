function setImageId(id,url){
    id.src = url
}

const newPic =document.querySelector('#image-1')
const newPic2 =document.querySelector('#image-2')
const newPic3 =document.querySelector('#image-3')

setImageId(newPic,'https://media.giphy.com/media/50rCgxatPH4be/source.gif')
setImageId(newPic2,'https://media.giphy.com/media/50rCgxatPH4be/source.gif')
setImageId(newPic3,'https://media.giphy.com/media/50rCgxatPH4be/source.gif')



function putLineThrough(listItem){
    listItem = document.querySelector('#arguments li:first-child');
    listItem.style.textDecoration = "line-through"

}

putLineThrough('#arguments li:first-child')


function removeNode1(lastItem){
    lastItem = document.querySelector('#arguments li:last-child')

    lastItem.remove()

}

removeNode1()







//part2

function appendArguments(element){
   argue= document.querySelector('#arguments')
   argue.appendChild(element)


}



const basquiat = document.createElement('img')
basquiat.src = 'https://media.giphy.com/media/50rCgxatPH4be/source.gif'

appendArguments(basquiat)


function imageHeight(img){
    const changeHeight = document.querySelector(img)
    changeHeight.style.height = "30px"
}

imageHeight('img')

function invisibility(element){
    const invisibileClass = document.querySelector(element)
    invisibileClass.className = 'invisible'
}