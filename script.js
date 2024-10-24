
document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        document.getElementById("main").classList.add("md:block")
        document.getElementById("splash-screen").style.display = "none"
        document.body.classList.remove("overflow-hidden");
    }, 3000)
})