const functions = require('@google-cloud/functions-framework');
let explanation = 'Data';
let answer = 'Ans';
const data = [
  {
    Question_Number: 1,
    Answer: 'A',
    Explanation: 'A is the correct answer because it is the only option which, if set equal to zero, would lead to |x - 1| being set equal to a positive number (1). The absolute value of a number must always be positive. In every other option, the expression being set equal to 0 ultimately results in an absolute value being set equal to a negative number. When fully solved out, the expression |x−1| −1 is equal to 0 for x-values 0 and 2.',
  },
  {
    Question_Number: 2,
    Answer: 'B',
    Explanation: 'B is the correct answer because when substituting -3x into the function, f(-3x) = -2(-3x) + 5. After multiplying this out, f(-3x) = 6x + 5, or option B.',
  },
  {
    Question_Number: 3,
    Answer: 'C',
    Explanation: 'C is the correct answer. To solve this problem, 3(2x + 1)(4x +1) must be multiplied out. Using the distributive property to multiply out the parenthetical terms, the original expression becomes 3(8x^2 + 6x + 1). Multiplying this out again, the expression becomes 24x^2 + 18x + 3, or the expression provided in option C.',
  },
  {
    Question_Number: 4,
    Answer: 'C',
    Explanation: 'C is the correct answer. Since Ken’s sandwich is charged at a price of x, and Paul’s sandwich is charged at a price $1 higher than Ken’s sandwich (or x + 1), the combined cost of Ken and Paul’s sandwiches can be written as 2x + 1. Since they split the cost of the sandwiches evenly, the expression 2x + 1 divided by 2 (or x + 0.5) shows what each person paid individually. As they each paid a 20% tip (the 20% tip being 20% of what they paid), the expression is multiplied by 0.2 to show how much extra money they paid. 0.2(x + 0.5) is equal to 0.2x + 0.1. Since this expression only shows the amount of the tip each person paid, 0.2x + 0.1 is then added to the expression x + 0.5 for the split cost of the sandwiches, resulting in the expression 1.2x + 0.6, which is the amount each person paid. This answer matches the one provided by option C.',
  },
  {
    Question_Number: 5,
    Answer: 'B',
    Explanation: 'B is the correct answer. An equation must be set to solve this problem. This question is set in the timeframe of a month. To use the online movie and television service for a month, Jill must pay a monthly membership fee of $9.80. Since this problem only concerns one month of Jill’s usage of the service, this fee is only paid once, making 9.80 a constant in the equation for this problem. However, there is a fee of $1.50 each time a movie is rented out, making the fee paid for rental films dependent on the number of films rented. As a result, the fee for each film becomes a variable (1.50x), with x representing the number of films Jill rented this month. Jill’s total fees for the service this month were $12.80. Jill’s total fees this month are the sum of her monthly membership fee and fees paid to rent movies. In other words, 1.50x + 9.80 = 12.80. If this is solved for the variable, first isolate the variable. Subtract out 9.80 from both sides of the equation, leading to 1.50x = 3. Then divide both sides by 1.50. 1.50x/1.50 = 3/1.50 leads to x = 2. Jill rented out 2 movies this month. This answer matches the one provided by option B.',
  },
  {
    Question_Number: 6,
    Answer: 'B',
    Explanation: 'B is the correct answer. The question establishes that the density of an object is equal to the mass of the object divided by the volume of the object. If this is written out as a formula, with D being density, M being mass, and V being volume, the formula would be D = M/V. We can then solve the problem by substituting in our known values from the question and then isolating the variable for volume to solve. Since we know the mass is 24 grams and the density is 3 grams per milliliter, we can substitute these values into our formula. The formula becomes 3 = 24/V. To isolate V, we can first multiply both sides by V, leading to the equation 3V = 24. We can then divide both sides by 3, leading to the solution of V = 8. The volume of the object is 8 milliliters. This answer matches the one provided by option B.',
  },
  {
    Question_Number: 7,
    Answer: 'A',
    Explanation: 'A is the correct answer. The amount of time Angelica worked can be written as the variable x. Raul worked 11 more hours than Angelica, who worked x hours, so the amount of time Raul worked can be similarly written as x + 11. The sum of their hours worked is 59 hours, or x + x + 11 = 59. This can be simplified to 2x + 11 = 59. Isolating the variable, the equation becomes 2x = 48. Dividing both sides by 2, x = 24. Angelica worked 24 hours last week. This answer matches the one provided in option A.',
  },
  {
    Question_Number: 8,
    Answer: 'C',
    Explanation: 'C is the correct answer. To solve this problem, we will first deduce the volume of one glass. The formula for the volume of a right circular cylinder is V = π*r^2*h. The question tells us that the internal diameter of one glass is 3 inches. The diameter is equivalent to double the radius, or r, meaning that the radius is equivalent to 3/2, or 1.5. The height, or h of the glass is also given as 6 inches. Substituting these values into the formula, we receive the statement V = π*(1.5^2)*6, which can be simplified to 13.5π cubic inches (or, since π is roughly 3.14, around 42.39 cubic inches). Since there are 231 cubic inches in one gallon, and our objective is to find out how many of Jim’s glasses can be filled with a gallon of milk, we divide 231 cubic inches by 13.5π or 42.39 cubic inches, which is equal to around 5.44. Jim can pour 5 full glasses of milk, and then 0.44 of a glass. The question asks for the number of full milk glasses Jim can pour, making the answer 5. This answer matches the one provided in option C.',
  },
  {
    Question_Number: 9,
    Answer: 'A',
    Explanation: 'A is the correct answer. To solve this problem, we can isolate the variable x in the equation. Subtracting 10 from both sides of the equation makes it x^2 = 81. Now take the square root of both sides. The square root of 81 is 9, making x = 9. This answer matches the one provided by option A.',
  },
  {
    Question_Number: 10,
    Answer: 'B',
    Explanation: 'B is the correct answer. We are asked to write an equation for the number of pfennig and groschen coins with a combined value of 85 pfennigs. We are told that one groschen is worth 10 pfennigs, so the value of any g amount of groschens in pfennigs can be represented as 10g. The sum of pfennigs and groschens is 85 pfennigs, which can be expressed as p + 10g = 85. This matches the answer in option B.',
  },
  {
    Question_Number: 11,
    Answer: 'D',
    Explanation: 'D is the correct answer. The larger ball has a diameter of 3x, and the smaller ball has a diameter of x. A diameter is double the radius, so the radius is (3/2)x for the larger ball and x/2 for the smaller ball. The formula for the volume of a sphere is (4/3)π*r^3. (3/2)x cubed is (27/8)x^3, while x/2 cubed is (⅛)x^3. (27/8)x^3 is 27 times (⅛)x^3. The volume of the larger beach ball becomes (4/3)π*(27/8)x^3, or (27/6)πx^3, while the volume of the smaller beach ball becomes (4/3)π*(⅛)x^3, or (⅙)x^3. (27/6)πx^3 is 27 times (⅙)πx^3. This means that the simplified ratio between the bigger and smaller beach ball is 27 to 1. This matches the answer provided in option D.',
  },
  {
    Question_Number: 12,
    Answer: 'B',
    Explanation: 'B is the correct answer. If 0 is substituted for t in the equation A(t) = 12(2)^(t/6), the equation becomes A(t) = 12(2)^(0/6), which is equivalent to 12(1), or 12. At the beginning, there are 12 hyacinths. If 6 is substituted as t in the equation A(t) = 12(2)^(t/6), it results in A(6) = 12(2)^(6/6), which is equivalent to 12(2), or 24. In six days, there will be 24 water hyacinths. 12 multiplied by 2 is 24. This means that in six days, the number of water hyacinths doubled. This matches the answer provided in option B.',
  },
  {
    Question_Number: 13,
    Answer: 'B',
    Explanation: 'B is the correct answer. The formula for population density is the population over the land area. The given population is 441,000, and the land area 36 square miles. Using the formula for population density, the population density is 441,000/36, or 12,250. This matches the answer provided in option B.',
  },
  {

    Question_Number: 14,
    Answer: 'C',
    Explanation: 'C is the correct answer. We are told the amount of kilocalories is 85.5, and to find the equivalent amount of grams of glucose combusted. The ratio of grams of glucose combusted to kilocalories of energy released is 12.0 to 45.0. With this ratio, we can set up a proportion to find the amount of grams of glucose combusted. We can set 12/45 equal to x/85.5, then isolate x by multiplying both sides by 85.5. 85.5*12/45 = x, or x = 22.8. 22.8 grams of glucose will be combusted. This matches the answer in option C.',
  },
  {
    Question_Number: 15,
    Answer: 'C',
    Explanation: 'C is the correct option. We can substitute x in the function for 3. f(3) = 3^2 - 7, which can be simplified down to f(3) = 9 - 7, which can be further simplified down to 2. This answer matches the one provided in option C.',
  },
  {
    Question_Number: 16,
    Answer: 'C',
    Explanation: 'C is the correct answer. For every coin flip, regardless of the number of times the coin is or has been flipped, the probability of it landing on one side or another will remain the same. The probability of an unfair coin landing heads side up is 0.6, so the probability of it landing on heads on the 10th loss remains 0.6.',
  },
  {
    Question_Number: 17,
    Answer: 'D',
    Explanation: 'D is the correct answer. We will first find the difference between the distance Amelia runs week 4 and the distance she runs week 16. Amelia’s longest run is supposed to be 8 miles in week 4, and 26 miles by week 16. 26 - 8 is 18. The difference between these runs is 18 miles. Additionally, counting the difference between the weeks, 16 - 4 is 12, so there has to be an increase of 18 miles in 12 weeks. We need to figure out how much Amelia needs to increase the amount she runs each week. 18/12 is equal to 1.5, meaning that each week Amelia needs to increase the amount of her longest run by 1.5 miles. This matches the answer in option D.',
  },
  {
    Question_Number: 18,
    Answer: 'A',
    Explanation: 'A is the correct answer. Parallel lines have the same slope. A line parallel to equation y = -3x + 4 would have a slope of -3. We can put option A 6x + 2y = 15 into slope-intercept form to see if it shares the same slope as our original equation. We can first subtract 6x from both sides to isolate y, making the equation 2y = 15 - 6x. We can then divide the whole equation by 2, making it y = 7.5 - 3x. The slope for option A is -3, just like it is for y = -3x + 4. This means that both lines are parallel, and that option A is the correct answer.',
  },
  {
    Question_Number: 19,
    Answer: 'A',
    Explanation: 'A is the correct answer. To solve this equation, we must first find b. We can do this by using the information that f(6) = 7 and putting this into the original equation. f(x) = (3/2)x + b becomes 7 = (3/2)*6 + b, or 7 = 9 + b. We can then subtract 9 from both sides to isolate b, leading to the solution of b = -2. Putting this into the function f(x) = (3/2)x + b, we find that f(x) = (3/2)x - 2. Now we can find f(-2) by simply substituting in -2 into the equation. f(-2) = (3/2)*(-2) - 2, or f(-2) = -3 - 2, which simplifies to f(-2) = -5. This answer matches that found in option A.',
  },
  {
    Question_Number: 20,
    Answer: 'B',
    Explanation: 'B is the correct answer. (a - b)/b = 3/7 can be rewritten as a/b - b/b = 3/7, or a/b - 1 = 3/7. If 1 is rewritten as 7/7 and added to both sides, the equation becomes a/b = 10/7. This matches the answer in option B.',
  },
  {
    Question_Number: 21,
    Answer: 'D',
    Explanation: 'D is the correct answer. Multiply both sides by (t - 5) to solve. This makes the equation t + 5 = 10(t - 5), which can be simplified to t + 5 = 10t - 50. Now, to isolate t, we subtract t from both sides, making the equation 5 = 9t - 50. Add 50 to both sides to get 9t = 55. Divide each side by 9 to get t = 55/9, which matches the answer in option D.',
  },
  {
    Question_Number: 22,
    Answer: 'C',
    Explanation: 'C is the correct answer. Isolate y in x = 2y + 5 by subtracting 5 from both sides, making the equation x - 5 = 2y. Divide both sides by 2 to further isolate y, making the equation y = (x - 5)/2. We can then substitute (x - 5)/2 in y’s place in the second equation y = (2x - 3)(x + 9), making it (x - 5)/2 = (2x - 3)(x + 9). We can multiply the entire equation by 2 to get (x - 5) = 2(2x - 3)(x + 9). We can then multiply out this equation to get (x - 5) = 2(2x^2 + 15x - 27). We can multiply this out further to get x - 5 = 4x^2 + 30x - 54. We can set this equation equal to 0 by subtracting x from both sides and adding 5 to both sides. We will then get 0 = 4x^2 + 29x - 49. We can then use the quadratic formula, which gives two possible solutions for x, meaning that the answer is option C.',
  },
  {
    Question_Number: 23,
    Answer: 'C',
    Explanation: 'C is the correct answer. We need to set up an expression for this problem. Donald believes that with each month m, he will increase his typing speed by 5 WPM. How much it increases depends on the number of months he practices typing for, making this variable. The increases in his typing speed for each month can be expressed as 5m. Donald can already type 180 WPM, making 180 a constant in this equation. Since Donald’s typing ability m months from now is the sum of Donald’s present typing speed and the amount he will increase it by with each passing month, this can be written as the expression 180 + 5m. This matches the answer in option C.',
  },
  {
    Question_Number: 24,
    Answer: 'B',
    Explanation: 'B is the correct answer. If 25.6% of the 90 students voted for October, it can be expected that a similar percentage of the 225-person class will vote for October as well. 25.6% of 225 can be found by multiplying 225 by 0.256, which is 57.6 of the students. This can be rounded to 60, which is option B.',
  },
  {
    Question_Number: 25,
    Answer: 'D',
    Explanation: 'D is the correct answer. If y represents the total cost, and x represents the number of days spent renting tools, then the slope which is supposed to be multiplied by the number of days would represent the cost of renting the tools for one day. This matches option D.',
  },
  {
    Question_Number: 26,
    Answer: 'B',
    Explanation: 'B is the correct answer. The equations f(x) = 2x^3 + 6x^2 + 4x and g(x) = x^2 + 3x + 2 are given to us. Looking at option B, if we substitute in these equations, we get p(x) = 2x^3 + 6x^2 + 4x + 3(x^2 + 3x + 2), which simplifies to p(x) = 2x^3 + 6x^2 + 4x + 3x^2 + 9x + 6, which further simplifies to p(x) = 2x^3 + 9x^2 + 13x + 6. Using polynomial long division, we can divide 2x^3 + 9x^2 + 13x + 6 by 2x + 3, which gives us x^2 + 3x + 2. As this polynomial is divisible by 2x + 3, option B is the right answer.',
  },
  {
    Question_Number: 27,
    Answer: 'A',
    Explanation: 'A is the correct answer. We can isolate x in x/y = 6 to substitute the resulting equation in terms of y into equation 4(y + 1) = x. Multiplying both sides of x/y = 6 by y, we get x = 6y. Substituting this into 4(y + 1) = x, we get 4(y + 1) = 6y. Multiplying this out, we get 4y + 4 = 6y. We can isolate y here by subtracting 4y from both sides, which gets us 4 = 2y. We can divide both sides by 2, getting y = 2 as a result. This matches option A.',
  },
  {
    Question_Number: 28,
    Answer: 'C',
    Explanation: 'C is the correct answer. The two halves of a 3 pound pizza would weigh half the original weight, or 3/2 pounds. These halves are sliced into 3 pieces, which means each of these resulting pieces would weigh a third of the weight of the halves, or ½ of a pound. Since one pound is 16 ounces, we multiply ½ a pound by 16 to get how much the slices weigh in ounces, or 8 ounces. This matches option C.',
  },
  {
    Question_Number: 29,
    Answer: 'C',
    Explanation: 'C is the correct answer. x^2 - 10x + y^2 + 6y = 2 has to be converted into the standard form for the equation of a graph of the circle, or (x - h)^2 + (y - k)^2 = r^2. We first complete the square for x and y of the original equation. For x^2 - 10x, we take half of -10, square it, and add it to the other side of the equation. This allows us to complete the square and make (x - 5)^2. This makes the original equation become (x - 5)^2 + y^2 + 6y = 2 + 25 = 27. We then do the same with y^2 + 6y, taking half of 6, squaring it, and adding the resulting number to the other side of the equation. This similarly allows us to complete the square and make (y - (-3))^2. This ultimately gives us the equation (x - 5)^2 + (y - (-3))^2 = 27 + 9 = 36. As the values of h and k in the equation for standard form represent the coordinates of the center of the circle, our coordinates are (5, -3). This matches option C.',
  },
  {
    Question_Number: 30,
    Answer: 'A',
    Explanation: 'A is the correct answer. In the equation h = 150 + 10t, 10t is the variable that is supposed to represent the number of houses added after the zoning law is passed. If t is the number of months, then 10 would represent the number of houses added in the community each month. This makes option A the correct answer.',
  },
];
// exports.Satexplanationforquestion = async (res, req) => {
functions.http('Satexplanationforquestion', (req, res) => {
  try {
    console.log('body quest', Number(req.query.question_num));
    const g1 = Number(req.query.question_num);
    if (g1 == data[(g1 - 1)].Question_Number) {
      explanation = data[(g1 - 1)].Explanation;
      // console.log("Explanation",explanation)
      answer = data[(g1 - 1)].Answer;
      inventory = {
        answer,
        explanation,

      };
      //  res.status(200).send({explanation,answer});
      res.send({ inventory }, 200, { 'Content-Type': 'application/json' });
    } else {
      explanation = 'Question number not found';
      answer = 'N/A';
      inventory = {
        answer,
        explanation,

      };
      res.send({ inventory }, 200, { 'Content-Type': 'application/json' });
    }
  } catch (error) {
    // return an error
    console.log('got error: ', error);
    explanation = error;
    answer = 'N/A';
    inventory = {
      answer,
      explanation,

    };
    res.send({ inventory }, 500, { 'Content-Type': 'application/json' });
    // res.status(500).send({explanation,answer});
  }
});
