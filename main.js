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
    const invisibleClass = document.querySelector(element)
    invisibleClass.className = 'invisible'
}

invisibility('#heading')


function fontSize1 (id, size1){
    const targetId = document.querySelector(id)
    targetId.style.fontSize = size1
}

fontSize1('#lorem' ,'100px')


function newLi (text){
    const newBornLi = document.createElement('li')
    newBornLi.innerText = text

    return newBornLi
}

appendArguments(newLi('OMG my function works!'))

function newHeader (header1,someText){
    const heezy = document.createElement('h3')
    heezy.innerText= someText
    heezy.style.fontSize = header1

    return heezy
}

appendArguments(newHeader('200px', 'yerr this is my new header '))