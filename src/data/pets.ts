import img1 from "../assets/3ee116e0e0c5d8493030f59bcdee8e02f4f843de.png";
import img2 from "../assets/39822095d3bd75db7100b528723679e4b42cf543.png";
import img3 from "../assets/9454f91fce9e5214dc9ff8b02cd0332a7039c7fe.png";
import img4 from "../assets/1e9849d13a0b644f82eadce2da5525778537dae6.png";
import img5 from "../assets/a4dc20a82cb8d933274abe6781201d2989656bbd.png";

const testimonialPetImg = "/assets/images/cooper_testimonial.png";

export const SELECTED_PET_ID_KEY = "selectedPetId";
export const ADOPTED_PET_IDS_KEY = "adoptedPetIds";
export const POSTED_PETS_KEY = "postedPets";

export type PetData = {
  id: number;
  name: string;
  breed: string;
  gender: "Male" | "Female";
  age: string;
  location: string;
  size: "Small" | "Medium" | "Large";
  img: string;
  about: string;
};

export const ALL_PETS: PetData[] = [
  {
    id: 1,
    name: "Rocky",
    breed: "Indie",
    gender: "Male",
    age: "2 years",
    location: "Sonipat, Haryana",
    size: "Medium",
    img: img1,
    about: "Rocky is a gentle Indie boy with a calm nature and a playful side. He enjoys morning walks, simple training games, and relaxing close to his people.",
  },
  {
    id: 2,
    name: "Lucky",
    breed: "Indie",
    gender: "Male",
    age: "5 months",
    location: "Panipat, Haryana",
    size: "Small",
    img: img2,
    about: "Lucky is a curious puppy who learns quickly and loves attention. He is social, food-motivated, and thrives in homes that can give him routine and playtime.",
  },
  {
    id: 3,
    name: "Sheru",
    breed: "Labrador",
    gender: "Male",
    age: "1 year",
    location: "Delhi, NCR",
    size: "Large",
    img: img3,
    about: "Sheru is a friendly Labrador with high energy and a big heart. He loves outdoor activities, fetch sessions, and being part of an active family lifestyle.",
  },
  {
    id: 4,
    name: "Milo",
    breed: "Pomeranian",
    gender: "Male",
    age: "8 months",
    location: "Gurgaon, Haryana",
    size: "Small",
    img: img4,
    about: "Milo is a bright little companion who enjoys interactive toys and short walks. He is affectionate, alert, and happiest when included in daily family moments.",
  },
  {
    id: 5,
    name: "Bella",
    breed: "Indie",
    gender: "Female",
    age: "3 years",
    location: "Rohtak, Haryana",
    size: "Medium",
    img: img5,
    about: "Bella is a sweet and confident Indie girl who bonds deeply with her humans. She is leash-friendly, affectionate, and brings a peaceful presence to the home.",
  },
  {
    id: 6,
    name: "Daisy",
    breed: "Beagle",
    gender: "Female",
    age: "6 months",
    location: "Faridabad, Haryana",
    size: "Small",
    img: testimonialPetImg,
    about: "Daisy is a cheerful pup who is eager to explore and learn. She does well with positive guidance and enjoys cuddles after active play sessions.",
  },
  {
    id: 7,
    name: "Bruno",
    breed: "Indie",
    gender: "Male",
    age: "4 years",
    location: "Sonipat, Haryana",
    size: "Large",
    img: img1,
    about: "Bruno is a mature, loyal Indie with a steady temperament. He values routine, responds well to calm handling, and is great for families wanting a composed dog.",
  },
  {
    id: 8,
    name: "Cookie",
    breed: "Poodle",
    gender: "Female",
    age: "1 year",
    location: "Delhi, NCR",
    size: "Small",
    img: img2,
    about: "Cookie is a smart and affectionate poodle who loves mental stimulation. She is quick to adapt, eager to please, and enjoys structured enrichment.",
  },
  {
    id: 9,
    name: "Charlie",
    breed: "Labrador",
    gender: "Male",
    age: "2 years",
    location: "Panipat, Haryana",
    size: "Large",
    img: img3,
    about: "Charlie is a social Labrador who loves company and activity. He is ideal for homes that can provide regular exercise, interaction, and playful engagement.",
  },
  {
    id: 10,
    name: "Zara",
    breed: "Indie",
    gender: "Female",
    age: "7 months",
    location: "Gurgaon, Haryana",
    size: "Medium",
    img: img4,
    about: "Zara is a gentle young Indie who is growing in confidence every day. She appreciates patient handling and blossoms in loving, predictable environments.",
  },
  {
    id: 11,
    name: "Buddy",
    breed: "Beagle",
    gender: "Male",
    age: "3 years",
    location: "Rohtak, Haryana",
    size: "Medium",
    img: img5,
    about: "Buddy is a friendly and steady beagle with a playful spark. He enjoys neighborhood walks, scent games, and quality time with people he trusts.",
  },
  {
    id: 12,
    name: "Luna",
    breed: "Pomeranian",
    gender: "Female",
    age: "5 months",
    location: "Faridabad, Haryana",
    size: "Small",
    img: testimonialPetImg,
    about: "Luna is a bright, playful pomeranian puppy who loves attention and gentle training. She thrives in homes ready for puppy routines and positive socialization.",
  },
];

export const getAllPetsCombined = (): PetData[] => {
  try {
    const posted = JSON.parse(localStorage.getItem(POSTED_PETS_KEY) || "[]");
    return [...posted, ...ALL_PETS];
  } catch {
    return ALL_PETS;
  }
};
