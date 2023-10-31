// An efficient way to keep code formatting when asked for the code block
const myText = `import React, { useState, useEffect, memo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTime } from "@/redux/userSlice";
const domain = [0, 24];
// const defaultValues = [0, 7, 15, 17, 20, 21,23];

const getHandleStyle = (left) => ({
  position: "absolute",
  left: '{left}%',
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 16,
  height: 16,
  borderRadius: "50%",
  backgroundColor: "#333",
  zIndex: 2,
  cursor: "pointer",
});

const getTrackStyle = (left, width, color) => ({
  position: "absolute",
  left: '{left}%',
  top: "50%",
  width: '{width}%',
  height: 8,
  marginTop: -4,
  backgroundColor: color,
  borderRadius: 4,
  zIndex: 1,
});

const getTextStyle = (left, top, color) => ({
  position: "absolute",
  left: '{left}%',
  top: '{top}px',
  transform: "translate(-50%, -50%)",
  color,
  fontSize: "12px",
  zIndex: 3,
});

const defaultSections = [
  { question: "Sleep", color: "#5A9", answer: 7 },
  { question: "Work", color: "#A55", answer: 8 },
  { question: "Chores", color: "#1a535c", answer: 2 },
  { question: "Family-friends", color: "#F94", answer: 3 },
  { question: "Hobbies", color: "#59A", answer: 1 },
  { question: "Self-improvement", color: "#95A", answer: 2 },
  { question: "Relaxation", color: "#59F", answer: 1 },
];

function CustomSlider({ submitSlider, saveSlider }) {
  const time = useSelector((state) => state.user.time);
  const answers = useSelector((state) => state.user.answers);
  const jobs = useSelector((state) => state.jobs.jobs);
  const userId = useSelector((state) => state.user.userId);
  const isFirstRender = useRef(true);
  const isLoggedIn = Boolean(userId);
  const dispatch = useDispatch();
  const [sections, setSections] = useState(defaultSections);

  // transforms section array to values array
  const getValuesFromSection = (sections) => {
    return sections.reduce(
      (acc, section) => {
        acc.push(acc[acc.length - 1] + parseFloat(section.answer));
        return acc;
      },
      [0]
    );
  };
  const [values, setValues] = useState(getValuesFromSection(sections));
  useEffect(() => {
    // Checks if the answers are in localStorage
    const cachedAnswers = JSON.parse(localStorage.getItem("time"));
    if (cachedAnswers && isLoggedIn && Object.keys(cachedAnswers).length > 0) {
      setSections(cachedAnswers);
      isFirstRender.current = false;
    }
  }, []);

  useEffect(() => {
    setValues(getValuesFromSection(sections));
    dispatch(setTime(sections));
  }, [sections]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch('/api/getTime?userId={userId}', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.time.length) {
          // Sort the fetched data according to the defaultSections order
          const sortedData = defaultSections.map((defaultSection) =>
            data.time.find(
              (fetchedSection) =>
                fetchedSection.question === defaultSection.question
            )
          );
          localStorage.setItem("time", JSON.stringify(sortedData));
          // console.log("Fetched data: ", sortedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (isLoggedIn) {
      const savedTime = localStorage.getItem("time");
      if (savedTime) {
        setSections(JSON.parse(savedTime));
      } else {
        fetchAnswers();
      }
    }
  }, [userId, isLoggedIn]);

  // transforms the value array back to a sector array
  const getSectionsFromValues = (values) => {
    return sections.map((section, index) => {
      const answer =
        index === sections.length - 1
          ? domain[1] - values[index]
          : values[index + 1] - values[index];
      return { ...section, answer };
    });
  };

  function handleSave() {
    const submitTime = async (questionsAndAnswers, userId) => {
      try {
        const response = await fetch("/api/submitTime", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ questionsAndAnswers, userId }),
        });
        const data = await response.json();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const questionsAndAnswers = getSectionsFromValues(values);
    submitTime(questionsAndAnswers, userId);
    localStorage.setItem("time", JSON.stringify(questionsAndAnswers));
    dispatch(setTime(questionsAndAnswers));
  }

  function handleSubmit() {
    const questionsAndAnswers = getSectionsFromValues(values);
    localStorage.setItem("time", JSON.stringify(questionsAndAnswers));
    dispatch(setTime(questionsAndAnswers));
  }

  useEffect(() => {
    if (submitSlider) {
      handleSubmit();
    }
    if (saveSlider) {
      handleSave();
    }
  }, [submitSlider, saveSlider]);

  const widthOfSection = (start, end) => ((end - start) / domain[1]) * 100;

  const updateValue = (index, newValue) => {
    const newValues = [...values];
    if (index === 0) {
      newValue = Math.max(
        domain[0],
        Math.min(newValue, newValues[index + 1] - 0.1)
      );
    } else if (index === values.length - 1) {
      newValue = Math.max(
        newValues[index - 1] + 0.1,
        Math.min(newValue, domain[1])
      );
    } else {
      newValue = Math.max(
        newValues[index - 1] + 0.1,
        Math.min(newValue, newValues[index + 1] - 0.1)
      );
    }
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleMouseDown = (index) => (event) => {
    const slider = event.currentTarget.parentElement;

    const updatePosition = (clientX) => {
      const sliderRect = slider.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      let newValue =
        domain[0] + ((clientX - sliderRect.left) / sliderWidth) * domain[1];
      newValue = Math.max(domain[0], Math.min(newValue, domain[1]));
      if (
        (index === 0 && newValue <= values[index + 1] - 0.1) ||
        (index === values.length - 1 && newValue >= values[index - 1] + 0.1) ||
        (index > 0 &&
          index < values.length - 1 &&
          newValue >= values[index - 1] + 0.1 &&
          newValue <= values[index + 1] - 0.1)
      ) {
        updateValue(index, newValue);
      }
    };

    const onMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      updatePosition(moveEvent.clientX);
    };

    const onTouchMove = (touchEvent) => {
      touchEvent.preventDefault();
      updatePosition(touchEvent.touches[0].clientX);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onTouchEnd = () => {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: false });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className="slider-container"
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
          height: 20,
          width: "90%",
        }}
      >
        {values.map((value, index) => {
          if (index === 0 || index === values.length - 1) return null;
          const left = (value / domain[1]) * 100;
          return (
            <div
              key={'handle-{index}'}
              className="handle"
              style={getHandleStyle(left)}
              onMouseDown={handleMouseDown(index)}
              onTouchStart={handleMouseDown(index)}
            ></div>
          );
        })}

        {sections.map((section, index) => {
          const startValue = values[index];
          const endValue =
            index === sections.length - 1 ? domain[1] : values[index + 1];
          const left = (startValue / domain[1]) * 100;
          const width = widthOfSection(startValue, endValue);
          const middle = left + width / 2;

          return (
            <React.Fragment key={'section-{index}'}>
              <div
                className="track"
                style={getTrackStyle(left, width, section.color)}
              ></div>
              <div style={getTextStyle(middle, -8, "black")}>{'{(
                endValue - startValue
              ).toFixed(1)} hrs'}</div>
              <div
                className="legend-mobile"
                style={getTextStyle(middle, 30, section.color)}
              >
                {section.question}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="legend-container">
        {sections.map((section, index) => {
          return (
            <div key={'legend-{index}'} className="legend-item">
              <div
                className="legend-color"
                style={{
                  backgroundColor: section.color,
                }}
              ></div>
              <div className="legend-text" style={{ color: section.color }}>
                {section.question}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomSlider;

`;

export default myText;
