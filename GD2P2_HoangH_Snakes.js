/* ============================================================
   Snake Syllabusss — Main Script
   GD2P2_HoangH_Snakes.js
============================================================ */

// ============================================================
// DATA
// ============================================================
const snakes = [

  // FAMILY: Colubridae — Watersnakes
  {
    id: "001", name: "Northern Watersnake",
    images: ["Assets/Snakes/northernwatersnake_1.jpg","Assets/Snakes/northernwatersnake_2.jpg","Assets/Snakes/northernwatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["24–55 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["USA","Canada","Wetlands"],
    description: "The Northern Watersnake (Nerodia sipedon) is one of the most common aquatic snakes in eastern North America. Frequently confused with the venomous Cottonmouth but entirely harmless. Defensive bites produce minor bleeding from anticoagulant saliva."
  },
  {
    id: "002", name: "Brown Watersnake",
    images: ["Assets/Snakes/BrownWatersnake_1.jpg","Assets/Snakes/BrownWatersnake_2.jpg","Assets/Snakes/BrownWatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["30–60 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["USA","Wetlands"],
    description: "The Brown Watersnake (Nerodia taxispilota) is a large, heavy-bodied species of southeastern rivers and swamps. Its size and defensive posture cause confusion with venomous species, but it is completely harmless. Feeds almost exclusively on catfish."
  },
  {
    id: "003", name: "Banded Watersnake",
    images: ["Assets/Snakes/BandedWatersnake_1.jpg","Assets/Snakes/BandedWatersnake_2.jpg","Assets/Snakes/BandedWatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["24–48 in"], danger: ["Harmless"], active: ["Nocturnal"], location: ["USA","Wetlands"],
    description: "The Banded Watersnake (Nerodia fasciata) haunts lakes, ponds and marshes across the southeast. Often misidentified as the venomous Cottonmouth, it is completely harmless. Primarily nocturnal, feeding on fish and frogs."
  },
  {
    id: "004", name: "Diamondback Watersnake",
    images: ["Assets/Snakes/DiamondbackWatersnake_1.jpg","Assets/Snakes/DiamondbackWatersnake_2.jpg","Assets/Snakes/DiamondbackWatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["30–60 in"], danger: ["Harmless"], active: ["Diurnal","Nocturnal"], location: ["USA","Mexico","Wetlands"],
    description: "The Diamondback Watersnake (Nerodia rhombifer) is the largest North American watersnake. Its diamond pattern and aggressive bluffing mimic the Cottonmouth, but it is completely harmless. Active both day and night along rivers and lakes."
  },
  {
    id: "005", name: "Plain-bellied Watersnake",
    images: ["Assets/Snakes/PlainbelliedWatersnake_1.jpg","Assets/Snakes/PlainbelliedWatersnake_2.jpg","Assets/Snakes/PlainbelliedWatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["30–48 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["USA","Mexico","Wetlands"],
    description: "The Plain-bellied Watersnake (Nerodia erythrogaster) is distinguished by its solid, unpatterned belly. Found near rivers and swamps, it often roams far from water in search of prey — fish, frogs and salamanders."
  },
  {
    id: "006", name: "Green Watersnake",
    images: ["Assets/Snakes/GreenWatersnake_1.jpg","Assets/Snakes/GreenWatersnake_2.jpg","Assets/Snakes/GreenWatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["2.5–4.5 ft"], danger: ["Harmless"], active: ["Diurnal"], location: ["USA","Wetlands"],
    description: "The Green Watersnake (Nerodia floridana) is a large, greenish-brown species of still, heavily vegetated waters — swamps and coastal marshes of the southeast. One of the least studied watersnakes in North America."
  },
  {
    id: "007", name: "Saltmarsh Watersnake",
    images: ["Assets/Snakes/SaltmarshWatersnake_1.jpg","Assets/Snakes/SaltmarshWatersnake_2.jpg","Assets/Snakes/SaltmarshWatersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Watersnakes",
    size: ["15–36 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["USA","Florida","Coastal"],
    description: "The Saltmarsh Watersnake (Nerodia clarkii) is a federally threatened species uniquely adapted to brackish and saltwater environments along Florida's Gulf Coast. Primarily active at night and dusk. Threatened by coastal development."
  },

  // FAMILY: Colubridae — Gartersnakes
  {
    id: "008", name: "Common Gartersnake",
    images: ["Assets/Snakes/CommonGartersnake_1.jpg","Assets/Snakes/CommonGartersnake_2.jpg","Assets/Snakes/CommonGartersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["18–54 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Canada","USA","Widespread"],
    description: "The Common Gartersnake (Thamnophis sirtalis) is the most widespread reptile in North America, found from forests to urban gardens. Extremely adaptable, it produces mild neurotoxic saliva that is completely harmless to humans."
  },
  {
    id: "009", name: "Western Terrestrial Gartersnake",
    images: ["Assets/Snakes/WesternTerrestrialGartersnake_1.jpg","Assets/Snakes/WesternTerrestrialGartersnake_2.jpg","Assets/Snakes/WesternTerrestrialGartersnake_3.png"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["18–42 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Western USA","Canada","Rocky Mtns"],
    description: "The Western Terrestrial Gartersnake (Thamnophis elegans) ranges from sea level to high mountain slopes — one of the few snakes found at elevation. Highly variable in colour and pattern. Feeds on slugs, leeches, frogs and small mammals."
  },
  {
    id: "010", name: "Eastern Ribbon Snake",
    images: ["Assets/Snakes/EasternRibbonSnake_1.jpg","Assets/Snakes/EasternRibbonSnake_2.jpg","Assets/Snakes/EasternRibbonSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["18–34 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Eastern USA","Great Lakes"],
    description: "The Eastern Ribbon Snake (Thamnophis sauritus) is a slender, fast-moving species almost always found near water. Its tail makes up roughly a third of its total length. Feeds on frogs, salamanders and small fish."
  },
  {
    id: "011", name: "Western Ribbon Snake",
    images: ["Assets/Snakes/WesternRibbonSnake_1.jpg","Assets/Snakes/WesternRibbonSnake_2.jpg","Assets/Snakes/WesternRibbonSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["20–40 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Central USA","Mexico"],
    description: "The Western Ribbon Snake (Thamnophis proximus) is a slender, semi-aquatic gartersnake closely related to its eastern counterpart. Found near ponds, marshes and stream edges. Feeds on frogs, small fish and salamanders."
  },
  {
    id: "012", name: "Plains Gartersnake",
    images: ["Assets/Snakes/PlainsGartersnake_1.jpg","Assets/Snakes/PlainsGartersnake_2.jpg","Assets/Snakes/PlainsGartersnake_3.png"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["20–40 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Great Plains","Central USA","Canada"],
    description: "The Plains Gartersnake (Thamnophis radix) is a hardy prairie species tolerant of cold climates — often the first snake to emerge in spring. Feeds on earthworms, frogs and small rodents."
  },
  {
    id: "013", name: "Checkered Gartersnake",
    images: ["Assets/Snakes/CheckeredGartersnake_1.jpg","Assets/Snakes/CheckeredGartersnake_2.jpg","Assets/Snakes/CheckeredGartersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["18–42 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["SW United States","Mexico","C. America"],
    description: "The Checkered Gartersnake (Thamnophis marcianus) wears a bold black checkerboard pattern with yellow stripes. It thrives at desert edges and near water, feeding opportunistically on frogs, fish and earthworms."
  },
  {
    id: "014", name: "Black-necked Gartersnake",
    images: ["Assets/Snakes/BlackneckedGartersnake_1.jpg","Assets/Snakes/BlackneckedGartersnake_2.jpg","Assets/Snakes/BlackneckedGartersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["16–43 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["SW United States","Mexico"],
    description: "The Black-necked Gartersnake (Thamnophis cyrtopsis) is identified by two bold black neck blotches and a bright orange dorsal stripe. It favours rocky streams in arid country and feeds mainly on toads and frogs."
  },
  {
    id: "015", name: "Mexican Gartersnake",
    images: ["Assets/Snakes/MexicanGartersnake_1.jpg","Assets/Snakes/MexicanGartersnake_2.jpg","Assets/Snakes/MexicanGartersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["18–40 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["SW United States","Mexico"],
    description: "The Mexican Gartersnake (Thamnophis eques) is a semi-aquatic species tied to rivers and wetlands of the American Southwest. Listed as a species of concern due to habitat loss. Feeds on fish, frogs and tadpoles."
  },
  {
    id: "016", name: "Aquatic Gartersnake",
    images: ["Assets/Snakes/AquaticGartersnake_1.jpg","Assets/Snakes/AquaticGartersnake_2.jpg","Assets/Snakes/AquaticGartersnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Gartersnakes",
    size: ["18–40 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["SW Oregon","California","Wetlands"],
    description: "The Aquatic Gartersnake (Thamnophis atratus) lives near streams, ponds and coastal wetlands of the Pacific coast. It hunts fish, tadpoles and salamanders. Completely harmless to humans and a vital part of its riparian ecosystem."
  },

  // FAMILY: Colubridae — Ratsnakes
  {
    id: "017", name: "Eastern Ratsnake",
    images: ["Assets/Snakes/EasternRatsnake_1.jpg","Assets/Snakes/EasternRatsnake_2.jpg","Assets/Snakes/EasternRatsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Ratsnakes",
    size: ["42–72 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Eastern USA","Canada"],
    description: "The Eastern Ratsnake (Pantherophis alleghaniensis) is a powerful constrictor and one of the best rodent hunters in eastern North America. Glossy black as an adult, it is an excellent climber often found in trees and old barns."
  },
  {
    id: "018", name: "Western Ratsnake",
    images: ["Assets/Snakes/WesternRatsnake_1.jpg","Assets/Snakes/WesternRatsnake_2.jpg","Assets/Snakes/WesternRatsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Ratsnakes",
    size: ["42–72 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Central USA","Great Plains"],
    description: "The Western Ratsnake (Pantherophis obsoletus) is a large, agile constrictor found in forests, farmland and rocky hillsides of central North America. An exceptional climber and rodent controller. Juveniles show a blotched pattern that fades with age."
  },
  {
    id: "019", name: "Grey Ratsnake",
    images: ["Assets/Snakes/GreyRatsnake_1.jpg","Assets/Snakes/GreyRatsnake_2.jpg","Assets/Snakes/GreyRatsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Ratsnakes",
    size: ["36–72 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["SE United States","Gulf Coast"],
    description: "The Grey Ratsnake (Pantherophis spiloides) is a medium-to-large constrictor with a grey blotched pattern. Found in forests, swamps and agricultural land across the southeast. A skilled climber and important predator of rodents and birds."
  },
  {
    id: "020", name: "Corn Snake",
    images: ["Assets/Snakes/CornSnake_1.jpg","Assets/Snakes/CornSnake_2.jpg","Assets/Snakes/CornSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Ratsnakes",
    size: ["24–72 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["SE United States","Atlantic Coast"],
    description: "The Corn Snake (Pantherophis guttatus) is one of North America's most attractively patterned snakes, with vivid orange and red blotches. Primarily nocturnal, it hunts rodents, lizards and birds. Widely kept as a pet due to its docile temperament."
  },
  {
    id: "021", name: "Great Plains Ratsnake",
    images: ["Assets/Snakes/GreatPlainsRatsnake_1.jpg","Assets/Snakes/GreatPlainsRatsnake_2.jpg","Assets/Snakes/GreatPlainsRatsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Ratsnakes",
    size: ["24–50 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["Great Plains","Central USA","Mexico"],
    description: "The Great Plains Ratsnake (Pantherophis emoryi) is a slender, blotched constrictor of the central plains and scrublands. Closely related to the Corn Snake, it is primarily nocturnal and feeds on rodents and small lizards."
  },
  {
    id: "022", name: "Baird's Ratsnake",
    images: ["Assets/Snakes/BairdsRatsnake_1.jpg","Assets/Snakes/BairdsRatsnake_2.jpg","Assets/Snakes/BairdsRatsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Ratsnakes",
    size: ["36–60 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["W. Texas","N. Mexico"],
    description: "Baird's Ratsnake (Pantherophis bairdi) is a beautiful snake with a subtle orange-grey iridescent sheen, found in mountain canyons and rocky desert scrub of west Texas and northern Mexico. A constrictor that feeds on rodents and lizards."
  },

  // FAMILY: Colubridae — Kingsnakes & Milksnakes
  {
    id: "023", name: "Eastern Milksnake",
    images: ["Assets/Snakes/EasternMilksnake_1.jpg","Assets/Snakes/EasternMilksnake_2.jpg","Assets/Snakes/EasternMilksnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Kingsnakes & Milksnakes",
    size: ["24–52 in"], danger: ["Harmless"], active: ["Nocturnal"], location: ["Eastern USA","Canada"],
    description: "The Eastern Milksnake (Lampropeltis triangulum) is often mistaken for the venomous Copperhead due to its blotched pattern. A skilled rodent hunter and constrictor, it is commonly found in barns and farmland. Completely harmless."
  },
  {
    id: "024", name: "Scarlet Kingsnake",
    images: ["Assets/Snakes/ScarletKingsnake_1.jpg","Assets/Snakes/ScarletKingsnake_2.jpg","Assets/Snakes/ScarletKingsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Kingsnakes & Milksnakes",
    size: ["14–20 in"], danger: ["Harmless"], active: ["Nocturnal"], location: ["SE United States"],
    description: "The Scarlet Kingsnake (Lampropeltis elapsoides) is a small, brightly banded snake that closely mimics the venomous Eastern Coral Snake. The rhyme 'red touches black, friend of Jack' helps tell them apart. Feeds on small lizards and snakes."
  },
  {
    id: "025", name: "California Kingsnake",
    images: ["Assets/Snakes/CaliforniaKingsnake_1.jpg","Assets/Snakes/CaliforniaKingsnake_2.jpg","Assets/Snakes/CaliforniaKingsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Kingsnakes & Milksnakes",
    size: ["30–48 in"], danger: ["Harmless"], active: ["Diurnal","Crepuscular"], location: ["California","SW United States","Mexico"],
    description: "The California Kingsnake (Lampropeltis californiae) is a bold black-and-white banded constrictor found across the American west. Immune to rattlesnake venom, it will actively prey on other snakes. One of the most adaptable kingsnakes."
  },
  {
    id: "026", name: "Desert Kingsnake",
    images: ["Assets/Snakes/DesertKingsnake_1.jpg","Assets/Snakes/DesertKingsnake_2.jpg","Assets/Snakes/DesertKingsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Kingsnakes & Milksnakes",
    size: ["36–60 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["SW United States","Mexico"],
    description: "The Desert Kingsnake (Lampropeltis splendida) is a striking black snake with yellow speckled patterns, found in the Chihuahuan Desert. Immune to rattlesnake venom, it preys on venomous snakes, rodents and lizards."
  },
  {
    id: "027", name: "Mexican Black Kingsnake",
    images: ["Assets/Snakes/MexicanBlackKingsnake_1.jpg","Assets/Snakes/MexicanBlackKingsnake_2.jpg","Assets/Snakes/MexicanBlackKingsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Kingsnakes & Milksnakes",
    size: ["36–48 in"], danger: ["Harmless"], active: ["Diurnal","Crepuscular"], location: ["NW Mexico","SW Arizona"],
    description: "The Mexican Black Kingsnake (Lampropeltis getula nigrita) is a jet-black subspecies of the Common Kingsnake found in the Sonoran Desert region. Immune to pit viper venom, it is an apex predator of its desert habitat."
  },

  // FAMILY: Colubridae — Racers & Whipsnakes
  {
    id: "028", name: "North American Racer",
    images: ["Assets/Snakes/NorthAmericanRacer_1.jpg","Assets/Snakes/NorthAmericanRacer_2.jpg","Assets/Snakes/NorthAmericanRacer_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Racers & Whipsnakes",
    size: ["36–60 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["USA","Canada","Mexico"],
    description: "The North American Racer (Coluber constrictor) is a fast, alert, slender snake found in open habitats across the continent. Despite its scientific name, it does not constrict prey — it overpowers small animals with its jaws and swallows them whole."
  },
  {
    id: "029", name: "Coachwhip",
    images: ["Assets/Snakes/Coachwhip_1.jpg","Assets/Snakes/Coachwhip_2.jpg","Assets/Snakes/Coachwhip_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Racers & Whipsnakes",
    size: ["48–102 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["S. United States","Mexico"],
    description: "The Coachwhip (Masticophis flagellum) is one of the fastest snakes in North America. Its long, tapered tail resembles a braided whip. A bold, diurnal hunter of lizards, small mammals and birds."
  },
  {
    id: "030", name: "Striped Whipsnake",
    images: ["Assets/Snakes/StripedWhipsnake_1.jpg","Assets/Snakes/StripedWhipsnake_2.jpg","Assets/Snakes/StripedWhipsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Racers & Whipsnakes",
    size: ["40–72 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Western USA","Mexico"],
    description: "The Striped Whipsnake (Masticophis taeniatus) is a slender, fast-moving snake of the arid west. It uses speed and excellent vision to hunt lizards, small rodents and even other snakes. Found in sagebrush, juniper and pinyon woodlands."
  },

  // FAMILY: Colubridae — Others
  {
    id: "031", name: "Ring-necked Snake",
    images: ["Assets/Snakes/RingNeckedsnake_1.jpg","Assets/Snakes/RingNeckedsnake_2.jpg","Assets/Snakes/RingNeckedsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["10–15 in"], danger: ["Mildly Venomous"], active: ["Nocturnal"], location: ["North America"],
    description: "The Ring-necked Snake (Diadophis punctatus) is a secretive, small snake identified by its bright neck ring and vivid orange-red belly. Its mild rear-fang venom is effective on small prey but harmless to humans. Prefers moist, wooded environments."
  },
  {
    id: "032", name: "Hognose Snake",
    images: ["Assets/Snakes/HognoseSnake_1.jpg","Assets/Snakes/HognoseSnake_2.jpg","Assets/Snakes/HognoseSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["15–40 in"], danger: ["Mildly Venomous"], active: ["Diurnal"], location: ["Central USA","Great Plains"],
    description: "The Hognose Snake (Heterodon nasicus) is famous for its dramatic death-feigning display — rolling onto its back and going limp when threatened. Its upturned snout is used for digging up toads. Mildly venomous but harmless to humans."
  },
  {
    id: "033", name: "Eastern Hog-nosed Snake",
    images: ["Assets/Snakes/EasternHognoseSnake_1.jpeg","Assets/Snakes/EasternHognoseSnake_2.jpg","Assets/Snakes/EasternHognoseSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["20–45 in"], danger: ["Mildly Venomous"], active: ["Diurnal"], location: ["Eastern USA"],
    description: "The Eastern Hog-nosed Snake (Heterodon platirhinos) is a master of theatrics — it hisses, spreads a cobra-like hood, and plays dead with convincing flair. Despite the performance, it is harmless to humans. Feeds almost exclusively on toads."
  },
  {
    id: "034", name: "Smooth Green Snake",
    images: ["Assets/Snakes/SmoothGreenSnake_1.jpg","Assets/Snakes/SmoothGreenSnake_2.jpg","Assets/Snakes/SmoothGreenSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["12–24 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["N. United States","Canada"],
    description: "The Smooth Green Snake (Opheodrys vernalis) is a slender, vivid green snake that blends seamlessly into meadow grasses. One of the few snakes that feeds primarily on insects and spiders. Docile and completely harmless."
  },
  {
    id: "035", name: "Rough Green Snake",
    images: ["Assets/Snakes/RoughGreenSnake_1.jpg","Assets/Snakes/RoughGreenSnake_2.jpg","Assets/Snakes/RoughGreenSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["22–32 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Eastern USA","Mexico"],
    description: "The Rough Green Snake (Opheodrys aestivus) is a slender, arboreal snake that lives in shrubs and vines near water. Its keeled scales give it a rough texture unlike its smooth-scaled relative. Feeds on insects, spiders and small frogs."
  },
  {
    id: "036", name: "Dekay's Brownsnake",
    images: ["Assets/Snakes/DekaysBrownsnake_1.jpg","Assets/Snakes/DekaysBrownsnake_2.jpg","Assets/Snakes/DekaysBrownsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["9–15 in"], danger: ["Harmless"], active: ["Diurnal","Nocturnal"], location: ["Eastern USA","Canada"],
    description: "Dekay's Brownsnake (Storeria dekayi) is a tiny, inconspicuous snake found in urban parks, gardens and woodlands. One of the most common snakes in eastern cities. Feeds primarily on slugs, earthworms and snails."
  },
  {
    id: "037", name: "Red-bellied Snake",
    images: ["Assets/Snakes/Red-belliedSnake_1.jpg","Assets/Snakes/Red-belliedSnake_2.jpg","Assets/Snakes/Red-belliedSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["8–16 in"], danger: ["Harmless"], active: ["Nocturnal"], location: ["Eastern USA","Canada"],
    description: "The Red-bellied Snake (Storeria occipitomaculata) is a tiny woodland snake identified by its bright red or orange belly and three pale neck spots. Feeds on slugs and earthworms. Secretive and rarely seen in the open."
  },
  {
    id: "038", name: "Gopher Snake",
    images: ["Assets/Snakes/GopherSnake_1.jpg","Assets/Snakes/GopherSnake_2.jpg","Assets/Snakes/GopherSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["48–96 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Western USA","Canada","Mexico"],
    description: "The Gopher Snake (Pituophis catenifer) is one of the largest snakes in North America. When threatened, it hisses loudly and vibrates its tail to mimic a rattlesnake. A powerful constrictor and important predator of rodents and rabbits."
  },
  {
    id: "039", name: "Bullsnake",
    images: ["Assets/Snakes/Bullsnake_1.jpg","Assets/Snakes/Bullsnake_2.jpg","Assets/Snakes/Bullsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["48–96 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["Great Plains","Central USA","Canada"],
    description: "The Bullsnake (Pituophis catenifer sayi) is a large, powerful subspecies of Gopher Snake native to the Great Plains. It produces a loud, raspy hiss and vibrates its tail convincingly to deter predators. An excellent burrower and rodent controller."
  },
  {
    id: "040", name: "Pine Snake",
    images: ["Assets/Snakes/PineSnake_1.jpg","Assets/Snakes/PineSnake_2.jpg","Assets/Snakes/PineSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Colubridae", group: "Others",
    size: ["48–90 in"], danger: ["Harmless"], active: ["Diurnal"], location: ["SE United States","Pine Barrens"],
    description: "The Pine Snake (Pituophis melanoleucus) is a large, heavy-bodied constrictor of sandy pine forests and scrublands. A powerful burrower, it often nests underground. Produces a loud hiss when disturbed but is harmless to humans."
  },

  // FAMILY: Viperidae — Rattlesnakes
  {
    id: "041", name: "Eastern Diamondback Rattlesnake",
    images: ["Assets/Snakes/EasternDiamondbackRattlesnake_1.jpg","Assets/Snakes/EasternDiamondbackRattlesnake_2.jpg","Assets/Snakes/EasternDiamondbackRattlesnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["36–96 in"], danger: ["Venomous"], active: ["Diurnal","Crepuscular"], location: ["SE United States","Coastal Plains"],
    description: "The Eastern Diamondback Rattlesnake (Crotalus adamanteus) is the largest venomous snake in North America. Its hemotoxic venom is highly potent. Found in pine flatwoods, palmetto scrub and coastal dunes. Seek emergency care if bitten."
  },
  {
    id: "042", name: "Western Diamondback Rattlesnake",
    images: ["Assets/Snakes/WesternDiamondbackRattlesnake_1.jpg","Assets/Snakes/WesternDiamondbackRattlesnake_2.jpg","Assets/Snakes/WesternDiamondbackRattlesnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["36–84 in"], danger: ["Venomous"], active: ["Diurnal","Nocturnal"], location: ["SW United States","Mexico"],
    description: "The Western Diamondback Rattlesnake (Crotalus atrox) is responsible for the most snakebite fatalities in the US. Identified by its black-and-white banded tail and diamond pattern. Inhabits deserts, grasslands and rocky terrain. Seek emergency care if bitten."
  },
  {
    id: "043", name: "Timber Rattlesnake",
    images: ["Assets/Snakes/TimberRattlesnake_1.jpg","Assets/Snakes/TimberRattlesnake_2.jpg","Assets/Snakes/TimberRattlesnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["36–60 in"], danger: ["Venomous"], active: ["Diurnal"], location: ["Eastern USA"],
    description: "The Timber Rattlesnake (Crotalus horridus) is a large, heavy-bodied pit viper of eastern hardwood forests and rocky hillsides. Despite its potent venom, it is generally docile and responsible for few bites. A protected species in several states."
  },
  {
    id: "044", name: "Prairie Rattlesnake",
    images: ["Assets/Snakes/PrairieRattlesnake_1.jpg","Assets/Snakes/PrairieRattlesnake_2.jpg","Assets/Snakes/PrairieRattlesnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["36–57 in"], danger: ["Venomous"], active: ["Diurnal","Nocturnal"], location: ["Great Plains","Rocky Mountains","Mexico"],
    description: "The Prairie Rattlesnake (Crotalus viridis) is the most widely distributed rattlesnake in the US, ranging from the Great Plains to the Rockies. Forms large communal dens for winter hibernation."
  },
  {
    id: "045", name: "Mojave Rattlesnake",
    images: ["Assets/Snakes/MojaveRattlesnake_1.jpg","Assets/Snakes/MojaveRattlesnake_2.jpg","Assets/Snakes/MojaveRattlesnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["24–50 in"], danger: ["Venomous"], active: ["Nocturnal","Crepuscular"], location: ["Mojave Desert","SW United States","Mexico"],
    description: "The Mojave Rattlesnake (Crotalus scutulatus) carries what many consider the most potent venom of any North American rattlesnake — a powerful neurotoxic and hemotoxic cocktail. Found in desert scrub and arid grasslands. Seek emergency care immediately if bitten."
  },
  {
    id: "046", name: "Sidewinder",
    images: ["Assets/Snakes/Sidewinder_1.jpg","Assets/Snakes/Sidewinder_2.jpg","Assets/Snakes/Sidewinder_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["17–33 in"], danger: ["Venomous"], active: ["Nocturnal","Crepuscular"], location: ["Sonoran Desert","Mojave Desert"],
    description: "The Sidewinder (Crotalus cerastes) is a small, sand-dwelling rattlesnake named for its distinctive sideways locomotion — an adaptation for moving across loose desert sand. Its horn-like supraocular scales are unmistakable. Venomous; do not handle."
  },
  {
    id: "047", name: "Massasauga",
    images: ["Assets/Snakes/Massasauga_1.jpg","Assets/Snakes/Massasauga_2.jpg","Assets/Snakes/Massasauga_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["18–30 in"], danger: ["Venomous"], active: ["Diurnal","Crepuscular"], location: ["Central USA","Canada","Mexico"],
    description: "The Massasauga (Sistrurus catenatus) is a small, stocky rattlesnake of wetlands, prairies and open woodlands. A shy species — bites are rare. The Eastern Massasauga is listed as Threatened under the US Endangered Species Act."
  },
  {
    id: "048", name: "Pygmy Rattlesnake",
    images: ["Assets/Snakes/PygmyRattlesnake_1.jpg","Assets/Snakes/PygmyRattlesnake_2.jpg","Assets/Snakes/PygmyRattlesnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Rattlesnakes",
    size: ["15–24 in"], danger: ["Venomous"], active: ["Diurnal","Nocturnal"], location: ["SE United States"],
    description: "The Pygmy Rattlesnake (Sistrurus miliarius) is the smallest rattlesnake in North America. Its tiny rattle produces a faint buzzing sound. Found in flatwoods, marshes and floodplains of the southeast. Bites require medical attention."
  },

  // FAMILY: Viperidae — Copperheads & Cottonmouths
  {
    id: "049", name: "Eastern Copperhead",
    images: ["Assets/Snakes/EasternCopperheadsnake_1.jpg","Assets/Snakes/EasternCopperheadsnake_2.jpg","Assets/Snakes/EasternCopperheadsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Copperheads & Cottonmouths",
    size: ["24–40 in"], danger: ["Venomous"], active: ["Nocturnal","Crepuscular"], location: ["Eastern USA"],
    description: "The Eastern Copperhead (Agkistrodon contortrix) is responsible for the most venomous snakebites in the eastern US, though fatalities are rare. Its hourglass-patterned camouflage makes it very difficult to spot on the forest floor. Seek medical attention if bitten."
  },
  {
    id: "050", name: "Cottonmouth",
    images: ["Assets/Snakes/CottonmouthSnake_1.jpg","Assets/Snakes/CottonmouthSnake_2.jpg","Assets/Snakes/CottonmouthSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Viperidae", group: "Copperheads & Cottonmouths",
    size: ["24–48 in"], danger: ["Venomous"], active: ["Diurnal","Nocturnal"], location: ["SE United States","Wetlands"],
    description: "The Cottonmouth (Agkistrodon piscivorus), also called the Water Moccasin, is the world's only semi-aquatic pit viper. Named for the white interior of its open mouth — a warning display. Highly venomous; do not approach near water."
  },

  // FAMILY: Elapidae — Coral Snakes
  {
    id: "051", name: "Eastern Coral Snake",
    images: ["Assets/Snakes/EasternCoralSnake_1.jpg","Assets/Snakes/EasternCoralSnake_2.jpg","Assets/Snakes/EasternCoralSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Elapidae", group: "Coral Snakes",
    size: ["20–30 in"], danger: ["Venomous"], active: ["Diurnal","Crepuscular"], location: ["SE United States"],
    description: "The Eastern Coral Snake (Micrurus fulvius) carries a potent neurotoxic venom. Identified by red-yellow-black banding — 'red touches yellow, kill a fellow.' Secretive and rarely encountered. Bites require immediate medical treatment."
  },
  {
    id: "052", name: "Texas Coral Snake",
    images: ["Assets/Snakes/TexasCoralSnake_1.jpg","Assets/Snakes/TexasCoralSnake_2.jpg","Assets/Snakes/TexasCoralSnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Elapidae", group: "Coral Snakes",
    size: ["24–48 in"], danger: ["Venomous"], active: ["Nocturnal","Crepuscular"], location: ["Texas","Louisiana","Arkansas"],
    description: "The Texas Coral Snake (Micrurus tener) is the largest North American coral snake. Like its relatives, it possesses powerful neurotoxic venom. Secretive and burrowing, it rarely bites humans but all encounters should be treated with caution."
  },
  {
    id: "053", name: "Arizona Coral Snake",
    images: ["Assets/Snakes/ArizonaCoralSnake_1.jpg","Assets/Snakes/ArizonaCoralSnake_2.jpg","Assets/Snakes/ArizonaCoralSnake_3.jpeg"],
    credit: "© iNaturalist contributors", family: "Elapidae", group: "Coral Snakes",
    size: ["13–21 in"], danger: ["Venomous"], active: ["Nocturnal","Crepuscular"], location: ["Arizona","New Mexico","Sonora"],
    description: "The Arizona Coral Snake (Micruroides euryxanthus) is the smallest coral snake in North America. Found in rocky desert and mountain scrub of the Sonoran region. Its neurotoxic venom is potent despite its small size. Rarely encountered due to its secretive nature."
  },

  // FAMILY: Leptotyphlopidae
  {
    id: "054", name: "Texas Threadsnake",
    images: ["Assets/Snakes/TexasThreadsnake_1.jpeg","Assets/Snakes/TexasThreadsnake_2.jpg","Assets/Snakes/TexasThreadsnake_3.jpg"],
    credit: "© iNaturalist contributors", family: "Leptotyphlopidae", group: "Threadsnakes",
    size: ["4–11 in"], danger: ["Harmless"], active: ["Nocturnal"], location: ["SW United States","Mexico"],
    description: "The Texas Threadsnake (Rena dulcis) is one of the world's smallest snakes — often mistaken for a pink earthworm. Blind and fossorial, it lives underground and feeds exclusively on ant and termite larvae. Completely harmless."
  },

  // FAMILY: Boidae
  {
    id: "055", name: "Rubber Boa",
    images: ["Assets/Snakes/RubberBoa_1.jpg","Assets/Snakes/RubberBoa_2.jpg","Assets/Snakes/RubberBoa_3.jpg"],
    credit: "© iNaturalist contributors", family: "Boidae", group: "Boas",
    size: ["14–33 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["Western USA","Canada"],
    description: "The Rubber Boa (Charina bottae) is one of only two boa species native to North America. Its smooth, rubbery skin and blunt tail give it a unique look. When threatened, it coils around its head and waves its tail as a decoy. An excellent burrower and swimmer."
  },
  {
    id: "056", name: "Rosy Boa",
    images: ["Assets/Snakes/RosyBoa_1.jpg","Assets/Snakes/RosyBoa_2.jpg","Assets/Snakes/RosyBoa_3.jpg"],
    credit: "© iNaturalist contributors", family: "Boidae", group: "Boas",
    size: ["24–44 in"], danger: ["Harmless"], active: ["Nocturnal","Crepuscular"], location: ["SW United States","Baja California"],
    description: "The Rosy Boa (Lichanura trivirgata) is a slow-moving, docile constrictor of rocky desert canyons and coastal scrub. One of two North American boa species, known for beautiful colour variations and calm temperament. Feeds on small rodents and lizards."
  }
];

// ============================================================
// DOM REFERENCES
// ============================================================
const snakeImg      = document.getElementById('snake-img');
const photoCredit   = document.getElementById('photo-credit');
const statNumber    = document.getElementById('stat-number');
const statName      = document.getElementById('stat-name');
const tagsSize      = document.getElementById('tags-size');
const tagsDanger    = document.getElementById('tags-danger');
const tagsActive    = document.getElementById('tags-active');
const tagsLocation  = document.getElementById('tags-location');
const snakeDesc     = document.getElementById('snake-desc');
const snakeList     = document.getElementById('snake-list');
const scrollThumb   = document.getElementById('scrollbar-thumb');
const thumbStrip    = document.getElementById('snake-thumbnails');
const detailSection = document.getElementById('snake-detail');
const descBox       = document.getElementById('desc-box');

let currentIndex = 0;

detailSection.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
descBox.style.transition       = 'opacity 0.28s ease';

const PLACEHOLDER = 'Assets/placeholder.jpg';

// ============================================================
// HELPERS
// ============================================================
function renderTags(el, items) {
  el.innerHTML = items.map(t => `<span class="tag">${t}</span>`).join('');
}

function renderThumbs(snake, activeIdx = 0) {
  thumbStrip.innerHTML = '';
  snake.images.forEach((src, i) => {
    const imgSrc = src || PLACEHOLDER;
    const div    = document.createElement('div');
    div.className = 'thumb' + (i === activeIdx ? ' active' : '');
    div.innerHTML = `<img src="${imgSrc}" alt="${snake.name} — photo ${i + 1}" loading="lazy" />`;
    div.addEventListener('click', () => {
      snakeImg.src = imgSrc;
      thumbStrip.querySelectorAll('.thumb').forEach((t, ti) =>
        t.classList.toggle('active', ti === i)
      );
    });
    thumbStrip.appendChild(div);
  });
}

// ============================================================
// LOAD SNAKE
// ============================================================
function loadSnake(index) {
  currentIndex = index;
  const snake  = snakes[index];
  const mainSrc = snake.images[0] || PLACEHOLDER;

  detailSection.style.opacity   = '0';
  detailSection.style.transform = 'translateY(6px)';
  descBox.style.opacity         = '0';

  setTimeout(() => {
    snakeImg.src            = mainSrc;
    snakeImg.alt            = snake.name;
    photoCredit.textContent = snake.credit;
    statNumber.textContent  = `NO. ${snake.id}`;
    statName.textContent    = snake.name;
    renderTags(tagsSize,     snake.size);
    renderTags(tagsDanger,   snake.danger);
    renderTags(tagsActive,   snake.active);
    renderTags(tagsLocation, snake.location);
    snakeDesc.innerHTML     = snake.description;
    renderThumbs(snake, 0);

    detailSection.style.opacity   = '1';
    detailSection.style.transform = 'translateY(0)';
    descBox.style.opacity         = '1';
  }, 200);

  snakeList.querySelectorAll('.snake-list-item').forEach((el, i) =>
    el.classList.toggle('active', i === index)
  );

  setTimeout(() => {
    const activeItem = snakeList.querySelector('.snake-list-item.active');
    if (activeItem) activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, 250);
}

// ============================================================
// BUILD LIST
// ============================================================
function buildList() {
  snakeList.innerHTML = '';
  snakes.forEach((snake, i) => {
    const item = document.createElement('div');
    item.className = 'snake-list-item' + (i === 0 ? ' active' : '');
    item.setAttribute('role',     'listitem');
    item.setAttribute('tabindex', '0');
    item.innerHTML = `
      <span class="list-number">NO. ${snake.id}</span>
      <span class="list-name">${snake.name}</span>
    `;
    item.addEventListener('click',   ()  => loadSnake(i));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSnake(i); }
    });
    snakeList.appendChild(item);
  });
}

// ============================================================
// KEYBOARD NAV
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); loadSnake(Math.min(currentIndex + 1, snakes.length - 1)); }
  if (e.key === 'ArrowUp')   { e.preventDefault(); loadSnake(Math.max(currentIndex - 1, 0)); }
});

// ============================================================
// SCROLLBAR PIP
// ============================================================
function updateScrollPip() {
  const scrollable = snakeList.scrollHeight - snakeList.clientHeight;
  const ratio      = scrollable > 0 ? snakeList.scrollTop / scrollable : 0;
  const thumbH     = Math.max(15, (snakeList.clientHeight / snakeList.scrollHeight) * 100);
  const thumbTop   = ratio * (100 - thumbH);
  scrollThumb.style.height = `${thumbH}%`;
  scrollThumb.style.top    = `${thumbTop}%`;
}

snakeList.addEventListener('scroll', updateScrollPip);

// ============================================================
// FAMILY FILTER — reads ?family= param from home page links
// ============================================================
(function applyFamilyFilter() {
  const params = new URLSearchParams(window.location.search);
  const family = params.get('family');
  if (!family) return;
  const firstIndex = snakes.findIndex(
    s => s.family.toLowerCase() === family.toLowerCase()
  );
  if (firstIndex !== -1) {
    setTimeout(() => loadSnake(firstIndex), 50);
  }
})();

// ============================================================
// INIT
// ============================================================
buildList();

(function applyFilters() {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id');
  const family  = params.get('family');
  const group   = params.get('group');

  if (id) {
    // Coming from Filter page — jump to exact snake by id
    const idx = snakes.findIndex(s => s.id === id);
    loadSnake(idx !== -1 ? idx : 0);
  } else if (family || group) {
    // Coming from Home page — jump to first snake in that family/group
    const idx = snakes.findIndex(s =>
      (family && s.family.toLowerCase() === family.toLowerCase()) ||
      (group  && s.group.toLowerCase()  === group.toLowerCase())
    );
    loadSnake(idx !== -1 ? idx : 0);
  } else {
    loadSnake(0);
  }
})();

setTimeout(updateScrollPip, 100);