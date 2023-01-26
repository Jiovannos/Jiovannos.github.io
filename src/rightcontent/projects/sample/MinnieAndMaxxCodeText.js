// An efficient way to keep code formatting when asked for the code block
const myText = `class Statistics {
  static createDieDistribution(sides: number, adv: number): ProbDistribution {
    // Creates all posible results of a die roll with their respective Probability
    // In the form {result: probability}
    // Example: I roll 1d6 with advantage
    let distribution: ProbDistribution = {};
        if (adv === 0) {
          for (let i = 1; i <= sides; i++) {
            distribution[i] = 1 / sides;
          }
        } else if (adv === 1) {
          for (let i = 1; i <= sides; i++) {
            distribution[i] = (2 * i - 1) / sides ** 2;
          }
        } else if (adv === -1) {
          for (let i = 1; i <= sides; i++) {
            distribution[i] = (2 * (sides - i) + 1) / sides ** 2;
          }
        }
    return distribution;
  }
  static combineBothDistributions(
    dist1: ProbDistribution,
    dist2: ProbDistribution
  ): ProbDistribution {
    // Combines the results of 2 independent distributions
    // with the probability of the sum of the results
    // In the form {totalResult: probability}
    // Example: I roll 1d6 AND 1d8
    let distribution: ProbDistribution = {};
      for (let si of Object.keys(dist1)) {
        for (let sj of Object.keys(dist2)) {
          let i = Number(si);
          let j = Number(sj);
          //   console.log(i + j, typeof (i + j));
          if (i + j in distribution) {
            distribution[i + j] += dist1[i] * dist2[j];
          } else {
            distribution[i + j] = dist1[i] * dist2[j];
          }
        }
      }
    return distribution;
  }
  static combineEitherDistribution(
    dist1: ProbDistribution,
    dist2: ProbDistribution
  ): ProbDistribution {
    // Combines 2 distributions. The result can come from either one of them
    // in the form {result : probability}
    // Example I roll 1d6 OR 1d8
    
    // Code Removed for simplicity...
    return distribution;
  }
  static combineMultipleDistributions(
    distList: ProbDistribution[]
  ): ProbDistribution {
    // Combines multiple distributions if they ALL HAPPEN
    // In the form {result: probability}
    // Example: I roll 1d6 AND 1d8 AND 1d10
    
    // Code Removed for simplicity...
    return distribution;
  }
  static addModifierToDistribution(
    dist: ProbDistribution,
    modifier: number,
    defences: TDefences
  ): ProbDistribution {
    // Adds a modifier to the results of a distribution
    // In the form {result: probability}
    // Example: I roll 1d6 and add 3
   
    // Code Removed for simplicity...
    return distribution;
  }
  static createDistributionFromRoll(roll: string) {
    
    // Code Removed for simplicity...
    return distribution;
  }
  static std(array: number[]): number {
    // Standard deviation
   
    // Code Removed for simplicity...
  }
  static multiplyDistributionRolls(
    dist: ProbDistribution,
    multiplier: number,
    round: string = "down"
  ): ProbDistribution {
    // Multiplies the results of a distribution by a number
    // In the form {result: probability}
    // Example: I roll 5d6 and do double damage (x2) or half damage(x0.5)
    
    // Code Removed for simplicity...
    return distribution;
  }
  static createDistributionFromRange(
    range: number[],
    type: string = "linear",
    shift: number = 50
  ): ProbDistribution {
    // Creates a distribution from a range of numbers
    // In the form {result: probability}
    // Example: I want the AC to be equally distrubuted between 10 and 20
    // Example: I want the AC to follow the normal bell curve between 10 and 20
    
    // Code Removed for simplicity...
    return distribution;
  }
  static cumulativeProbDistribution(
    dist: ProbDistribution,
    condition: string = ">="
  ): ProbDistribution {
    // Creates a cumulative probability distribution
    // In the form {(at least result): probability}
    // Example: Distribution of someones max AC
    
    // Code Removed for simplicity...
    return distribution;
  }
  static succesfulDistribution(
    dist_condition: ProbDistribution,
    cum_dist_check: ProbDistribution
  ) {
    // Creates a distribution of the probability of a condition being met
    // In the form {result: probability}
    // Example: Distribution of the probability of passing the AC check
    
    // Code Removed for simplicity...
    return distribution;
  }
  static sumOfDistribution(dist: ProbDistribution): number {
    // Sums the probabilities of a distribution
   
    // Code Removed for simplicity...
  }
  static multiplyProbabilityByNumber(
    dist: ProbDistribution,
    number: number
  ): ProbDistribution {
    // Multiplies the probabilities of a distribution by a number
    // In the form {result: probability}
   
    // Code Removed for simplicity...
    return distribution;
  }
  static kurtosisSkewness(dist: ProbDistribution): number[] {
   
    // Code Removed for simplicity...
    return [kurtosis, skewness];
  }
  static distributionVariables(distribution: ProbDistribution) {
   
    // Code Removed for simplicity...
    return variables;
  }
  static normalCDF(z: number) {
    // Cumulative distribution function for the standard normal distribution
    // https://en.wikipedia.org/wiki/Standard_normal_table
    
    // Code Removed for simplicity...
    return p;
  }
  static zTest(dist1: ProbDistribution, dist2: ProbDistribution): number {
    // Performs a z-test on two distributions
    // Returns true if the distributions are different
    // Returns false if the distributions are not different
    // The alpha value is the significance level
    // The default value is 0.05
    
    // Code Removed for simplicity...
    return z;
  }
  static normalDistributionLimits(
    distribution: ProbDistribution,
    alpha: number,
    beta: number,
    gamma: number
  ) {
    
    // Code Removed for simplicity...
    return firstLimits;
  }
  static fullDistribution(distribution: ProbDistribution) {
    // Adds the chance to miss as a key 0 to the distribution
    
    // Code Removed for simplicity...
    return dist;
  }
  static fixDistribution(distribution: ProbDistribution) {
    // fixes distributions that lost precision in the calculations
    
    // Code Removed for simplicity...
    return dist;
  }
  static chanceToKill(distribution: ProbDistribution, hp: number) {
    // Calculates the chance to kill a monster with a given hp using the same attack
    
    // Code Removed for simplicity...
    return chanceToK;
  }
}

export default Statistics;


`;

export default myText;
