export interface Pokemon {
  name: string
  types: string[]
  location: string
  description: string
}

export interface GymLeader {
  name: string
  type: string
  city: string
  badge: string
}

export interface Region {
  name: string
  slug: string
  generation: string
  tagline: string
  overview: string
  games: string[]
  legendaries: Pokemon[]
  mythicals: Pokemon[]
  keyLocations: { name: string; description: string }[]
  gymLeaders: GymLeader[]
}

export const regions: Record<string, Region> = {
  kanto: {
    name: 'Kanto',
    slug: 'kanto',
    generation: 'Generation I',
    tagline: 'Where it all began',
    overview:
      'Kanto is the region where the Pokemon journey first started. Inspired by the real-world Kanto region of Japan, it features a diverse landscape ranging from the bustling streets of Celadon City to the mysterious depths of Cerulean Cave. Trainers begin their adventure in the quiet Pallet Town, receiving their first Pokemon from Professor Oak before setting off to challenge eight Gym Leaders and ultimately the Elite Four at Indigo Plateau. Kanto established the foundational mechanics and lore that would define the entire franchise, introducing 151 original Pokemon that remain iconic to this day.',
    games: [
      'Pokemon Red',
      'Pokemon Blue',
      'Pokemon Yellow',
      'Pokemon FireRed',
      'Pokemon LeafGreen',
    ],
    legendaries: [
      {
        name: 'Articuno',
        types: ['Ice', 'Flying'],
        location: 'Seafoam Islands',
        description:
          'The legendary bird of ice. Articuno is said to appear before doomed travelers lost in icy mountains, guiding them to safety with its crystalline wings. It can create blizzards by freezing moisture in the air as it flies.',
      },
      {
        name: 'Zapdos',
        types: ['Electric', 'Flying'],
        location: 'Power Plant',
        description:
          'The legendary bird of thunder. Zapdos gains power when struck by lightning bolts and is said to appear from clouds while dropping enormous lightning bolts. Its electric feathers crackle with dangerous voltage.',
      },
      {
        name: 'Moltres',
        types: ['Fire', 'Flying'],
        location: 'Victory Road',
        description:
          'The legendary bird of fire. Moltres is a magnificent bird wreathed in brilliant flames. It is said that its appearance signals the coming of spring, and that it migrates south with the seasons.',
      },
      {
        name: 'Mewtwo',
        types: ['Psychic'],
        location: 'Cerulean Cave',
        description:
          'A Pokemon created through genetic manipulation of Mew\'s DNA. Mewtwo is the most powerful psychic Pokemon ever engineered, possessing immense telekinetic abilities. Despite its artificial origins, it developed a fierce independent will and a complex moral consciousness.',
      },
    ],
    mythicals: [
      {
        name: 'Mew',
        types: ['Psychic'],
        location: 'Event Distribution',
        description:
          'The ancestor of all Pokemon. Mew is said to possess the genetic composition of every Pokemon in existence, allowing it to learn any move. Its playful and curious nature belies its immeasurable power, and many scientists believe it holds the key to understanding all Pokemon evolution.',
      },
    ],
    keyLocations: [
      { name: 'Pallet Town', description: 'The quiet starting town and home of Professor Oak\'s Laboratory.' },
      { name: 'Cerulean City', description: 'A beautiful city by the water, home to the Nugget Bridge and Cerulean Cave.' },
      { name: 'Celadon City', description: 'The largest city in Kanto, featuring the massive Celadon Department Store and Game Corner.' },
      { name: 'Saffron City', description: 'The commercial heart of Kanto, home to Silph Co. headquarters and two competing gyms.' },
      { name: 'Lavender Town', description: 'A somber town known for the Pokemon Tower, a memorial for departed Pokemon.' },
      { name: 'Indigo Plateau', description: 'The ultimate destination where the Elite Four and Champion await challengers.' },
    ],
    gymLeaders: [
      { name: 'Brock', type: 'Rock', city: 'Pewter City', badge: 'Boulder Badge' },
      { name: 'Misty', type: 'Water', city: 'Cerulean City', badge: 'Cascade Badge' },
      { name: 'Lt. Surge', type: 'Electric', city: 'Vermilion City', badge: 'Thunder Badge' },
      { name: 'Erika', type: 'Grass', city: 'Celadon City', badge: 'Rainbow Badge' },
      { name: 'Koga', type: 'Poison', city: 'Fuchsia City', badge: 'Soul Badge' },
      { name: 'Sabrina', type: 'Psychic', city: 'Saffron City', badge: 'Marsh Badge' },
      { name: 'Blaine', type: 'Fire', city: 'Cinnabar Island', badge: 'Volcano Badge' },
      { name: 'Giovanni', type: 'Ground', city: 'Viridian City', badge: 'Earth Badge' },
    ],
  },

  johto: {
    name: 'Johto',
    slug: 'johto',
    generation: 'Generation II',
    tagline: 'A land where legends come alive',
    overview:
      'Johto is a region steeped in tradition and mythology, located west of Kanto. Inspired by the Kansai region of Japan, Johto blends ancient heritage with natural beauty. The region is defined by its deep connection to legendary Pokemon, with the Burned Tower in Ecruteak City serving as a central piece of its mythology. Johto introduced many beloved mechanics including breeding, held items, the day-night cycle, and two new Pokemon types: Dark and Steel. After conquering Johto\'s league, trainers can revisit the entire Kanto region, making these games among the most content-rich in the series.',
    games: [
      'Pokemon Gold',
      'Pokemon Silver',
      'Pokemon Crystal',
      'Pokemon HeartGold',
      'Pokemon SoulSilver',
    ],
    legendaries: [
      {
        name: 'Ho-Oh',
        types: ['Fire', 'Flying'],
        location: 'Tin Tower',
        description:
          'The guardian of the skies. Ho-Oh possesses seven-colored wings that create rainbows as it flies. Legend says that those who see Ho-Oh are granted eternal happiness. It resurrected the three beasts after the Burned Tower fire and awaits a pure-hearted trainer atop the Tin Tower.',
      },
      {
        name: 'Lugia',
        types: ['Psychic', 'Flying'],
        location: 'Whirl Islands',
        description:
          'The guardian of the seas. Lugia is so powerful that it chose to isolate itself deep within the Whirl Islands to prevent its immense abilities from causing unintended destruction. A gentle flap of its wings can create storms lasting forty days.',
      },
      {
        name: 'Raikou',
        types: ['Electric'],
        location: 'Roaming Johto',
        description:
          'One of the three legendary beasts resurrected by Ho-Oh. Raikou embodies the lightning that struck the Burned Tower. It races across the land at incredible speed, its roar sending shockwaves through the ground that sound like crashing thunder.',
      },
      {
        name: 'Entei',
        types: ['Fire'],
        location: 'Roaming Johto',
        description:
          'One of the three legendary beasts resurrected by Ho-Oh. Entei represents the flames that engulfed the Burned Tower. It is said that a new Entei is born each time a new volcano appears, and its passionate heart burns with intensity.',
      },
      {
        name: 'Suicune',
        types: ['Water'],
        location: 'Roaming Johto',
        description:
          'One of the three legendary beasts resurrected by Ho-Oh. Suicune embodies the rain that quenched the Burned Tower fire. It races across the land, purifying polluted water wherever it goes, and is said to represent the compassion of pure flowing water.',
      },
    ],
    mythicals: [
      {
        name: 'Celebi',
        types: ['Psychic', 'Grass'],
        location: 'Ilex Forest',
        description:
          'The voice of the forest and guardian of time. Celebi has the ability to travel through time, and its presence is said to guarantee a bright future. It resides in Ilex Forest, where it watches over the natural world and ensures the forest\'s eternal health.',
      },
    ],
    keyLocations: [
      { name: 'New Bark Town', description: 'A small town where winds of a new beginning blow. Home to Professor Elm\'s lab.' },
      { name: 'Ecruteak City', description: 'A historical city with the Burned Tower and Tin Tower, central to Johto\'s legends.' },
      { name: 'Goldenrod City', description: 'Johto\'s bustling metropolis with the Radio Tower, Department Store, and Game Corner.' },
      { name: 'Blackthorn City', description: 'A mountain city where the Dragon Tamer clan resides, home to the Dragon\'s Den.' },
      { name: 'Ilex Forest', description: 'A sacred forest said to be protected by the mythical Pokemon Celebi.' },
      { name: 'Lake of Rage', description: 'A vast lake north of Mahogany Town, famous for the appearance of the Red Gyarados.' },
    ],
    gymLeaders: [
      { name: 'Falkner', type: 'Flying', city: 'Violet City', badge: 'Zephyr Badge' },
      { name: 'Bugsy', type: 'Bug', city: 'Azalea Town', badge: 'Hive Badge' },
      { name: 'Whitney', type: 'Normal', city: 'Goldenrod City', badge: 'Plain Badge' },
      { name: 'Morty', type: 'Ghost', city: 'Ecruteak City', badge: 'Fog Badge' },
      { name: 'Chuck', type: 'Fighting', city: 'Cianwood City', badge: 'Storm Badge' },
      { name: 'Jasmine', type: 'Steel', city: 'Olivine City', badge: 'Mineral Badge' },
      { name: 'Pryce', type: 'Ice', city: 'Mahogany Town', badge: 'Glacier Badge' },
      { name: 'Clair', type: 'Dragon', city: 'Blackthorn City', badge: 'Rising Badge' },
    ],
  },

  hoenn: {
    name: 'Hoenn',
    slug: 'hoenn',
    generation: 'Generation III',
    tagline: 'Where land and sea collide',
    overview:
      'Hoenn is a tropical region characterized by its abundant natural environments and the dramatic conflict between land and sea. Inspired by the Kyushu region of Japan, Hoenn features a remarkably diverse geography including volcanic mountains, vast oceans, dense forests, and arid deserts. The region\'s central conflict revolves around the ancient Pokemon Groudon and Kyogre, whose powers can reshape the very landscape. Hoenn introduced Pokemon abilities, double battles, contests, and the concept of weather-based gameplay, adding layers of strategic depth that redefined competitive battling.',
    games: [
      'Pokemon Ruby',
      'Pokemon Sapphire',
      'Pokemon Emerald',
      'Pokemon Omega Ruby',
      'Pokemon Alpha Sapphire',
    ],
    legendaries: [
      {
        name: 'Groudon',
        types: ['Ground'],
        location: 'Cave of Origin',
        description:
          'The continent Pokemon said to have raised the lands and expanded the continents. Groudon possesses the power to evaporate water and summon intense sunlight. Ancient legends describe its fierce battles with Kyogre over control of nature\'s balance.',
      },
      {
        name: 'Kyogre',
        types: ['Water'],
        location: 'Cave of Origin',
        description:
          'The sea basin Pokemon said to have expanded the oceans. Kyogre can summon torrential rainstorms that raise sea levels and flood entire regions. It slumbers deep within ocean trenches, and its awakening heralds catastrophic storms.',
      },
      {
        name: 'Rayquaza',
        types: ['Dragon', 'Flying'],
        location: 'Sky Pillar',
        description:
          'The sky high Pokemon that lives in the ozone layer. Rayquaza serves as the mediator between Groudon and Kyogre, descending from the skies to quell their ancient conflict. It feeds on particles in the atmosphere and has lived for hundreds of millions of years.',
      },
      {
        name: 'Latias',
        types: ['Dragon', 'Psychic'],
        location: 'Roaming Hoenn',
        description:
          'The eon Pokemon with a gentle disposition. Latias can refract light to alter its appearance and become invisible. It is highly intelligent and can understand human speech, forming deep emotional bonds with trainers it trusts.',
      },
      {
        name: 'Latios',
        types: ['Dragon', 'Psychic'],
        location: 'Roaming Hoenn',
        description:
          'The eon Pokemon with a fierce protective instinct. Latios can project images into the minds of others and flies faster than a jet plane by tucking in its wings. It will open its heart only to a trainer with a compassionate spirit.',
      },
      {
        name: 'Regice',
        types: ['Ice'],
        location: 'Island Cave',
        description:
          'A legendary golem made entirely of Antarctic ice formed during an ice age. Its body is so cold that not even magma can melt it. It was sealed away by ancient people in a chamber of stone along with its counterparts.',
      },
      {
        name: 'Regirock',
        types: ['Rock'],
        location: 'Desert Ruins',
        description:
          'A legendary golem composed entirely of rocks. If damaged in battle, Regirock will seek out new rocks to repair itself, resulting in a patchwork body of stones from many different regions and geological eras.',
      },
      {
        name: 'Registeel',
        types: ['Steel'],
        location: 'Ancient Tomb',
        description:
          'A legendary golem made of a strange metal not found in this world. Despite its metallic body, Registeel is hollow inside. It was imprisoned by ancient people who feared its power, sealed in a ruin for thousands of years.',
      },
    ],
    mythicals: [
      {
        name: 'Jirachi',
        types: ['Steel', 'Psychic'],
        location: 'Event Distribution',
        description:
          'The wish maker Pokemon. Jirachi awakens from a thousand-year slumber for only seven days, during which it can grant any wish written on the notes attached to its head. It sleeps in a crystalline cocoon to gather energy from the stars.',
      },
      {
        name: 'Deoxys',
        types: ['Psychic'],
        location: 'Event Distribution',
        description:
          'An extraterrestrial Pokemon that mutated from a space virus exposed to a laser beam. Deoxys can shift between four distinct forms — Normal, Attack, Defense, and Speed — adapting its body structure to suit different battle strategies.',
      },
    ],
    keyLocations: [
      { name: 'Littleroot Town', description: 'A small town in southern Hoenn where Professor Birch conducts field research.' },
      { name: 'Sootopolis City', description: 'A city built inside a dormant volcanic crater, accessible only by sea or sky.' },
      { name: 'Fortree City', description: 'An elevated city where houses are built in the treetops of a vast forest.' },
      { name: 'Lilycove City', description: 'A coastal city known for the Contest Hall and Lilycove Department Store.' },
      { name: 'Sky Pillar', description: 'An ancient tower where the legendary Rayquaza rests high above the clouds.' },
      { name: 'Ever Grande City', description: 'The seat of the Hoenn Pokemon League, surrounded by waterfalls and flowers.' },
    ],
    gymLeaders: [
      { name: 'Roxanne', type: 'Rock', city: 'Rustboro City', badge: 'Stone Badge' },
      { name: 'Brawly', type: 'Fighting', city: 'Dewford Town', badge: 'Knuckle Badge' },
      { name: 'Wattson', type: 'Electric', city: 'Mauville City', badge: 'Dynamo Badge' },
      { name: 'Flannery', type: 'Fire', city: 'Lavaridge Town', badge: 'Heat Badge' },
      { name: 'Norman', type: 'Normal', city: 'Petalburg City', badge: 'Balance Badge' },
      { name: 'Winona', type: 'Flying', city: 'Fortree City', badge: 'Feather Badge' },
      { name: 'Tate & Liza', type: 'Psychic', city: 'Mossdeep City', badge: 'Mind Badge' },
      { name: 'Wallace', type: 'Water', city: 'Sootopolis City', badge: 'Rain Badge' },
    ],
  },

  sinnoh: {
    name: 'Sinnoh',
    slug: 'sinnoh',
    generation: 'Generation IV',
    tagline: 'The realm of time, space, and creation',
    overview:
      'Sinnoh is a vast northern region defined by its dramatic geography and profound mythology centered on the creation of the universe itself. Inspired by the Japanese island of Hokkaido, Sinnoh features a cold climate with snow-covered routes, towering Mount Coronet dividing the region in two, and an extensive underground cave system. The region\'s lore revolves around the creation trio — Dialga, Palkia, and Giratina — and the god-like Arceus. Sinnoh introduced the physical/special split that revolutionized competitive battling, along with online trading and battling via the Global Trade System.',
    games: [
      'Pokemon Diamond',
      'Pokemon Pearl',
      'Pokemon Platinum',
      'Pokemon Brilliant Diamond',
      'Pokemon Shining Pearl',
    ],
    legendaries: [
      {
        name: 'Dialga',
        types: ['Steel', 'Dragon'],
        location: 'Spear Pillar',
        description:
          'The temporal Pokemon said to have been born when the universe was created. Dialga has complete dominion over time — it can warp time forward, reverse it, or stop it entirely. The flow of time began when Dialga\'s heart started beating.',
      },
      {
        name: 'Palkia',
        types: ['Water', 'Dragon'],
        location: 'Spear Pillar',
        description:
          'The spatial Pokemon with the power to distort and create space. Palkia can warp the fabric of space, creating alternate dimensions and parallel worlds. It is said to live in a gap in the spatial dimension parallel to ours.',
      },
      {
        name: 'Giratina',
        types: ['Ghost', 'Dragon'],
        location: 'Distortion World',
        description:
          'The renegade Pokemon banished to the Distortion World for its violent behavior. Giratina rules over a dimension where the laws of physics are inverted — gravity shifts, reflections move independently, and space folds upon itself. It watches the real world from the shadows.',
      },
      {
        name: 'Uxie',
        types: ['Psychic'],
        location: 'Lake Acuity',
        description:
          'The being of knowledge. Uxie is said to have given humans the intelligence to improve their quality of life. Looking into its eyes will wipe all memory clean, a safeguard to protect the vast knowledge it possesses.',
      },
      {
        name: 'Mesprit',
        types: ['Psychic'],
        location: 'Lake Verity',
        description:
          'The being of emotion. Mesprit taught humans the nobility of sorrow, joy, and pain. It sleeps at the bottom of Lake Verity, but its spirit is said to leave its body and fly freely across the lake\'s surface.',
      },
      {
        name: 'Azelf',
        types: ['Psychic'],
        location: 'Lake Valor',
        description:
          'The being of willpower. Azelf gave humans the determination to do things, enabling civilizations to flourish. It is known as the being of willpower because those who touch it will have their will drained after three days.',
      },
      {
        name: 'Heatran',
        types: ['Fire', 'Steel'],
        location: 'Stark Mountain',
        description:
          'A Pokemon born from the boiling magma within a volcano. Heatran\'s body is made of rugged steel, partially melted by its own intense heat. It clings to cave walls using its cross-shaped feet and dwells in volcanic caves.',
      },
      {
        name: 'Regigigas',
        types: ['Normal'],
        location: 'Snowpoint Temple',
        description:
          'The colossal Pokemon said to have towed continents with ropes. Regigigas is the master of the legendary golem trio and possesses strength beyond comprehension. It has slumbered in Snowpoint Temple for thousands of years.',
      },
      {
        name: 'Cresselia',
        types: ['Psychic'],
        location: 'Fullmoon Island',
        description:
          'The lunar Pokemon. Cresselia is said to represent the crescent moon and has the power to dispel nightmares. Shiny particles trail from its veil-like wings as it flies across the night sky, bringing peaceful dreams to all.',
      },
    ],
    mythicals: [
      {
        name: 'Arceus',
        types: ['Normal'],
        location: 'Hall of Origin',
        description:
          'The original one. Arceus is said to have emerged from an egg in a place where there was nothing, then shaped the universe with its thousand arms. It created Dialga, Palkia, and Giratina, and is regarded as the god of the Pokemon world.',
      },
      {
        name: 'Darkrai',
        types: ['Dark'],
        location: 'Newmoon Island',
        description:
          'The pitch-black Pokemon that can lure people into deep slumber and cause unending nightmares. Despite its fearsome reputation, Darkrai does not cause nightmares intentionally — it is a defense mechanism to protect itself when it senses danger.',
      },
      {
        name: 'Shaymin',
        types: ['Grass'],
        location: 'Flower Paradise',
        description:
          'The gratitude Pokemon. When Shaymin senses gratitude, the flowers all over its body burst into bloom and it can dissolve toxins in the air, transforming desolate wastelands into lush flower fields. It has a Sky Forme activated by the Gracidea flower.',
      },
      {
        name: 'Manaphy',
        types: ['Water'],
        location: 'Event Distribution',
        description:
          'The seafaring Pokemon born on a cold seafloor. Manaphy has the power to bond with any kind of Pokemon through Heart Swap. It will swim great distances to return to the place of its birth and is known as the prince of the sea.',
      },
      {
        name: 'Phione',
        types: ['Water'],
        location: 'Bred from Manaphy',
        description:
          'A Pokemon born from breeding Manaphy with Ditto. Phione drifts in warm seas, using the inflation sac on its head to search for food. It always returns to the place where it was born, no matter how far it drifts.',
      },
    ],
    keyLocations: [
      { name: 'Twinleaf Town', description: 'A small, quiet town where the player and rival Barry begin their journey.' },
      { name: 'Hearthome City', description: 'A warm and friendly city home to the Contest Hall and Amity Square.' },
      { name: 'Veilstone City', description: 'A city carved out of rock, headquarters of Team Galactic.' },
      { name: 'Snowpoint City', description: 'The northernmost city in Sinnoh, blanketed in perpetual snow.' },
      { name: 'Mount Coronet', description: 'The massive mountain range dividing Sinnoh, home to the Spear Pillar at its summit.' },
      { name: 'Distortion World', description: 'An alternate dimension where Giratina resides, defying the laws of physics.' },
    ],
    gymLeaders: [
      { name: 'Roark', type: 'Rock', city: 'Oreburgh City', badge: 'Coal Badge' },
      { name: 'Gardenia', type: 'Grass', city: 'Eterna City', badge: 'Forest Badge' },
      { name: 'Maylene', type: 'Fighting', city: 'Veilstone City', badge: 'Cobble Badge' },
      { name: 'Crasher Wake', type: 'Water', city: 'Pastoria City', badge: 'Fen Badge' },
      { name: 'Fantina', type: 'Ghost', city: 'Hearthome City', badge: 'Relic Badge' },
      { name: 'Byron', type: 'Steel', city: 'Canalave City', badge: 'Mine Badge' },
      { name: 'Candice', type: 'Ice', city: 'Snowpoint City', badge: 'Icicle Badge' },
      { name: 'Volkner', type: 'Electric', city: 'Sunyshore City', badge: 'Beacon Badge' },
    ],
  },
}
