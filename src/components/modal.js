
function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        closeModal(openedPopup);
    }
}

function closeByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        const openedPopup = document.querySelector(".popup_is-opened");
        closeModal(openedPopup);
    }
}


function handleCursorType(evt) {
    if (evt.target === evt.currentTarget) {
        evt.target.style.cursor = "pointer";
    } else {
        evt.target.style.cursor = "default";
    }
}

export function openModal(popup) {  
    popup.classList.add('popup_is-opened');

    popup.querySelector(".popup__close").addEventListener("click", evt => closeModal(popup));
    popup.addEventListener("click", closeByOverlay);
    popup.addEventListener("mouseout", handleCursorType);
    document.addEventListener("keydown", closeByEsc);
}

export function closeModal(popup) {
    popup.querySelector(".popup__close").removeEventListener("click", evt => closeModal(popup));
    popup.removeEventListener("click", closeByOverlay);
    popup.removeEventListener("mouseout", handleCursorType);
    document.removeEventListener("keydown", closeByEsc);

    popup.classList.remove('popup_is-opened');
}

