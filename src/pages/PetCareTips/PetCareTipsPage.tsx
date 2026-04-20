import React, { useState } from 'react';
import {
  Dog, Cat, ChevronDown, ChevronUp, Heart, Info, Stethoscope, Bone, Activity, 
  Smile, Scissors, ShieldCheck, Brain, Home, Droplets, ShieldAlert, ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { Footer, LandingNavBar } from '../Landing/LandingPage';
import bgPattern from "../../assets/pet adoption background.png";

// --- Data ---
type PetType = 'dogs' | 'cats';

interface Tip {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
  icon: React.ReactNode;
}

const dogTips: Tip[] = [
  {
    id: 'd1',
    title: 'Daily Exercise is Crucial',
    shortText: 'Most dogs need at least 30 to 60 minutes of exercise per day.',
    fullText: 'Depending on the breed and age, your dog may need even more activity. Regular walks, runs, and active play sessions help prevent obesity, reduce behavioral problems, and keep their joints healthy. A tired dog is generally a well-behaved dog!',
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: 'd2',
    title: 'Provide a High-Quality Diet',
    shortText: 'Feed your dog premium food that meets their nutritional needs.',
    fullText: 'Consult your vet to find the best diet for your dog’s age, size, and breed. Avoid toxic human foods like grapes, chocolate, onions, and garlic. Keep fresh, clean water available at all times.',
    icon: <Bone className="w-6 h-6" />
  },
  {
    id: 'd3',
    title: 'Regular Vet Checkups',
    shortText: 'Schedule an annual wellness exam for your dog.',
    fullText: 'Preventative care is key for longevity. Annual visits ensure your dog gets required vaccinations, heartworm prevention, and early detection of potential health issues. Older dogs may benefit from bi-annual visits.',
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: 'd4',
    title: 'Positive Reinforcement Training',
    shortText: 'Use treats and praise to reinforce good behaviors.',
    fullText: 'Training builds a strong bond between you and your dog. Keep sessions short and fun. Rewarding good behavior with treats, pets, or play is far more effective than punishing bad behavior.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'd5',
    title: 'Dental Hygiene Matters',
    shortText: 'Brush your dog’s teeth regularly to prevent dental disease.',
    fullText: 'Periodontal disease is common in dogs and can lead to serious health issues like heart and kidney disease. Use dog-specific toothpaste (human toothpaste is toxic) and try to brush their teeth several times a week.',
    icon: <Smile className="w-6 h-6" />
  },
  {
    id: 'd6',
    title: 'Grooming & Coat Care',
    shortText: 'Regular brushing and bathing keep your dog’s coat healthy.',
    fullText: 'Brushing removes dirt, loose hair, and prevents painful mats from forming. Depending on the breed, they may need professional grooming, nail trims every few weeks, and routine ear cleanings to prevent infections.',
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 'd7',
    title: 'Parasite Prevention',
    shortText: 'Protect your dog from fleas, ticks, and worms.',
    fullText: 'Keep your dog on a year-round preventative for fleas, ticks, and heartworms. These parasites don’t just cause discomfort—they transmit dangerous diseases such as Lyme disease and heartworm disease.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'd8',
    title: 'Mental Stimulation',
    shortText: 'Boredom can lead to destructive behaviors, so keep their minds active.',
    fullText: 'Physical exercise is great, but mental exercise is equally tiring! Use puzzle toys, snuffle mats, teach them new tricks, or play hide-and-seek with treats to keep their brains sharp and engaged.',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'd9',
    title: 'Proper Socialization',
    shortText: 'Expose your dog to new people, pets, and environments safely.',
    fullText: 'Well-socialized dogs are generally more confident and less prone to anxiety or aggression. Introduce them to various sounds, surfaces, and safe dogs, especially during their critical socialization window as puppies.',
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'd10',
    title: 'Always Keep Them Hydrated',
    shortText: 'Ensure access to fresh, clean water at all times.',
    fullText: 'Dogs can dehydrate quickly, especially during hot weather or after exercise. Wash their water bowls daily to prevent bacteria buildup, and always bring a portable water bottle during long walks or hikes.',
    icon: <Droplets className="w-6 h-6" />
  }
];

const catTips: Tip[] = [
  {
    id: 'c1',
    title: 'Keep the Litter Box Clean',
    shortText: 'Cats are famously fastidious about their bathroom habits.',
    fullText: 'Scoop the litter box daily and completely replace the litter once a week. The rule of thumb for multiple cats is one litter box per cat, plus one extra. Place boxes in quiet, accessible locations.',
    icon: <Info className="w-6 h-6" />
  },
  {
    id: 'c2',
    title: 'Provide Scratching Posts',
    shortText: 'Scratching is a normal, healthy feline behavior.',
    fullText: 'Provide various scratching surfaces (vertical posts, horizontal scratchers, cardboard, sisal rope) to keep their claws healthy and redirect them away from your furniture. Reward them for using the correct scratchers.',
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: 'c3',
    title: 'Hydration is Key',
    shortText: 'Many cats don\'t drink enough water, which can lead to kidney issues.',
    fullText: 'Consider a pet water fountain, as many cats prefer running water. You can also incorporate wet food into their diet to increase their overall moisture intake. Keep water bowls away from their litter box.',
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: 'c4',
    title: 'Indoor Enrichment',
    shortText: 'Indoor cats need mental and physical stimulation.',
    fullText: 'Provide interactive toys, puzzle feeders, window perches, and tall cat trees. Dedicate 10-15 minutes a day to interactive play with items like wand toys to mimic hunting and keep them active.',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'c5',
    title: 'High-Quality Diet',
    shortText: 'Cats are obligate carnivores and need meat-based protein.',
    fullText: 'Consult your vet to ensure their food is high quality and age-appropriate. Be careful not to overfeed, as feline obesity leads to diabetes and joint issues. Limit treats to no more than 10% of their daily caloric intake.',
    icon: <Bone className="w-6 h-6" />
  },
  {
    id: 'c6',
    title: 'Routine Vet Care',
    shortText: 'Cats are masters at hiding illness, making yearly checkups vital.',
    fullText: 'Annual exams help catch subtle health changes early. Keep up with vaccinations, especially if your cat goes outdoors. Senior cats might need bloodwork checked twice a year to monitor kidney and thyroid function.',
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: 'c7',
    title: 'Grooming & Hairballs',
    shortText: 'Brush your cat to reduce shedding and prevent hairballs.',
    fullText: 'Though cats groom themselves, long-haired breeds need daily brushing to prevent severe mats. Even short-haired cats benefit from weekly brushing to distribute healthy skin oils and reduce the amount of fur they swallow.',
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 'c8',
    title: 'Dental Health',
    shortText: 'Dental disease is incredibly common in adult cats.',
    fullText: 'Check their mouths for red gums or bad breath. Brushing their teeth with pet-safe toothpaste is the gold standard. If they won’t tolerate brushing, discuss dental diets or water additives with your veterinarian.',
    icon: <Smile className="w-6 h-6" />
  },
  {
    id: 'c9',
    title: 'Parasite Control',
    shortText: 'Even indoor cats can get fleas and heartworms.',
    fullText: 'Fleas can hitch a ride indoors on your clothing or other pets, and mosquitoes can spread heartworm right through window screens. Keep your cat on a monthly preventative tailored for felines.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'c10',
    title: 'Create a Safe Environment',
    shortText: 'Cat-proof your home to prevent accidental poisonings.',
    fullText: 'Many common houseplants like lilies, aloe, and philodendron are highly toxic to cats. Ensure all cleaning supplies, human medications, and toxic foods (like chocolate and onions) are securely locked away.',
    icon: <ShieldAlert className="w-6 h-6" />
  }
];

// --- Components ---

function TipCard({ tip }: { tip: Tip }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(85,167,224,0.15)] flex flex-col">
      <div 
        className="p-6 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="bg-pet-blue/10 text-pet-blue p-3 rounded-lg flex-shrink-0">
            {tip.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">{tip.title}</h3>
            <p className="text-gray-600 font-sans leading-relaxed">{tip.shortText}</p>
          </div>
          <button 
            className="text-pet-blue hover:bg-pet-blue/10 p-2 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle details"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 bg-slate-50/50">
              <div className="h-px w-full bg-gray-100 mb-4"></div>
              <p className="text-gray-700 font-sans leading-relaxed">{tip.fullText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PetCareTipsPage() {
  const [activeTab, setActiveTab] = useState<PetType>('dogs');
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen font-sans text-gray-800"
      style={{
        backgroundImage: `url("${bgPattern}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed"
      }}
    >
      
      {/* Shared Navigation Bar */}
      <LandingNavBar activePage="care-tips" />

      {/* Header */}
      <header className="bg-pet-blue text-white py-20 px-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white drop-shadow-md animate-pulse" />
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-sm">
            Pet Care Essentials
          </h1>
          <p className="max-w-2xl mx-auto text-blue-50 text-xl md:text-2xl font-medium opacity-90">
            Simple and interactive tips to keep your furry friends happy, healthy, and thriving.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-2xl inline-flex relative border border-gray-200 shadow-inner">
            <button
              className={`relative z-10 flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-semibold text-lg transition-colors ${activeTab === 'dogs' ? 'text-pet-blue' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('dogs')}
            >
              <Dog className="w-6 h-6" /> Dogs
            </button>
            <button
              className={`relative z-10 flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-semibold text-lg transition-colors ${activeTab === 'cats' ? 'text-pet-blue' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('cats')}
            >
              <Cat className="w-6 h-6" /> Cats
            </button>
            
            {/* Sliding background pill */}
            <div 
              className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-white rounded-xl shadow-md border border-gray-200/50 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)`}
              style={{ transform: activeTab === 'cats' ? 'translateX(100%)' : 'translateX(0)' }}
            ></div>
          </div>
        </div>

        {/* Tips List */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'dogs' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'dogs' ? 20 : -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-6"
            >
              {(activeTab === 'dogs' ? dogTips : catTips).map(tip => (
                <TipCard key={tip.id} tip={tip} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Call to action footer */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100 shadow-sm">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-pet-blue" />
          </div>
          <h2 className="font-heading font-semibold text-3xl text-gray-900 mb-4">Every Pet is Unique</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">These are general guidelines. Always consult with your veterinarian for tailored advice for your specific pet.</p>
          <button className="bg-pet-blue hover:bg-blue-500 text-white font-heading font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] transform hover:-translate-y-1">
            Find a Local Vet
          </button>
        </div>
        
      </main>

      {/* Shared Footer component from Landing Page */}
      <div className="relative bottom-0 left-0 w-full overflow-x-hidden">
        <Footer />
      </div>
    </div>
  );
}
