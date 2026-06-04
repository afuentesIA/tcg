export const products = [
  {
    id:'en590', name:'EN590 Diesel', code:'10 PPM', cat:'Automotive Fuel',
    std:'EN590:2013 + A1:2017', cas:'68476-34-6', hs:'2710 19 43',
    origin:'Unsanctioned Origin', delivery:'FOB ASWP',
    port:'Rotterdam · Antwerp · Hamburg · Amsterdam',
    vessel:'1,000 – 150,000 MT', payment:'MT103 / TT', lead:'5 – 15 Working Days',
    desc:'High quality Automotive Gas Oil conforming to European Standard EN590:2013 + A1:2017 with 10 ppm maximum sulfur content. Suitable for all diesel engines in automotive and industrial applications.',
    specs:[
      {p:'Density at 15°C',u:'kg/m³',l:'820 – 845',t:'832'},
      {p:'Cetane Number',u:'—',l:'Min. 51.0',t:'53.2'},
      {p:'Cetane Index',u:'—',l:'Min. 46.0',t:'49.0'},
      {p:'Sulfur Content',u:'mg/kg',l:'Max. 10',t:'< 10'},
      {p:'Polycyclic Aromatic',u:'% m/m',l:'Max. 8.0',t:'3.5'},
      {p:'Flash Point',u:'°C',l:'Min. 55',t:'65'},
      {p:'Cold Filter Plugging',u:'°C',l:'Max. –20 (Winter)',t:'–24'},
      {p:'Pour Point',u:'°C',l:'Max. –30',t:'–33'},
      {p:'Viscosity at 40°C',u:'mm²/s',l:'2.000 – 4.500',t:'3.200'},
      {p:'Lubricity (WSD 1.4)',u:'μm',l:'Max. 460',t:'380'},
      {p:'Water Content',u:'mg/kg',l:'Max. 200',t:'< 100'},
      {p:'Total Contamination',u:'mg/kg',l:'Max. 24',t:'< 15'},
    ]
  },
  {
    id:'d6', name:'D6 Fuel Oil', code:'RESIDUAL', cat:'Industrial Fuel',
    std:'ASTM D396', cas:'—', hs:'2710 19 68',
    origin:'Global', delivery:'FOB / CIF / TTO',
    port:'As Per Origin', vessel:'As Per Requirement', payment:'TT / LC', lead:'Negotiable',
    desc:'Heavy Residual Fuel Oil for power generation, marine engines and industrial boilers. Requires pre-heating before pumping and combustion. Sourced directly from top-tier refineries worldwide.',
    specs:[
      {p:'Density at 15°C',u:'kg/m³',l:'950 – 1,050',t:'—'},
      {p:'Viscosity at 50°C',u:'cSt',l:'180 – 380',t:'—'},
      {p:'Sulfur Content',u:'% m/m',l:'Up to 3.5',t:'—'},
      {p:'Flash Point',u:'°C',l:'Min. 60',t:'—'},
      {p:'Water Content',u:'% v/v',l:'Max. 2.0',t:'—'},
      {p:'Ash Content',u:'% m/m',l:'Max. 0.10',t:'—'},
      {p:'Pour Point',u:'°C',l:'Max. 18',t:'—'},
      {p:'Net Calorific Value',u:'MJ/kg',l:'Approx. 40',t:'—'},
    ]
  },
  {
    id:'jeta1', name:'Jet Fuel A-1', code:'AVIATION', cat:'Aviation Fuel',
    std:'ASTM D1655 / DEF STAN 91-091', cas:'8008-20-6', hs:'2710 19 21',
    origin:'Global', delivery:'FOB / CIF / TTO',
    port:'Major Airports & Depots', vessel:'As Required', payment:'TT / LC', lead:'Negotiable',
    desc:'Premium Aviation Turbine Fuel tested and certified to meet international aviation standards for safety, quality and performance. For commercial, military and private turbine-engine aircraft.',
    specs:[
      {p:'Density at 15°C',u:'kg/m³',l:'775 – 840',t:'—'},
      {p:'Flash Point',u:'°C',l:'Min. 38',t:'—'},
      {p:'Freezing Point',u:'°C',l:'Max. –47',t:'—'},
      {p:'Sulfur Content',u:'% m/m',l:'Max. 0.30',t:'—'},
      {p:'Net Heat of Combustion',u:'MJ/kg',l:'Min. 42.8',t:'—'},
      {p:'Aromatics',u:'% v/v',l:'Max. 25',t:'—'},
      {p:'Smoke Point',u:'mm',l:'Min. 25',t:'—'},
      {p:'Electrical Conductivity',u:'pS/m',l:'50 – 600',t:'—'},
    ]
  },
  {
    id:'lng', name:'LNG', code:'CRYOGENIC', cat:'Liquefied Natural Gas',
    std:'ISO 16903 / GIIGNL', cas:'74-82-8', hs:'2711 11 00',
    origin:'Global / Multiple Sources', delivery:'FOB / CIF / TTO',
    port:'Per Origin', vessel:'Per Requirement', payment:'TT / LC', lead:'Negotiable',
    desc:'Cryogenic Liquefied Natural Gas (Methane CH₄) stored at –162°C. Used in power generation, marine fuel, industrial process energy, city gas, grid supply and as petrochemical feedstock.',
    specs:[
      {p:'Methane Content',u:'% mol',l:'85 – 99',t:'—'},
      {p:'Nitrogen',u:'% mol',l:'Max. 1.0',t:'—'},
      {p:'Sulfur Content',u:'ppm',l:'< 1',t:'—'},
      {p:'Boiling Point',u:'°C',l:'Approx. –162',t:'—'},
      {p:'Density (liquid)',u:'kg/m³',l:'430 – 470',t:'—'},
      {p:'Gross Heating Value',u:'MJ/m³',l:'39 – 45',t:'—'},
    ]
  },
  {
    id:'lpg', name:'LPG', code:'PROPANE / BUTANE', cat:'Liquefied Petroleum Gas',
    std:'GOST 20448 / ASTM D1835', cas:'—', hs:'2711 19 00',
    origin:'Global / Multiple Sources', delivery:'FOB / CIF / TTO / TTV',
    port:'Per Origin', vessel:'Per Requirement', payment:'TT / LC', lead:'Negotiable',
    desc:'Liquefied Petroleum Gas — Propane/Butane mix for domestic, commercial, industrial and petrochemical applications. Clean burning with high energy efficiency and low emissions.',
    specs:[
      {p:'Propane Composition',u:'% vol',l:'40 – 60',t:'—'},
      {p:'Butane Composition',u:'% vol',l:'40 – 60',t:'—'},
      {p:'Vapor Pressure at 37.8°C',u:'kPa',l:'700 – 1,200',t:'—'},
      {p:'Specific Gravity at 15°C',u:'—',l:'0.50 – 0.58',t:'—'},
      {p:'Heating Value (Gross)',u:'MJ/kg',l:'46.0 – 50.0',t:'—'},
      {p:'Total Sulfur',u:'ppm',l:'Max. 50',t:'—'},
    ]
  },
]
