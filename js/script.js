// ── Element Dataset (all 118 elements) ─────────────────────────────────────
const elements = [
  // Period 1
  {n:1,sym:'H',name:'Hydrogen',mass:1.008,cat:'nonmetal',period:1,group:1,shells:[1],state:'Gas',melt:-259.16,boil:-252.88,density:0.0000899,en:2.2,config:'1s¹',disc:'Henry Cavendish',year:1766,desc:'The lightest and most abundant element in the universe, constituting ~75% of all normal matter by mass. Essential for water, organic life, and powers the sun via nuclear fusion. Has unique isotopes: deuterium and radioactive tritium.'},
  {n:2,sym:'He',name:'Helium',mass:4.003,cat:'noble',period:1,group:18,shells:[2],state:'Gas',melt:null,boil:-268.93,density:0.0001785,en:null,config:'1s²',disc:'Pierre Janssen',year:1868,desc:'A colorless, odorless, inert noble gas. The second most abundant element in the universe. Used in MRI machines, deep-sea diving tanks, superconducting magnets, and lifting balloons. The only element that cannot be solidified at standard pressure.'},
  // Period 2
  {n:3,sym:'Li',name:'Lithium',mass:6.941,cat:'alkali',period:2,group:1,shells:[2,1],state:'Solid',melt:180.5,boil:1342,density:0.534,en:0.98,config:'[He] 2s¹',disc:'Johan Arfwedson',year:1817,desc:'The lightest metal and lightest solid element. Highly reactive. Revolutionized modern technology through lithium-ion batteries for smartphones and electric vehicles. Also used as a mood stabilizer for bipolar disorder.'},
  {n:4,sym:'Be',name:'Beryllium',mass:9.012,cat:'alkaline',period:2,group:2,shells:[2,2],state:'Solid',melt:1287,boil:2469,density:1.85,en:1.57,config:'[He] 2s²',disc:'Louis Vauquelin',year:1798,desc:'A hard, lightweight, grey metal. Unique for its transparency to X-rays (used in X-ray windows). Critical in aerospace and nuclear applications. Extremely toxic; causes chronic beryllium disease if inhaled.'},
  {n:5,sym:'B',name:'Boron',mass:10.811,cat:'metalloid',period:2,group:13,shells:[2,3],state:'Solid',melt:2075,boil:4000,density:2.34,en:2.04,config:'[He] 2s² 2p¹',disc:'Gay-Lussac & Thénard',year:1808,desc:'A metalloid with both crystalline and amorphous forms. Used in borosilicate glass (Pyrex), ceramics, nuclear reactor control rods, and as a neutron absorber. Essential micronutrient for plants and animals.'},
  {n:6,sym:'C',name:'Carbon',mass:12.011,cat:'nonmetal',period:2,group:14,shells:[2,4],state:'Solid',melt:3550,boil:4827,density:2.267,en:2.55,config:'[He] 2s² 2p²',disc:'Ancient',year:null,desc:'The backbone of all known life. Forms diamond (hardest natural substance), graphite, graphene, fullerenes, and carbon nanotubes. The basis of organic chemistry with millions of known compounds. Powers fossil fuels and is central to climate science.'},
  {n:7,sym:'N',name:'Nitrogen',mass:14.007,cat:'nonmetal',period:2,group:15,shells:[2,5],state:'Gas',melt:-210.1,boil:-195.79,density:0.001251,en:3.04,config:'[He] 2s² 2p³',disc:'Daniel Rutherford',year:1772,desc:'Makes up ~78% of Earth\'s atmosphere. Essential for amino acids, proteins, and DNA. Used in fertilizers (Haber-Bosch process), explosives, and cryogenic preservation. Liquid nitrogen boils at –196°C.'},
  {n:8,sym:'O',name:'Oxygen',mass:15.999,cat:'nonmetal',period:2,group:16,shells:[2,6],state:'Gas',melt:-218.79,boil:-182.96,density:0.001429,en:3.44,config:'[He] 2s² 2p⁴',disc:'Carl Scheele',year:1771,desc:'Essential for aerobic respiration and combustion. Makes up 21% of Earth\'s atmosphere and ~65% of the human body by mass. Third most abundant element in the universe. Also exists as ozone (O₃), protecting Earth from UV radiation.'},
  {n:9,sym:'F',name:'Fluorine',mass:18.998,cat:'halogen',period:2,group:17,shells:[2,7],state:'Gas',melt:-219.67,boil:-188.11,density:0.001696,en:3.98,config:'[He] 2s² 2p⁵',disc:'Henri Moissan',year:1886,desc:'The most reactive and electronegative of all elements. Used in fluoride toothpaste, Teflon (PTFE) coatings, refrigerants (Freon), and uranium enrichment. So reactive it can burn through glass.'},
  {n:10,sym:'Ne',name:'Neon',mass:20.180,cat:'noble',period:2,group:18,shells:[2,8],state:'Gas',melt:-248.59,boil:-246.05,density:0.0009,en:null,config:'[He] 2s² 2p⁶',disc:'William Ramsay',year:1898,desc:'A colorless, odorless noble gas famous for its glowing red-orange light in "neon" signs. Fifth most abundant element in the universe. Chemically inert. Used in high-voltage indicators and television tubes.'},
  // Period 3
  {n:11,sym:'Na',name:'Sodium',mass:22.990,cat:'alkali',period:3,group:1,shells:[2,8,1],state:'Solid',melt:97.79,boil:882.8,density:0.971,en:0.93,config:'[Ne] 3s¹',disc:'Humphry Davy',year:1807,desc:'A soft, silvery-white alkali metal that reacts violently with water. Essential for nerve signal transmission and muscle function. Found in table salt (NaCl). Used in street lighting (sodium-vapor lamps) and as a heat transfer fluid in nuclear reactors.'},
  {n:12,sym:'Mg',name:'Magnesium',mass:24.305,cat:'alkaline',period:3,group:2,shells:[2,8,2],state:'Solid',melt:650,boil:1090,density:1.738,en:1.31,config:'[Ne] 3s²',disc:'Joseph Black',year:1755,desc:'A shiny grey metal, 8th most abundant in Earth\'s crust. The central atom in chlorophyll, powering photosynthesis. Essential for bone health and hundreds of enzyme reactions. Burns with a brilliant white flame so bright it was used in early photography flash.'},
  {n:13,sym:'Al',name:'Aluminium',mass:26.982,cat:'post-transition',period:3,group:13,shells:[2,8,3],state:'Solid',melt:660.32,boil:2519,density:2.698,en:1.61,config:'[Ne] 3s² 3p¹',disc:'H.C. Ørsted',year:1825,desc:'Most abundant metal in Earth\'s crust. Lightweight, strong, and corrosion-resistant due to a self-healing oxide layer. Revolutionized aerospace, packaging (cans/foil), construction, and power transmission. Fully recyclable.'},
  {n:14,sym:'Si',name:'Silicon',mass:28.086,cat:'metalloid',period:3,group:14,shells:[2,8,4],state:'Solid',melt:1414,boil:3265,density:2.329,en:1.9,config:'[Ne] 3s² 3p²',disc:'J.J. Berzelius',year:1824,desc:'The second most abundant element in Earth\'s crust. Foundation of modern semiconductor technology — computer chips, solar cells, and transistors are all silicon-based. Also the basis of glass, concrete, silicone, and ceramics.'},
  {n:15,sym:'P',name:'Phosphorus',mass:30.974,cat:'nonmetal',period:3,group:15,shells:[2,8,5],state:'Solid',melt:44.2,boil:280.5,density:1.82,en:2.19,config:'[Ne] 3s² 3p³',disc:'Hennig Brand',year:1669,desc:'Essential component of DNA, RNA, ATP (energy currency of cells), and bone mineral. Critical for agricultural fertilizers. White phosphorus is highly toxic and pyrophoric. Red phosphorus is used in safety matches.'},
  {n:16,sym:'S',name:'Sulfur',mass:32.06,cat:'nonmetal',period:3,group:16,shells:[2,8,6],state:'Solid',melt:115.21,boil:444.6,density:2.067,en:2.58,config:'[Ne] 3s² 3p⁴',disc:'Ancient',year:null,desc:'A bright yellow crystalline solid known since antiquity as "brimstone". Used in gunpowder, vulcanizing rubber, and sulfuric acid (world\'s most produced industrial chemical). Responsible for the smell of rotten eggs (H₂S) and garlic (organosulfur compounds).'},
  {n:17,sym:'Cl',name:'Chlorine',mass:35.453,cat:'halogen',period:3,group:17,shells:[2,8,7],state:'Gas',melt:-101.5,boil:-34.04,density:0.003214,en:3.16,config:'[Ne] 3s² 3p⁵',disc:'Carl Scheele',year:1774,desc:'A toxic, yellow-green gas with a pungent smell. Essential disinfectant for drinking water and swimming pools, saving millions of lives. Used in PVC production, bleach, and pharmaceuticals. Was used as a chemical weapon in World War I.'},
  {n:18,sym:'Ar',name:'Argon',mass:39.948,cat:'noble',period:3,group:18,shells:[2,8,8],state:'Gas',melt:-189.35,boil:-185.85,density:0.001784,en:null,config:'[Ne] 3s² 3p⁶',disc:'Lord Rayleigh',year:1894,desc:'The most abundant noble gas in Earth\'s atmosphere (~0.93%). Used as an inert shielding gas in welding, in incandescent light bulbs to prevent filament oxidation, and in double-pane window insulation for thermal efficiency.'},
  // Period 4
  {n:19,sym:'K',name:'Potassium',mass:39.098,cat:'alkali',period:4,group:1,shells:[2,8,8,1],state:'Solid',melt:63.38,boil:759,density:0.862,en:0.82,config:'[Ar] 4s¹',disc:'Humphry Davy',year:1807,desc:'A soft, silvery-white alkali metal. Essential for nerve and muscle function, fluid balance, and heart rhythm. Found abundantly in bananas. A major component of agricultural fertilizers (potash). Reacts explosively with water.'},
  {n:20,sym:'Ca',name:'Calcium',mass:40.078,cat:'alkaline',period:4,group:2,shells:[2,8,8,2],state:'Solid',melt:842,boil:1484,density:1.54,en:1.0,config:'[Ar] 4s²',disc:'Humphry Davy',year:1808,desc:'5th most abundant element in Earth\'s crust. The main mineral component of bones, teeth, seashells, and coral. Essential for muscle contraction, nerve function, and blood clotting. Used in cement, plaster, and steel production.'},
  {n:21,sym:'Sc',name:'Scandium',mass:44.956,cat:'transition',period:4,group:3,shells:[2,8,9,2],state:'Solid',melt:1541,boil:2836,density:2.985,en:1.36,config:'[Ar] 3d¹ 4s²',disc:'Lars Nilson',year:1879,desc:'A soft, silvery transition metal. Despite rarity, valued in aluminum-scandium alloys for aerospace and sporting goods. Used in high-intensity stadium lighting and solid oxide fuel cells. Predicted by Mendeleev before discovery.'},
  {n:22,sym:'Ti',name:'Titanium',mass:47.867,cat:'transition',period:4,group:4,shells:[2,8,10,2],state:'Solid',melt:1668,boil:3287,density:4.506,en:1.54,config:'[Ar] 3d² 4s²',disc:'William Gregor',year:1791,desc:'Strong yet lightweight, highly corrosion-resistant. Fully biocompatible — used in surgical implants, dental prosthetics, and joint replacements. Critical in aerospace engineering and as titanium dioxide (brilliant white pigment in paint and sunscreen).'},
  {n:23,sym:'V',name:'Vanadium',mass:50.942,cat:'transition',period:4,group:5,shells:[2,8,11,2],state:'Solid',melt:1910,boil:3407,density:6.0,en:1.63,config:'[Ar] 3d³ 4s²',disc:'Andrés del Río',year:1801,desc:'A hard, silvery-grey metal. About 80% is used in ferrovanadium alloys for high-strength steel in tools and machinery. Increasingly important in vanadium redox flow batteries for large-scale energy storage. Essential trace element in certain organisms.'},
  {n:24,sym:'Cr',name:'Chromium',mass:51.996,cat:'transition',period:4,group:6,shells:[2,8,13,1],state:'Solid',melt:1907,boil:2671,density:7.15,en:1.66,config:'[Ar] 3d⁵ 4s¹',disc:'L.N. Vauquelin',year:1797,desc:'A hard, lustrous metal exceptionally resistant to corrosion. Essential component of stainless steel. Used in chrome plating for a mirror-like finish. Responsible for the red color of rubies and green of emeralds. Has an anomalous electron configuration due to half-filled stability.'},
  {n:25,sym:'Mn',name:'Manganese',mass:54.938,cat:'transition',period:4,group:7,shells:[2,8,13,2],state:'Solid',melt:1246,boil:2061,density:7.21,en:1.55,config:'[Ar] 3d⁵ 4s²',disc:'Carl Scheele',year:1774,desc:'A hard, brittle silver-grey metal. Essential for steel production as a deoxidizer and desulfurizer. Important cofactor in many enzymes. Used in dry-cell batteries and as a purple pigment (permanganate). Found in ocean floor nodules.'},
  {n:26,sym:'Fe',name:'Iron',mass:55.845,cat:'transition',period:4,group:8,shells:[2,8,14,2],state:'Solid',melt:1538,boil:2861,density:7.874,en:1.83,config:'[Ar] 3d⁶ 4s²',disc:'Ancient',year:null,desc:'Most abundant element by mass in Earth and fourth most abundant in the crust. Defines the Iron Age of human civilization. Essential for blood hemoglobin (oxygen carrier). The nucleus of iron-56 is the most tightly bound, ending the nucleosynthesis in stars.'},
  {n:27,sym:'Co',name:'Cobalt',mass:58.933,cat:'transition',period:4,group:9,shells:[2,8,15,2],state:'Solid',melt:1495,boil:2927,density:8.9,en:1.88,config:'[Ar] 3d⁷ 4s²',disc:'Georg Brandt',year:1735,desc:'A hard, lustrous, blue-grey metal. Named from German "Kobold" (goblin) by miners who were poisoned by its arsenic-laced ore. Critical for lithium-ion batteries. Vitamin B12 (cobalamin) contains cobalt. Used in superalloys for jet engines.'},
  {n:28,sym:'Ni',name:'Nickel',mass:58.693,cat:'transition',period:4,group:10,shells:[2,8,16,2],state:'Solid',melt:1455,boil:2913,density:8.908,en:1.91,config:'[Ar] 3d⁸ 4s²',disc:'A.F. Cronstedt',year:1751,desc:'A hard, ductile metal with excellent corrosion resistance. Essential in stainless steel, coins (US nickel coin), rechargeable NiMH batteries, and as a catalyst for hydrogenation reactions. Earth\'s core is partly composed of nickel-iron alloy.'},
  {n:29,sym:'Cu',name:'Copper',mass:63.546,cat:'transition',period:4,group:11,shells:[2,8,18,1],state:'Solid',melt:1084.62,boil:2562,density:8.96,en:1.9,config:'[Ar] 3d¹⁰ 4s¹',disc:'Ancient',year:null,desc:'One of the first metals used by humans (~10,000 years ago). The best affordable electrical conductor. Essential for all electrical wiring, motors, and electronics. Has natural antimicrobial properties. Anomalous electron configuration (half-filled d→full d).'},
  {n:30,sym:'Zn',name:'Zinc',mass:65.38,cat:'transition',period:4,group:12,shells:[2,8,18,2],state:'Solid',melt:419.53,boil:907,density:7.134,en:1.65,config:'[Ar] 3d¹⁰ 4s²',disc:'A.S. Marggraf',year:1746,desc:'A bluish-white metal used extensively for galvanizing steel to prevent rust. The 4th most consumed metal globally. Essential trace element for over 300 enzymes. Used in batteries, brass alloys, sunscreen (zinc oxide), and wound-healing creams.'},
  {n:31,sym:'Ga',name:'Gallium',mass:69.723,cat:'post-transition',period:4,group:13,shells:[2,8,18,3],state:'Solid',melt:29.76,boil:2204,density:5.907,en:1.81,config:'[Ar] 3d¹⁰ 4s² 4p¹',disc:'Paul Lecoq',year:1875,desc:'A soft metal that melts at just 29.76°C — it liquefies in the palm of your hand. Used in gallium arsenide (GaAs) semiconductor chips, LEDs, and solar cells. Also used as a non-toxic liquid metal thermometer and in ultra-high-temperature thermometers.'},
  {n:32,sym:'Ge',name:'Germanium',mass:72.630,cat:'metalloid',period:4,group:14,shells:[2,8,18,4],state:'Solid',melt:938.25,boil:2833,density:5.323,en:2.01,config:'[Ar] 3d¹⁰ 4s² 4p²',disc:'Clemens Winkler',year:1886,desc:'A metalloid whose existence, properties, and atomic mass were precisely predicted by Mendeleev in 1871 as "eka-silicon". Used in transistors (historical), fiber optic cables (infrared transparency), solar cells, and night-vision technology.'},
  {n:33,sym:'As',name:'Arsenic',mass:74.922,cat:'metalloid',period:4,group:15,shells:[2,8,18,5],state:'Solid',melt:817,boil:614,density:5.727,en:2.18,config:'[Ar] 3d¹⁰ 4s² 4p³',disc:'Albertus Magnus',year:1250,desc:'A toxic metalloid with three allotropes. Historically infamous as a nearly undetectable poison. Used as a wood preservative (CCA) and in gallium arsenide semiconductors. Trace amounts naturally occur in rice and groundwater in some regions.'},
  {n:34,sym:'Se',name:'Selenium',mass:78.971,cat:'nonmetal',period:4,group:16,shells:[2,8,18,6],state:'Solid',melt:220.8,boil:685,density:4.809,en:2.55,config:'[Ar] 3d¹⁰ 4s² 4p⁴',disc:'J.J. Berzelius',year:1817,desc:'A non-metal with unique photovoltaic and photoconductive properties. Used in solar cells (cadmium telluride–selenium), photocopier drums (xerography), and rectifiers. An essential micronutrient — both deficiency and excess cause serious health problems.'},
  {n:35,sym:'Br',name:'Bromine',mass:79.904,cat:'halogen',period:4,group:17,shells:[2,8,18,7],state:'Liquid',melt:-7.2,boil:58.8,density:3.122,en:2.96,config:'[Ar] 3d¹⁰ 4s² 4p⁵',disc:'Antoine Balard',year:1826,desc:'One of only two elements liquid at room temperature (mercury is the other). A dark red-brown toxic liquid with a sharp, unpleasant odor. Used in flame retardants, water purification, film photography, and pesticides.'},
  {n:36,sym:'Kr',name:'Krypton',mass:83.798,cat:'noble',period:4,group:18,shells:[2,8,18,8],state:'Gas',melt:-157.37,boil:-153.41,density:0.003733,en:3.0,config:'[Ar] 3d¹⁰ 4s² 4p⁶',disc:'William Ramsay',year:1898,desc:'A colorless, odorless noble gas. Used in high-performance fluorescent lighting, flash lamps for high-speed photography, and krypton-fluoride excimer lasers. The krypton-86 isotope formerly defined the meter (before laser redefinition).'},
  // Period 5
  {n:37,sym:'Rb',name:'Rubidium',mass:85.468,cat:'alkali',period:5,group:1,shells:[2,8,18,8,1],state:'Solid',melt:39.3,boil:688,density:1.532,en:0.82,config:'[Kr] 5s¹',disc:'Bunsen & Kirchhoff',year:1861,desc:'A soft, silvery-white alkali metal. Second most electropositive element. Discovered by Bunsen using the spectroscope he invented — named for its red spectral lines (Latin: rubidus). Used in atomic clocks (rubidium frequency standard) and specialty glasses.'},
  {n:38,sym:'Sr',name:'Strontium',mass:87.62,cat:'alkaline',period:5,group:2,shells:[2,8,18,8,2],state:'Solid',melt:777,boil:1382,density:2.64,en:0.95,config:'[Kr] 5s²',disc:'Adair Crawford',year:1790,desc:'Named after Strontian, Scotland. Gives fireworks their brilliant crimson-red color. Strontium-90, a dangerous nuclear fission product, mimics calcium in bones. Used in CRT screens (strontium oxide), ferrite magnets, and toothpaste for sensitive teeth.'},
  {n:39,sym:'Y',name:'Yttrium',mass:88.906,cat:'transition',period:5,group:3,shells:[2,8,18,9,2],state:'Solid',melt:1522,boil:3345,density:4.469,en:1.22,config:'[Kr] 4d¹ 5s²',disc:'Johan Gadolin',year:1794,desc:'A silvery-metallic transition metal. Named after Ytterby, Sweden — a village that gave its name to four elements. Used in red phosphors for CRT displays, LED lighting, YAG lasers (used in surgery), and yttrium-90 cancer treatment.'},
  {n:40,sym:'Zr',name:'Zirconium',mass:91.224,cat:'transition',period:5,group:4,shells:[2,8,18,10,2],state:'Solid',melt:1855,boil:4409,density:6.52,en:1.33,config:'[Kr] 4d² 5s²',disc:'M.H. Klaproth',year:1789,desc:'An extremely corrosion-resistant, lustrous metal. Used in nuclear reactor fuel rod cladding (low neutron absorption cross-section). Also famous as cubic zirconia — a brilliant, inexpensive diamond simulant in jewelry.'},
  {n:41,sym:'Nb',name:'Niobium',mass:92.906,cat:'transition',period:5,group:5,shells:[2,8,18,12,1],state:'Solid',melt:2477,boil:4744,density:8.57,en:1.6,config:'[Kr] 4d⁴ 5s¹',disc:'Charles Hatchett',year:1801,desc:'A soft, grey, ductile metal. Becomes superconducting below 9.2K. Used in superconducting magnets for MRI machines and particle accelerators (LHC). Key additive in high-strength steel alloys for pipelines and jet engines.'},
  {n:42,sym:'Mo',name:'Molybdenum',mass:95.95,cat:'transition',period:5,group:6,shells:[2,8,18,13,1],state:'Solid',melt:2623,boil:4639,density:10.22,en:2.16,config:'[Kr] 4d⁵ 5s¹',disc:'Carl Scheele',year:1778,desc:'A hard, silvery metal with one of the highest melting points of all elements. Critical in high-strength, high-temperature steel alloys for aircraft and automotive parts. The enzyme nitrogenase (nitrogen fixation) contains a molybdenum-iron cofactor.'},
  {n:43,sym:'Tc',name:'Technetium',mass:98,cat:'transition',period:5,group:7,shells:[2,8,18,13,2],state:'Solid',melt:2157,boil:4265,density:11.5,en:1.9,config:'[Kr] 4d⁵ 5s²',disc:'Carlo Perrier',year:1937,desc:'The first artificially produced element. All isotopes are radioactive — it had been predicted by Mendeleev as "eka-manganese". Tc-99m is the world\'s most widely used medical radioisotope for diagnostic imaging (bone scans, cardiac, thyroid scans).'},
  {n:44,sym:'Ru',name:'Ruthenium',mass:101.07,cat:'transition',period:5,group:8,shells:[2,8,18,15,1],state:'Solid',melt:2334,boil:4150,density:12.45,en:2.2,config:'[Kr] 4d⁷ 5s¹',disc:'Karl Claus',year:1844,desc:'A hard, white platinum-group metal. Named after Ruthenia (historical name for Russia). Used in electrical contacts for extreme wear resistance, as a catalyst for ammonia synthesis, and in dye-sensitized solar cells (Grätzel cells).'},
  {n:45,sym:'Rh',name:'Rhodium',mass:102.906,cat:'transition',period:5,group:9,shells:[2,8,18,16,1],state:'Solid',melt:1964,boil:3695,density:12.41,en:2.28,config:'[Kr] 4d⁸ 5s¹',disc:'W.H. Wollaston',year:1804,desc:'One of the rarest and most expensive metals on Earth. Indispensable as a catalyst in automotive three-way catalytic converters, reducing NOₓ, CO, and hydrocarbons. Also used in thermocouples and as a reflective coating for searchlights.'},
  {n:46,sym:'Pd',name:'Palladium',mass:106.42,cat:'transition',period:5,group:10,shells:[2,8,18,18],state:'Solid',melt:1554.9,boil:2963,density:12.023,en:2.2,config:'[Kr] 4d¹⁰',disc:'W.H. Wollaston',year:1803,desc:'A rare silvery-white platinum-group metal. Can absorb up to 900× its volume of hydrogen. Used in catalytic converters, electronics (multi-layer capacitors), dentistry, and palladium-catalyzed cross-coupling reactions in drug synthesis. Has anomalous electron config.'},
  {n:47,sym:'Ag',name:'Silver',mass:107.868,cat:'transition',period:5,group:11,shells:[2,8,18,18,1],state:'Solid',melt:961.78,boil:2162,density:10.501,en:1.93,config:'[Kr] 4d¹⁰ 5s¹',disc:'Ancient',year:null,desc:'The best electrical and thermal conductor of all metals. Has strong, broad-spectrum antimicrobial properties. Used in electronics (switch contacts), solar panels, jewelry, mirrors, and medical dressings. Historically used in photography (silver halides).'},
  {n:48,sym:'Cd',name:'Cadmium',mass:112.411,cat:'transition',period:5,group:12,shells:[2,8,18,18,2],state:'Solid',melt:321.07,boil:767,density:8.65,en:1.69,config:'[Kr] 4d¹⁰ 5s²',disc:'K.S.L. Hermann',year:1817,desc:'A soft, bluish-white, toxic metal. Used in nickel-cadmium (NiCd) rechargeable batteries and as cadmium yellow/orange pigment. Serious environmental pollutant that bioaccumulates. Its use is heavily regulated; itai-itai disease in Japan was caused by cadmium poisoning.'},
  {n:49,sym:'In',name:'Indium',mass:114.818,cat:'post-transition',period:5,group:13,shells:[2,8,18,18,3],state:'Solid',melt:156.6,boil:2072,density:7.31,en:1.78,config:'[Kr] 4d¹⁰ 5s² 5p¹',disc:'Ferdinand Reich',year:1863,desc:'A soft, silvery-white metal that emits a high-pitched "cry" when bent. Critical for indium tin oxide (ITO) — the transparent conductive film used in touchscreens, LCDs, and flat panel displays. Supply is a major concern for sustainable technology.'},
  {n:50,sym:'Sn',name:'Tin',mass:118.710,cat:'post-transition',period:5,group:14,shells:[2,8,18,18,4],state:'Solid',melt:231.93,boil:2602,density:7.287,en:1.96,config:'[Kr] 4d¹⁰ 5s² 5p²',disc:'Ancient',year:null,desc:'One of the earliest metals used by humans. Alloyed with copper to create bronze, launching the Bronze Age (~3300 BCE). Still used for food can coatings, solder (tin-lead or tin-silver alloys), bronze, and pewter. "Tin cry" — audible creak when bent.'},
  {n:51,sym:'Sb',name:'Antimony',mass:121.760,cat:'metalloid',period:5,group:15,shells:[2,8,18,18,5],state:'Solid',melt:630.63,boil:1635,density:6.685,en:2.05,config:'[Kr] 4d¹⁰ 5s² 5p³',disc:'Ancient',year:null,desc:'A lustrous grey metalloid. Used in flame-retardant materials (antimony trioxide), as a hardening agent in lead-acid batteries, in semiconductor devices, and as kohl (ancient eye makeup). One of the few elements that expands on solidification.'},
  {n:52,sym:'Te',name:'Tellurium',mass:127.60,cat:'metalloid',period:5,group:16,shells:[2,8,18,18,6],state:'Solid',melt:449.51,boil:987.8,density:6.232,en:2.1,config:'[Kr] 4d¹⁰ 5s² 5p⁴',disc:'F.J. Müller',year:1782,desc:'A rare metalloid with semiconductor properties. Used in cadmium telluride (CdTe) solar panels, rewritable DVDs, thermoelectric devices, and as an additive to improve the machinability of steel. Named after Terra (Earth).'},
  {n:53,sym:'I',name:'Iodine',mass:126.904,cat:'halogen',period:5,group:17,shells:[2,8,18,18,7],state:'Solid',melt:113.7,boil:184.3,density:4.933,en:2.66,config:'[Kr] 4d¹⁰ 5s² 5p⁵',disc:'Bernard Courtois',year:1811,desc:'A shiny, dark purple-black non-metal that sublimates to a beautiful violet vapor. Essential for thyroid hormones (T3 and T4). Used as an antiseptic (iodine tincture), in radiation therapy (I-131), and in organic synthesis. Iodized salt prevents goiter.'},
  {n:54,sym:'Xe',name:'Xenon',mass:131.293,cat:'noble',period:5,group:18,shells:[2,8,18,18,8],state:'Gas',melt:-111.75,boil:-108.12,density:0.005887,en:2.6,config:'[Kr] 4d¹⁰ 5s² 5p⁶',disc:'William Ramsay',year:1898,desc:'A dense, colorless noble gas. Used in high-intensity flash lamps for photography, theatrical lighting, ion thrusters for spacecraft propulsion, and as a general anesthetic. Forms XeF₂ and XeO₃ — rare noble gas compounds.'},
  // Period 6
  {n:55,sym:'Cs',name:'Caesium',mass:132.905,cat:'alkali',period:6,group:1,shells:[2,8,18,18,8,1],state:'Solid',melt:28.44,boil:671,density:1.873,en:0.79,config:'[Xe] 6s¹',disc:'Bunsen & Kirchhoff',year:1860,desc:'The most electropositive and most alkaline element. Caesium-133 atomic clocks define the SI second (9,192,631,770 oscillations) with accuracy of 1 second per 300 million years. Melts just above room temperature (28°C). Reacts explosively with water.'},
  {n:56,sym:'Ba',name:'Barium',mass:137.327,cat:'alkaline',period:6,group:2,shells:[2,8,18,18,8,2],state:'Solid',melt:727,boil:1897,density:3.51,en:0.89,config:'[Xe] 6s²',disc:'Carl Scheele',year:1772,desc:'A soft, silvery alkaline earth metal. Barium sulfate is used as a radiopaque contrast agent — "barium meals" for X-ray imaging of the digestive tract. Gives fireworks a green-yellow color. Barium titanate is a piezoelectric material used in sensors and speakers.'},
  // Lanthanides
  {n:57,sym:'La',name:'Lanthanum',mass:138.905,cat:'lanthanide',period:6,group:null,shells:[2,8,18,18,9,2],state:'Solid',melt:920,boil:3464,density:6.162,en:1.1,config:'[Xe] 5d¹ 6s²',disc:'Carl Mosander',year:1839,desc:'A soft, ductile silver-white metal. The first of the lanthanide series. Used in high-quality camera and telescope lenses, studio arc lighting, hydrogen-storage alloys, and nickel-metal hydride batteries for hybrid vehicles.'},
  {n:58,sym:'Ce',name:'Cerium',mass:140.116,cat:'lanthanide',period:6,group:null,shells:[2,8,18,19,9,2],state:'Solid',melt:798,boil:3443,density:6.77,en:1.12,config:'[Xe] 4f¹ 5d¹ 6s²',disc:'J.J. Berzelius',year:1803,desc:'The most abundant rare earth element. Used in catalytic converters, glass polishing powder, UV-filtering glass, and the sparking "flints" of lighters (ferrocerium alloy). Cerium oxide is a key component of self-cleaning oven coatings.'},
  {n:59,sym:'Pr',name:'Praseodymium',mass:140.908,cat:'lanthanide',period:6,group:null,shells:[2,8,18,21,8,2],state:'Solid',melt:931,boil:3520,density:6.77,en:1.13,config:'[Xe] 4f³ 6s²',disc:'C. Auer von Welsbach',year:1885,desc:'A soft, silvery, malleable metal. Its name means "leek-green twin" in Greek. Used in powerful permanent magnets (Nd-Pr-Fe-B), aircraft engine alloys, and glass for welding goggles that filter yellow sodium flame. Its salts give an apple-green color.'},
  {n:60,sym:'Nd',name:'Neodymium',mass:144.242,cat:'lanthanide',period:6,group:null,shells:[2,8,18,22,8,2],state:'Solid',melt:1016,boil:3074,density:7.01,en:1.14,config:'[Xe] 4f⁴ 6s²',disc:'C. Auer von Welsbach',year:1885,desc:'Creates the strongest type of permanent magnets known (Nd₂Fe₁₄B — neodymium magnets). Absolutely essential for electric vehicle motors, wind turbine generators, hard disk drives, headphones, and MRI machines.'},
  {n:61,sym:'Pm',name:'Promethium',mass:145,cat:'lanthanide',period:6,group:null,shells:[2,8,18,23,8,2],state:'Solid',melt:1042,boil:3000,density:7.26,en:1.13,config:'[Xe] 4f⁵ 6s²',disc:'Jacob Marinsky',year:1945,desc:'The only radioactive lanthanide with no stable isotopes. Named after Prometheus from Greek mythology. Most stable isotope (Pm-145) has a half-life of 17.7 years. Used in nuclear-powered batteries, luminous paint, and thickness gauges.'},
  {n:62,sym:'Sm',name:'Samarium',mass:150.36,cat:'lanthanide',period:6,group:null,shells:[2,8,18,24,8,2],state:'Solid',melt:1072,boil:1794,density:7.52,en:1.17,config:'[Xe] 4f⁶ 6s²',disc:'P.E.L. de Boisbaudran',year:1879,desc:'Used in samarium-cobalt (SmCo) permanent magnets that maintain performance at temperatures up to 750°C — ideal for jet engines and military equipment. Sm-153 is used in cancer pain palliation therapy for bone metastases.'},
  {n:63,sym:'Eu',name:'Europium',mass:151.964,cat:'lanthanide',period:6,group:null,shells:[2,8,18,25,8,2],state:'Solid',melt:826,boil:1529,density:5.243,en:1.2,config:'[Xe] 4f⁷ 6s²',disc:'E.A. Demarçay',year:1901,desc:'Named after Europe. The most reactive rare earth element. Used as red and blue phosphors in fluorescent lamps, LED lighting, and as a UV-fluorescent anti-counterfeiting marker invisible to the naked eye on Euro banknotes.'},
  {n:64,sym:'Gd',name:'Gadolinium',mass:157.25,cat:'lanthanide',period:6,group:null,shells:[2,8,18,25,9,2],state:'Solid',melt:1312,boil:3273,density:7.9,en:1.2,config:'[Xe] 4f⁷ 5d¹ 6s²',disc:'J.C.G. de Marignac',year:1880,desc:'Has the highest neutron absorption cross-section of any element. Used as a contrast agent in MRI scans (gadolinium-DTPA chelate), in nuclear reactor control rods, and neutron capture therapy for brain cancer.'},
  {n:65,sym:'Tb',name:'Terbium',mass:158.925,cat:'lanthanide',period:6,group:null,shells:[2,8,18,27,8,2],state:'Solid',melt:1356,boil:3230,density:8.23,en:1.2,config:'[Xe] 4f⁹ 6s²',disc:'Carl Mosander',year:1843,desc:'A silvery-white rare earth metal. Used in green phosphors for LCD backlights and energy-efficient lighting. The magnetostrictive alloy Terfenol-D (Tb-Dy-Fe) is used in sonar transducers. Named after Ytterby, Sweden.'},
  {n:66,sym:'Dy',name:'Dysprosium',mass:162.500,cat:'lanthanide',period:6,group:null,shells:[2,8,18,28,8,2],state:'Solid',melt:1407,boil:2567,density:8.55,en:1.22,config:'[Xe] 4f¹⁰ 6s²',disc:'P.E.L. de Boisbaudran',year:1886,desc:'Has one of the highest magnetic strengths of all elements. Added to neodymium magnets (up to 6%) to maintain performance at high temperatures in electric vehicle motors. Used in nuclear reactor control rods and data storage.'},
  {n:67,sym:'Ho',name:'Holmium',mass:164.930,cat:'lanthanide',period:6,group:null,shells:[2,8,18,29,8,2],state:'Solid',melt:1461,boil:2720,density:8.79,en:1.23,config:'[Xe] 4f¹¹ 6s²',disc:'Marc Delafontaine',year:1878,desc:'Has the highest magnetic moment of any naturally occurring element. Used in the most powerful electromagnets, Ho:YAG surgical lasers for kidney stone removal and eye surgery, and microwave equipment. Named after Stockholm (Holmia in Latin).'},
  {n:68,sym:'Er',name:'Erbium',mass:167.259,cat:'lanthanide',period:6,group:null,shells:[2,8,18,30,8,2],state:'Solid',melt:1529,boil:2868,density:9.066,en:1.24,config:'[Xe] 4f¹² 6s²',disc:'Carl Mosander',year:1843,desc:'A silvery-white metallic element. Erbium-doped fiber amplifiers (EDFAs) are the backbone of global fiber-optic internet, amplifying light signals without converting to electricity. Also used in photographic filters and rose-colored decorative glass.'},
  {n:69,sym:'Tm',name:'Thulium',mass:168.934,cat:'lanthanide',period:6,group:null,shells:[2,8,18,31,8,2],state:'Solid',melt:1545,boil:1950,density:9.32,en:1.25,config:'[Xe] 4f¹³ 6s²',disc:'P.T. Cleve',year:1879,desc:'The least abundant naturally occurring lanthanide. Named after Thule, an ancient name for Scandinavia. Tm-170 is used in portable X-ray machines for field diagnostics. Used in high-power surgical lasers and solid-state lasers.'},
  {n:70,sym:'Yb',name:'Ytterbium',mass:173.045,cat:'lanthanide',period:6,group:null,shells:[2,8,18,32,8,2],state:'Solid',melt:824,boil:1196,density:6.965,en:1.1,config:'[Xe] 4f¹⁴ 6s²',disc:'J.C.G. de Marignac',year:1878,desc:'A soft, malleable, ductile rare earth metal. Used in the most precise atomic clocks (optical lattice clocks — accurate to 1 second in 10 billion years), in memory devices, and in Yb-169 cancer radiation therapy.'},
  {n:71,sym:'Lu',name:'Lutetium',mass:174.967,cat:'lanthanide',period:6,group:null,shells:[2,8,18,32,9,2],state:'Solid',melt:1652,boil:3402,density:9.841,en:1.27,config:'[Xe] 4f¹⁴ 5d¹ 6s²',disc:'Georges Urbain',year:1907,desc:'The heaviest and hardest rare earth metal. Lu-177 dotatate (Lutathera) is a groundbreaking targeted cancer therapy for neuroendocrine tumors. Used as a catalyst in petroleum refining and in PET scanner detector crystals.'},
  // Period 6 transition continued
  {n:72,sym:'Hf',name:'Hafnium',mass:178.49,cat:'transition',period:6,group:4,shells:[2,8,18,32,10,2],state:'Solid',melt:2233,boil:4603,density:13.31,en:1.3,config:'[Xe] 4f¹⁴ 5d² 6s²',disc:'Dirk Coster',year:1923,desc:'A shiny, silvery metal always found with zirconium. Used in nuclear reactor control rods (high neutron absorption), and as a high-k dielectric gate insulator in advanced CMOS transistors (Intel 45nm process). Used in rocket engine nozzles.'},
  {n:73,sym:'Ta',name:'Tantalum',mass:180.948,cat:'transition',period:6,group:5,shells:[2,8,18,32,11,2],state:'Solid',melt:3017,boil:5458,density:16.65,en:1.5,config:'[Xe] 4f¹⁴ 5d³ 6s²',disc:'A.G. Ekeberg',year:1802,desc:'An extremely hard, corrosion-resistant metal. Used in miniaturized capacitors inside every smartphone, laptop, and electronic device. Fully biocompatible — used in surgical plates, screws, and orthopedic implants. Named after Tantalus from Greek mythology.'},
  {n:74,sym:'W',name:'Tungsten',mass:183.84,cat:'transition',period:6,group:6,shells:[2,8,18,32,12,2],state:'Solid',melt:3422,boil:5555,density:19.3,en:2.36,config:'[Xe] 4f¹⁴ 5d⁴ 6s²',disc:'Carl Scheele',year:1781,desc:'Has the highest melting point of all elements (3422°C) and lowest vapor pressure. Used in light bulb filaments (historical), X-ray tube anodes, cutting and drilling tools (tungsten carbide), and as a density ballast. Denser than most metals.'},
  {n:75,sym:'Re',name:'Rhenium',mass:186.207,cat:'transition',period:6,group:7,shells:[2,8,18,32,13,2],state:'Solid',melt:3186,boil:5596,density:21.02,en:1.9,config:'[Xe] 4f¹⁴ 5d⁵ 6s²',disc:'Walter Noddack',year:1925,desc:'One of the rarest elements in Earth\'s crust. Second highest melting point after tungsten. The single largest use (70%) is in single-crystal nickel-rhenium superalloys for jet engine turbine blades that must survive temperatures near their melting point.'},
  {n:76,sym:'Os',name:'Osmium',mass:190.23,cat:'transition',period:6,group:8,shells:[2,8,18,32,14,2],state:'Solid',melt:3033,boil:5012,density:22.59,en:2.2,config:'[Xe] 4f¹⁴ 5d⁶ 6s²',disc:'Smithson Tennant',year:1803,desc:'The densest naturally occurring element (22.59 g/cm³). Forms toxic, volatile osmium tetroxide (OsO₄) on oxidation. Used in fountain pen tips, electrical contacts, and as a biological tissue staining agent in electron microscopy.'},
  {n:77,sym:'Ir',name:'Iridium',mass:192.217,cat:'transition',period:6,group:9,shells:[2,8,18,32,15,2],state:'Solid',melt:2446,boil:4428,density:22.56,en:2.2,config:'[Xe] 4f¹⁴ 5d⁷ 6s²',disc:'Smithson Tennant',year:1803,desc:'The most corrosion-resistant metal known. The thin iridium-rich layer at the Cretaceous-Paleogene (K-Pg) boundary is key evidence for the asteroid impact that caused dinosaur extinction 66 million years ago. Used in spark plug electrodes.'},
  {n:78,sym:'Pt',name:'Platinum',mass:195.084,cat:'transition',period:6,group:10,shells:[2,8,18,32,17,1],state:'Solid',melt:1768.3,boil:3825,density:21.45,en:2.28,config:'[Xe] 4f¹⁴ 5d⁹ 6s¹',disc:'Antonio de Ulloa',year:1748,desc:'A precious, dense, malleable, and corrosion-resistant metal. Used in catalytic converters for automobiles, anti-cancer drugs (cisplatin, carboplatin), laboratory crucibles, fuel cells, jewelry, and the international prototype kilogram (historical).'},
  {n:79,sym:'Au',name:'Gold',mass:196.967,cat:'transition',period:6,group:11,shells:[2,8,18,32,18,1],state:'Solid',melt:1064.18,boil:2856,density:19.3,en:2.54,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹',disc:'Ancient',year:null,desc:'The most malleable metal (1g → 1m² sheet). Immune to tarnish and corrosion. Universal symbol of wealth throughout human history. Used in electronics (reliable connector plating), nano-medicine, dentistry, and photovoltaics. Its yellow color arises from relativistic effects.'},
  {n:80,sym:'Hg',name:'Mercury',mass:200.592,cat:'transition',period:6,group:12,shells:[2,8,18,32,18,2],state:'Liquid',melt:-38.83,boil:356.73,density:13.546,en:2.0,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s²',disc:'Ancient',year:null,desc:'The only metal liquid at room temperature. Extremely high density allows it to be used in barometers and thermometers. Highly toxic — causes neurological damage. Named after the planet Mercury. Used in fluorescent lamps and scientific instruments.'},
  {n:81,sym:'Tl',name:'Thallium',mass:204.383,cat:'post-transition',period:6,group:13,shells:[2,8,18,32,18,3],state:'Solid',melt:304,boil:1473,density:11.85,en:1.62,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',disc:'William Crookes',year:1861,desc:'A soft, silvery metal that is highly toxic. Once notoriously used as a tasteless, odorless, and difficult-to-detect poison ("inheritance powder"). Used in infrared photodetectors, semiconductor research, and thallium-201 cardiac stress tests.'},
  {n:82,sym:'Pb',name:'Lead',mass:207.2,cat:'post-transition',period:6,group:14,shells:[2,8,18,32,18,4],state:'Solid',melt:327.46,boil:1749,density:11.342,en:2.33,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',disc:'Ancient',year:null,desc:'Dense, soft metal used since antiquity for plumbing (Latin: plumbum → symbol Pb). Highly toxic, causing neurological damage ("lead poisoning"). Still used in car batteries, radiation shielding, ammunition, and as ballast weights. Causes permanent IQ reduction in children.'},
  {n:83,sym:'Bi',name:'Bismuth',mass:208.980,cat:'post-transition',period:6,group:15,shells:[2,8,18,32,18,5],state:'Solid',melt:271.5,boil:1564,density:9.807,en:2.02,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',disc:'Claude Geoffroy',year:1753,desc:'A colorful metal with a unique iridescent, rainbow-colored oxide tarnish that forms beautiful geometric hopper crystals. Used in pharmaceuticals (Pepto-Bismol for stomach upset), cosmetics, and as a non-toxic lead replacement in fishing weights and shotgun pellets.'},
  {n:84,sym:'Po',name:'Polonium',mass:209,cat:'post-transition',period:6,group:16,shells:[2,8,18,32,18,6],state:'Solid',melt:254,boil:962,density:9.32,en:2.0,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',disc:'Marie Curie',year:1898,desc:'Discovered by Marie and Pierre Curie and named after Marie\'s homeland Poland. Highly radioactive (t½: 138 days). So intensely radioactive it glows blue from ionized air. Used in neutron sources, static eliminators, and notoriously used to assassinate Alexander Litvinenko in 2006.'},
  {n:85,sym:'At',name:'Astatine',mass:210,cat:'halogen',period:6,group:17,shells:[2,8,18,32,18,7],state:'Solid',melt:302,boil:337,density:null,en:2.2,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',disc:'D.R. Corson',year:1940,desc:'The rarest naturally occurring element on Earth (only ~25g exists at any given moment). Highly radioactive. At-211 is being actively researched for targeted alpha-particle cancer therapy, potentially more effective than current radiation treatments.'},
  {n:86,sym:'Rn',name:'Radon',mass:222,cat:'noble',period:6,group:18,shells:[2,8,18,32,18,8],state:'Gas',melt:-71,boil:-61.7,density:0.00973,en:null,config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',disc:'Friedrich Dorn',year:1900,desc:'A radioactive noble gas produced from the decay of radium in uranium-containing rocks and soil. Seeps into buildings and basements. The second-leading cause of lung cancer (after smoking) in many countries. Requires special ventilation in affected areas.'},
  // Period 7
  {n:87,sym:'Fr',name:'Francium',mass:223,cat:'alkali',period:7,group:1,shells:[2,8,18,32,18,8,1],state:'Solid',melt:21,boil:650,density:1.87,en:0.7,config:'[Rn] 7s¹',disc:'Marguerite Perey',year:1939,desc:'The second rarest naturally occurring element. Extremely radioactive (t½: 22 min). The most unstable of the first 103 elements. At any time, only ~20–30g exists in Earth\'s crust. Discovered by Marguerite Perey — first element discovered by a woman.'},
  {n:88,sym:'Ra',name:'Radium',mass:226,cat:'alkaline',period:7,group:2,shells:[2,8,18,32,18,8,2],state:'Solid',melt:700,boil:1737,density:5.5,en:0.9,config:'[Rn] 7s²',disc:'Marie Curie',year:1898,desc:'A highly radioactive element discovered by Marie and Pierre Curie. Historically used in luminous paint for watch and instrument dials (Radium Girls tragedy). Still used in cancer radiotherapy. Glows faint blue-green due to ionization of surrounding air.'},
  // Actinides
  {n:89,sym:'Ac',name:'Actinium',mass:227,cat:'actinide',period:7,group:null,shells:[2,8,18,32,18,9,2],state:'Solid',melt:1050,boil:3198,density:10.07,en:1.1,config:'[Rn] 6d¹ 7s²',disc:'André Debierne',year:1899,desc:'The first actinide. A radioactive silver metal that glows blue in the dark from ionized air. Ac-225 is being used in promising targeted alpha therapy (TAT) for metastatic prostate cancer. Used as a neutron source and in cancer treatment.'},
  {n:90,sym:'Th',name:'Thorium',mass:232.038,cat:'actinide',period:7,group:null,shells:[2,8,18,32,18,10,2],state:'Solid',melt:1750,boil:4788,density:11.72,en:1.3,config:'[Rn] 6d² 7s²',disc:'J.J. Berzelius',year:1829,desc:'A radioactive metal 3× more abundant than uranium in Earth\'s crust. Proposed as a safer nuclear fuel (thorium-232 → U-233 cycle) that produces far less long-lived radioactive waste and is proliferation-resistant. India has the world\'s largest thorium reserves.'},
  {n:91,sym:'Pa',name:'Protactinium',mass:231.036,cat:'actinide',period:7,group:null,shells:[2,8,18,32,20,9,2],state:'Solid',melt:1568,boil:4000,density:15.37,en:1.5,config:'[Rn] 5f² 6d¹ 7s²',disc:'Kasimir Fajans',year:1913,desc:'A rare, highly toxic, radioactive metal. Named "proto-actinium" for being the decay precursor to actinium. One of the most hazardous elements to work with. No commercial uses. Used only in nuclear research and as a Pa-231/Ac-227 generator.'},
  {n:92,sym:'U',name:'Uranium',mass:238.029,cat:'actinide',period:7,group:null,shells:[2,8,18,32,21,9,2],state:'Solid',melt:1135,boil:4131,density:19.1,en:1.38,config:'[Rn] 5f³ 6d¹ 7s²',disc:'M.H. Klaproth',year:1789,desc:'The heaviest naturally occurring element. Radioactive. U-235 (0.7% of natural uranium) undergoes fission and is the primary fuel for ~440 nuclear power reactors worldwide, providing ~10% of global electricity. Depleted uranium is used in armor-piercing projectiles.'},
  {n:93,sym:'Np',name:'Neptunium',mass:237,cat:'actinide',period:7,group:null,shells:[2,8,18,32,22,9,2],state:'Solid',melt:637,boil:4000,density:20.45,en:1.36,config:'[Rn] 5f⁴ 6d¹ 7s²',disc:'Edwin McMillan',year:1940,desc:'The first transuranic element synthesized (beyond uranium). Named after Neptune (beyond Uranus as plutonium is beyond Neptune). Produced as a byproduct in nuclear reactors. Np-237 is used in neutron detection equipment.'},
  {n:94,sym:'Pu',name:'Plutonium',mass:244,cat:'actinide',period:7,group:null,shells:[2,8,18,32,24,8,2],state:'Solid',melt:639.4,boil:3228,density:19.84,en:1.28,config:'[Rn] 5f⁶ 7s²',disc:'Glenn Seaborg',year:1940,desc:'A fissile radioactive metal. Used in nuclear weapons (Fat Man used Pu-239) and as power source in deep-space spacecraft (RTGs on Voyager, Cassini, Curiosity). Has six unusual allotropes at room pressure. Extremely toxic and carcinogenic.'},
  {n:95,sym:'Am',name:'Americium',mass:243,cat:'actinide',period:7,group:null,shells:[2,8,18,32,25,8,2],state:'Solid',melt:1176,boil:2011,density:13.67,en:1.3,config:'[Rn] 5f⁷ 7s²',disc:'Glenn Seaborg',year:1944,desc:'Named after the Americas. Most famous for its use in household ionization smoke detectors — Am-241 emits alpha particles that ionize air, creating a current that is interrupted by smoke, triggering the alarm. Used in ~900 million smoke detectors worldwide.'},
  {n:96,sym:'Cm',name:'Curium',mass:247,cat:'actinide',period:7,group:null,shells:[2,8,18,32,25,9,2],state:'Solid',melt:1340,boil:3110,density:13.51,en:1.3,config:'[Rn] 5f⁷ 6d¹ 7s²',disc:'Glenn Seaborg',year:1944,desc:'Named after Marie and Pierre Curie. A hard, dense radioactive metal. Cm-242 and Cm-244 are used as power sources in RTGs for space missions. Carried aboard Mars Science Laboratory. Glows purple from its intense radioactivity.'},
  {n:97,sym:'Bk',name:'Berkelium',mass:247,cat:'actinide',period:7,group:null,shells:[2,8,18,32,27,8,2],state:'Solid',melt:1050,boil:null,density:14.78,en:1.3,config:'[Rn] 5f⁹ 7s²',disc:'Glenn Seaborg',year:1949,desc:'Named after Berkeley, California (home of Lawrence Berkeley Laboratory). Produced in very small quantities (microgram scale) by bombarding americium with alpha particles in a cyclotron. No practical uses; studied for basic nuclear science.'},
  {n:98,sym:'Cf',name:'Californium',mass:251,cat:'actinide',period:7,group:null,shells:[2,8,18,32,28,8,2],state:'Solid',melt:900,boil:null,density:15.1,en:1.3,config:'[Rn] 5f¹⁰ 7s²',disc:'Glenn Seaborg',year:1950,desc:'A powerful neutron emitter. Cf-252 is used to start up nuclear reactors, detect gold and silver ores via neutron activation analysis, and in brachytherapy for cervical cancer treatment. One microgram emits 170 million neutrons per minute.'},
  {n:99,sym:'Es',name:'Einsteinium',mass:252,cat:'actinide',period:7,group:null,shells:[2,8,18,32,29,8,2],state:'Solid',melt:860,boil:996,density:8.84,en:1.3,config:'[Rn] 5f¹¹ 7s²',disc:'Albert Ghiorso',year:1952,desc:'Named after Albert Einstein. First discovered in the debris of the first hydrogen bomb test (Ivy Mike, 1952). Extremely rare — at most a few micrograms have ever been produced. No practical applications; pure scientific interest.'},
  {n:100,sym:'Fm',name:'Fermium',mass:257,cat:'actinide',period:7,group:null,shells:[2,8,18,32,30,8,2],state:'Solid',melt:1527,boil:null,density:null,en:1.3,config:'[Rn] 5f¹² 7s²',disc:'Albert Ghiorso',year:1952,desc:'Named after Enrico Fermi. Also discovered in Ivy Mike fallout. A highly radioactive synthetic element. Only nanogram quantities have ever been produced. The heaviest element that can be produced by neutron bombardment of lighter elements.'},
  {n:101,sym:'Md',name:'Mendelevium',mass:258,cat:'actinide',period:7,group:null,shells:[2,8,18,32,31,8,2],state:'Solid',melt:827,boil:null,density:null,en:1.3,config:'[Rn] 5f¹³ 7s²',disc:'Albert Ghiorso',year:1955,desc:'Named after Dmitri Mendeleev, the creator of the periodic table. The first element synthesized one atom at a time. Produced by bombarding einsteinium-253 with alpha particles. First isolated at Berkeley in an experiment lasting less than an hour.'},
  {n:102,sym:'No',name:'Nobelium',mass:259,cat:'actinide',period:7,group:null,shells:[2,8,18,32,32,8,2],state:'Solid',melt:827,boil:null,density:null,en:1.3,config:'[Rn] 5f¹⁴ 7s²',disc:'Albert Ghiorso',year:1958,desc:'Named after Alfred Nobel. A radioactive transuranic element. Most stable isotope (No-259) has a half-life of 58 minutes. The second-to-last actinide. No practical uses beyond basic nuclear research. Its discovery was disputed between US and Soviet scientists.'},
  {n:103,sym:'Lr',name:'Lawrencium',mass:266,cat:'actinide',period:7,group:null,shells:[2,8,18,32,32,8,3],state:'Solid',melt:1627,boil:null,density:null,en:1.3,config:'[Rn] 5f¹⁴ 7s² 7p¹',disc:'Albert Ghiorso',year:1961,desc:'Named after Ernest Lawrence, inventor of the cyclotron. The last actinide element. Has a half-life of ~11 hours. No practical uses. Its electron configuration was disputed — it may occupy a 7p rather than 6d orbital, a relativistic effect.'},
  // Transactinides (Period 7 remainder)
  {n:104,sym:'Rf',name:'Rutherfordium',mass:267,cat:'transition',period:7,group:4,shells:[2,8,18,32,32,10,2],state:'Solid',melt:2100,boil:5500,density:23.2,en:null,config:'[Rn] 5f¹⁴ 6d² 7s²',disc:'JINR & LBNL',year:1964,desc:'Named after Ernest Rutherford. The first transactinide element, placing it below hafnium in Group 4. Extremely unstable. Discovery was disputed between US and Soviet teams during the Cold War "Transfermium Wars". Most stable isotope: Rf-267, t½~1.3h.'},
  {n:105,sym:'Db',name:'Dubnium',mass:268,cat:'transition',period:7,group:5,shells:[2,8,18,32,32,11,2],state:'Solid',melt:null,boil:null,density:29.3,en:null,config:'[Rn] 5f¹⁴ 6d³ 7s²',disc:'JINR',year:1968,desc:'Named after Dubna, Russia. A highly radioactive synthetic transactinide element. Most stable isotope (Db-268) has a half-life of ~28 hours. Behaves chemically like niobium (Group 5). No practical uses beyond nuclear research.'},
  {n:106,sym:'Sg',name:'Seaborgium',mass:269,cat:'transition',period:7,group:6,shells:[2,8,18,32,32,12,2],state:'Solid',melt:null,boil:null,density:35.0,en:null,config:'[Rn] 5f¹⁴ 6d⁴ 7s²',disc:'Albert Ghiorso',year:1974,desc:'Named after Glenn T. Seaborg — the only person to have a stable element named after them while still alive. Most stable isotope (Sg-271) has t½~1.9 min. Behaves as expected for Group 6, below tungsten. Its chemistry is studied one atom at a time.'},
  {n:107,sym:'Bh',name:'Bohrium',mass:270,cat:'transition',period:7,group:7,shells:[2,8,18,32,32,13,2],state:'Solid',melt:null,boil:null,density:37.1,en:null,config:'[Rn] 5f¹⁴ 6d⁵ 7s²',disc:'Peter Armbruster',year:1981,desc:'Named after Niels Bohr, pioneer of quantum mechanics. Most stable isotope (Bh-270) has t½~61s. Predicted to behave like rhenium (Group 7). Produced by bombarding bismuth-209 with chromium-54 ions. Only a few atoms have been created.'},
  {n:108,sym:'Hs',name:'Hassium',mass:269,cat:'transition',period:7,group:8,shells:[2,8,18,32,32,14,2],state:'Solid',melt:null,boil:null,density:40.7,en:null,config:'[Rn] 5f¹⁴ 6d⁶ 7s²',disc:'Peter Armbruster',year:1984,desc:'Named after the German state of Hesse. Most stable isotope (Hs-269) has t½~9.7s. Predicted to be a solid metal at room temperature and to behave like osmium (Group 8). Only a few atoms produced per experiment. Density is among the highest predicted.'},
  {n:109,sym:'Mt',name:'Meitnerium',mass:278,cat:'unknown',period:7,group:9,shells:[2,8,18,32,32,15,2],state:'Solid',melt:null,boil:null,density:37.4,en:null,config:'[Rn] 5f¹⁴ 6d⁷ 7s²',disc:'Peter Armbruster',year:1982,desc:'Named after physicist Lise Meitner, co-discoverer of nuclear fission (who was controversially denied the Nobel Prize). Most stable isotope (Mt-278) has t½~4.5s. Predicted to behave like iridium (Group 9). Extremely rare.'},
  {n:110,sym:'Ds',name:'Darmstadtium',mass:281,cat:'unknown',period:7,group:10,shells:[2,8,18,32,32,16,2],state:'Solid',melt:null,boil:null,density:34.8,en:null,config:'[Rn] 5f¹⁴ 6d⁹ 7s¹',disc:'Peter Armbruster',year:1994,desc:'Named after Darmstadt, Germany (home of GSI). Most stable isotope (Ds-281) has t½~14s. Expected to behave like platinum (Group 10). One of the heaviest elements created in particle accelerators. Produced at a rate of one atom per week.'},
  {n:111,sym:'Rg',name:'Roentgenium',mass:282,cat:'unknown',period:7,group:11,shells:[2,8,18,32,32,17,2],state:'Solid',melt:null,boil:null,density:28.7,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s¹',disc:'Peter Armbruster',year:1994,desc:'Named after Wilhelm Röntgen, discoverer of X-rays. Most stable isotope (Rg-282) has t½~2min. Due to relativistic effects, may have unusual chemical properties compared to gold (Group 11). Only atoms have been produced, never macroscopic quantities.'},
  {n:112,sym:'Cn',name:'Copernicium',mass:285,cat:'transition',period:7,group:12,shells:[2,8,18,32,32,18,2],state:'Gas',melt:null,boil:84,density:23.7,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s²',disc:'Peter Armbruster',year:1996,desc:'Named after Nicolaus Copernicus. Due to strong relativistic effects, predicted to behave as a noble gas rather than a metal — it may be gaseous at room temperature. Most stable isotope: Cn-285, t½~29s. The first superheavy element confirmed to form chemical bonds.'},
  {n:113,sym:'Nh',name:'Nihonium',mass:286,cat:'unknown',period:7,group:13,shells:[2,8,18,32,32,18,3],state:'Solid',melt:430,boil:1130,density:16.0,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',disc:'Kosuke Morita (RIKEN)',year:2003,desc:'Named after Japan (Nihon = "Land of the Rising Sun"). The first element discovered in Asia, by a team at RIKEN in Japan. Confirmed by IUPAC in 2016. Most stable: Nh-286, t½~9.5s. Expected to behave as a heavy analog of thallium (Group 13).'},
  {n:114,sym:'Fl',name:'Flerovium',mass:289,cat:'unknown',period:7,group:14,shells:[2,8,18,32,32,18,4],state:'Solid',melt:null,boil:null,density:14.0,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',disc:'JINR',year:1998,desc:'Named after the Flerov Laboratory of Nuclear Reactions in Dubna, Russia. Due to relativistic effects, may exhibit noble-gas-like chemical behavior. Most stable: Fl-289, t½~2.6s. Named after the late Georgy Flyorov, Soviet nuclear physicist.'},
  {n:115,sym:'Mc',name:'Moscovium',mass:290,cat:'unknown',period:7,group:15,shells:[2,8,18,32,32,18,5],state:'Solid',melt:400,boil:1100,density:13.5,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',disc:'JINR & LLNL',year:2003,desc:'Named after Moscow Oblast, Russia. Synthesized by bombarding americium-243 with calcium-48 ions. Most stable isotope: Mc-290, t½~0.65s. Expected to behave as a heavy analog of bismuth (Group 15). Confirmed by IUPAC in 2016.'},
  {n:116,sym:'Lv',name:'Livermorium',mass:293,cat:'unknown',period:7,group:16,shells:[2,8,18,32,32,18,6],state:'Solid',melt:364,boil:762,density:12.9,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',disc:'JINR & LLNL',year:2000,desc:'Named after Lawrence Livermore National Laboratory in Livermore, California. Synthesized by bombarding curium-248 with calcium-48. Most stable: Lv-293, t½~60ms. Expected to be a heavy analog of polonium (Group 16). Confirmed in 2012.'},
  {n:117,sym:'Ts',name:'Tennessine',mass:294,cat:'unknown',period:7,group:17,shells:[2,8,18,32,32,18,7],state:'Solid',melt:350,boil:610,density:7.17,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',disc:'JINR, ORNL & Vanderbilt',year:2010,desc:'Named after Tennessee, home to Oak Ridge National Laboratory, Vanderbilt University, and the University of Tennessee. Synthesized using berkelium-249 produced at ORNL. Most stable: Ts-294, t½~51ms. Expected to be a metalloid (Group 17).'},
  {n:118,sym:'Og',name:'Oganesson',mass:294,cat:'noble',period:7,group:18,shells:[2,8,18,32,32,18,8],state:'Solid',melt:null,boil:null,density:5.0,en:null,config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',disc:'JINR & LLNL',year:2002,desc:'Named after Yuri Oganessian, the leading figure in superheavy element research. The heaviest known element. Despite being in the noble gas group, predicted to be solid at room temperature due to extreme relativistic effects. Half-life ~0.69ms. Completes Period 7.'},
];

// ── Config ──────────────────────────────────────────────────────────────────
const catColors={
  alkali:'#ef4444',alkaline:'#f97316',transition:'#3b82f6',
  'post-transition':'#14b8a6',metalloid:'#a855f7',nonmetal:'#22c55e',
  halogen:'#eab308',noble:'#06b6d4',lanthanide:'#ec4899',
  actinide:'#f43f5e',unknown:'#8b5cf6'
};
const catNames={
  alkali:'Alkali Metal',alkaline:'Alkaline Earth Metal',transition:'Transition Metal',
  'post-transition':'Post-Transition Metal',metalloid:'Metalloid',nonmetal:'Nonmetal',
  halogen:'Halogen',noble:'Noble Gas',lanthanide:'Lanthanide',
  actinide:'Actinide',unknown:'Unknown Properties'
};
const shellLabel=['K','L','M','N','O','P','Q'];

// ── Utils ────────────────────────────────────────────────────────────────────
function hexRgb(h){return{r:parseInt(h.slice(1,3),16),g:parseInt(h.slice(3,5),16),b:parseInt(h.slice(5,7),16)}}

function fmtMass(m){
  if(m==null)return'—';
  if(Number.isInteger(m))return`(${m}) u`;
  return parseFloat(m.toFixed(3))+' u';
}
function cellMass(m){
  if(m==null)return'';
  if(Number.isInteger(m))return`(${m})`;
  return parseFloat(m.toFixed(3));
}

// ── Render Table ─────────────────────────────────────────────────────────────
function renderTable(){
  const t=document.getElementById('periodicTable');

  // F-block separator
  const sep=document.createElement('div');
  sep.className='f-sep';
  t.appendChild(sep);

  // Lanthanide / Actinide placeholders in main table
  function addPH(col,row,txt,clr){
    const d=document.createElement('div');
    d.className='placeholder';
    d.style.cssText=`grid-column:${col};grid-row:${row}`;
    d.innerHTML=`<span style="font-size:.48rem;color:${clr}">${txt}</span>`;
    t.appendChild(d);
  }
  addPH(3,6,'57–71★','#ec489970');
  addPH(3,7,'89–103★','#f43f5e70');

  // All 118 elements
  elements.forEach(el=>{
    let col,row;
    if(el.cat==='lanthanide'){col=el.n-54;row=9;}
    else if(el.cat==='actinide'){col=el.n-86;row=10;}
    else{col=el.group;row=el.period;}

    const catKey=el.cat==='post-transition'?'cat-post-transition':`cat-${el.cat}`;
    const cell=document.createElement('div');
    cell.className=`element ${catKey}`;
    cell.style.cssText=`grid-column:${col};grid-row:${row}`;
    cell.innerHTML=`
      <span class="el-num">${el.n}</span>
      <span class="el-sym">${el.sym}</span>
      <span class="el-name">${el.name}</span>
      <span class="el-mass">${cellMass(el.mass)}</span>`;
    cell.addEventListener('click',()=>openModal(el));
    t.appendChild(cell);
  });
}

// ── Modal ────────────────────────────────────────────────────────────────────
let raf=null;

function openModal(el){
  const color=catColors[el.cat]||'#6b7280';
  const {r,g,b}=hexRgb(color);

  // Badge
  const badge=document.getElementById('elBadge');
  badge.style.background=`rgba(${r},${g},${b},0.15)`;
  badge.style.border=`1px solid rgba(${r},${g},${b},0.35)`;
  document.getElementById('bNum').textContent=el.n;
  const sym=document.getElementById('bSym');
  sym.textContent=el.sym; sym.style.color=color;
  document.getElementById('bName').textContent=el.name;

  // Header
  document.getElementById('mFullName').textContent=el.name;
  const catLbl=document.getElementById('mCat');
  catLbl.textContent=catNames[el.cat]||el.cat;
  catLbl.style.color=color;
  const sc={Gas:'state-gas',Liquid:'state-liquid',Solid:'state-solid'};
  document.getElementById('mState').innerHTML=
    `<span class="state-badge ${sc[el.state]||'state-unknown-s'}">${el.state||'Unknown'} at 25°C</span>`;

  // Physical
  document.getElementById('pMass').textContent=fmtMass(el.mass);
  document.getElementById('pDensity').textContent=el.density!=null?`${el.density} g/cm³`:'—';
  document.getElementById('pMelt').textContent=el.melt!=null?`${el.melt}°C`:'—';
  document.getElementById('pBoil').textContent=el.boil!=null?`${el.boil}°C`:'—';

  // Atomic
  document.getElementById('aAN').textContent=el.n;
  const blk=(el.cat==='lanthanide'||el.cat==='actinide')?'f-block':`Group ${el.group}`;
  document.getElementById('aPB').textContent=`Period ${el.period} / ${blk}`;
  document.getElementById('aEN').textContent=el.en!=null?`${el.en} (Pauling)`:'—';
  document.getElementById('aCfg').textContent=el.config;

  // Discovery
  document.getElementById('dBy').textContent=el.disc||'—';
  document.getElementById('dYr').textContent=el.year||'Known to ancients';

  // Electrons
  const total=el.shells.reduce((s,e)=>s+e,0);
  document.getElementById('eTotalNum').textContent=total;
  document.getElementById('shellTags').innerHTML=
    el.shells.map((c,i)=>c>0?`<span class="shell-tag">${shellLabel[i]||'S'+(i+1)}: ${c}</span>`:'').join('');

  // Description
  document.getElementById('mDesc').textContent=el.desc;

  // Show modal
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modal').scrollTop=0;

  // Start animation
  startAnimation(document.getElementById('atomCanvas'),el);
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  if(raf){cancelAnimationFrame(raf);raf=null;}
}

// ── Canvas Electron Animation ─────────────────────────────────────────────────
function startAnimation(canvas,el){
  if(raf){cancelAnimationFrame(raf);raf=null;}

  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  const cx=W/2,cy=H/2;
  const color=catColors[el.cat]||'#6b7280';
  const {r,g,b}=hexRgb(color);

  // Active shells (filter zeros for Pd edge case)
  const shells=el.shells.filter(c=>c>0);
  const n=shells.length;
  const minR=n===1?cx*0.55:cx*0.17;
  const maxR=cx*0.86;
  const radii=shells.map((_,i)=>n===1?minR:minR+i*(maxR-minR)/(n-1));

  let t0=null;

  function draw(ts){
    if(!t0)t0=ts;
    const t=(ts-t0)/1000;

    // Clear + background gradient
    ctx.clearRect(0,0,W,H);
    const bg=ctx.createRadialGradient(cx,cy,0,cx,cy,cx);
    bg.addColorStop(0,`rgba(${r},${g},${b},0.07)`);
    bg.addColorStop(1,'#07070e');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    // Shells + electrons
    shells.forEach((cnt,si)=>{
      const rad=radii[si];
      const dir=si%2===0?1:-1;
      const spd=0.65/(si*0.45+1);
      const eR=cnt<=8?3:cnt<=18?2.4:1.9;

      // Orbit ring
      ctx.beginPath();
      ctx.arc(cx,cy,rad,0,Math.PI*2);
      ctx.strokeStyle=`rgba(${r},${g},${b},0.13)`;
      ctx.lineWidth=1; ctx.stroke();

      // Electrons
      for(let e=0;e<cnt;e++){
        const ang=(2*Math.PI*e/cnt)+(si*0.85)+(t*spd*dir*Math.PI*2);
        const ex=cx+rad*Math.cos(ang);
        const ey=cy+rad*Math.sin(ang);

        // Glow aura
        const gl=ctx.createRadialGradient(ex,ey,0,ex,ey,eR*3);
        gl.addColorStop(0,`rgba(${r},${g},${b},0.75)`);
        gl.addColorStop(0.45,`rgba(${r},${g},${b},0.22)`);
        gl.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(ex,ey,eR*3,0,Math.PI*2);
        ctx.fillStyle=gl; ctx.fill();

        // Dot
        ctx.beginPath(); ctx.arc(ex,ey,eR,0,Math.PI*2);
        ctx.fillStyle=color; ctx.fill();

        // Bright core
        ctx.beginPath(); ctx.arc(ex,ey,eR*0.42,0,Math.PI*2);
        ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.fill();
      }
    });

    // Nucleus ambient glow
    const ng=ctx.createRadialGradient(cx,cy,0,cx,cy,24);
    ng.addColorStop(0,`rgba(${r},${g},${b},0.55)`);
    ng.addColorStop(0.55,`rgba(${r},${g},${b},0.12)`);
    ng.addColorStop(1,'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(cx,cy,24,0,Math.PI*2);
    ctx.fillStyle=ng; ctx.fill();

    // Nucleus core
    const nc=ctx.createRadialGradient(cx,cy,0,cx,cy,10);
    nc.addColorStop(0,'#fff');
    nc.addColorStop(0.45,color);
    nc.addColorStop(1,`rgba(${r},${g},${b},0.55)`);
    ctx.beginPath(); ctx.arc(cx,cy,10,0,Math.PI*2);
    ctx.fillStyle=nc; ctx.fill();

    // Nucleus label
    ctx.save();
    ctx.font=`bold ${el.sym.length>2?'5.5':'8'}px -apple-system,sans-serif`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillStyle='#fff'; ctx.fillText(el.sym,cx,cy);
    ctx.restore();

    raf=requestAnimationFrame(draw);
  }
  raf=requestAnimationFrame(draw);
}

// ── Events ────────────────────────────────────────────────────────────────────
document.getElementById('closeBtn').addEventListener('click',closeModal);
document.getElementById('modalOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

// ── Init ──────────────────────────────────────────────────────────────────────
renderTable();

// PDF export
try{
  window.GleanBridge.postMessage({
    actionId:'export-pdf',type:'glean-add-menu',
    metadata:{label:'Export as PDF',icon:'export'}
  });
  window.GleanBridge.onMessage('action',function(d){
    if(d.actionId==='export-pdf')window.print();
  });
}catch(e){}

window.addEventListener('beforeprint',function(){});
window.addEventListener('afterprint',function(){});
