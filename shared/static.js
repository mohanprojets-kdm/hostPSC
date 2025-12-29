const { default: mongoose } = require("mongoose");

exports.SCORE_TAG = {
  ZERO_HERO: "ZERO_HERO", // 0–199
  ROOKIE_RISER: "ROOKIE_RISER", // 200–399
  STEADY_STRIKER: "STEADY_STRIKER", // 400–599
  PROGRESS_PANTHER: "PROGRESS_PANTHER", // 600–799
  ALMOST_THERE: "ALMOST_THERE", // 800–999

  BASE_BEAST: "BASE_BEAST", // exactly 1000 (base score)

  POWER_UP: "POWER_UP", // 1001–1199
  ELITE_EDGE: "ELITE_EDGE", // 1200–1399
  RISING_TITAN: "RISING_TITAN", // 1400–1599
  ULTRA_LEGEND: "ULTRA_LEGEND", // 1600–1799
  MYTHIC_MASTER: "MYTHIC_MASTER", // 1800–1999

  GOD_MODE: "GOD_MODE", // exactly 2000
};

exports.SCORES = {
  0: "ZERO_HERO", // 0–199
  200: "ROOKIE_RISER", // 200–399
  400: "STEADY_STRIKER", // 400–599
  600: "PROGRESS_PANTHER", // 600–799
  800: "ALMOST_THERE", // 800–999

  1000: "BASE_BEAST", // exactly 1000 (base score)

  1001: "POWER_UP", // 1001–1199
  1200: "ELITE_EDGE", // 1200–1399
  1400: "RISING_TITAN", // 1400–1599
  1600: "ULTRA_LEGEND", // 1600–1799
  1800: "MYTHIC_MASTER", // 1800–1999

  2000: "GOD_MODE", // exactly 2000
};

exports.SCORE_TAGS_ENUM = [
  "ZERO_HERO",
  "ROOKIE_RISER",
  "STEADY_STRIKER",
  "PROGRESS_PANTHER",
  "ALMOST_THERE",
  "BASE_BEAST",
  "POWER_UP",
  "ELITE_EDGE",
  "RISING_TITAN",
  "ULTRA_LEGEND",
  "MYTHIC_MASTER",
  "GOD_MODE",
];

exports.SCORE_TAG_MALE = {
  ZERO_HERO:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765380679/my-app/wn6djine9e9kvpovv4vi.png", // 0–199
  ROOKIE_RISER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382225/my-app/yfz4up2ttjrfzctdp9u9.png", // 200–399
  STEADY_STRIKER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382226/my-app/crqip82l3ctuaorlvwwo.png", // 400–599
  PROGRESS_PANTHER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382226/my-app/h1owygdm5omdmvjusc0t.png", // 600–799
  ALMOST_THERE:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382226/my-app/gkwxvyy6lahcbtmcptwo.png", // 800–999

  BASE_BEAST:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/en4nyksxxfkhrks7nkyc.png", // exactly 1000 (base score)

  POWER_UP:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382328/my-app/lb3gtonexlsqmc1kdigo.png", // 1001–1199
  ELITE_EDGE:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382224/my-app/waotx3tzo2ckzxozsgdj.png", // 1200–1399
  RISING_TITAN:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382224/my-app/d1jahk4mvpz8f9pgitpp.png", // 1400–1599
  ULTRA_LEGEND:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/fqjdtzptkwm713pdkfmt.png", // 1600–1799
  MYTHIC_MASTER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/yxoogh5syeobdamfv9io.png", // 1800–1999

  GOD_MODE:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382224/my-app/ydquh6vcktcbztpycejv.png", // exactly 2000
};

exports.SCORE_TAG_FEMALE = {
  ZERO_HERO:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/e7hoodnrji6fb4tg7zed.png", // 0–199
  ROOKIE_RISER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/ygathg6e8s1wbvstldue.png", // 200–399
  STEADY_STRIKER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382379/my-app/gwiodlvsuylhr3gsdyym.png", // 400–599
  PROGRESS_PANTHER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/qydzrrkokwd8713r53nn.png", // 600–799
  ALMOST_THERE:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382226/my-app/gkwxvyy6lahcbtmcptwo.png", // 800–999

  BASE_BEAST:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/efwqw63extfmewby4w4o.png", // exactly 1000 (base score)

  POWER_UP:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/qydzrrkokwd8713r53nn.png", // 1001–1199
  ELITE_EDGE:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/efwqw63extfmewby4w4o.png", // 1200–1399
  RISING_TITAN:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382224/my-app/d1jahk4mvpz8f9pgitpp.png", // 1400–1599
  ULTRA_LEGEND:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/fqjdtzptkwm713pdkfmt.png", // 1600–1799
  MYTHIC_MASTER:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382327/my-app/yxoogh5syeobdamfv9io.png", // 1800–1999

  GOD_MODE:
    "https://res.cloudinary.com/ddpyfc9bd/image/upload/v1765382229/my-app/avkqmhideg66ty6ibwd6.png", // exactly 2000
};

const generateObjectId = (idString) =>
  idString ? mongoose.Types.ObjectId(idString) : new mongoose.Types.ObjectId();
exports.generateObjectId = generateObjectId;
