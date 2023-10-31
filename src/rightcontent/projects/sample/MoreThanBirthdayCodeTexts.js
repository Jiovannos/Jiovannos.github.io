// An efficient way to keep code formatting when asked for the code block
const myText = `

const countingArray = [
  ...Array.from({ length: 100 }, (_, i) => i + 1),
  ...Array.from({ length: 10 }, (_, i) => (i + 1) * 100),
  ...Array.from({ length: 99 }, (_, i) => (i + 1) * 1000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 10000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 100000),
  ...Array.from({ length: 99 }, (_, i) => (i + 1) * 1000000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 10000000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 100000000),
  ...Array.from({ length: 99 }, (_, i) => (i + 1) * 1000000000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 10000000000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 100000000000),
  ...Array.from({ length: 99 }, (_, i) => (i + 1) * 1000000000000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 10000000000000),
  //   ...Array.from({ length: 10 }, (_, i) => (i + 1) * 100000000000000),
  ...Array.from({ length: 99 }, (_, i) => (i + 1) * 1000000000000000),
];

const getRoundedAge = (value) => {
  if (value < 10) {
    return Math.floor(value);
  }
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  return Math.ceil(value / magnitude) * magnitude;
};

function formatNumber(number) {
  if (number < 100) return number.toString();
  if (number < 1000) return (number / 100).toString() + " hundrend";
  if (number < 1e6) return (number / 1e3).toFixed() + " thousand";
  if (number < 1e9) return (number / 1e6).toFixed() + " million";
  if (number < 1e12) return (number / 1e9).toFixed() + " billion";
  if (number < 1e15) return (number / 1e12).toFixed() + " trillion";
  return number.toString();
}

const isMilestoneValue = (value) => {
  if (value <= 100) return true;
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const normalizedValue = value / magnitude;
  return (
    normalizedValue <= 100 && Math.floor(normalizedValue) === normalizedValue
  );
};

const timePassage = (dateAndTimeOfBirth, categories, maxAge) => {
  const birthDate = new Date(dateAndTimeOfBirth);
  const milestones = [];

  // For the absolute category
  if (categories.includes("absolute")) {
    let yearCount = 1;
    let monthCount = 1;

    // Increment by year
    while (yearCount <= maxAge) {
      const yearDate = new Date(birthDate);
      yearDate.setFullYear(birthDate.getFullYear() + yearCount);
      milestones.push({
        date: yearDate,
        message: [yearDate.toLocaleString(), formatNumber(yearCount), "Years"],
        explanation: "365 days make an absolute year, ignoring leap years.",
        type: "absolute",
      });
      yearCount++;
    }

    // Increment by month
    while (monthCount <= 12 * maxAge) {
      const monthDate = new Date(
        birthDate.getFullYear(),
        birthDate.getMonth() + monthCount,
        birthDate.getDate(),
        birthDate.getHours(),
        birthDate.getMinutes(),
        birthDate.getSeconds()
      );
      if (isMilestoneValue(monthCount)) {
        milestones.push({
          date: monthDate,
          message: [
            monthDate.toLocaleString(),
            formatNumber(monthCount),
            "Months",
          ],
          explanation: "Each month represents the passing of 30 days.",
          type: "absolute",
        });
      }
      monthCount++;
    }
  }

  // Original logic for non-absolute categories
  const birthDateSeconds = birthDate.getTime() / 1000;
  const currentSeconds = new Date().getTime() / 1000;
  const maxAgeSeconds = birthDateSeconds + maxAge * 365.25 * 24 * 3600;

  categories.forEach((category) => {
    Object.values(timeMeasurements[category]).forEach((measurement) => {
      const { seconds, title, explanation } = measurement;

      countingArray.forEach((count) => {
        const time = birthDateSeconds + count * seconds;
        if (time <= maxAgeSeconds && time >= currentSeconds) {
          milestones.push({
            date: new Date(time * 1000),
            message: [
              new Date(time * 1000).toLocaleString(),
              formatNumber(count),
              title,
            ],
            explanation: explanation,
            type: category,
          });
        }
      });
    });
  });

  return milestones
    .filter((m) => m.date > new Date())
    .sort((a, b) => a.date - b.date);
};
const timeMeasurements = {
  absolute: {
    seconds: {
      seconds: 1,
      title: "seconds",
      explanation: "The smallest unit of time.",
    },
    minutes: {
      seconds: 60,
      title: "minutes",
      explanation: "Sixty seconds make a minute.",
    },
    hours: {
      seconds: 3600,
      title: "hours",
      explanation: "Sixty minutes make an hour.",
    },
    days: {
      seconds: 86400,
      title: "days",
      explanation: "Twenty-four hours make a day.",
    },
    weeks: {
      seconds: 604800,
      title: "weeks",
      explanation: "Seven days make a week.",
    },
  },
  orbits: {
    earth_year: {
      seconds: 31556952,
      title: "Earth's years",
      explanation: "The Earth actually rotates around the sun in 365.24 days.",
    },
    moon_year: {
      seconds: 2360591.6,
      title: "Moon's years",
      explanation:
        "The Moon rotates around the Earth in approximately 27.3 days.",
    },
    mercury_year: {
      seconds: 7600520,
      title: "Mercury's years",
      explanation:
        "Mercury completes its orbit around the Sun in approximately 88 Earth days.",
    },
    venus_year: {
      seconds: 19414149,
      title: "Venus' years",
      explanation:
        "Venus completes its orbit around the Sun in approximately 225 Earth days.",
    },
    mars_year: {
      seconds: 59354294,
      title: "Mars' years",
      explanation:
        "Mars completes its orbit around the Sun in approximately 687 Earth days.",
    },
    jupiter_year: {
      seconds: 374335776,
      title: "Jupiter's years",
      explanation:
        "Jupiter completes its orbit around the Sun in approximately 12 Earth years.",
    },
    saturn_year: {
      seconds: 929596608,
      title: "Saturn's years",
      explanation:
        "Saturn completes its orbit around the Sun in approximately 29.5 Earth years.",
    },
    uranus_year: {
      seconds: 2661041808,
      title: "Uranus' years",
      explanation:
        "Uranus completes its orbit around the Sun in approximately 84 Earth years.",
    },
    neptune_year: {
      seconds: 5200418592,
      title: "Neptune's years",
      explanation:
        "Neptune completes its orbit around the Sun in approximately 165 Earth years.",
    },
    pluto_year: {
      seconds: 7822276608,
      title: "Pluto's years",
      explanation:
        "Pluto completes its orbit around the Sun in approximately 248 Earth years.",
    },
    earth: {
      seconds: 86400,
      title: "Earth's days",
      explanation: "Earth rotates around its axis in approximately 24 hours.",
    },
    moon: {
      seconds: 708000,
      title: "Moon's days",
      explanation:
        "The Moon rotates around its axis in approximately 27.3 days.",
    },
    mercury: {
      seconds: 5068800,
      title: "Mercury's days",
      explanation:
        "Mercury rotates around its axis in approximately 58.6 Earth days.",
    },
    venus: {
      seconds: 20995200,
      title: "Venus' days",
      explanation:
        "Venus rotates around its axis in approximately 243 Earth days.",
    },
    mars: {
      seconds: 88642.66,
      title: "Mars' days",
      explanation: "Mars rotates around its axis in approximately 24.6 hours.",
    },
    jupiter: {
      seconds: 35760,
      title: "Jupiter's days",
      explanation:
        "Jupiter rotates around its axis in approximately 9.9 hours.",
    },
    saturn: {
      seconds: 38232,
      title: "Saturn's days",
      explanation:
        "Saturn rotates around its axis in approximately 10.6 hours.",
    },
    uranus: {
      seconds: 62040,
      title: "Uranus' days",
      explanation:
        "Uranus rotates around its axis in approximately 17.2 hours.",
    },
    neptune: {
      seconds: 60120,
      title: "Neptune's days",
      explanation:
        "Neptune rotates around its axis in approximately 16.1 hours.",
    },
    pluto: {
      seconds: 551832,
      title: "Pluto's days",
      explanation:
        "Pluto rotates around its axis in approximately 6.4 Earth days.",
    },
  },
  average: {
    heartbeats: {
      seconds: 1.2,
      title: "heartbeats",
      explanation: "The average heart beats 60-100 times a minute.",
    },
    breaths: {
      seconds: 0.3,
      title: "breaths",
      explanation:
        "On average, a person takes about 12 to 20 breaths per minute.",
    },

    words: {
      seconds: 0.0002,
      title: "words spoken",
      explanation: "An average person speaks about 125-150 words per minute.",
    },
    blinks: {
      seconds: 0.006,
      title: "eye blinks",
      explanation: "On average, a person blinks 15-20 times per minute.",
    },
    thoughts: {
      seconds: 10,
      title: "thoughts",
      explanation: "On average, a person has a thought every 10 seconds.",
    },

    yawns: {
      seconds: 7200,
      title: "yawns",
      explanation: "On average, a person might yawn once every 2 hours.",
    },
    hairGrowth: {
      seconds: 2505600,
      title: "meters of hair grown",
      explanation:
        "Hair grows approximately 0.33 milimeters per day, totaling about 0.0096 meters in 29 days.",
    },
    nailGrowth: {
      seconds: 2505600,
      title: "meters of nails grown",
      explanation:
        "Fingernails grow about 0.12 millimeters per day, totaling roughly 0.0035 meters in 29 days.",
    },
    salivaProduced: {
      seconds: 3600,
      title: "liters of saliva produced",
      explanation:
        "Humans produce about 0.5 to 1.5 liters of saliva daily, roughly 0.05 liters per hour.",
    },
    tearsProduced: {
      seconds: 43200000,
      title: "liters of tears produced",
      explanation:
        "On average, the human body produces between 5 to 10 milliliters of tears per day, approximately 0.25 milliliters per hour.",
    },
  },
};

export { timeMeasurements, timePassage };


`;

export default myText;
