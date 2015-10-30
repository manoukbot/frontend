//selecteerd de 3de fieldset voegt is-visible toe en verwijderd de 4de fieldset.
function toggleProject() {
    document.querySelector('fieldset:nth-of-type(3n)').classList.add('is-visible');
    document.querySelector('fieldset:nth-of-type(4n)').classList.remove('is-visible');
}

//andersom
function toggleStage() {
    document.querySelector('fieldset:nth-of-type(4n)').classList.add('is-visible');
    document.querySelector('fieldset:nth-of-type(3n)').classList.remove('is-visible');
}

//de 2de fieldset vervorgens pakt hij de eerste of tweede label en daarvan de input.
document.querySelector('fieldset:nth-of-type(2n) label:nth-of-type(1) input').addEventListener("click", toggleProject);
document.querySelector('fieldset:nth-of-type(2n) label:nth-of-type(2) input').addEventListener("click", toggleStage);
