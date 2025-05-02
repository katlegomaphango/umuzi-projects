const { JamBuddy, errorMessages } = require("../src/jam_buddy");

describe("JamBuddy", () => {
  let buddy;
  beforeEach(() => {
    buddy = new JamBuddy();
  });

  describe("setCurrentNotes method", () => {
    it("should set the current notes if valid", function () {
      buddy.setCurrentNotes(["C", "D#"]);
      expect(buddy.getCurrentNotes()).toEqual(["C", "D#"]);
    });

    it("should throw an error if an array is not passed", () => {
      expect(() => buddy.setCurrentNotes("C", 4)).toThrowError(
        errorMessages.notArray
      );
    });

    it("should throw an error if notes array does not have exactly 2 notes", () => {
      expect(() => buddy.setCurrentNotes(["C"])).toThrowError(
        errorMessages.arrayLength
      );
      expect(() => buddy.setCurrentNotes(["C", "D", "E"])).toThrowError(
        errorMessages.arrayLength
      );
    });

    it("should throw an error if any of the notes are not strings", () => {
      expect(() => buddy.setCurrentNotes(["C", 4])).toThrowError(
        errorMessages.stringNote
      );
    });

    it("should throw an error if any of the notes are invalid", () => {
      const note = "H";
      expect(() => buddy.setCurrentNotes(["C", note])).toThrowError(
        errorMessages.invalidNote(note)
      );
    });

    it("should throw an error when setting duplicate notes", () => {
      expect(() => buddy.setCurrentNotes(["G#", "G#"])).toThrowError(
        errorMessages.duplicateNotes
      );
    });
  });

  describe("getCurrentNotes method", () => {
    it("should return the exact notes that were set", () => {
      buddy.setCurrentNotes(["A#", "Bb"]);
      expect(buddy.getCurrentNotes()).toEqual(["A#", "Bb"]);
    });

    it("should throw an error if current notes are not set", () => {
      expect(() => buddy.getCurrentNotes()).toThrowError(
        errorMessages.notesNotSet
      );
    });
  });

  describe("randomizeCurrentNotes method", () => {
    it("should set current notes to two different notes", () => {
      buddy.randomizeCurrentNotes();
      const currentNotes = buddy.getCurrentNotes();
      expect(currentNotes.length).toBe(2);
      expect(currentNotes[0]).not.toBe(currentNotes[1]);
    });
  });

  describe("checkAnswer method", () => {
    it("should return true for the correct number of semitones anti-clockwise and clockwise", () => {
      buddy.setCurrentNotes(["C", "E"]);
      expect(buddy.checkAnswer(4)).toBe(true);
      expect(buddy.checkAnswer(8)).toBe(true);
    });

    it("should return true for correct semitone count between B and Db", () => {
      buddy.setCurrentNotes(["B", "Db"]);
      expect(buddy.checkAnswer(2)).toBe(true);
      expect(buddy.checkAnswer(10)).toBe(true);
    });

    it("should return true for correct semitone count between C# and Ab", () => {
      buddy.setCurrentNotes(["C#", "Ab"]);
      expect(buddy.checkAnswer(7)).toBe(true);
      expect(buddy.checkAnswer(5)).toBe(true);
    });

    it("should return false for an incorrect number of semitones anti-clockwise and clockwise", () => {
      buddy.setCurrentNotes(["C", "E"]);
      expect(buddy.checkAnswer(5)).toBe(false);
      expect(buddy.checkAnswer(3)).toBe(false);
    });

    it("should throw an error when current notes are not set.", () => {
      expect(() => buddy.checkAnswer(2)).toThrowError(
        errorMessages.notesNotSet
      );
    });

    it("should throw an error when number of semitones is not a number.", () => {
      buddy.setCurrentNotes(["C", "E"]);
      expect(() => buddy.checkAnswer({})).toThrowError(
        errorMessages.semitoneNAN
      );
    });
  });
});
