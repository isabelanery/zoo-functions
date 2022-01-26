const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const counting = {
    adult: 0,
    child: 0,
    senior: 0,
  };

  counting.adult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;

  counting.child = entrants.filter((child) => child.age < 18).length;

  counting.senior = entrants.filter((senior) => senior.age >= 50).length;

  return counting;
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }

  if (((typeof entrants) === 'object') && (Object.entries(entrants).length === 0)) {
    return 0;
  }

  const [adult, child, senior] = Object.values(countEntrants(entrants));

  return (adult * prices.adult + child * prices.child + senior * prices.senior);
};

module.exports = { calculateEntry, countEntrants };
