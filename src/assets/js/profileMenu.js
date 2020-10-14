const profileBtn = document.querySelector(".header__profile");
const profileMenus = document.querySelector(".header__profile_menus");

const ul = document.querySelectorAll("ul");

let isMenuOpen = 0;

const handleProfileClick = () => {
    if(isMenuOpen === 0) {
        profileMenus.classList.remove("hide");
        isMenuOpen = 1;
    } else {
        profileMenus.classList.add("hide");
        isMenuOpen = 0;
    }
};

const showProfileMenus = () => {
    profileBtn.addEventListener("click", handleProfileClick);
    
    ul[0].addEventListener("click", function() {
        location.href="/profile";
    });
    ul[1].addEventListener("click", function() {
        location.href="/logout";
    });
}

if(profileBtn) {
    showProfileMenus();
}