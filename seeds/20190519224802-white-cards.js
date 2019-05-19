'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let records = [
      {text: "Coat hanger abortions.", creatorId: 0},
      {text: "Man meat.", creatorId: 0},
      {text: "Autocannibalism.", creatorId: 0},
      {text: "Vigorous jazz hands.", creatorId: 0},
      {text: "Flightless birds.", creatorId: 0},
      {text: "Pictures of boobs.", creatorId: 0},
      {text: "Doing the right thing.", creatorId: 0},
      {text: "The violation of our most basic human rights.", creatorId: 0},
      {text: "Viagra&reg;.", creatorId: 0},
      {text: "Self-loathing.", creatorId: 0},
      {text: "Spectacular abs.", creatorId: 0},
      {text: "A balanced breakfast.", creatorId: 0},
      {text: "Roofies.", creatorId: 0},
      {text: "Concealing a boner.", creatorId: 0},
      {text: "Amputees.", creatorId: 0},
      {text: "The Big Bang.", creatorId: 0},
      {text: "Former President George W. Bush.", creatorId: 0},
      {text: "The Rev. Dr. Martin Luther King, Jr.", creatorId: 0},
      {text: "Smegma.", creatorId: 0},
      {text: "Being marginalized.", creatorId: 0},
      {text: "Cuddling.", creatorId: 0},
      {text: "Laying an egg.", creatorId: 0},
      {text: "The Pope.", creatorId: 0},
      {text: "Aaron Burr.", creatorId: 0},
      {text: "Genital piercings.", creatorId: 0},
      {text: "Fingering.", creatorId: 0},
      {text: "A bleached asshole.", creatorId: 0},
      {text: "Horse meat.", creatorId: 0},
      {text: "Fear itself.", creatorId: 0},
      {text: "Science.", creatorId: 0},
      {text: "Elderly Japanese men.", creatorId: 0},
      {text: "Stranger danger.", creatorId: 0},
      {text: "The terrorists.", creatorId: 0},
      {text: "Praying the gay away.", creatorId: 0},
      {text: "Same-sex ice dancing.", creatorId: 0},
      {text: "Ethnic cleansing.", creatorId: 0},
      {text: "Cheating in the Special Olympics.", creatorId: 0},
      {text: "German dungeon porn.", creatorId: 0},
      {text: "Bingeing and purging.", creatorId: 0},
      {text: "Making a pouty face.", creatorId: 0},
      {text: "William Shatner.", creatorId: 0},
      {text: "Heteronormativity.", creatorId: 0},
      {text: "Nickelback.", creatorId: 0},
      {text: "Tom Cruise.", creatorId: 0},
      {text: "The profoundly handicapped.", creatorId: 0},
      {text: "The placenta.", creatorId: 0},
      {text: "Chainsaws for hands.", creatorId: 0},
      {text: "Arnold Schwarzenegger.", creatorId: 0},
      {text: "An icepick lobotomy.", creatorId: 0},
      {text: "Goblins.", creatorId: 0},
      {text: "Object permanence.", creatorId: 0},
      {text: "Dying.", creatorId: 0},
      {text: "Foreskin.", creatorId: 0},
      {text: "A falcon with a cap on its head.", creatorId: 0},
      {text: "Hormone injections.", creatorId: 0},
      {text: "Dying of dysentery.", creatorId: 0},
      {text: "Sexy pillow fights.", creatorId: 0},
      {text: "The invisible hand.", creatorId: 0},
      {text: "A really cool hat.", creatorId: 0},
      {text: "Sean Penn.", creatorId: 0},
      {text: "Heartwarming orphans.", creatorId: 0},
      {text: "The clitoris.", creatorId: 0},
      {text: "The Three-Fifths compromise.", creatorId: 0},
      {text: "A sad handjob.", creatorId: 0},
      {text: "Men.", creatorId: 0},
      {text: "Historically black colleges.", creatorId: 0},
      {text: "A micropenis.", creatorId: 0},
      {text: "Raptor attacks.", creatorId: 0},
      {text: "Agriculture.", creatorId: 0},
      {text: "Vikings.", creatorId: 0},
      {text: "Pretending to care.", creatorId: 0},
      {text: "The Underground Railroad.", creatorId: 0},
      {text: "My humps.", creatorId: 0},
      {text: "Being a dick to children.", creatorId: 0},
      {text: "Geese.", creatorId: 0},
      {text: "Bling.", creatorId: 0},
      {text: "Sniffing glue.", creatorId: 0},
      {text: "The South.", creatorId: 0},
      {text: "An Oedipus complex.", creatorId: 0},
      {text: "Eating all of the cookies before the AIDS bake-sale.", creatorId: 0},
      {text: "Sexting.", creatorId: 0},
      {text: "YOU MUST CONSTRUCT ADDITIONAL PYLONS.", creatorId: 0},
      {text: "Mutually-assured destruction.", creatorId: 0},
      {text: "Sunshine and rainbows.", creatorId: 0},
      {text: "Count Chocula.", creatorId: 0},
      {text: "Sharing needles.", creatorId: 0},
      {text: "Being rich.", creatorId: 0},
      {text: "Skeletor.", creatorId: 0},
      {text: "A sausage festival.", creatorId: 0},
      {text: "Michael Jackson.", creatorId: 0},
      {text: "Emotions.", creatorId: 0},
      {text: "Farting and walking away.", creatorId: 0},
      {text: "The Chinese gymnastics team.", creatorId: 0},
      {text: "Necrophilia.", creatorId: 0},
      {text: "Spontaneous human combustion.", creatorId: 0},
      {text: "Yeast.", creatorId: 0},
      {text: "Leaving an awkward voicemail.", creatorId: 0},
      {text: "Dick Cheney.", creatorId: 0},
      {text: "White people.", creatorId: 0},
      {text: "Penis envy.", creatorId: 0},
      {text: "Teaching a robot to love.", creatorId: 0},
      {text: "Sperm whales.", creatorId: 0},
      {text: "Scrubbing under the folds.", creatorId: 0},
      {text: "Panda sex.", creatorId: 0},
      {text: "Whipping it out.", creatorId: 0},
      {text: "Catapults.", creatorId: 0},
      {text: "Masturbation.", creatorId: 0},
      {text: "Natural selection.", creatorId: 0},
      {text: "Opposable thumbs.", creatorId: 0},
      {text: "A sassy black woman.", creatorId: 0},
      {text: "AIDS.", creatorId: 0},
      {text: "The KKK.", creatorId: 0},
      {text: "Figgy pudding.", creatorId: 0},
      {text: "Seppuku.", creatorId: 0},
      {text: "Gandhi.", creatorId: 0},
      {text: "Preteens.", creatorId: 0},
      {text: "Toni Morrison's vagina.", creatorId: 0},
      {text: "Five-Dollar Footlongs&trade;.", creatorId: 0},
      {text: "Land mines.", creatorId: 0},
      {text: "A sea of troubles.", creatorId: 0},
      {text: "A zesty breakfast burrito.", creatorId: 0},
      {text: "Christopher Walken.", creatorId: 0},
      {text: "Friction.", creatorId: 0},
      {text: "Balls.", creatorId: 0},
      {text: "Dental dams.", creatorId: 0},
      {text: "A can of whoop-ass.", creatorId: 0},
      {text: "A tiny horse.", creatorId: 0},
      {text: "Waiting 'til marriage.", creatorId: 0},
      {text: "Authentic Mexican cuisine.", creatorId: 0},
      {text: "Genghis Khan.", creatorId: 0},
      {text: "Old-people smell.", creatorId: 0},
      {text: "Feeding Rosie O'Donnell.", creatorId: 0},
      {text: "Pixelated bukkake.", creatorId: 0},
      {text: "Friends with benefits.", creatorId: 0},
      {text: "The token minority.", creatorId: 0},
      {text: "The Tempur-Pedic&reg; Swedish Sleep System&trade;.", creatorId: 0},
      {text: "A thermonuclear detonation.", creatorId: 0},
      {text: "Take-backsies.", creatorId: 0},
      {text: "The Rapture.", creatorId: 0},
      {text: "A cooler full of organs.", creatorId: 0},
      {text: "Sweet, sweet vengeance.", creatorId: 0},
      {text: "RoboCop.", creatorId: 0},
      {text: "Keanu Reeves.", creatorId: 0},
      {text: "Drinking alone.", creatorId: 0},
      {text: "Giving 110%.", creatorId: 0},
      {text: "Flesh-eating bacteria.", creatorId: 0},
      {text: "The American Dream.", creatorId: 0},
      {text: "Taking off your shirt.", creatorId: 0},
      {text: "Me time.", creatorId: 0},
      {text: "A murder most foul.", creatorId: 0},
      {text: "The inevitable heat death of the universe.", creatorId: 0},
      {text: "The folly of man.", creatorId: 0},
      {text: "That thing that electrocutes your abs.", creatorId: 0},
      {text: "Cards Against Humanity.", creatorId: 0},
      {text: "Fiery poops.", creatorId: 0},
      {text: "Poor people.", creatorId: 0},
      {text: "Edible underpants.", creatorId: 0},
      {text: "Britney Spears at 55.", creatorId: 0},
      {text: "All-you-can-eat shrimp for $4.99.", creatorId: 0},
      {text: "Pooping back and forth. Forever.", creatorId: 0},
      {text: "Fancy Feast&reg;.", creatorId: 0},
      {text: "Jewish fraternities.", creatorId: 0},
      {text: "Being a motherfucking sorcerer.", creatorId: 0},
      {text: "Pulling out.", creatorId: 0},
      {text: "Picking up girls at the abortion clinic.", creatorId: 0},
      {text: "The homosexual agenda.", creatorId: 0},
      {text: "The Holy Bible.", creatorId: 0},
      {text: "Passive-agression.", creatorId: 0},
      {text: "Ronald Reagan.", creatorId: 0},
      {text: "Vehicular manslaughter.", creatorId: 0},
      {text: "Nipple blades.", creatorId: 0},
      {text: "Assless chaps.", creatorId: 0},
      {text: "Full frontal nudity.", creatorId: 0},
      {text: "Hulk Hogan.", creatorId: 0},
      {text: "Daddy issues.", creatorId: 0},
      {text: "The hardworking Mexican.", creatorId: 0},
      {text: "Natalie Portman.", creatorId: 0},
      {text: "Waking up half-naked in a Denny's parking lot.", creatorId: 0},
      {text: "God.", creatorId: 0},
      {text: "Sean Connery.", creatorId: 0},
      {text: "Saxophone solos.", creatorId: 0},
      {text: "Gloryholes.", creatorId: 0},
      {text: "The World of Warcraft.", creatorId: 0},
      {text: "Homeless people.", creatorId: 0},
      {text: "Scalping.", creatorId: 0},
      {text: "Darth Vader.", creatorId: 0},
      {text: "Eating the last known bison.", creatorId: 0},
      {text: "Guys who don't call.", creatorId: 0},
      {text: "Hot Pockets&reg;.", creatorId: 0},
      {text: "A time travel paradox.", creatorId: 0},
      {text: "The milk man.", creatorId: 0},
      {text: "Testicular torsion.", creatorId: 0},
      {text: "Dropping a chandelier on your enemies and riding the rope up.", creatorId: 0},
      {text: "World peace.", creatorId: 0},
      {text: "A salty surprise.", creatorId: 0},
      {text: "Poorly-timed Holocaust jokes.", creatorId: 0},
      {text: "Smallpox blankets.", creatorId: 0},
      {text: "Licking things to claim them as your own.", creatorId: 0},
      {text: "The heart of a child.", creatorId: 0},
      {text: "Robert Downey, Jr.", creatorId: 0},
      {text: "Lockjaw.", creatorId: 0},
      {text: "Eugenics.", creatorId: 0},
      {text: "A good sniff.", creatorId: 0},
      {text: "Friendly fire.", creatorId: 0},
      {text: "The taint; the grundle; the fleshy fun-bridge.", creatorId: 0},
      {text: "Wearing underwear inside-out to avoid doing laundry.", creatorId: 0},
      {text: "Hurricane Katrina.", creatorId: 0},
      {text: "Free samples.", creatorId: 0},
      {text: "Jerking off into a pool of children's tears.", creatorId: 0},
      {text: "A foul mouth.", creatorId: 0},
      {text: "The glass ceiling.", creatorId: 0},
      {text: "Republicans.", creatorId: 0},
      {text: "Explosions.", creatorId: 0},
      {text: "Michelle Obama's arms.", creatorId: 0},
      {text: "Getting really high.", creatorId: 0},
      {text: "Attitude.", creatorId: 0},
      {text: "Sarah Palin.", creatorId: 0},
      {text: "The &Uuml;bermensch.", creatorId: 0},
      {text: "Altar boys.", creatorId: 0},
      {text: "My soul.", creatorId: 0},
      {text: "My sex life.", creatorId: 0},
      {text: "Pedophiles.", creatorId: 0},
      {text: "72 virgins.", creatorId: 0},
      {text: "Pabst Blue Ribbon.", creatorId: 0},
      {text: "Domino's&trade; Oreo&trade; Dessert Pizza.", creatorId: 0},
      {text: "A snapping turtle biting the tip of your penis.", creatorId: 0},
      {text: "The Blood of Christ.", creatorId: 0},
      {text: "Half-assed foreplay.", creatorId: 0},
      {text: "My collection of high-tech sex toys.", creatorId: 0},
      {text: "A middle-aged man on roller skates.", creatorId: 0},
      {text: "Bitches.", creatorId: 0},
      {text: "Bill Nye the Science Guy.", creatorId: 0},
      {text: "Italians.", creatorId: 0},
      {text: "A windmill full of corpses.", creatorId: 0},
      {text: "Adderall&trade;.", creatorId: 0},
      {text: "Crippling debt.", creatorId: 0},
      {text: "A stray pube.", creatorId: 0},
      {text: "Prancing.", creatorId: 0},
      {text: "Passing a kidney stone.", creatorId: 0},
      {text: "A brain tumor.", creatorId: 0},
      {text: "Leprosy.", creatorId: 0},
      {text: "Puppies!", creatorId: 0},
      {text: "Bees?", creatorId: 0},
      {text: "Frolicking.", creatorId: 0},
      {text: "Repression.", creatorId: 0},
      {text: "Road head.", creatorId: 0},
      {text: "A bag of magic beans.", creatorId: 0},
      {text: "An asymmetric boob job.", creatorId: 0},
      {text: "Dead parents.", creatorId: 0},
      {text: "Public ridicule.", creatorId: 0},
      {text: "A mating display.", creatorId: 0},
      {text: "A mime having a stroke.", creatorId: 0},
      {text: "Stephen Hawking talking dirty.", creatorId: 0},
      {text: "African children.", creatorId: 0},
      {text: "Mouth herpes.", creatorId: 0},
      {text: "Overcompensation.", creatorId: 0},
      {text: "Riding off into the sunset.", creatorId: 0},
      {text: "Being on fire.", creatorId: 0},
      {text: "Tangled Slinkys.", creatorId: 0},
      {text: "Civilian casualties.", creatorId: 0},
      {text: "Auschwitz.", creatorId: 0},
      {text: "My genitals.", creatorId: 0},
      {text: "Not reciprocating oral sex.", creatorId: 0},
      {text: "Lactation.", creatorId: 0},
      {text: "Being fabulous.", creatorId: 0},
      {text: "Shaquille O'Neal's acting career.", creatorId: 0},
      {text: "My relationship status.", creatorId: 0},
      {text: "Asians who aren't good at math.", creatorId: 0},
      {text: "Alcoholism.", creatorId: 0},
      {text: "Incest.", creatorId: 0},
      {text: "Grave robbing.", creatorId: 0},
      {text: "Hope.", creatorId: 0},
      {text: "8 oz. of sweet Mexican black-tar heroin.", creatorId: 0},
      {text: "Kids with ass cancer.", creatorId: 0},
      {text: "Winking at old people.", creatorId: 0},
      {text: "The Jews.", creatorId: 0},
      {text: "Justin Bieber.", creatorId: 0},
      {text: "Doin' it in the butt.", creatorId: 0},
      {text: "A lifetime of sadness.", creatorId: 0},
      {text: "The Hamburglar.", creatorId: 0},
      {text: "Swooping.", creatorId: 0},
      {text: "Classist undertones.", creatorId: 0},
      {text: "New Age music.", creatorId: 0},
      {text: "Not giving a shit about the Third World.", creatorId: 0},
      {text: "The Kool-Aid Man.", creatorId: 0},
      {text: "A hot mess.", creatorId: 0},
      {text: "Tentacle porn.", creatorId: 0},
      {text: "Lumberjack fantasies.", creatorId: 0},
      {text: "The gays.", creatorId: 0},
      {text: "Scientology.", creatorId: 0},
      {text: "Estrogen.", creatorId: 0},
      {text: "GoGurt&reg;.", creatorId: 0},
      {text: "Judge Judy.", creatorId: 0},
      {text: "Dick fingers.", creatorId: 0},
      {text: "Racism.", creatorId: 0},
      {text: "Surprise sex!", creatorId: 0},
      {text: "Police brutality.", creatorId: 0},
      {text: "Passable transvestites.", creatorId: 0},
      {text: "The Virginia Tech Massacre.", creatorId: 0},
      {text: "When you fart and a little bit comes out.", creatorId: 0},
      {text: "Oompa-Loompas.", creatorId: 0},
      {text: "A fetus.", creatorId: 0},
      {text: "Obesity.", creatorId: 0},
      {text: "Tasteful sideboob.", creatorId: 0},
      {text: "Hot people.", creatorId: 0},
      {text: "BATMAN!!!", creatorId: 0},
      {text: "Black people.", creatorId: 0},
      {text: "A gassy antelope.", creatorId: 0},
      {text: "Sexual tension.", creatorId: 0},
      {text: "Third base.", creatorId: 0},
      {text: "Racially-biased SAT questions.", creatorId: 0},
      {text: "Porn stars.", creatorId: 0},
      {text: "A Super Soaker&trade; full of cat pee.", creatorId: 0},
      {text: "Muhammed (Praise Be Unto Him).", creatorId: 0},
      {text: "Puberty.", creatorId: 0},
      {text: "A disappointing birthday party.", creatorId: 0},
      {text: "An erection that lasts longer than four hours.", creatorId: 0},
      {text: "White privilege.", creatorId: 0},
      {text: "Getting so angry that you pop a boner.", creatorId: 0},
      {text: "Wifely duties.", creatorId: 0},
      {text: "Two midgets shitting into a bucket.", creatorId: 0},
      {text: "Queefing.", creatorId: 0},
      {text: "Wiping her butt.", creatorId: 0},
      {text: "Golden showers.", creatorId: 0},
      {text: "Barack Obama.", creatorId: 0},
      {text: "Nazis.", creatorId: 0},
      {text: "A robust mongoloid.", creatorId: 0},
      {text: "An M. Night Shyamalan plot twist.", creatorId: 0},
      {text: "Getting drunk on mouthwash.", creatorId: 0},
      {text: "Lunchables&trade;.", creatorId: 0},
      {text: "Women in yogurt commercials.", creatorId: 0},
      {text: "John Wilkes Booth.", creatorId: 0},
      {text: "Powerful thighs.", creatorId: 0},
      {text: "Mr. Clean, right behind you.", creatorId: 0},
      {text: "Multiple stab wounds.", creatorId: 0},
      {text: "Cybernetic enhancements.", creatorId: 0},
      {text: "Serfdom.", creatorId: 0},
      {text: "Kanye West.", creatorId: 0},
      {text: "Women's suffrage.", creatorId: 0},
      {text: "Children on leashes.", creatorId: 0},
      {text: "Harry Potter erotica.", creatorId: 0},
      {text: "The Dance of the Sugar Plum Fairy.", creatorId: 0},
      {text: "Lance Armstrong's missing testicle.", creatorId: 0},
      {text: "Parting the Red Sea.", creatorId: 0},
      {text: "The Amish.", creatorId: 0},
      {text: "Dead babies.", creatorId: 0},
      {text: "Child beauty pageants.", creatorId: 0},
      {text: "AXE Body Spray.", creatorId: 0},
      {text: "Centaurs.", creatorId: 0},
      {text: "Copping a feel.", creatorId: 0},
      {text: "Grandma.", creatorId: 0},
      {text: "Famine.", creatorId: 0},
      {text: "The Trail of Tears.", creatorId: 0},
      {text: "The miracle of childbirth.", creatorId: 0},
      {text: "Finger painting.", creatorId: 0},
      {text: "A monkey smoking a cigar.", creatorId: 0},
      {text: "The Make-A-Wish&reg; Foundation.", creatorId: 0},
      {text: "Anal beads.", creatorId: 0},
      {text: "The Force.", creatorId: 0},
      {text: "Kamikaze pilots.", creatorId: 0},
      {text: "Dry heaving.", creatorId: 0},
      {text: "Active listening.", creatorId: 0},
      {text: "Ghosts.", creatorId: 0},
      {text: "The Hustle.", creatorId: 0},
      {text: "Peeing a little bit.", creatorId: 0},
      {text: "Another goddamn vampire movie.", creatorId: 0},
      {text: "Shapeshifters.", creatorId: 0},
      {text: "The Care Bear Stare.", creatorId: 0},
      {text: "Hot cheese.", creatorId: 0},
      {text: "A mopey zoo lion.", creatorId: 0},
      {text: "A defective condom.", creatorId: 0},
      {text: "Teenage pregnancy.", creatorId: 0},
      {text: "A Bop It&trade;.", creatorId: 0},
      {text: "Expecting a burp and vomiting on the floor.", creatorId: 0},
      {text: "Horrifying laser hair removal accidents.", creatorId: 0},
      {text: "Boogers.", creatorId: 0},
      {text: "Unfathomable stupidity.", creatorId: 0},
      {text: "Breaking out into song and dance.", creatorId: 0},
      {text: "Soup that is too hot.", creatorId: 0},
      {text: "Morgan Freeman's voice.", creatorId: 0},
      {text: "Getting naked and watching Nickelodeon.", creatorId: 0},
      {text: "MechaHitler.", creatorId: 0},
      {text: "Flying sex snakes.", creatorId: 0},
      {text: "The true meaning of Christmas.", creatorId: 0},
      {text: "My inner demons.", creatorId: 0},
      {text: "Pac-Man uncontrollably guzzling cum.", creatorId: 0},
      {text: "My vagina.", creatorId: 0},
      {text: "A homoerotic volleyball montage.", creatorId: 0},
      {text: "Actually taking candy from a baby.", creatorId: 0},
      {text: "Crystal meth.", creatorId: 0},
      {text: "Exactly what you'd expect.", creatorId: 0},
      {text: "Natural male enhancement.", creatorId: 0},
      {text: "Passive-aggressive Post-it notes.", creatorId: 0},
      {text: "Inappropriate yodeling.", creatorId: 0},
      {text: "Lady Gaga.", creatorId: 0},
      {text: "The Little Engine That Could.", creatorId: 0},
      {text: "Vigilante justice.", creatorId: 0},
      {text: "A death ray.", creatorId: 0},
      {text: "Poor life choices.", creatorId: 0},
      {text: "A gentle caress of the inner thigh.", creatorId: 0},
      {text: "Embryonic stem cells.", creatorId: 0},
      {text: "Nicolas Cage.", creatorId: 0},
      {text: "Firing a rifle into the air while balls deep in a squealing hog.", creatorId: 0},
      {text: "Switching to Geico&reg;.", creatorId: 0},
      {text: "The chronic.", creatorId: 0},
      {text: "Erectile dysfunction.", creatorId: 0},
      {text: "Home video of Oprah sobbing into a Lean Cuisine&reg;.", creatorId: 0},
      {text: "A bucket of fish heads.", creatorId: 0},
      {text: "50,000 volts straight to the nipples.", creatorId: 0},
      {text: "Being fat and stupid.", creatorId: 0},
      {text: "Hospice care.", creatorId: 0},
      {text: "A pyramid of severed heads.", creatorId: 0},
      {text: "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.", creatorId: 0},
      {text: "A subscription to Men's Fitness.", creatorId: 0},
      {text: "Crucifixion.", creatorId: 0},
      {text: "A micropig wearing a tiny raincoat and booties.", creatorId: 0},
      {text: "Some god-damn peace and quiet.", creatorId: 0},
      {text: "Used panties.", creatorId: 0},
      {text: "A tribe of warrior women.", creatorId: 0},
      {text: "The penny whistle solo from \"My Heart Will Go On.\"", creatorId: 0},
      {text: "An oversized lollipop.", creatorId: 0},
      {text: "Helplessly giggling at the mention of Hutus and Tutsis.", creatorId: 0},
      {text: "Not wearing pants.", creatorId: 0},
      {text: "Consensual sex.", creatorId: 0},
      {text: "Her Majesty, Queen Elizabeth II.", creatorId: 0},
      {text: "Funky fresh rhymes.", creatorId: 0},
      {text: "The art of seduction.", creatorId: 0},
      {text: "The Devil himself.", creatorId: 0},
      {text: "Advice from a wise, old black man.", creatorId: 0},
      {text: "Destroying the evidence.", creatorId: 0},
      {text: "The light of a billion suns.", creatorId: 0},
      {text: "Wet dreams.", creatorId: 0},
      {text: "Synergistic management solutions.", creatorId: 0},
      {text: "Growing a pair.", creatorId: 0},
      {text: "Silence.", creatorId: 0},
      {text: "An M16 assault rifle.", creatorId: 0},
      {text: "Poopy diapers.", creatorId: 0},
      {text: "A live studio audience.", creatorId: 0},
      {text: "The Great Depression.", creatorId: 0},
      {text: "A spastic nerd.", creatorId: 0},
      {text: "Rush Limbaugh's soft, shitty body.", creatorId: 0},
      {text: "Tickling Sean Hannity, even after he tells you to stop.", creatorId: 0},
      {text: "Stalin.", creatorId: 0},
      {text: "Brown people.", creatorId: 0},
      {text: "Rehab.", creatorId: 0},
      {text: "Capturing Newt Gingrich and forcing him to dance in a monkey suit.", creatorId: 0},
      {text: "Battlefield amputations.", creatorId: 0},
      {text: "An uppercut.", creatorId: 0},
      {text: "Shiny objects.", creatorId: 0},
      {text: "An ugly face.", creatorId: 0},
      {text: "Menstrual rage.", creatorId: 0},
      {text: "A bitch slap.", creatorId: 0},
      {text: "One trillion dollars.", creatorId: 0},
      {text: "Chunks of dead prostitute.", creatorId: 0},
      {text: "The entire Mormon Tabernacle Choir.", creatorId: 0},
      {text: "The female orgasm.", creatorId: 0},
      {text: "Extremely tight pants.", creatorId: 0},
      {text: "The Boy Scouts of America.", creatorId: 0},
      {text: "Stormtroopers.", creatorId: 0},
      {text: "Throwing a virgin into a volcano.", creatorId: 0}
    ];
    for(let i = 0; i < records.length; i++){
      records[i].id = i;
    }
    return queryInterface.bulkInsert('WhiteCards', records, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('WhiteCards', null, {});
  }
};
