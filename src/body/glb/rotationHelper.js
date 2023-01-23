const p = Math.PI;
const t = 0.23 * p;
const k = p / 2 - t;
const rotationHelper = {
  2: {
    0: { x: 0, y: 0, z: 0 },
    1: { x: 0, y: 0, z: 0 },
    2: { x: p, y: 0, z: 0 },
  },
  4: {
    0: { x: 0, y: 0, z: 0 },
    1: { x: -3.14 / 3, y: 0, z: 3.14 / 2 },
    2: { x: 0, y: 3.14, z: -3.14 / 6 },
    3: { x: 3.14, y: 0, z: -3.14 / 2 },
    4: { x: 3.14, y: 0, z: 3.14 / 6 },
  },
  8: {
    0: { x: 0, y: 0, z: 0 },
    1: { x: -p / 3, y: 0, z: -p / 4 },
    2: { x: (p * 2) / 3, y: 0, z: -(p * 3) / 4 },
    3: { x: -p / 3, y: 0, z: p / 4 },
    4: { x: (p * 2) / 3, y: 0, z: (p * 3) / 4 },
    5: { x: -p / 3, y: 0, z: (p * 3) / 4 },
    6: { x: (-p * 4) / 3, y: 0, z: p / 4 },
    7: { x: -p / 3, y: 0, z: -(p * 3) / 4 },
    8: { x: (-p * 4) / 3, y: 0, z: -p / 4 },
  },
  10: {
    0: { x: 0, y: 0, z: 0 },
    1: { x: -p / 2 + p / 5, y: 0, z: (-p * 3) / 10 },
    2: { x: p / 2 + p / 5, y: 0, z: p / 10 },
    3: { x: -p / 2 + p / 5, y: 0, z: (-p * 7) / 10 },
    4: { x: p / 2 + p / 5, y: 0, z: p / 2 },
    5: { x: -p / 2 + p / 5, y: 0, z: (p * 9) / 10 },
    6: { x: p / 2 + p / 5, y: 0, z: (p * 9) / 10 },
    7: { x: -p / 2 + p / 5, y: 0, z: p / 2 },
    8: { x: p / 2 + p / 5, y: 0, z: (-p * 7) / 10 },
    9: { x: -p / 2 + p / 5, y: 0, z: p / 10 },
    10: { x: p / 2 + p / 5, y: 0, z: (-p * 3) / 10 },
  },
  12: {
    0: { x: -(p * 3) / 10, y: -(p * 4) / 5, z: -(p * 2) / 5 },
    1: { x: p / 5, y: 0, z: p }, //swsto
    2: { x: (-p * 3) / 10, y: -p / 5, z: (p * 3) / 5 }, //swsto...
    3: { x: -p / 5, y: 0, z: p }, //swsto
    4: { x: (p * 7) / 10, y: (p * 4) / 5, z: (p * 2) / 5 }, //swsto...
    5: { x: -p / 2, y: p / 10, z: -p / 5 }, //swsto
    6: { x: -p / 2, y: -p / 10, z: p / 5 }, //swsto
    7: { x: p / 2, y: -p / 10, z: p / 5 }, //swsto
    8: { x: p / 2, y: p / 10, z: -p / 5 }, //swsto
    9: { x: -(p * 3) / 10, y: (p * 4) / 5, z: (p * 2) / 5 }, //swsto...
    10: { x: -p / 5, y: p, z: 0 }, //swsto
    11: { x: -(p * 3) / 10, y: -(p * 4) / 5, z: -(p * 2) / 5 },
    12: { x: p / 5, y: p, z: 0 }, //swsto
  },
  20: {
    0: { x: p, y: t, z: t / 3 },
    1: { x: t, y: p / 2, z: p / 2 },
    2: { x: 0, y: 0, z: 0 },
    3: { x: 0, y: 0, z: 0 },
    4: { x: 0, y: 0, z: 0 },
    5: { x: 0, y: 0, z: 0 },
    6: { x: 0, y: 0, z: 0 },
    7: { x: 0, y: 0, z: 0 },
    8: { x: 0, y: 0, z: 0 },
    9: { x: 0, y: 0, z: 0 },
    10: { x: 0, y: 0, z: 0 },
    11: { x: 0, y: 0, z: 0 },
    12: { x: 0, y: 0, z: 0 },
    13: { x: 0, y: 0, z: 0 },
    14: { x: 0, y: 0, z: 0 },
    15: { x: 0, y: 0, z: 0 },
    16: { x: 0, y: 0, z: 0 },
    17: { x: 0, y: t / 3, z: 0 }, //swsto
    18: { x: 0, y: 0, z: 0 },
    19: { x: 0, y: 0, z: 0 },
    20: { x: 0, y: 0, z: 0 },
  },
};
export default rotationHelper;
