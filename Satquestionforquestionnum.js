const functions = require('@google-cloud/functions-framework');
const explanation = 'Data';
const answer = 'Ans';
const data = [
  {
    Question_Number: 1,
    Question: 'Which of the following expressions is equal to 0 for some value of x? Options: A) |x−1| −1, B) |x + 1| + 1, C) |1 − x| + 1, D) |x - 1| +1',
  },
  {
    Question_Number: 2,
    Question: 'If f(x) = -2x + 5, what is f(−3x) equal to? Options: A) −6x −5, B) 6x + 5, C) 6x − 5, D) 6x^2 - 15x',
  },
  {
    Question_Number: 3,
    Question: '3(2x + 1)(4x +1). Which of the following is equivalent to the expression above? Options: A) 45x, B) 24x^2 + 3, C) 24x^2 + 18x + 3, D) 18x^2 + 6',
  },
  {
    Question_Number: 4,
    Question: 'Ken and Paul each ordered a sandwich at a restaurant.The price of Ken’s sandwich was x dollars, and the price of Paul’s sandwich was $1 more than the price of Ken’s sandwich. If Ken and Paul split the cost of the sandwiches evenly and each paid a 20% tip, which of the following expressions represents the amount, in dollars, each of them paid? (Assume there is no sales tax.) Options: A) 0.2x + 0.2, B) 0.5x + 0.1, C) 1.2x + 0.6, D) 2.4x + 1.2',
  },
  {
    Question_Number: 5,
    Question: 'You can use a calculator for this question. The monthly membership fee for an online television and movie service is $9.80. The cost of viewing television shows online is included in the membership fee, but there is an additional fee of $1.50 to rent each movie online. For one month, Jill’s membership and movie rental fees were $12.80. How many movies did Jill rent online that month? Options: A) 1, B) 2, C) 3, D) 4',
  },
  {
    Question_Number: 6,
    Question: 'You can use a calculator for this question. The density of an object is equal to the mass of the object divided by the volume of the object. What is the volume, in milliliters, of an object with a mass of 24 grams and a density of 3 grams per milliliter? Options: A) 0.125, B) 8, C) 21, D) 72',
  },
  {
    Question_Number: 7,
    Question: 'You can use a calculator for this question. Last week Raul worked 11 more hours than Angelica. If they worked a combined total of 59 hours, how many hours did Angelica work last week? Options: A) 24, B) 35, C) 40, D) 48',
  },
  {
    Question_Number: 8,
    Question: 'You can use a calculator for this question. Jim has identical drinking glasses each in the shape of a right circular cylinder with an internal diameter of 3 inches. He pours milk from a gallon jug into each glass until it is full. If the height of milk in each glass is about 6 inches, what is the largest number of full milk glasses that he can pour from one gallon of milk? (Note: There are 231 cubic inches in 1 gallon.) Options: A) 2, B) 4, C) 5, D) 6',
  },
  {
    Question_Number: 9,
    Question: 'x^2 + 10 = 91. What is the positive solution to the given equation? Options: A) 9, B) 10, C) 41, D) 51',
  },
  {
    Question_Number: 10,
    Question: 'From 1990 to 2001, German currency included coins called “pfennigs,” worth 1 pfennig each, and “groschen,” worth 10 pfennigs each. Which equation represents the number of pfennig coins, “p,” and groschen coins, “g,” that have a combined value of 85 pfennigs. Options: A) p + g = 85, B) p + 10g = 85, C) 10p + g = 85, D) 10(p + g) = 85',
  },
  {
    Question_Number: 11,
    Question: 'Two beach balls are each in the shape of a sphere. The larger beach ball has a diameter of 3x, and the smaller beach ball has a diameter of x. What is the ratio of the volume of the larger beach ball to the volume of the smaller beach ball. Options: A) 3 to 1, B) 6 to 1, C) 9 to 1, D) 27 to 1',
  },
  {
    Question_Number: 12,
    Question: 'The function A(t) = 12(2)^(t/6) models the number of water hyacinths in a population over time, where A(t) is the number of water hyacinths and t is the time, in days, since the population was first measured. Which is the best interpretation of (2)^(t/6) in this context? Options: A) The number of water hyacinths doubled t times, B) The number of water hyacinths doubled every 6 days, C) The number of water hyacinths increased by 2 every t/6 days, D) The number of water hyacinths increased by 2 every t days.',
  },
  {
    Question_Number: 13,
    Question: 'You can use a calculator for this question. In 2015, the city of Miami had a population of 441,000 people and an area of 36 square miles. What was the population density of Miami, in people per square mile, in 2015? Options: A) 10750, B) 12250, C) 14250, D) 16750',
  },
  {
    Question_Number: 14,
    Question: 'You can use a calculator for this question. The combustion of glucose releases energy. The ratio of grams of glucose combusted to kilocalories of energy released is 12.0 to 45.0. How many grams of glucose must be combusted to provide 85.5 kilocalories of energy. Options: A) 5.7, B) 9.9, C) 22.8, D) 320.6',
  },
  {
    Question_Number: 15,
    Question: 'You can use a calculator for this question. The function is defined by f(x) = x2 - 7. What is the value of f(3)? Options: A) -16, B) -2, C) 2, D) 16',
  },
  {
    Question_Number: 16,
    Question: 'You can use a calculator for this question. The probability of an unfair coin landing heads side up is 0.6. A student tossed this coin into the air 9 times. It landed tails side up 5 times and heads side up 4 times. What is the probability that the coin will land heads side up on the 10th loss? Options: A) 0.4, B) 0.5, C) 0.6, D) 1',
  },
  {
    Question_Number: 17,
    Question: 'While preparing to run a marathon, Amelia created a training schedule in which the distance of her longest run every week increased by a constant amount. If Amelia’s training schedule requires that her longest run in week 4 is a distance of 8 miles and her longest run in week 16 is a distance of 26 miles, which of the following best describes how the distance Amelia runs changes between week 4 and week 16 of her training schedule? Options: A) Amelia increases the distance of her longest run by 0.5 miles each week, B) Amelia increases the distance of her longest run by 2 miles each week, C) Amelia increases the distance of her longest run by 2 miles every 3 weeks, D) Amelia increases the distance of her longest run by 1.5 miles each week',
  },
  {
    Question_Number: 18,
    Question: 'Which of the following equations represents a line that is parallel to the line with equation y = -3x + 4? Options: A) 6x + 2y = 15, 3x - y = 7, C) 2x - 3y = 6, D) x + 3y = 1',
  },
  {
    Question_Number: 19,
    Question: 'f(x) = (3/2)x + b. In the function above, b is a constant. If f(6) = 7, what is the value of f(-2)? Options: A) -5, B) -2, C) 1, D) 7',
  },
  {
    Question_Number: 20,
    Question: 'If (a - b)/b = 3/7, which of the following must also be true? Options: A) a/b = -4/7, B) a/b = 10/7, C) (a + b)/b = 10/7, D) (a - 2b)/b = -11/7',
  },
  {
    Question_Number: 21,
    Question: 'If (t + 5)/(t - 5) = 10, what is the value of t? Options: A) 45/11, B) 5, C) 11/2, D) 55/9',
  },
  {
    Question_Number: 22,
    Question: 'x = 2y + 5, y = (2x - 3)(x + 9). How many ordered pairs (x,y) satisfy the system of equations shown above? Options: A) 0, B) 1, C) 2, D) Infinitely many',
  },
  {
    Question_Number: 23,
    Question: 'You can use a calculator for this question. One of the requirements for becoming a court reporter is the ability to type 225 words per minute. Donald can currently type 180 words per minute, and believes that with practice he can increase his typing speed by 5 words per minute each month. Which of the following represents the number of words per minute that Donald believes he will be able to type m months from now? Options: A) 5 + 180m, B) 225 + 5m, C) 180 + 5m, D) 180 - 5m',
  },
  {
    Question_Number: 24,
    Question: 'You can use a calculator for this question. Nick surveyed a random sample of the freshman class of his high school to determine whether the Fall Festival should be held in October or November. Of the 90 students surveyed, 25.6% preferred October. Based on this information, about how many students in the entire 225-person class would be expected to prefer having the Fall Festival in October? Options: A) 50, B) 60, C) 75, D) 80',
  },
  {
    Question_Number: 25,
    Question: 'You can use a calculator for this question. If the relationship between the total cost, y, of buying the materials and renting the tools at Store C and the number of days, x, for which the tools are rented is graphed in the xy-plane, what does the slope of the line represent? Options: A) The total cost of the project, B) The total cost of the materials, C) The total daily cost of the project, D) The total daily rental cost of the tools',
  },
  {
    Question_Number: 26,
    Question: 'You can use a calculator for this question. f(x) = 2x^3 + 6x^2 + 4x, g(x) = x^2 + 3x + 2. The polynomials f(x) and g(x) are defined above. Which of the following polynomials is divisible by 2x + 3? Options: A) h(x) = f(x) + g(x), B) p(x) = f(x) + 3g(x), C) r(x) = 2f(x) + 3g(x), D) s(x) = 3f(x) + 2g(x)',
  },
  {
    Question_Number: 27,
    Question: 'x/y = 6, 4(y + 1) = x. If (x, y) is the solution to the system of the equations above, what is the value of y? Options: A) 2, B) 4, C) 12, D) 24',
  },
  {
    Question_Number: 28,
    Question: 'You can use a calculator for this question. If a 3-pound pizza is sliced in half and each half is sliced into thirds, what is the weight, in ounces, of each of the slices? (1 pound = 16 ounces). Options: A) 4, B) 6, C) 8, D) 16',
  },
  {
    Question_Number: 29,
    Question: 'x^2 - 10x + y^2 + 6y = 2. The graph in the xy-plane of the equation above is a circle. What are the coordinates of the center of the circle? Options: A) (-5, -3), B) (-5, 3), C) (5, -3), D) (5, 3)',
  },
  {
    Question_Number: 30,
    Question: 'The equation h = 150 + 10t gives the total number of housing units, h, in a community t months after a new zoning law was passed. How many housing units are added to the community each month after the zoning law was passed? Options: A) 10, B) 150, C) 160, D) 1500',
  },
];
// exports.Satexplanationforquestion = async (res, req) => {
functions.http('Satquestionforquestionnum', (req, res) => {
  try {
    console.log('quest', Number(req.query.question_num));
    const g2 = Number(req.query.question_num);
    if (g2 == data[(g2 - 1)].Question_Number) {
      question_num = data[(g2 - 1)].Question_Number;
      // console.log("Explanation",explanation)
      question = data[(g2 - 1)].Question;
      inventory = {
        question_num,
        question,

      };
      //  res.status(200).send({explanation,answer});
      res.send({ inventory }, 200, { 'Content-Type': 'application/json' });
    } else {
      question_num = 'Question number not found';
      question = 'N/A';
      inventory = {
        question_num,
        question,

      };
      res.send({ inventory }, 200, { 'Content-Type': 'application/json' });
    }
  } catch (error) {
    // return an error
    console.log('got error: ', error);
    question_num = 0;
    question = error;
    inventory = {
      question_num,
      question,

    };
    res.send({ inventory }, 500, { 'Content-Type': 'application/json' });
    // res.status(500).send({explanation,answer});
  }
});
