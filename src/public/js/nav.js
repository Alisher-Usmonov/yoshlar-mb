export default () => {
    try {
        let menuBtn = document.querySelector(".menu");
        let closeBtn = document.querySelector(".close");
        let navList = document.querySelector(".nav-list");

        menuBtn.addEventListener("click", () => {
            navList.classList.remove("hidden");
            navList.classList.add("flex");
        });

        closeBtn.addEventListener("click", () => {
            navList.classList.remove("flex");
            navList.classList.add("hidden");
        })
    } catch (e) {}
}