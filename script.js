const filterableButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// console.log(filterableButtons , filterableCards);
const filterCards = e => {
    //console.log(e.target);
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {card.classList.add("hide");
if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
    card.classList.remove("hide")
}
})
}
filterableButtons.forEach(button => button.addEventListener("click" , filterCards)) 