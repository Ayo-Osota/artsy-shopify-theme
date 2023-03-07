announcementBar = document.getElementById("announcement-bar");
closeBtn = document.getElementById("announcement-bar-close-button");

const close = () => {
    announcementBar.classList.remove('active');
}

closeBtn.addEventListener("click", close);