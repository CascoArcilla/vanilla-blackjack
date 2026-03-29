document.addEventListener("click", (e) => {
    if (e.target.closest("#closeModal")) {
        hideModal();
    }

    if (e.target.closest("#modal")) {
        hideModal();
    }
});

export function showModal(title, content) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    modalTitle.textContent = title;
    modalContent.textContent = content;
    modal.classList.remove("hidden");
}

export function hideModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
}