export type NoteType = "natural" | "flat" | "sharp";
export type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G";
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type MidiValue = number;
export type PitchIndex = number;

export type Note = {
  midi: MidiValue;
  type: NoteType;
  pitch: NotePitch;
  index: PitchIndex;
  octave: OctaveIndex;
};

const C1_MIDI_NUMBER = 24;
const C4_MIDI_NUMBER = 60;
const B5_MIDI_NUMBER = 83;

export const LOWER_NOTE = C4_MIDI_NUMBER;
export const HIGHER_NOTE = B5_MIDI_NUMBER;
export const SEMITONES_IN_OCTAVE = 12;
