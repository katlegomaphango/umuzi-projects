const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const { JamBuddy } = require("../src/jam_buddy");

describe("Semitone UI", function() {
    let testNotes, htmlFile, dom, elements

    beforeAll(() => {
        testNotes = ["C#", "Ab"]

        htmlFile = fs.readFileSync(
            path.resolve(__dirname, '../index.html'),
            'utf8'
        )

        dom = new JSDOM(htmlFile, { runScripts: 'dangerously' })

        global.window = dom.window
        global.document = dom.window.document
        
        require("../src/dom_manipulation")

        elements = {
            title: document.querySelector('.header'),
            notesLabel: document.querySelector('.notes-div p'),
            note1: document.querySelector('.note1'),
            note2: document.querySelector('.note2'),
            randomizeBtn: document.querySelector('.randomizeBtn'),
            label: document.querySelector('label'),
            answerInput: document.querySelector('.answer-input'),
            form: document.querySelector('form'),
            message: document.querySelector('.message'),
            submitBtn: document.querySelector('.checkAnswerBtn'),
            streakCount: document.querySelector('.streak-num'),
            restartBtn: document.querySelector('.restartBtn'),
            giveUpBtn: document.querySelector('.giveupBtn'),
            giveupDiv: document.querySelector('.give-up')
        }

        buddy = new JamBuddy()
    })

    beforeEach(() => {
        elements.randomizeBtn.click()
        elements.restartBtn.click()
    })

    it('should display the title of the game', () => {
        expect(elements.title.textContent.trim()).toEqual("🎹Semitone Calculator🎹")
    })

    it('should display the message div', () => {
        expect(elements.message).toBeTruthy()
        expect(elements.message.textContent.trim()).toEqual("")
    })

    it('should display the current notes label', () => {
        expect(elements.notesLabel.textContent.trim()).toEqual("Current Notes:")
    })

    it("should display random notes", () => {
        document.dispatchEvent(new dom.window.Event("DOMContentLoaded"))
        expect(elements.note1.textContent).toBeTruthy()
        expect(elements.note2.textContent).toBeTruthy()
    })

    it('should display the randomize button', () => {
        expect(elements.randomizeBtn).toBeTruthy()
        expect(elements.randomizeBtn.textContent.trim()).toEqual("Randomize Notes")
    })

    it('should display the answer input label', () => {
        expect(elements.label).toBeTruthy()
        expect(elements.label.textContent).toEqual("Enter Answer:")
    })

    it('should display the answer input', () => {
        expect(elements.answerInput).toBeTruthy()
        expect(elements.answerInput.placeholder).toEqual("0")
    })

    it('should display the check answer button', () => {
        expect(elements.submitBtn).toBeTruthy()
        expect(elements.submitBtn.textContent.trim()).toEqual("Check Answer")
    })

    it('randomize button should update the displayed notes when clicked', () => {
        const initialNote1 = elements.note1.textContent
        const initialNote2 = elements.note2.textContent

        elements.randomizeBtn.click()
        
        const currentNote1 = elements.note1.textConten1
        const currentNote2 = elements.note2.textContent
        expect([initialNote1,initialNote2]).not.toBe([currentNote1,currentNote2])
    })

    it("Should display 'Please provide an answer.' if check answer button is clicked with an empty input", () => {
        elements.answerInput.value = ""
        elements.submitBtn.click()
        expect(elements.message.innerHTML).toBe('Please provide an answer between 1 and 11')
    })

    it("Should display 'Success, correct answer.' if check answer button is clicked with a correct input", () => {
        [
            elements.note1.textContent,
            elements.note2.textContent
        ] = testNotes

        elements.answerInput.value = 7
        elements.submitBtn.click()
        expect(elements.message.innerHTML).toBe('Success: correct answer.')
    })

    it("Should display 'Wrong answer. Please try again.' if check answer button is clicked with a correct input", () => {
        [
            elements.note1.textContent,
            elements.note2.textContent
        ] = testNotes

        elements.answerInput.value = 6
        elements.submitBtn.click()
        expect(elements.message.innerHTML).toBe('Wrong answer. Please try again.')
    })

    it("should increase the streak count when the correct answer is submitted", () => {
        [
            elements.note1.textContent,
            elements.note2.textContent
        ] = testNotes

        elements.answerInput.value = 7
        elements.submitBtn.click()
        expect(elements.streakCount.textContent).toBe('1')
    });

    it("should reset the game when restart button is pressed", () => {
        [
            elements.note1.textContent,
            elements.note2.textContent
        ] = testNotes

        elements.answerInput.value = 7
        elements.submitBtn.click()
        elements.restartBtn.click();
        expect(elements.message.textContent).toBe("")
        expect(elements.answerInput.value).toBe("")
        expect(elements.streakCount.textContent).toBe('0')
        expect(elements.giveupDiv.textContent).toBe("");
    });

    it("should display the correct note information when the 'Give Up' button is clicked", () => {
        [
            elements.note1.textContent,
            elements.note2.textContent
        ] = testNotes

        elements.answerInput.value = 7
        elements.submitBtn.click()
        elements.giveUpBtn.click();

        expect(elements.giveupDiv.textContent.replace(/\s+/g, '').trim()).toBe(
            `All notes: AA#,BbBCC#,DbDD#,EbEFF#,GbGG#,Ab
            The semitones between ${testNotes[0]} and ${testNotes[1]}
            are 5 Descending
            and 7 Ascending
        
            The following notes are enharmonic notes
                [A#, Bb]
                [C#, Db]
                [D#, Eb]
                [F#, Gb]
                [G#, Ab]`.replace(/\s+/g, '').trim()
        );
    });
})