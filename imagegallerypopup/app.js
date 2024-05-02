const smallimg = document.querySelectorAll('.gallery img')
const fullimg = document.querySelector('.full-image')
const modal = document.querySelector('.modal')
smallimg.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt")
        const path = `../image/${fullsize}.jpg`
        console.log(path)
        fullimg.src=path
        modal.classList.add("open")
    })
})

modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})