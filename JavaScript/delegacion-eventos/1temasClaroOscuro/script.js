const selector = document.getElementById("theme-select");

selector.addEventListener("change", () => {

    if (selector.value === "light") {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        console.log("light works");
        
    } else if (selector.value === "dark") {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        console.log("dark works");
        
    }
});