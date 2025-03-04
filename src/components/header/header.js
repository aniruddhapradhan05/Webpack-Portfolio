export function headerFn(){
    document.getElementById("menu-toggle").addEventListener("click", function () {
        console.log("hamburger")
        document.getElementById("nav-menu").classList.toggle("active");
    });
}