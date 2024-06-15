document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const nameForm = document.getElementById("nameForm");
    const nameInput = document.getElementById("nameInput");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    const closeModal = document.getElementsByClassName("close")[0];
    const themeToggle = document.getElementById('themeToggle');


    setTimeout(() => {
        loader.classList.add("hidden");
        content.classList.remove("hidden");
    }, 3000);

    nameForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = nameInput.value;
        modalText.innerText = `Kirib kelgan hayyit ayyomingiz bilan, ${userName} sizni tabriklayman!🎉`;
        modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        nameInput.value = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeToggle.checked = true;
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});
