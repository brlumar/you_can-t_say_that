const cardData = [
    {
        guessWord: 'apple',
        tabooWords: [
            { buzzword: 'red'},
            { buzzword: 'fruit'},
            { buzzword: 'pie'},
            { buzzword: 'cider'},
        ]
    },
    {
        guessWord: 'deli',
        tabooWords: [
            { buzzword: 'kosher'},
            { buzzword: 'pastrami'},
            { buzzword: 'sandwhich'},
            { buzzword: 'eat'},
        ]
    },
    {
        guessWord: 'ocean',
        tabooWords: [
            { buzzword: 'waves' },
            { buzzword: 'beach' },
            { buzzword: 'saltwater' },
            { buzzword: 'marine life' },
        ]
    },
    {
        guessWord: 'guitar',
        tabooWords: [
            { buzzword: 'music' },
            { buzzword: 'strings' },
            { buzzword: 'instrument' },
            { buzzword: 'acoustic' },
        ]
    },
    {
        guessWord: 'sunglasses',
        tabooWords: [
            { buzzword: 'shade' },
            { buzzword: 'eyewear' },
            { buzzword: 'protection' },
            { buzzword: 'UV rays' },
        ]
    },
    {
        guessWord: 'camera',
        tabooWords: [
            { buzzword: 'photography' },
            { buzzword: 'lens' },
            { buzzword: 'shutter' },
            { buzzword: 'capturing moments' },
        ]
    },    
    {
        guessWord: 'mountain',
        tabooWords: [
            { buzzword: 'summit' },
            { buzzword: 'peak' },
            { buzzword: 'climbing' },
            { buzzword: 'elevation' },
        ]
    },
    {
        guessWord: 'sunflower',
        tabooWords: [
            { buzzword: 'yellow' },
            { buzzword: 'petals' },
            { buzzword: 'sun' },
            { buzzword: 'garden' },
        ]
    },
    {
        guessWord: 'umbrella',
        tabooWords: [
            { buzzword: 'rain' },
            { buzzword: 'cover' },
            { buzzword: 'handle' },
            { buzzword: 'weather' },
        ]
    },
    {
        guessWord: 'bicycle',
        tabooWords: [
            { buzzword: 'pedals' },
            { buzzword: 'ride' },
            { buzzword: 'wheels' },
            { buzzword: 'cycle' },
        ]
    },
    {
        guessWord: 'piano',
        tabooWords: [
            { buzzword: 'keys' },
            { buzzword: 'music' },
            { buzzword: 'instrument' },
            { buzzword: 'melody' },
        ]
    },
    {
        guessWord: 'elephant',
        tabooWords: [
            { buzzword: 'trunk' },
            { buzzword: 'tusk' },
            { buzzword: 'large' },
            { buzzword: 'mammal' },
        ]
    },
    {
        guessWord: 'fireworks',
        tabooWords: [
            { buzzword: 'explosions' },
            { buzzword: 'celebration' },
            { buzzword: 'colors' },
            { buzzword: 'sky' },
        ]
    },
    {
        guessWord: 'moon',
        tabooWords: [
            { buzzword: 'night' },
            { buzzword: 'crater' },
            { buzzword: 'lunar' },
            { buzzword: 'space' },
        ]
    },
    {
        guessWord: 'giraffe',
        tabooWords: [
            { buzzword: 'tall' },
            { buzzword: 'neck' },
            { buzzword: 'spots' },
            { buzzword: 'wildlife' },
        ]
    },
    {
        guessWord: 'book',
        tabooWords: [
            { buzzword: 'pages' },
            { buzzword: 'reading' },
            { buzzword: 'novel' },
            { buzzword: 'author' },
        ]
    },
    {
        guessWord: 'butterfly',
        tabooWords: [
            { buzzword: 'wings' },
            { buzzword: 'insect' },
            { buzzword: 'caterpillar' },
            { buzzword: 'flutter' },
        ]
    },
    {
        guessWord: 'chocolate',
        tabooWords: [
            { buzzword: 'sweet' },
            { buzzword: 'cocoa' },
            { buzzword: 'dessert' },
            { buzzword: 'indulgence' },
        ]
    },
    {
        guessWord: 'telescope',
        tabooWords: [
            { buzzword: 'astronomy' },
            { buzzword: 'stars' },
            { buzzword: 'observe' },
            { buzzword: 'galaxy' },
        ]
    },
    {
        guessWord: 'puzzle',
        tabooWords: [
            { buzzword: 'pieces' },
            { buzzword: 'solve' },
            { buzzword: 'challenge' },
            { buzzword: 'brainteaser' },
        ]
    },
    {
        guessWord: 'parrot',
        tabooWords: [
            { buzzword: 'feathers' },
            { buzzword: 'bird' },
            { buzzword: 'colorful' },
            { buzzword: 'talk' },
        ]
    },
    {
        guessWord: 'ballet',
        tabooWords: [
            { buzzword: 'dancers' },
            { buzzword: 'graceful' },
            { buzzword: 'performance' },
            { buzzword: 'pointe shoes' },
        ]
    },
    {
        guessWord: 'sailboat',
        tabooWords: [
            { buzzword: 'ocean' },
            { buzzword: 'sails' },
            { buzzword: 'navigation' },
            { buzzword: 'wind' },
        ]
    },
    {
        guessWord: 'castle',
        tabooWords: [
            { buzzword: 'fortress' },
            { buzzword: 'royalty' },
            { buzzword: 'medieval' },
            { buzzword: 'moat' },
        ]
    },
    {
        guessWord: 'snowflake',
        tabooWords: [
            { buzzword: 'ice' },
            { buzzword: 'crystal' },
            { buzzword: 'winter' },
            { buzzword: 'unique' },
        ]
    }, 
    {
        guessWord: 'rainbow',
        tabooWords: [
            { buzzword: 'colors' },
            { buzzword: 'sky' },
            { buzzword: 'arc' },
            { buzzword: 'weather' },
        ]
    },
    {
        guessWord: 'submarine',
        tabooWords: [
            { buzzword: 'underwater' },
            { buzzword: 'navy' },
            { buzzword: 'torpedoes' },
            { buzzword: 'periscope' },
        ]
    },
    {
        guessWord: 'volcano',
        tabooWords: [
            { buzzword: 'eruption' },
            { buzzword: 'lava' },
            { buzzword: 'crater' },
            { buzzword: 'magma' },
        ]
    },
    {
        guessWord: 'robot',
        tabooWords: [
            { buzzword: 'automation' },
            { buzzword: 'technology' },
            { buzzword: 'artificial intelligence' },
            { buzzword: 'mechanical' },
        ]
    },
    {
        guessWord: 'astronaut',
        tabooWords: [
            { buzzword: 'space' },
            { buzzword: 'NASA' },
            { buzzword: 'cosmonaut' },
            { buzzword: 'zero gravity' },
        ]
    },
    {
        guessWord: 'firefighter',
        tabooWords: [
            { buzzword: 'fire' },
            { buzzword: 'rescue' },
            { buzzword: 'bravery' },
            { buzzword: 'hose'}
        ]
    },
    {
        guessWord: 'astronomy',
        tabooWords: [
            { buzzword: 'stars' },
            { buzzword: 'telescope' },
            { buzzword: 'galaxy' },
            { buzzword: 'cosmos' },
        ]
    },
    {
        guessWord: 'recipe',
        tabooWords: [
            { buzzword: 'cooking' },
            { buzzword: 'ingredients' },
            { buzzword: 'instructions' },
            { buzzword: 'chef' },
        ]
    },
    {
        guessWord: 'jungle',
        tabooWords: [
            { buzzword: 'rainforest' },
            { buzzword: 'wildlife' },
            { buzzword: 'trees' },
            { buzzword: 'exotic' },
        ]
    },
    {
        guessWord: 'garden',
        tabooWords: [
            { buzzword: 'flowers' },
            { buzzword: 'plants' },
            { buzzword: 'gardening' },
            { buzzword: 'soil' },
        ]
    },
    {
        guessWord: 'treasure',
        tabooWords: [
            { buzzword: 'gold' },
            { buzzword: 'map' },
            { buzzword: 'pirate' },
            { buzzword: 'chest' },
        ]
    },
    {
        guessWord: 'detective',
        tabooWords: [
            { buzzword: 'investigation' },
            { buzzword: 'clues' },
            { buzzword: 'mystery' },
            { buzzword: 'crime' },
        ]
    },
    {
        guessWord: 'desert',
        tabooWords: [
            { buzzword: 'sand' },
            { buzzword: 'heat' },
            { buzzword: 'oasis' },
            { buzzword: 'arid' },
        ]
    },
    {
        guessWord: 'superhero',
        tabooWords: [
            { buzzword: 'cape' },
            { buzzword: 'powers' },
            { buzzword: 'villain' },
            { buzzword: 'mask' },
        ]
    },
    {
        guessWord: 'rocket',
        tabooWords: [
            { buzzword: 'space' },
            { buzzword: 'launch' },
            { buzzword: 'fuel' },
            { buzzword: 'astronaut' },
        ]
    },
    {
        guessWord: 'time travel',
        tabooWords: [
            { buzzword: 'future' },
            { buzzword: 'past' },
            { buzzword: 'machine' },
            { buzzword: 'timeline' },
        ]
    },
    {
        guessWord: 'invention',
        tabooWords: [
            { buzzword: 'creativity' },
            { buzzword: 'patent' },
            { buzzword: 'discovery' },
            { buzzword: 'innovate' },
        ]
    },
    {
        guessWord: 'carnival',
        tabooWords: [
            { buzzword: 'rides' },
            { buzzword: 'games' },
            { buzzword: 'entertainment' },
            { buzzword: 'funfair' },
        ]
    },
    {
        guessWord: 'adventure',
        tabooWords: [
            { buzzword: 'explore' },
            { buzzword: 'journey' },
            { buzzword: 'excitement' },
            { buzzword: 'risk' },
        ]
    },
    {
        guessWord: 'magic',
        tabooWords: [
            { buzzword: 'illusion' },
            { buzzword: 'sorcery' },
            { buzzword: 'wand' },
            { buzzword: 'spell' },
        ]
    },
    {
        guessWord: 'galaxy',
        tabooWords: [
            { buzzword: 'stars' },
            { buzzword: 'universe' },
            { buzzword: 'cosmos' },
            { buzzword: 'milky way' },
        ]
    },
    {
        guessWord: 'chocolate',
        tabooWords: [
            { buzzword: 'sweet' },
            { buzzword: 'cocoa' },
            { buzzword: 'dessert' },
            { buzzword: 'indulgence' },
        ]
    },
    {
        guessWord: 'rainforest',
        tabooWords: [
            { buzzword: 'jungle' },
            { buzzword: 'wildlife' },
            { buzzword: 'flora' },
            { buzzword: 'tropical' },
        ]
    },
    {
        guessWord: 'karate',
        tabooWords: [
            { buzzword: 'martial arts' },
            { buzzword: 'dojo' },
            { buzzword: 'black belt' },
            { buzzword: 'kick' },
        ]
    },
    {
        guessWord: 'robotics',
        tabooWords: [
            { buzzword: 'automation' },
            { buzzword: 'technology' },
            { buzzword: 'machines' },
            { buzzword: 'programming' },
        ]
    },
    {
        guessWord: 'dinosaur',
        tabooWords: [
            { buzzword: 'extinct' },
            { buzzword: 'fossil' },
            { buzzword: 'prehistoric' },
            { buzzword: 'paleontology' },
        ]
    },
    {
        guessWord: 'spider',
        tabooWords: [
            { buzzword: 'web' },
            { buzzword: 'insect' },
            { buzzword: 'arachnid' },
            { buzzword: 'venom' },
        ]
    },
    {
        guessWord: 'constellation',
        tabooWords: [
            { buzzword: 'stars' },
            { buzzword: 'sky' },
            { buzzword: 'mythology' },
            { buzzword: 'astronomy' },
        ]
    },
    {
        guessWord: 'spacetime',
        tabooWords: [
            { buzzword: 'relativity' },
            { buzzword: 'gravity' },
            { buzzword: 'cosmos' },
            { buzzword: 'Einstein' },
        ]
    },
    {
        guessWord: 'architecture',
        tabooWords: [
            { buzzword: 'design' },
            { buzzword: 'buildings' },
            { buzzword: 'blueprints' },
            { buzzword: 'architect' },
        ]
    },
    {
        guessWord: 'tropical',
        tabooWords: [
            { buzzword: 'exotic' },
            { buzzword: 'climate' },
            { buzzword: 'palms' },
            { buzzword: 'island' },
        ]
    },
    {
        guessWord: 'oasis',
        tabooWords: [
            { buzzword: 'desert' },
            { buzzword: 'water' },
            { buzzword: 'palm trees' },
            { buzzword: 'refreshing' },
        ]
    },
    {
        guessWord: 'symphony',
        tabooWords: [
            { buzzword: 'orchestra' },
            { buzzword: 'composition' },
            { buzzword: 'conductor' },
            { buzzword: 'musical' },
        ]
    },
    {
        guessWord: 'mirage',
        tabooWords: [
            { buzzword: 'illusion' },
            { buzzword: 'desert' },
            { buzzword: 'optical' },
            { buzzword: 'deception' },
        ]
    },
    {
        guessWord: 'telescope',
        tabooWords: [
            { buzzword: 'astronomy' },
            { buzzword: 'stars' },
            { buzzword: 'observe' },
            { buzzword: 'galaxy' },
        ]
    },
    {
        guessWord: 'kangaroo',
        tabooWords: [
            { buzzword: 'marsupial' },
            { buzzword: 'Australia' },
            { buzzword: 'jumps' },
            { buzzword: 'pouch' },
        ]
    },
    {
        guessWord: 'whale',
        tabooWords: [
            { buzzword: 'ocean' },
            { buzzword: 'mammal' },
            { buzzword: 'blowhole' },
            { buzzword: 'marine' },
        ]
    },
    {
        guessWord: 'carnivore',
        tabooWords: [
            { buzzword: 'meat' },
            { buzzword: 'predator' },
            { buzzword: 'teeth' },
            { buzzword: 'hunter' },
        ]
    },
    {
        guessWord: 'island',
        tabooWords: [
            { buzzword: 'ocean' },
            { buzzword: 'beach' },
            { buzzword: 'palm trees' },
            { buzzword: 'tropical' },
        ]
    },
    {
        guessWord: 'microscope',
        tabooWords: [
            { buzzword: 'biology' },
            { buzzword: 'cells' },
            { buzzword: 'laboratory' },
            { buzzword: 'science' },
        ]
    },
    {
        guessWord: 'aurora',
        tabooWords: [
            { buzzword: 'northern lights' },
            { buzzword: 'polar' },
            { buzzword: 'atmosphere' },
            { buzzword: 'colors' },
        ]
    },
    {
        guessWord: 'penguin',
        tabooWords: [
            { buzzword: 'Antarctica' },
            { buzzword: 'bird' },
            { buzzword: 'waddle' },
            { buzzword: 'flippers' },
        ]
    },
    {
        guessWord: 'tornado',
        tabooWords: [
            { buzzword: 'storm' },
            { buzzword: 'funnel' },
            { buzzword: 'destructive' },
            { buzzword: 'wind' },
        ]
    },
    {
        guessWord: 'globe',
        tabooWords: [
            { buzzword: 'world' },
            { buzzword: 'map' },
            { buzzword: 'geography' },
            { buzzword: 'continents' },
        ]
    },
    {
        guessWord: 'caterpillar',
        tabooWords: [
            { buzzword: 'butterfly' },
            { buzzword: 'larva' },
            { buzzword: 'insect' },
            { buzzword: 'transform' },
        ]
    },
    {
        guessWord: 'carousel',
        tabooWords: [
            { buzzword: 'amusement park' },
            { buzzword: 'horses' },
            { buzzword: 'music' },
            { buzzword: 'ride' },
        ]
    },
    {
        guessWord: 'toucan',
        tabooWords: [
            { buzzword: 'bird' },
            { buzzword: 'tropical' },
            { buzzword: 'beak' },
            { buzzword: 'colorful' },
        ]
    },
    {
        guessWord: 'ostrich',
        tabooWords: [
            { buzzword: 'bird' },
            { buzzword: 'fastest' },
            { buzzword: 'feathers' },
            { buzzword: 'large' },
        ]
    },
    {
        guessWord: 'fossil',
        tabooWords: [
            { buzzword: 'prehistoric' },
            { buzzword: 'bones' },
            { buzzword: 'ancient' },
            { buzzword: 'archeology' },
        ]
    },
    {
        guessWord: 'aurora',
        tabooWords: [
            { buzzword: 'northern lights' },
            { buzzword: 'polar' },
            { buzzword: 'atmosphere' },
            { buzzword: 'colors' },
        ]
    }, 
    {
        guessWord: 'jazz',
        tabooWords: [
            { buzzword: 'music' },
            { buzzword: 'improvisation' },
            { buzzword: 'trumpet' },
            { buzzword: 'rhythm' },
        ]
    },
    {
        guessWord: 'monsoon',
        tabooWords: [
            { buzzword: 'rain' },
            { buzzword: 'season' },
            { buzzword: 'storm' },
            { buzzword: 'umbrella' },
        ]
    },
    {
        guessWord: 'savannah',
        tabooWords: [
            { buzzword: 'grassland' },
            { buzzword: 'wildlife' },
            { buzzword: 'Africa' },
            { buzzword: 'herd' },
        ]
    },
    {
        guessWord: 'observatory',
        tabooWords: [
            { buzzword: 'telescope' },
            { buzzword: 'astronomy' },
            { buzzword: 'stars' },
            { buzzword: 'galaxy' },
        ]
    },
    {
        guessWord: 'volleyball',
        tabooWords: [
            { buzzword: 'sport' },
            { buzzword: 'net' },
            { buzzword: 'serve' },
            { buzzword: 'spike' },
        ]
    },
    {
        guessWord: 'solar system',
        tabooWords: [
            { buzzword: 'planets' },
            { buzzword: 'sun' },
            { buzzword: 'orbit' },
            { buzzword: 'astronomy' },
        ]
    },
    {
        guessWord: 'fountain',
        tabooWords: [
            { buzzword: 'water' },
            { buzzword: 'sculpture' },
            { buzzword: 'park' },
            { buzzword: 'flow' },
        ]
    },
    {
        guessWord: 'tiger',
        tabooWords: [
            { buzzword: 'wildlife' },
            { buzzword: 'stripes' },
            { buzzword: 'jungle' },
            { buzzword: 'predator' },
        ]
    },
    {
        guessWord: 'avalanche',
        tabooWords: [
            { buzzword: 'snow' },
            { buzzword: 'mountain' },
            { buzzword: 'disaster' },
            { buzzword: 'slide' },
        ]
    },
    {
        guessWord: 'teapot',
        tabooWords: [
            { buzzword: 'kettle' },
            { buzzword: 'pour' },
            { buzzword: 'handle' },
            { buzzword: 'brew' },
        ]
    },
    {
        guessWord: 'lighthouse',
        tabooWords: [
            { buzzword: 'sea' },
            { buzzword: 'beacon' },
            { buzzword: 'navigation' },
            { buzzword: 'tower' },
        ]
    },
    {
        guessWord: 'gondola',
        tabooWords: [
            { buzzword: 'canal' },
            { buzzword: 'Venice' },
            { buzzword: 'boat' },
            { buzzword: 'paddle' },
        ]
    },
    {
        guessWord: 'saxophone',
        tabooWords: [
            { buzzword: 'jazz' },
            { buzzword: 'instrument' },
            { buzzword: 'brass' },
            { buzzword: 'music' },
        ]
    },
    {
        guessWord: 'flamingo',
        tabooWords: [
            { buzzword: 'bird' },
            { buzzword: 'pink' },
            { buzzword: 'wade' },
            { buzzword: 'wings' },
        ]
    },
    {
        guessWord: 'puzzle',
        tabooWords: [
            { buzzword: 'pieces' },
            { buzzword: 'solve' },
            { buzzword: 'challenge' },
            { buzzword: 'brainteaser' },
        ]
    },
    {
        guessWord: 'avalanche',
        tabooWords: [
            { buzzword: 'snow' },
            { buzzword: 'mountain' },
            { buzzword: 'disaster' },
            { buzzword: 'slide' },
        ]
    },
    {
        guessWord: 'compass',
        tabooWords: [
            { buzzword: 'direction' },
            { buzzword: 'navigation' },
            { buzzword: 'magnet' },
            { buzzword: 'north' },
        ]
    },
    {
        guessWord: 'chameleon',
        tabooWords: [
            { buzzword: 'reptile' },
            { buzzword: 'camouflage' },
            { buzzword: 'tongue' },
            { buzzword: 'colorful' },
        ]
    },
    {
        guessWord: 'tornado',
        tabooWords: [
            { buzzword: 'storm' },
            { buzzword: 'funnel' },
            { buzzword: 'destructive' },
            { buzzword: 'wind' },
        ]
    },
    {
        guessWord: 'dragonfly',
        tabooWords: [
            { buzzword: 'insect' },
            { buzzword: 'wings' },
            { buzzword: 'aquatic' },
            { buzzword: 'fly' },
        ]
    },
    {
        guessWord: 'sushi',
        tabooWords: [
            { buzzword: 'Japanese' },
            { buzzword: 'rice' },
            { buzzword: 'raw' },
            { buzzword: 'seafood' },
        ]
    }

]