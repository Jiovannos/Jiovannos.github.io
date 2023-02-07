// An efficient way to keep code formatting when asked for the code block
const myText = `import css from "./styles.module.css";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SongExtras from "./SongExtras";
import { useSelector, useDispatch } from "react-redux";
import { setStructure, setChordedLyrics } from "../../redux/songContentSlice";

export default function Song() {
  const dispatch = useDispatch();
  const songSlice = useSelector((state) => state.song);
  const songContent = useSelector((state) => state.songContent);
  const structure = songContent.structure;
  const chordedLyrics = songContent.chordedLyrics;
  const edit = songSlice.edit;
  const fontSize = songSlice.fontSize;

  // A Function to Split the Chords and Spaces from the Lyrics
  function splitText(text) {
    let splitText = text.split("");
    let result = [];
    let spaces = 0;
    let chord = "";
    for (let i = 0; i < splitText.length; i++) {
      let char = splitText[i];
      if (char === " ") {
        if (chord !== "") {
          result.push(chord);
          chord = "";
        }
        spaces++;
      } else if (spaces !== 0) {
        result.push(spaces);
        chord += char;
        spaces = 0;
      } else if (spaces === 0) {
        chord += char;
      }
    }
    if (chord !== "") result.push(chord);
    return result;
  }

  // A Function to Deconstruct the Chorded Lyrics into an Array of Objects
  // Each Object has a Chords Array, a Text String, and a Linetype String
  // And it represents the Chords, Lyrics, and Blank Lines of the Song
  function destructure() {
    let lines = chordedLyrics.split("\n");
    let newStructure = [];
    for (let line of lines) {
      let chords = [];
      let linetype = "blank";
      let text = "";
      let isChordLine = /^[a-zA-Z#b 791]+$/.test(line);
      let isBlankLine = /^\s*$/.test(line);
      if (isBlankLine) {
      } else if (isChordLine) {
        chords = splitText(line);
        linetype = "chord";
      } else {
        linetype = "text";
        text = line;
      }
      newStructure.push({ chords, text, linetype });
    }
    dispatch(setStructure(newStructure));
    return newStructure;
  }

  // A Function to reconstruct the Chorded Lyrics into a different format  of
  // divs and spans isntead of plain text for visualization purposes
  function View() {
    let view = [];
    for (let item of structure) {
      if (item.linetype === "blank") {
        view.push(<div className={css.line} key={uuidv4()}></div>);
      } else if (item.linetype === "chord") {
        let chordView = [];
        for (let i = 0; i < item.chords.length; i++) {
          if (!isNaN(item.chords[i])) {
            chordView.push(
              <div className={css.blank} key={uuidv4()}>
                {"-".repeat(item.chords[i])}
              </div>
            );
          } else {
            chordView.push(
              <div className={css.chord} key={uuidv4()}>
                {item.chords[i]}
              </div>
            );
          }
        }
        view.push(
          <div className={css.line} key={uuidv4()}>
            {chordView}
          </div>
        );
      } else if (item.linetype === "text") {
        view.push(
          <div className={css.line} key={uuidv4()}>
            <div className={css.textLine}>{item.text}</div>
          </div>
        );
      }
    }

    return (
      <div
        style={{
          fontSize: fontSize + "rem",
          display: edit ? "none" : "unset",
        }}
      >
        {view}
      </div>
    );
  }
  // useEffect to load lyrics only when the lysrics or the edit mode changes
  useEffect(() => {
    destructure();
  }, [edit, chordedLyrics]);

  return (
    <div className={css.container}>
      <div className={css.textBox}>
        <SongExtras edit={edit} />
        <div className={css.textRenderArea}>
          <textarea
            style={{
              display: edit ? "flex" : "none",
              boxShadow: "inset 0 0 4px 1px #000",
            }}
            className={css.textArea}
            onChange={(event) => {
              let text = event.target.value;
              dispatch(setChordedLyrics(text));
            }}
            value={chordedLyrics}
          ></textarea>
          <View />
        </div>
      </div>
    </div>
  );
}

`;

export default myText;
