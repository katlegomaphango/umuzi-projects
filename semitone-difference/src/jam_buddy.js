const errorMessages = {
    notArray: "Current Notes should be an Array of Notes",
    arrayLength: "Current Notes array should have 2 notes",
    stringNote: "Each note is supposed to be a string",
    invalidNote: (note) => `${note} is not a valid note.`,
    notesNotSet: "Current notes are not set yet.",
    semitoneNAN: "Number of semitones should be a number",
    duplicateNotes: "Notes should be unique",
  };
  
  function validateCurrentNotes(currentNotes) {
    if (!Array.isArray(currentNotes)) throw new Error(errorMessages.notArray);
    if (currentNotes.length !== 2) throw new Error(errorMessages.arrayLength);
    if (currentNotes[0] === currentNotes[1])
      throw new Error(errorMessages.duplicateNotes);
  
    const notes = [ "A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab",];
  
    for (const note of currentNotes) {
      if (typeof note !== "string") throw new Error(errorMessages.stringNote);
      if (!notes.includes(note)) throw new Error(errorMessages.invalidNote(note));
    }
  }
  
  function getRandomIndex(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
  
  function checkCurrentNotesSet(notes) {
    if (!notes) {
      throw new Error(errorMessages.notesNotSet);
    }
  }
  
  class JamBuddy {
    #notes = [ "A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"], ];
    #currentNotes;
  
    setCurrentNotes(currentNotes) {
      validateCurrentNotes(currentNotes);
      this.#currentNotes = currentNotes;
    }
  
    getCurrentNotes() {
      checkCurrentNotesSet(this.#currentNotes);
      return this.#currentNotes;
    }
  
    getAllNotes() {
      return this.#notes
    }
  
    #randomizeIndex(index) {
      return Array.isArray(this.#notes[index])
        ? this.#notes[index][
            Math.floor(Math.random() * this.#notes[index].length)
          ]
        : this.#notes[index];
    }
  
    randomizeCurrentNotes() {
      const minimum = 0,
        maximum = this.#notes.length - 1;
  
      let firstNoteIndex = getRandomIndex(minimum, maximum);
      let secondNoteIndex;
  
      do {
        secondNoteIndex = getRandomIndex(minimum, maximum);
      } while (firstNoteIndex === secondNoteIndex);
  
      this.setCurrentNotes([this.#randomizeIndex(firstNoteIndex), this.#randomizeIndex(secondNoteIndex)]);
    }
  
    #findIndexOfNote(note) {
      for (let i = 0; i < this.#notes.length; i++) {
        if (this.#notes[i].length !== 1) {
          if (this.#notes[i].includes(note)) {
            return i;
          }
        }
      }
    }
  
    calculateSemitones(note1, note2) {
      let indexOfNote1 = this.#notes.indexOf(note1);
      let indexOfNote2 = this.#notes.indexOf(note2);
  
      if (note1.length !== 1) indexOfNote1 = this.#findIndexOfNote(note1);
      if (note2.length !== 1) indexOfNote2 = this.#findIndexOfNote(note2);
  
      const semitones = indexOfNote1 - indexOfNote2;
      return semitones < 0 ? this.#notes.length + semitones : semitones;
    }
  
    checkAnswer(numOfSemitones) {
      if (typeof numOfSemitones !== "number")
        throw new Error(errorMessages.semitoneNAN);
      checkCurrentNotesSet(this.#currentNotes);
  
      const semitonesClockwise = this.calculateSemitones(
        this.#currentNotes[0],
        this.#currentNotes[1]
      );
      const semitonesCounterclockwise = this.#notes.length - semitonesClockwise
  
      if (
        semitonesClockwise === numOfSemitones ||
        semitonesCounterclockwise === numOfSemitones ||
        (
          semitonesClockwise === 0 && semitonesCounterclockwise === 0
        )
      )
        return true;
  
      return false;
    }
  }
  
  module.exports = { JamBuddy, errorMessages };
  