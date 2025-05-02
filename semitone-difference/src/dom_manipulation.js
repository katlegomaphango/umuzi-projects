const { JamBuddy } = require('./jam_buddy.js')

const note1 = document.querySelector('.note1')
const note2 = document.querySelector('.note2')
const randomizeBtn = document.querySelector('.randomizeBtn')
const answerInput = document.querySelector('.answer-input')
const checkAnswerBtn = document.querySelector('.checkAnswerBtn')
const message = document.querySelector('.message')
const restartBtn = document.querySelector('.restartBtn')
const giveupBtn = document.querySelector('.giveupBtn')
const giveupDiv = document.querySelector('.give-up')
const streakSpan = document.querySelector('.streak-num')

let buddy
let streak = 0

const updateStreak = () => {
    streakSpan.textContent = streak
}

const displayNotes = ({ note1, note2, buddy }) => {
    buddy.randomizeCurrentNotes()
    note1.innerHTML = buddy.getCurrentNotes()[0]
    note2.innerHTML = buddy.getCurrentNotes()[1]
}

document.addEventListener('DOMContentLoaded', () => {
    buddy = new JamBuddy()
    updateStreak()
    displayNotes({ note1, note2, buddy })

    const inputAnswer = document.querySelector('input')

    inputAnswer.addEventListener('input', (e) => {
        e.target.value
    })

    const reset = ({ note1, note2, buddy, answerInput, message, giveupDiv }) => {
        answerInput.value = ''
        message.innerHTML = ''
        giveupDiv.innerHTML = ''
        randomizeBtn.disabled = false
        checkAnswerBtn.disabled = false
        buddy.randomizeCurrentNotes()
        displayNotes({ note1, note2, buddy })
        streak = 0
        updateStreak()
    }

    randomizeBtn.onclick = () => {
        answerInput.value = ''
        message.innerHTML = ''
        giveupDiv.innerHTML = ''
        giveupBtn.disabled = false
        checkAnswerBtn.disabled = false
        buddy.randomizeCurrentNotes()
        displayNotes({ note1, note2, buddy })
    }

    inputAnswer.addEventListener('input', () => {
        const value = parseInt(answerInput.value, 10)
        if(value > 11 || value < 1) answerInput.value = '0'
    })

    inputAnswer.addEventListener('keydown', (event) => {
        if (event.key === 'e' || event.key === 'E') {
            event.preventDefault()
        }
    })

    checkAnswerBtn.onclick = () => {
        message.innerHTML = ''
        const answer = Number(answerInput.value)

        buddy.setCurrentNotes([note1.textContent, note2.textContent])
    
        if(answer === '' || answer === 0) {
            message.innerHTML = 'Please provide an answer between 1 and 11'
        } else {
            if(buddy.checkAnswer(parseInt(answer))) {
                streak++
                updateStreak()
                message.innerHTML = 'Success: correct answer.'
                message.style.color = 'rgb(180, 0, 218)'
                answerInput.value = ''
                displayExplanation()
                displayAllNotes()
                checkAnswerBtn.disabled = true
                giveupBtn.disabled = true
            } else {
                streak = 0
                updateStreak()
                message.innerHTML = 'Wrong answer. Please try again.'
                message.style.color = 'red'
                answerInput.value = ''
            }
        }
    }

    restartBtn.onclick = () => {
        reset({ note1, note2, buddy, answerInput, message, giveupDiv })
    }

    giveupBtn.onclick = () => {
        randomizeBtn.disabled = true
        checkAnswerBtn.disabled = true
        streak = 0
        updateStreak()
        displayAllNotes()
    }

    const displayAllNotes = () => {
        const notes = buddy.getAllNotes();
        const currentNotes = buddy.getCurrentNotes();
        const answer = buddy.calculateSemitones(currentNotes[0], currentNotes[1]);
    
        giveupDiv.innerHTML = `<p>All notes: </p><div class='displayAllNotes'></div>`;
    
        const note1Index = findNoteIndex(currentNotes[0]);
        const note2Index = findNoteIndex(currentNotes[1]);
    
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const noteSpan = document.createElement('span');
    
            if (Array.isArray(note)) {
                const [noteA, noteB] = note;
                const isNoteASelected = currentNotes.includes(noteA);
                const isNoteBSelected = currentNotes.includes(noteB);
    
                if (isNoteASelected || isNoteBSelected) {
                    noteSpan.innerHTML = `
                        <span style="border: 1px solid black;">
                            <span class='${isNoteASelected ? "noteSpanCurrent" : ""}' 
                                style='${isNoteASelected ? "color: rgb(180, 0, 218);" : "color: black;"}'>
                                ${noteA}
                            </span>,
                            <span class='${isNoteBSelected ? "noteSpanCurrent" : ""}' 
                                style='${isNoteBSelected ? "color: rgb(180, 0, 218);" : "color: black;"}'>
                                ${noteB}
                            </span>
                        </span>
                    `;
                } else {
                    const color = (note1Index < note2Index) 
                        ? (i > note1Index && i < note2Index ? 'rgb(0, 180, 0)' : 'rgb(218, 0, 0)')
                        : (i > note2Index && i < note1Index ? 'rgb(218, 0, 0)' : 'rgb(0, 180, 0)');
    
                    noteSpan.innerHTML = `
                        <span style="border: 1px solid black;">
                            <span style="color: ${color};">${noteA}</span>,<span style="color: ${color};">${noteB}</span>
                        </span>
                    `;
                }
            } else {
                noteSpan.innerHTML = note;
                if (currentNotes.includes(note)) {
                    noteSpan.className = 'noteSpanCurrent';
                    noteSpan.style.color = 'rgb(180, 0, 218)';
                } else {
                    const color = (note1Index < note2Index) 
                        ? (i > note1Index && i < note2Index ? 'rgb(0, 180, 0)' : 'rgb(218, 0, 0)')
                        : (i > note2Index && i < note1Index ? 'rgb(218, 0, 0)' : 'rgb(0, 180, 0)');
                    
                    noteSpan.style.color = color;
                }
            }
    
            giveupDiv.querySelector('div').appendChild(noteSpan);
        }
    
        const explanation = document.createElement('div');
        explanation.innerHTML = `
            <p>
                The semitones between <strong>${currentNotes[0]}</strong> and <strong>${currentNotes[1]}</strong>
                are 
                <span style="color: rgb(218, 0, 0)">${answer} ${determineDirection(note1Index, note2Index, answer)}</span>
                <span style="color: black"> and </span> 
                <span style="color: rgb(0, 180, 0)">${12 - answer} ${determineDirection(note2Index, note1Index, answer)}</span>
            </p>
            <p> The following notes are enharmonic notes <br>
                <span>[A#, Bb]</span>
                <span>[C#, Db]</span>
                <span>[D#, Eb]</span>
                <span>[F#, Gb]</span>
                <span>[G#, Ab]</span>
            </p>
        `;
        giveupDiv.appendChild(explanation);
    };
    

    const displayExplanation = () => {
        const currentNotes = buddy.getCurrentNotes()
        const answer = buddy.calculateSemitones(currentNotes[0], currentNotes[1])

        const note1Index = findNoteIndex(currentNotes[0])
        const note2Index = findNoteIndex(currentNotes[1])

        giveupDiv.innerHTML = `
            <p>
                The semitones between ${currentNotes[0]} and ${currentNotes[1]}
                are ${answer} ${determineDirection(note1Index, note2Index, answer)}
                and ${12 - answer} ${determineDirection(note2Index, note1Index, answer)}
            </p>
        `

    }

    function findNoteIndex(note) {
        return buddy.getAllNotes().findIndex(n => Array.isArray(n) ? n.includes(note) : n === note);
    }

    const determineDirection = (note1Index, note2Index, answer) => {
        let ascending = (note2Index - note1Index + 12) % 12;
        let descending = (note1Index - note2Index + 12) % 12;

        if (answer === ascending) return "Ascending";
        if (answer === descending) return "Descending";
    }
})