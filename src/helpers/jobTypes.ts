const TANK = 'Tank';
const HEALER = 'Healer';
const MELEE_DPS = 'Melee DPS';
const RANGED_DPS = 'Ranged DPS';
const MAGIC_DPS = 'Magic DPS';
const DISCIPLE_OF_THE_HAND = 'Disciple of the hand';
const DISCIPLE_OF_THE_LAND = 'Disciple of the land';

export const JOB_LOOKUP = {
  Dark_Knight: TANK,
  Warrior: TANK,
  Paladin: TANK,
  Gunbreaker: TANK,

  White_Mage: HEALER,
  Astrologian: HEALER,
  Scholar: HEALER,

  Ninja: MELEE_DPS,
  Samurai: MELEE_DPS,
  Monk: MELEE_DPS,
  Dragoon: MELEE_DPS,

  Bard: RANGED_DPS,
  Machinist: RANGED_DPS,
  Dancer: RANGED_DPS,

  Black_Mage: MAGIC_DPS,
  Summoner: MAGIC_DPS,
  Red_Mage: MAGIC_DPS,
  Blue_Mage: MAGIC_DPS,

  Carpenter: DISCIPLE_OF_THE_HAND,
  Blacksmith: DISCIPLE_OF_THE_HAND,
  Armorer: DISCIPLE_OF_THE_HAND,
  Goldsmith: DISCIPLE_OF_THE_HAND,
  Leatherworker: DISCIPLE_OF_THE_HAND,
  Weaver: DISCIPLE_OF_THE_HAND,
  Alchemist: DISCIPLE_OF_THE_HAND,
  Culinarian: DISCIPLE_OF_THE_HAND,

  Miner: DISCIPLE_OF_THE_LAND,
  Botanist: DISCIPLE_OF_THE_LAND,
  Fisher: DISCIPLE_OF_THE_LAND
}

export const JOB_TYPES = [TANK, HEALER, MELEE_DPS, RANGED_DPS, MAGIC_DPS, DISCIPLE_OF_THE_HAND, DISCIPLE_OF_THE_LAND];