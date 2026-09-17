const form = document.getElementById('student-form');
const nameInput = document.getElementById('studentName');
const programInput = document.getElementById('program');
const list = document.getElementById('student-list');
const emptyMsg = document.getElementById('empty-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value;
    const program = programInput.value;

    if (name === '' || program === '') {
        alert('Fill in all fields');
        return;
    }

    emptyMsg.style.display = 'none';

    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = '<h3>' + name + '</h3><p>' + program + '</p><button>Remove</button>';

    list.appendChild(card);

    form.reset();

    card.querySelector('button').addEventListener('click', function() {
        card.remove();
        if (list.querySelectorAll('.student-card').length === 0) {
            emptyMsg.style.display = 'block';
        }
    });
});