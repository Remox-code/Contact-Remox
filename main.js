const cooperationBtn = document.getElementById("cooperationBtn");
const consultationBtn = document.getElementById("consultationBtn");

const cooperationModal = document.getElementById("cooperationModal");
const consultationModal = document.getElementById("consultationModal");

const modals = [cooperationModal, consultationModal];

function openModal(modal) {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("active");

  const anyModalOpen = modals.some((item) => item.classList.contains("active"));

  if (!anyModalOpen) {
    document.body.style.overflow = "";
  }
}

/* Cooperation */

cooperationBtn.addEventListener("click", () => {
  openModal(cooperationModal);
});

/* Consultation */

consultationBtn.addEventListener("click", () => {
  openModal(consultationModal);
});

/* Close buttons */

document.querySelectorAll(".modal-close").forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.closest(".modal"));
  });
});

/* Close by clicking outside */

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

/* Close with Escape */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      if (modal.classList.contains("active")) {
        closeModal(modal);
      }
    });
  }
});
