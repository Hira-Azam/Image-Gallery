const filterItems = document.querySelectorAll(".items .item")
const images = document.querySelectorAll(".gallery .image")
const searchInput = document.querySelector(".search")
const previewBox = document.querySelector(".previewBox")
const previewImg = previewBox.querySelector(".mainImg")
const closeIcon = previewBox.querySelector(".icon")
const currentImg = previewBox.querySelector(".currentImg")
const totalImg = previewBox.querySelector(".totalImg")
const categoryName = previewBox.querySelector(".category p")
const nextBtn = previewBox.querySelector(".next")
const prevBtn = previewBox.querySelector(".prev")
let currentIndex = 0
totalImg.textContent = images.length
filterItems.forEach(item => {
    item.addEventListener("click", () => {
        filterItems.forEach(i => i.classList.remove("active"))
        item.classList.add("active")
        let filter = item.getAttribute("data-filter");
        images.forEach(img => {
            if(filter === "All" || img.classList.contains(filter)){
                img.style.display = "block"
            }else{
                img.style.display = "none"
            }
        })
    })
})
searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase()
    images.forEach(img => {
        let name = img.getAttribute("data-name").toLowerCase()
        img.style.display = name.includes(value) ? "block" : "none"
    })
})
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index
        showPreview()
    });
});
function showPreview(){
    previewBox.classList.add("show")
    updatePreview()
}
function updatePreview(){
    let img = images[currentIndex].querySelector("img")
    previewImg.src = img.src
    currentImg.textContent = currentIndex + 1
    categoryName.textContent = images[currentIndex].getAttribute("data-name")
}
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length
    updatePreview()
})
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updatePreview()
})
closeIcon.addEventListener("click", () => {
    previewBox.classList.remove("show")
})