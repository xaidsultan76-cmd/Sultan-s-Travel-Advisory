// Sultan's Travel Advisory - Static Web Companion Engine (Vanilla ES6)

// 1. COMPREHENSIVE SEED DATA (Synced with Android App Seed Levels)
const countriesData = [
    {
        country: "Germany",
        region: "Europe",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Free",
        borderStatus: "Open",
        requirements: "Schengen Area passport valid for 6 months. Access via modern rail networks. Biometric verification at ports.",
        universityName: "Technical University of Munich",
        acceptanceRate: 15.6,
        universityFee: 1200,
        exchangePrograms: "Engineering, Informatics, Physics, Robotics",
        landmarkName: "Neuschwanstein Castle",
        landmarkCategory: "History",
        landmarkDesc: "The historic fairytale castle high on a rugged hill in Bavaria.",
        studentVisaType: "Sovereign Study Visa",
        studentVisaRequirements: "Biometric enrolment, authorized university acceptance letter, sufficient subsistence fund declaration (€11,208/yr required), and healthcare cover."
    },
    {
        country: "France",
        region: "Europe",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Free",
        borderStatus: "Open",
        requirements: "Schengen entry controls apply. Six months passport validity. Registration required for exchange stays.",
        universityName: "Sorbonne University",
        acceptanceRate: 18.2,
        universityFee: 1800,
        exchangePrograms: "Humanities, Classics, French Literature, Art History",
        landmarkName: "Eiffel Tower",
        landmarkCategory: "Culture",
        landmarkDesc: "Iconic metal lattice monument standing on the beautiful Champ de Mars in Paris.",
        studentVisaType: "VLS-TS (Long-Stay Student Visa)",
        studentVisaRequirements: "EEF registration procedure completion, proof of financial resources (€615/month), accommodation validation layout, and medical coverage."
    },
    {
        country: "Italy",
        region: "Europe",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Free",
        borderStatus: "Open",
        requirements: "No visa required for EU students. Proof of accommodation and living funds often requested at customs.",
        universityName: "University of Bologna",
        acceptanceRate: 38.5,
        universityFee: 1600,
        exchangePrograms: "Law, Archaeology, Classical Studies, Gastronomy",
        landmarkName: "The Colosseum",
        landmarkCategory: "History",
        landmarkDesc: "The grand oval amphitheatre in the heart of ancient Rome.",
        studentVisaType: "National Visa D (Studying)",
        studentVisaRequirements: "Universitaly portal pre-enrollment receipt, active health policy, lodging agreement, and block funds evidence of €6,000 yearly."
    },
    {
        country: "Spain",
        region: "Europe",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Free",
        borderStatus: "Open",
        requirements: "Favorable student exchange policies. Standard biometric data requested upon arrivals from non-EU.",
        universityName: "University of Barcelona",
        acceptanceRate: 32.1,
        universityFee: 2400,
        exchangePrograms: "Business Administration, Spanish Philology, Marine Biology",
        landmarkName: "La Sagrada Familia",
        landmarkCategory: "Modern",
        landmarkDesc: "The monumental unfinished Roman Catholic basilica designed by Antoni Gaudí.",
        studentVisaType: "Spanish Student Visa (Type D)",
        studentVisaRequirements: "Authorized university admission certificate, criminal background check, medical layout certificate, and funding minimum proof (€600/month)."
    },
    {
        country: "United Kingdom",
        region: "Europe",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Required",
        borderStatus: "Open",
        requirements: "Passport must be valid for stay duration. Electronic Travel Authorisation (ETA) or student visa for visits > 6 mo.",
        universityName: "University of Oxford",
        acceptanceRate: 14.3,
        universityFee: 31000,
        exchangePrograms: "PPE (Philosophy, Politics & Economics), Materials Science, Law, Classics",
        landmarkName: "Stonehenge",
        landmarkCategory: "History",
        landmarkDesc: "Ancient prehistoric circle of standing colossal stones in Salisbury Plain.",
        studentVisaType: "Student Visa (Subclass Tier 4)",
        studentVisaRequirements: "Confirmation of Acceptance for Studies (CAS) ID, English test qualification (IELTS), and dynamic maintenance fund check (£1,334/month for London)."
    },
    {
        country: "United States",
        region: "Americas",
        riskLevel: "Exercise Increased Caution",
        visaStatus: "Visa Required",
        borderStatus: "Open",
        requirements: "Biometric passport, ESTA required for visa waiver, or F-1 visa for full term database programs.",
        universityName: "Stanford University",
        acceptanceRate: 3.9,
        universityFee: 55000,
        exchangePrograms: "Computer Science, AI, Venture Capital, Physics",
        landmarkName: "Statue of Liberty",
        landmarkCategory: "Culture",
        landmarkDesc: "Famous neoclassic copper sculpture on Liberty Island in New York Harbor.",
        studentVisaType: "F-1 Academic Student Visa",
        studentVisaRequirements: "Form I-20 generation by sponsor school, SEVIS fee clearance ($350), certified bank balance sheets, and consular personal interview."
    },
    {
        country: "Canada",
        region: "Americas",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Required",
        borderStatus: "Open",
        requirements: "eTA required for air transit. Study Permit required for programs exceeding 6 months.",
        universityName: "University of Toronto",
        acceptanceRate: 43.0,
        universityFee: 32000,
        exchangePrograms: "Informatics, Environmental Forestry, Applied Medicine",
        landmarkName: "CN Tower",
        landmarkCategory: "Modern",
        landmarkDesc: "Concrete communications and spectacular observation tower in downtown Toronto.",
        studentVisaType: "Canada Study Permit",
        studentVisaRequirements: "Letter of Acceptance (LOA), Provincial Attestation Letter (PAL), Guaranteed Investment Certificate (GIC) of $20,635, and biometric registration."
    },
    {
        country: "Australia",
        region: "Oceania",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Required",
        borderStatus: "Open",
        requirements: "Digital Electronic Travel Authority (ETA) or Subclass 500 Student Visa. Strict biosecurity scanning.",
        universityName: "University of Sydney",
        acceptanceRate: 30.0,
        universityFee: 29000,
        exchangePrograms: "Marine Sciences, Veterinary Studies, Philosophy, Commerce",
        landmarkName: "Sydney Opera House",
        landmarkCategory: "Culture",
        landmarkDesc: "Outstanding multi-venue performing arts centre at Sydney Harbour.",
        studentVisaType: "Student Visa (Subclass 500)",
        studentVisaRequirements: "Confirmation of Enrolment (CoE), Overseas Student Health Cover (OSHC), Genuine Student (GS) declaration, and $29,710 savings audit."
    },
    {
        country: "Japan",
        region: "Asia",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Required",
        borderStatus: "Open",
        requirements: "Proof of return ticket, custom QR declaration via Visit Japan Web, strict narcotics regulations.",
        universityName: "University of Tokyo",
        acceptanceRate: 34.2,
        universityFee: 5350,
        exchangePrograms: "Seismology, Photonics Engineering, East Asian Studies",
        landmarkName: "Mount Fuji",
        landmarkCategory: "Nature",
        landmarkDesc: "Symmetrical snow-capped sacred volcanic peak near Tokyo.",
        studentVisaType: "Japan Student Visa (Ryugaku)",
        studentVisaRequirements: "Certificate of Eligibility (COE) issued by Japanese Immigration Board, sponsor letter, university admission transcript, and passport."
    },
    {
        country: "Singapore",
        region: "Asia",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Free",
        borderStatus: "Open",
        requirements: "SG Arrival Card required within 3 days before entry. Severe penal laws for drug or litter offences.",
        universityName: "National University of Singapore",
        acceptanceRate: 15.0,
        universityFee: 14000,
        exchangePrograms: "Quantitative Finance, Nanotechnology, Southeast Asian Geopolitics",
        landmarkName: "Gardens by the Bay",
        landmarkCategory: "Modern",
        landmarkDesc: "Futuristic horticultural park with massive greenhouse domes and towering Supertrees.",
        studentVisaType: "Student's Pass (STP)",
        studentVisaRequirements: "Solar+ registration via ICA, active university in-principle approval (IPA), medical fitness examination check, and $5,000 security deposit if applicable."
    },
    {
        country: "South Korea",
        region: "Asia",
        riskLevel: "Exercise Normal Caution",
        visaStatus: "Visa Required",
        borderStatus: "Open",
        requirements: "K-ETA digital clearance required for visa-free entry. Strict academic attendance parameters.",
        universityName: "Seoul National University",
        acceptanceRate: 12.8,
        universityFee: 4500,
        exchangePrograms: "K-Culture Studies, Semiconductor Physics, Linguistics",
        landmarkName: "Gyeongbokgung Palace",
        landmarkCategory: "History",
        landmarkDesc: "The expansive primary royal palace built in 1395 during the Joseon Dynasty.",
        studentVisaType: "Student Visa (D-2)",
        studentVisaRequirements: "Standard Certificate of Admission (COA), TB screening certificate, business registration certificate of hosting school, and $10,000 bank deposit proof."
    },
    {
        country: "South Africa",
        region: "Africa",
        riskLevel: "Exercise Increased Caution",
        visaStatus: "Visa Free",
        borderStatus: "Open",
        requirements: "Valid passport, yellow fever certificate if coming from endemic zones, mandatory proof of medical repatriation protection.",
        universityName: "University of Cape Town",
        acceptanceRate: 48.0,
        universityFee: 3200,
        exchangePrograms: "Post-Colonial Sociology, Marine Biology, African Development Economics",
        landmarkName: "Table Mountain",
        landmarkCategory: "Nature",
        landmarkDesc: "Flat-topped natural mountain monument overlooking the vibrant city of Cape Town.",
        studentVisaType: "South African Study Visa",
        studentVisaRequirements: "Letter of invitation from UCT, police clearance certificates, medical/radiological certificates, and SA-registered medical cover proof."
    }
];

// Programmatically inject matching student guides and housing guides to countriesData
countriesData.forEach(item => {
    const country = item.country;
    let guide = "";
    let housing = "";
    
    if (country === "Germany") {
        guide = "Survival: Register your residence address (Anmeldung) within 14 days of moving. Apply for a student public transit ticket (Semesterticket) for unlimited regional transit. Open a Deutsche Bank or Expatrio blocked account (Sperrkonto). Choose low-cost supermarkets like ALDI or Lidl.";
        housing = "Housing: Try to apply for low-cost student dorms (Studentenwerk) which cost €250–€400/mo, but apply 6 months in advance. Alternatively, search for flatshares (WG or Wohngemeinschaft) on WG-Gesucht.de which cost €350–€600/mo depending on location.";
    } else if (country === "France") {
        guide = "Survival: Register with France Visas and validate your VLS-TS visa online. Look into student discounts for transport (Navigo Junior/Imagine R in Paris or regional equivalents). Open an online banking account and sign up for CAF student housing subsidies (APL).";
        housing = "Housing: Apply for a CROUS student residence (€200–€400/mo) through the university portal. Private residences cost €450–€800/mo. Student flatshares can be found on 'La Carte des Colocs' or 'Appartager'.";
    } else if (country === "Italy") {
        guide = "Survival: Apply for your Codice Fiscale (tax code) at the local Agenzia delle Entrate upon arrival. Request the Permesso di Soggiorno (residency permit) within 8 days. Look for local university cafeterias (Mensa) for cheap student meals (€3 to €5).";
        housing = "Housing: Sights like 'StanzaSemplice' or 'Uniplaces' are great for student flatshares. Shared double/single rooms cost €250–€500/mo depending on proximity to city center. Avoid illegal landlords; always demand a registered rental contract.";
    } else if (country === "Spain") {
        guide = "Survival: Within 30 days of entry, apply for your TIE (Tarjeta de Identidad de Extranjero) at the Oficina de Extranjería. Get an inexpensive commuter rail transit card (Abono Transporte). Standard living expenses are relatively affordable; groceries average €150/mo.";
        housing = "Housing: Private student residencies (Colegios Mayores) cost €600–€1000/mo and often include meals. Most international students rent shared apartments (pisos compartidos) via Idealista or Fotocasa, costing €250–€450/mo.";
    } else if (country.includes("United Kingdom") || country === "UK") {
        guide = "Survival: Register with a local GP (General Practitioner) utilizing the NHS health surcharge. Set up a modern digital bank account (Monzo or Revolut) for quick contactless payments. Buy a railcard (16-25 Railcard) to save 1/3 on national trains.";
        housing = "Housing: University-owned halls of residence cost £120–£250/week and include utilities. Private shared student houses (licensed HMOs) are common, costing £90–£180/week depending on area. Check StudentPad or Rightmove.";
    } else if (country.includes("United States") || country === "USA") {
        guide = "Survival: Attend the mandatory SEVIS orientation at your school. Open a US student checking account at Chase or Bank of America. Secure a campus meal plan or buy groceries at Trader Joe's/Costco. Remember to always carry health insurance ID cards.";
        housing = "Housing: On-campus university dorms often cost $800–$1,500/mo and require meal plans. Off-campus houses or shared apartments are found via CollegeStudentHousing or furnished rooms on Zillow, costing $500–$1,200/mo.";
    } else if (country === "Canada") {
        guide = "Survival: Get your Study Permit authenticated at port of entry. Apply for a Social Insurance Number (SIN) to work part-time up to 20 hours. Secure a local transit pass. Protect yourself against harsh winter temperatures using windproof jackets and insulated layers.";
        housing = "Housing: On-campus dorms cost $800–$1,400 CAD/mo. Private shared renting ranges $600–$1,100 CAD/mo. Homestays with host families are popular and cost $900–$1,300 CAD/mo including meals. Look at Kijiji or Places4Students.";
    } else if (country === "Australia") {
        guide = "Survival: Register your Australian bank account online before landing to pick up debit cards quickly. Get a student transit smartcard (Opal, Myki). Observe strict sun safety rules (slip, slop, slap). Understand fair work rules for students.";
        housing = "Housing: Student apartments (Scape, UniLodge) are popular, starting from $300–$550 AUD/week. Shared house rentals (flatshare) are very common and can be found via Flatmates.com.au, costing $200–$400 AUD/week.";
    } else if (country === "Japan") {
        guide = "Survival: Register your address at local ward office (Kuyakusho) within 14 days and join the National Health Insurance (NHI) for low 30% medical costs. Get a Suica or Pasmo IC transit card. Carry cash as some shops don't accept cards.";
        housing = "Housing: University international student dorms are highly subsidized, costing ¥20,000–¥50,000/month. Alternatively, private sharehouses (Oakhouse, Borderless House) are popular for global students, costing ¥45,000–¥80,000/month.";
    } else if (country === "Singapore") {
        guide = "Survival: Complete physical checkups required by ICA. Purchase an EZ-Link card for MRT/buses. Eat at hawker centres (food courts) for cheap but Michelin-rated meals ($4 to $8). Stay well hydrated due to perpetual tropical humidity.";
        housing = "Housing: On-campus hostels are highly limited and cost $400–$800 SGD/mo. Most rent private rooms in HDB (public housing) flats costing $600–$1,100 SGD/mo, or private condominiums (condos) starting from $1,200/mo.";
    } else if (country === "South Korea") {
        guide = "Survival: Apply for your Alien Registration Card (ARC) within 90 days. Buy a T-Money card for smooth visual taps across subways and buses. Register for national health insurance. Download KakaoMap or Naver Map as Google Maps is restricted.";
        housing = "Housing: University dormitories cost ₩250,550–₩600,050/month. Alternatively, single tiny studio units called 'Goshiwon' or 'One-rooms' are popular, costing ₩300,550–₩550,050/month. 'One-rooms' usually require a large deposit (Key Money).";
    } else {
        guide = "Survival: Register with the foreign consulate upon arrival. Set up local transport apps, locate nearest supermarkets, secure a student SIM card, and open a student bank account quickly.";
        housing = "Housing: Look into university-sponsored student housing or seek private apartment shares. Average cost varies from $200 to $650 per month. Always sign a formal written rental contract.";
    }
    
    item.studentGuide = guide;
    item.housingGuide = housing;
});

// 2. TICKET DATABASE (Simulating Flight Tracker)
const flightDealsData = [
    { id: 1, departure: "United States", destination: "Germany", airline: "Lufthansa", basePrice: 850, currentPrice: 790, trend: "dropping", seats: 4, dealOfDay: true },
    { id: 2, departure: "Canada", destination: "United Kingdom", airline: "Air Canada", basePrice: 720, currentPrice: 745, trend: "rising", seats: 11, dealOfDay: false },
    { id: 3, departure: "Germany", destination: "Japan", airline: "Japan Airlines", basePrice: 1200, currentPrice: 1200, trend: "stable", seats: 8, dealOfDay: false },
    { id: 4, departure: "United Kingdom", destination: "Singapore", airline: "Singapore Air", basePrice: 950, currentPrice: 880, trend: "dropping", seats: 2, dealOfDay: true },
    { id: 5, departure: "Australia", destination: "South Korea", airline: "Qantas", basePrice: 810, currentPrice: 835, trend: "rising", seats: 15, dealOfDay: false },
    { id: 6, departure: "France", destination: "South Africa", airline: "Air France", basePrice: 990, currentPrice: 990, trend: "stable", seats: 7, dealOfDay: false }
];

// 3. SECURE APPLICATION COMPANION STATE
const appState = {
    activeTab: "advisories", // advisories | universities | landmarks | guide | hub
    
    // Advisories Filters
    advisorySearch: "",
    advisoryRegion: "All",
    advisoryRisk: "All",
    advisoryVisa: "All",
    
    // Universities Filters
    universitySearch: "",
    universityRegion: "All",
    
    // Landmarks Filters
    landmarkSearch: "",
    landmarkCategory: "All",
    
    // Visa Directory Selection
    selectedVisaCountry: "Germany",
    
    // Packing checklists
    packingChecks: {
        summer: {
            "Passport & Biometric Visa Copies": true,
            "University Acceptance Letter (COA)": true,
            "Light cotton outfits (breathability)": false,
            "Adaptors with USB-C output fast rating": false,
            "International travel cash reserve ($500)": false,
            "Sunscreens & sunglasses": false
        },
        winter: {
            "Proof of Health/Sickness Insurance policy": true,
            "Certified bank statement files": true,
            "Thick thermal undershirts & parkas": false,
            "Waterproof sturdy snow boots": false,
            "Moisturizing skin creams": false,
            "Prescription drugs & global formulas": false
        }
    },
    
    // Interactive calculator fields
    calcSelectedCountry: "Germany",
    calcDurationMonths: 6,
    calcScholarshipPercent: 0,
    
    // Airfare Ticket Sync Simulator
    autoSync: true,
    syncInterval: null,
    isSyncing: false,
    flights: [...flightDealsData],
    
    // Bookmarking collections (LocalStorage saved)
    bookmarkedAdvisories: [],
    favoriteUniversities: [],
    
    // Live palette options matching Android codebase themes
    selectedTheme: "Cosmic Slate",
    themes: {
        "Cosmic Slate": {
            bg: "bg-[#0D0F16]",
            card: "bg-[#1E293B]",
            text: "text-slate-100",
            primary: "text-blue-400 border-blue-500 bg-blue-500",
            accent: "#3B82F6",
            accentDark: "#1E3A8A",
            border: "border-slate-800",
            subText: "text-slate-400"
        },
        "Samsung Aura": {
            bg: "bg-[#0F0B1E]",
            card: "bg-[#1E1538]",
            text: "text-purple-50",
            primary: "text-purple-400 border-purple-500 bg-purple-500",
            accent: "#A855F7",
            accentDark: "#581C87",
            border: "border-purple-950/40",
            subText: "text-purple-300"
        },
        "Emerald Horizon": {
            bg: "bg-[#F4F9F5]",
            card: "bg-white",
            text: "text-slate-800",
            primary: "text-[#059669] border-[#059669] bg-[#059669]",
            accent: "#059669",
            accentDark: "#064E3B",
            border: "border-slate-200",
            subText: "text-slate-600"
        },
        "Sunset Scholar": {
            bg: "bg-[#FFFBEB]",
            card: "bg-[#FFF7ED]",
            text: "text-amber-950",
            primary: "text-[#EA580C] border-[#EA580C] bg-[#EA580C]",
            accent: "#EA580C",
            accentDark: "#7C2D12",
            border: "border-orange-200",
            subText: "text-orange-950/70"
        },
        "Arctic Frost": {
            bg: "bg-[#F0F9FF]",
            card: "bg-white",
            text: "text-[#0C4A6E]",
            primary: "text-[#0EA5E9] border-[#0EA5E9] bg-[#0EA5E9]",
            accent: "#0EA5E9",
            accentDark: "#0369A1",
            border: "border-sky-100",
            subText: "text-[#0284C7]"
        },
        "Midnight Rose": {
            bg: "bg-[#1C0A10]",
            card: "bg-[#2E121D]",
            text: "text-rose-50",
            primary: "text-rose-400 border-rose-500 bg-rose-500",
            accent: "#F43F5E",
            accentDark: "#881337",
            border: "border-rose-950/40",
            subText: "text-rose-300"
        },
        "Onyx Jetblack": {
            bg: "bg-black",
            card: "bg-zinc-950",
            text: "text-zinc-50",
            primary: "text-[#00FF87] border-[#00FF87] bg-[#00FF87]",
            accent: "#00FF87",
            accentDark: "#003A1C",
            border: "border-zinc-900",
            subText: "text-zinc-400"
        }
    }
};

// 4. PERSISTENCE ENGINE INITIALIZATION
function loadStateFromStorage() {
    try {
        const savedTheme = localStorage.getItem("sultan_theme");
        if (savedTheme && appState.themes[savedTheme]) {
            appState.selectedTheme = savedTheme;
        }
        
        const savedAdvisories = localStorage.getItem("sultan_bookmarks");
        if (savedAdvisories) {
            appState.bookmarkedAdvisories = JSON.parse(savedAdvisories);
        }
        
        const savedUnis = localStorage.getItem("sultan_favorites");
        if (savedUnis) {
            appState.favoriteUniversities = JSON.parse(savedUnis);
        }
        
        const savedPacking = localStorage.getItem("sultan_packing");
        if (savedPacking) {
            appState.packingChecks = JSON.parse(savedPacking);
        }
    } catch(e) {
        console.error("Local Storage support unavailable or restricted.", e);
    }
}

function saveStateToStorage() {
    try {
        localStorage.setItem("sultan_theme", appState.selectedTheme);
        localStorage.setItem("sultan_bookmarks", JSON.stringify(appState.bookmarkedAdvisories));
        localStorage.setItem("sultan_favorites", JSON.stringify(appState.favoriteUniversities));
        localStorage.setItem("sultan_packing", JSON.stringify(appState.packingChecks));
    } catch(e) {
        console.warn("Could not synchronize storage blocks.", e);
    }
}

// 5. HELPER ACTIONS
function toggleAdvisoryBookmark(countryName) {
    const idx = appState.bookmarkedAdvisories.indexOf(countryName);
    if (idx > -1) {
        appState.bookmarkedAdvisories.splice(idx, 1);
    } else {
        appState.bookmarkedAdvisories.push(countryName);
    }
    saveStateToStorage();
    renderContent();
}

function toggleUniversityFavorite(uniName) {
    const idx = appState.favoriteUniversities.indexOf(uniName);
    if (idx > -1) {
        appState.favoriteUniversities.splice(idx, 1);
    } else {
        appState.favoriteUniversities.push(uniName);
    }
    saveStateToStorage();
    renderContent();
}

function toggleChecklist(type, item) {
    appState.packingChecks[type][item] = !appState.packingChecks[type][item];
    saveStateToStorage();
    renderContent();
}

function selectTheme(themeName) {
    if (appState.themes[themeName]) {
        appState.selectedTheme = themeName;
        saveStateToStorage();
        applyThemeStyles();
        renderContent();
    }
}

// Ensure Tailwind & customized body styles load the right configuration classes
function applyThemeStyles() {
    const theme = appState.themes[appState.selectedTheme];
    const isLight = appState.selectedTheme === "Emerald Horizon" || appState.selectedTheme === "Sunset Scholar" || appState.selectedTheme === "Arctic Frost";
    
    // Toggle dark mode flags
    if (isLight) {
        document.documentElement.classList.remove('dark');
        document.body.className = `min-h-screen transition-colors duration-500 font-sans ${theme.bg} text-slate-800`;
    } else {
        document.documentElement.classList.add('dark');
        document.body.className = `min-h-screen transition-colors duration-500 font-sans ${theme.bg} text-slate-100`;
    }
    
    // Update theme-color meta tag for mobile browsers styling
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute('content', theme.accent);
}

// Real-time Flight Airfares simulation logic
function simulateFlightTickers() {
    if (!appState.autoSync) return;
    
    // Set syncing animation flag
    appState.isSyncing = true;
    renderContent();
    
    setTimeout(() => {
        appState.flights = appState.flights.map(flight => {
            // Modulate currentPrice randomly within +- $25 limits
            const fluctuation = Math.floor(Math.random() * 51) - 25;
            let nextPrice = flight.currentPrice + fluctuation;
            
            // Constrain between 60% and 130% of base price
            if (nextPrice < flight.basePrice * 0.6) nextPrice = Math.floor(flight.basePrice * 0.6);
            if (nextPrice > flight.basePrice * 1.3) nextPrice = Math.floor(flight.basePrice * 1.3);
            
            // Assign next trend description
            let trend = "stable";
            if (nextPrice < flight.currentPrice) trend = "dropping";
            if (nextPrice > flight.currentPrice) trend = "rising";
            
            // Seat alteration simulator (fluctuate between 1 and 20)
            let seats = flight.seats;
            if (Math.random() > 0.6) {
                seats = seats + (Math.random() > 0.5 ? 1 : -1);
                if (seats < 1) seats = 2;
                if (seats > 20) seats = 18;
            }
            
            return {
                ...flight,
                currentPrice: nextPrice,
                trend: trend,
                seats: seats,
                lastUpdatedText: "Just synchronized"
            };
        });
        
        appState.isSyncing = false;
        renderContent();
    }, 1200);
}

// 6. ADVISORY GRAPHICAL STATUS CHART COMPONENT
function renderSafePercentageChart(filteredAdvisories) {
    if (filteredAdvisories.length === 0) return `<div class="text-center py-4 text-xs text-slate-400">No entries for statistics</div>`;
    
    const safeCount = filteredAdvisories.filter(a => a.riskLevel.includes("Normal")).length;
    const cautionCount = filteredAdvisories.filter(a => a.riskLevel.includes("Increased") || a.riskLevel.includes("Caution")).length;
    const severeCount = filteredAdvisories.filter(a => a.riskLevel.includes("Reconsider") || a.riskLevel.includes("Not")).length;
    
    const total = filteredAdvisories.length;
    const safePct = Math.round((safeCount / total) * 100) || 0;
    const cautionPct = Math.round((cautionCount / total) * 100) || 0;
    const severePct = Math.round((severeCount / total) * 100) || 0;
    
    return `
        <div class="space-y-3">
            <div class="flex justify-between items-center text-xs font-semibold">
                <span>🟢 Safe: ${safeCount} (${safePct}%)</span>
                <span>🟡 Caution: ${cautionCount} (${cautionPct}%)</span>
                <span>🔴 Severe Warning: ${severeCount} (${severePct}%)</span>
            </div>
            <div class="w-full flex h-3.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <div style="width: ${safePct}%" class="bg-emerald-500 transition-all duration-500 h-full"></div>
                <div style="width: ${cautionPct}%" class="bg-amber-400 transition-all duration-500 h-full"></div>
                <div style="width: ${severePct}%" class="bg-red-500 transition-all duration-500 h-full"></div>
            </div>
            <div class="text-[10px] text-slate-500 dark:text-slate-400 text-center font-medium italic">
                Stats calculated instantly over ${total} localized student corridors filtered above
            </div>
        </div>
    `;
}

// 7. CORE VIEW RENDERING ROUTINES
function renderContent() {
    const root = document.getElementById("tab-section-content");
    if (!root) return;
    
    const theme = appState.themes[appState.selectedTheme];
    
    switch (appState.activeTab) {
        case "advisories": {
            // Apply filtered arrays
            const filtered = countriesData.filter(item => {
                const s = appState.advisorySearch.toLowerCase();
                const matchSearch = item.country.toLowerCase().includes(s) || item.region.toLowerCase().includes(s) || item.requirements.toLowerCase().includes(s);
                const matchRegion = appState.advisoryRegion === "All" || item.region === appState.advisoryRegion;
                
                let matchRisk = true;
                if (appState.advisoryRisk !== "All") {
                    if (appState.advisoryRisk === "Normal") matchRisk = item.riskLevel.includes("Normal");
                    else if (appState.advisoryRisk === "Caution") matchRisk = item.riskLevel.includes("Increased") || item.riskLevel.includes("Caution");
                    else if (appState.advisoryRisk === "Severe") matchRisk = item.riskLevel.includes("Reconsider") || item.riskLevel.includes("Not");
                }
                
                const matchVisa = appState.advisoryVisa === "All" || item.visaStatus === appState.advisoryVisa;
                
                return matchSearch && matchRegion && matchRisk && matchVisa;
            });
            
            root.innerHTML = `
                <div class="space-y-6">
                    <!-- Filter Panel -->
                    <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-lg transition-all">
                        <h2 class="text-base font-bold flex items-center mb-3">
                            <span class="material-symbols-outlined text-xl text-blue-500 mr-2">filter_alt</span>
                            Search & Filter Travel Corridors
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Text Search</label>
                                <input type="text" id="adv-search" value="${appState.advisorySearch}" placeholder="Search country, rules..." 
                                    class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Global Region</label>
                                <select id="adv-region" class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option value="All" ${appState.advisoryRegion === "All" ? "selected" : ""}>All Global Regions</option>
                                    <option value="Europe" ${appState.advisoryRegion === "Europe" ? "selected" : ""}>Europe</option>
                                    <option value="Asia" ${appState.advisoryRegion === "Asia" ? "selected" : ""}>Asia</option>
                                    <option value="Americas" ${appState.advisoryRegion === "Americas" ? "selected" : ""}>Americas</option>
                                    <option value="Africa" ${appState.advisoryRegion === "Africa" ? "selected" : ""}>Africa</option>
                                    <option value="Oceania" ${appState.advisoryRegion === "Oceania" ? "selected" : ""}>Oceania</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Advisory Status Level</label>
                                <select id="adv-risk" class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option value="All" ${appState.advisoryRisk === "All" ? "selected" : ""}>All Warning Levels</option>
                                    <option value="Normal" ${appState.advisoryRisk === "Normal" ? "selected" : ""}>🟢 Normal Caution (Safe)</option>
                                    <option value="Caution" ${appState.advisoryRisk === "Caution" ? "selected" : ""}>🟡 Increased Caution</option>
                                    <option value="Severe" ${appState.advisoryRisk === "Severe" ? "selected" : ""}>🔴 Severe Warnings</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Visa Requirement</label>
                                <select id="adv-visa" class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option value="All" ${appState.advisoryVisa === "All" ? "selected" : ""}>All Formats</option>
                                    <option value="Visa Free" ${appState.advisoryVisa === "Visa Free" ? "selected" : ""}>Visa Free</option>
                                    <option value="Visa Required" ${appState.advisoryVisa === "Visa Required" ? "selected" : ""}>Visa Required</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Statistics Bar Chart -->
                    <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-md">
                        <h2 class="text-sm font-bold flex items-center mb-3">
                            <span class="material-symbols-outlined text-lg mr-2 text-indigo-400">query_stats</span>
                            Live Analytics Breakdown
                        </h2>
                        ${renderSafePercentageChart(filtered)}
                    </div>

                    <!-- Grid list of advisories -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        ${filtered.map(item => {
                            const isBookmarked = appState.bookmarkedAdvisories.includes(item.country);
                            const riskColor = item.riskLevel.includes("Normal") 
                                ? "bg-emerald-500 text-white" 
                                : item.riskLevel.includes("Caution") || item.riskLevel.includes("Increased")
                                    ? "bg-amber-500 text-slate-950" 
                                    : "bg-red-500 text-white";
                                    
                            const borderBadge = item.borderStatus === "Open" 
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                                : "bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-300";
                                
                            return `
                                <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow hover:shadow-xl transition-all relative flex flex-col justify-between group">
                                    <div>
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <span class="text-xs font-semibold uppercase opacity-60 tracking-wider">${item.region}</span>
                                                <h3 class="text-lg font-bold flex items-center mt-0.5">
                                                    ${item.country}
                                                    <span class="ml-2 w-2 h-2 rounded-full inline-block ${item.riskLevel.includes("Normal") ? "bg-emerald-500" : "bg-red-500"}"></span>
                                                </h3>
                                            </div>
                                            <button onclick="toggleAdvisoryBookmark('${item.country}')" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:scale-110 active:scale-95 transition-all text-amber-500">
                                                <span class="material-symbols-outlined font-light fill-current ${isBookmarked ? 'fill-current text-amber-500' : 'text-slate-400 dark:text-slate-500 fill-none'}">
                                                    ${isBookmarked ? 'bookmark' : 'bookmark'}
                                                </span>
                                            </button>
                                        </div>
                                        
                                        <div class="flex flex-wrap gap-2 mt-3.5 mb-4">
                                            <span class="text-xs px-2.5 py-1 rounded-lg ${riskColor} font-bold">${item.riskLevel}</span>
                                            <span class="text-xs px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-bold">${item.visaStatus}</span>
                                            <span class="text-xs px-2.5 py-1 rounded-lg ${borderBadge} font-bold">Border: ${item.borderStatus}</span>
                                        </div>
                                        
                                        <p class="text-sm border-l-2 border-indigo-500 pl-3 leading-relaxed opacity-95 mb-4 select-text">
                                            ${item.requirements}
                                        </p>
                                        
                                        <button onclick="openStudentAdvisoryModal('${item.country}')" class="w-full text-xs font-bold py-2 bg-indigo-600/10 hover:bg-indigo-600/25 text-indigo-400 mt-2 mb-4 rounded-xl transition-all flex items-center justify-center gap-1.5 border border-indigo-500/20 shadow-sm hover:shadow-md">
                                            <span class="material-symbols-outlined text-sm">school</span>
                                            <span>Student Visa & Living Guides</span>
                                        </button>
                                    </div>
                                    
                                    <div class="mt-auto pt-3 border-t ${theme.border} flex justify-between items-center text-xs opacity-75">
                                        <span>📜 Policy Active</span>
                                        <div class="flex gap-1.5 items-center">
                                            <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
                                            <span class="font-bold">May 2026 verified</span>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join("")}
                    </div>
                </div>
            `;
            
            // Re-bind listeners
            document.getElementById("adv-search").addEventListener("input", (e) => {
                appState.advisorySearch = e.target.value;
                renderContent();
            });
            document.getElementById("adv-region").addEventListener("change", (e) => {
                appState.advisoryRegion = e.target.value;
                renderContent();
            });
            document.getElementById("adv-risk").addEventListener("change", (e) => {
                appState.advisoryRisk = e.target.value;
                renderContent();
            });
            document.getElementById("adv-visa").addEventListener("change", (e) => {
                appState.advisoryVisa = e.target.value;
                renderContent();
            });
            break;
        }
        case "universities": {
            const getWebUniversities = () => {
                const list = countriesData.map(item => ({
                    universityName: item.universityName,
                    country: item.country,
                    region: item.region,
                    acceptanceRate: item.acceptanceRate,
                    universityFee: item.universityFee,
                    exchangePrograms: item.exchangePrograms
                }));
                const extras = [
                    { universityName: "Massachusetts Institute of Technology (MIT)", country: "United States", region: "Americas", acceptanceRate: 6.8, universityFee: 55500, exchangePrograms: "Quantum Physics, Artificial Intelligence, Aerospace Engineering" },
                    { universityName: "Stanford University", country: "United States", region: "Americas", acceptanceRate: 4.3, universityFee: 56000, exchangePrograms: "Computer Science, Entrepreneurship, Electrical Engineering" },
                    { universityName: "University of Cambridge", country: "United Kingdom", region: "Europe", acceptanceRate: 18.0, universityFee: 32000, exchangePrograms: "Mathematics, Genetics, English Literature" },
                    { universityName: "Imperial College London", country: "United Kingdom", region: "Europe", acceptanceRate: 14.1, universityFee: 33500, exchangePrograms: "Computing, Mechanical Engineering, Chemistry" },
                    { universityName: "Heidelberg University", country: "Germany", region: "Europe", acceptanceRate: 15.0, universityFee: 1500, exchangePrograms: "Medicine, Molecular Biology, Ancient History" },
                    { universityName: "Humboldt University of Berlin", country: "Germany", region: "Europe", acceptanceRate: 18.0, universityFee: 1200, exchangePrograms: "Philosophy, Social Sciences, Quantum Optics" },
                    { universityName: "Kyoto University", country: "Japan", region: "Asia", acceptanceRate: 35.0, universityFee: 5200, exchangePrograms: "Advanced Robotics, Chemistry, Kyoto History" },
                    { universityName: "Peking University", country: "China", region: "Asia", acceptanceRate: 12.0, universityFee: 4500, exchangePrograms: "Chinese Literature, Physics, International Policy" },
                    { universityName: "McGill University", country: "Canada", region: "Americas", acceptanceRate: 38.0, universityFee: 24000, exchangePrograms: "Neurology, Mechanical Engineering, Fine Arts" },
                    { universityName: "University of Sydney", country: "Australia", region: "Oceania", acceptanceRate: 30.0, universityFee: 29000, exchangePrograms: "Marine Biology, Law, International Relations" },
                    { universityName: "Trinity College Dublin", country: "Ireland", region: "Europe", acceptanceRate: 33.5, universityFee: 18000, exchangePrograms: "Irish Literature, Classics, Computing Science" },
                    { universityName: "University of British Columbia (UBC)", country: "Canada", region: "Americas", acceptanceRate: 42.0, universityFee: 31000, exchangePrograms: "Environmental Forestry, Oceanography, Digital Arts" },
                    { universityName: "Lahore University of Management Sciences (LUMS)", country: "Pakistan", region: "Asia", acceptanceRate: 18.5, universityFee: 4200, exchangePrograms: "Business Administration, Computer Science, Economics" },
                    { universityName: "National University of Sciences and Technology (NUST)", country: "Pakistan", region: "Asia", acceptanceRate: 14.0, universityFee: 2500, exchangePrograms: "Electrical Engineering, Software Engineering, Applied Physics" }
                ];
                return list.concat(extras);
            };
            
            const filteredUnis = getWebUniversities().filter(item => {
                const s = appState.universitySearch.toLowerCase();
                const matchSearch = item.universityName.toLowerCase().includes(s) || item.country.toLowerCase().includes(s) || item.exchangePrograms.toLowerCase().includes(s);
                const matchRegion = appState.universityRegion === "All" || item.region === appState.universityRegion;
                return matchSearch && matchRegion;
            });
            
            root.innerHTML = `
                <div class="space-y-6">
                    <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-lg">
                        <h2 class="text-base font-bold flex items-center mb-3">
                            <span class="material-symbols-outlined text-xl text-teal-500 mr-2">school</span>
                            Exchange & Academic Partner Database
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Search Universities or Subjects</label>
                                <input type="text" id="uni-search" value="${appState.universitySearch}" placeholder="E.g., Engineering, Oxford, Germany..." 
                                    class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-teal-500 focus:outline-none" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Geographical Region Filter</label>
                                <select id="uni-region" class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none">
                                    <option value="All" ${appState.universityRegion === "All" ? "selected" : ""}>All Global Partners</option>
                                    <option value="Europe" ${appState.universityRegion === "Europe" ? "selected" : ""}>Europe</option>
                                    <option value="Asia" ${appState.universityRegion === "Asia" ? "selected" : ""}>Asia</option>
                                    <option value="Americas" ${appState.universityRegion === "Americas" ? "selected" : ""}>Americas</option>
                                    <option value="Africa" ${appState.universityRegion === "Africa" ? "selected" : ""}>Africa</option>
                                    <option value="Oceania" ${appState.universityRegion === "Oceania" ? "selected" : ""}>Oceania</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        ${filteredUnis.map(item => {
                            const isFav = appState.favoriteUniversities.includes(item.universityName);
                            const feesFormatted = item.universityFee.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
                            
                            return `
                                <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                                    <div>
                                        <div class="flex justify-between items-start">
                                            <div class="bg-indigo-100 dark:bg-indigo-950/40 p-2.5 rounded-xl text-indigo-500 mb-3.5">
                                                <span class="material-symbols-outlined text-2xl">account_balance</span>
                                            </div>
                                            <button onclick="toggleUniversityFavorite('${item.universityName}')" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:scale-105 active:scale-95 transition-all text-red-500">
                                                <span class="material-symbols-outlined ${isFav ? 'fill-current text-red-500' : 'text-slate-400 dark:text-slate-500 fill-none'}">
                                                    favorite
                                                </span>
                                            </button>
                                        </div>
                                        
                                        <h3 class="text-base font-bold leading-normal mb-1 h-12 overflow-hidden text-ellipsis">${item.universityName}</h3>
                                        <div class="text-xs font-semibold opacity-75 mb-4 flex items-center">
                                            <span class="material-symbols-outlined text-sm mr-1">location_on</span>
                                            ${item.country} (${item.region})
                                        </div>
                                        
                                        <div class="space-y-2 border-t border-b border-dashed ${theme.border} py-3 mb-4">
                                            <div class="flex justify-between items-center text-xs">
                                                <span class="opacity-75">Acceptance Rate</span>
                                                <span class="font-bold text-teal-500">${item.acceptanceRate}%</span>
                                            </div>
                                            <div class="flex justify-between items-center text-xs">
                                                <span class="opacity-75">Annual Tuitions Est.</span>
                                                <span class="font-bold text-amber-500">${feesFormatted} / yr</span>
                                            </div>
                                            <div class="flex justify-between items-center text-xs">
                                                <span class="opacity-75">Exchange Span</span>
                                                <span class="font-bold">6 Months Core</span>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 class="text-xs font-bold uppercase opacity-60 mb-1.5 tracking-wide">Exchange Catalogs</h4>
                                            <div class="flex flex-wrap gap-1">
                                                ${item.exchangePrograms.split(", ").map(prog => `
                                                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border ${theme.border}">
                                                        ${prog}
                                                    </span>
                                                `).join("")}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-5 pt-3.5 border-t ${theme.border}">
                                        <button onclick="appState.activeTab='guide'; appState.selectedVisaCountry='${item.country}'; renderContent(); window.scrollTo(0, 0);" 
                                            class="w-full text-xs font-bold py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all text-center flex items-center justify-center gap-1">
                                            <span class="material-symbols-outlined text-sm">assignment_turned_in</span>
                                            Review Visa Criteria
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join("")}
                    </div>
                </div>
            `;
            
            document.getElementById("uni-search").addEventListener("input", (e) => {
                appState.universitySearch = e.target.value;
                renderContent();
            });
            document.getElementById("uni-region").addEventListener("change", (e) => {
                appState.universityRegion = e.target.value;
                renderContent();
            });
            break;
        }
        case "landmarks": {
            const filteredLandmarks = countriesData.filter(item => {
                const s = appState.landmarkSearch.toLowerCase();
                const matchQuery = item.landmarkName.toLowerCase().includes(s) || item.landmarkDesc.toLowerCase().includes(s) || item.country.toLowerCase().includes(s);
                const matchCat = appState.landmarkCategory === "All" || item.landmarkCategory === appState.landmarkCategory;
                return matchQuery && matchCat;
            });
            
            root.innerHTML = `
                <div class="space-y-6">
                    <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-lg">
                        <h2 class="text-base font-bold flex items-center mb-3">
                            <span class="material-symbols-outlined text-xl text-yellow-500 mr-2">explore</span>
                            Global Student Landmarks Discovery
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Search Sights / Geography</label>
                                <input type="text" id="land-search" value="${appState.landmarkSearch}" placeholder="Search sights (E.g. Eiffel, castle, mountains)..." 
                                    class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-yellow-500 focus:outline-none" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold mb-1 opacity-75">Sights Category</label>
                                <select id="land-cat" class="w-full text-sm px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none">
                                    <option value="All" ${appState.landmarkCategory === "All" ? "selected" : ""}>All Categories</option>
                                    <option value="History" ${appState.landmarkCategory === "History" ? "selected" : ""}>History</option>
                                    <option value="Culture" ${appState.landmarkCategory === "Culture" ? "selected" : ""}>Culture</option>
                                    <option value="Nature" ${appState.landmarkCategory === "Nature" ? "selected" : ""}>Nature</option>
                                    <option value="Modern" ${appState.landmarkCategory === "Modern" ? "selected" : ""}>Modern</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                        ${filteredLandmarks.map(item => {
                            let ratingStars = "⭐".repeat(5);
                            let categoryIcon = "history";
                            let iconBg = "bg-amber-100 dark:bg-amber-950/40 text-amber-500";
                            if (item.landmarkCategory === "Nature") {
                                categoryIcon = "forest";
                                iconBg = "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500";
                            } else if (item.landmarkCategory === "Culture") {
                                categoryIcon = "palette";
                                iconBg = "bg-rose-100 dark:bg-rose-950/40 text-rose-500";
                            } else if (item.landmarkCategory === "Modern") {
                                categoryIcon = "apartment";
                                iconBg = "bg-sky-100 dark:bg-sky-950/45 text-sky-500";
                            }
                            
                            return `
                                <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                                    <div>
                                        <div class="flex justify-between items-center mb-4">
                                            <div class="p-2.5 rounded-xl ${iconBg}">
                                                <span class="material-symbols-outlined text-2xl">${categoryIcon}</span>
                                            </div>
                                            <span class="text-xs font-bold uppercase tracking-wider opacity-60">
                                                ${item.landmarkCategory}
                                            </span>
                                        </div>
                                        
                                        <h3 class="text-lg font-bold mb-1">${item.landmarkName}</h3>
                                        <div class="text-xs font-semibold opacity-75 mb-3 flex items-center">
                                            <span class="material-symbols-outlined text-sm mr-1">flag</span>
                                            ${item.country} Key Heritage Destination
                                        </div>
                                        
                                        <p class="text-sm opacity-95 leading-relaxed font-light mb-4">
                                            ${item.landmarkDesc}
                                        </p>
                                    </div>
                                    
                                    <div class="pt-3 border-t ${theme.border} flex justify-between items-center text-xs">
                                        <span class="opacity-70">Popularity Weight</span>
                                        <span class="font-bold text-yellow-500">${ratingStars}</span>
                                    </div>
                                </div>
                            `;
                        }).join("")}
                    </div>
                </div>
            `;
            
            document.getElementById("land-search").addEventListener("input", (e) => {
                appState.landmarkSearch = e.target.value;
                renderContent();
            });
            document.getElementById("land-cat").addEventListener("change", (e) => {
                appState.landmarkCategory = e.target.value;
                renderContent();
            });
            break;
        }
        case "guide": {
            // Find current selection for Student Visa rules
            const activeAd = countriesData.find(a => a.country === appState.selectedVisaCountry) || countriesData[0];
            
            // Packing Checklists HTML render
            const summerChecklistHtml = Object.entries(appState.packingChecks.summer).map(([item, checked]) => `
                <div class="flex items-center gap-3 py-1 cursor-pointer select-none" onclick="toggleChecklist('summer', '${item}')">
                    <span class="material-symbols-outlined text-xl ${checked ? 'text-emerald-500 font-bold' : 'text-slate-400 dark:text-slate-600'}">
                        ${checked ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                    <span class="text-sm ${checked ? 'line-through opacity-50' : 'opacity-100'}">${item}</span>
                </div>
            `).join("");
            
            const winterChecklistHtml = Object.entries(appState.packingChecks.winter).map(([item, checked]) => `
                <div class="flex items-center gap-3 py-1 cursor-pointer select-none" onclick="toggleChecklist('winter', '${item}')">
                    <span class="material-symbols-outlined text-xl ${checked ? 'text-[#EA580C] font-bold' : 'text-slate-400 dark:text-slate-600'}">
                        ${checked ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                    <span class="text-sm ${checked ? 'line-through opacity-50' : 'opacity-100'}">${item}</span>
                </div>
            `).join("");
            
            // Render view
            root.innerHTML = `
                <div class="space-y-6">
                    <!-- Global Student Visa Directory Section -->
                    <div class="p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-lg">
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5 pb-4 border-b ${theme.border}">
                            <div>
                                <h2 class="text-lg font-bold flex items-center">
                                    <span class="material-symbols-outlined text-xl text-indigo-500 mr-2">school</span>
                                    Global Student Visa Directory
                                </h2>
                                <p class="text-xs opacity-75">Inspect specialized subclass frameworks, admission conditions and funding minimum markers.</p>
                            </div>
                            
                            <!-- Search Country Selector -->
                            <div class="w-full md:w-64">
                                <label class="block text-[10px] font-bold uppercase opacity-60 mb-1">Select Study Destination</label>
                                <select id="visa-country-select" class="w-full text-sm font-semibold px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                    ${countriesData.map(c => `
                                        <option value="${c.country}" ${c.country === appState.selectedVisaCountry ? "selected" : ""}>${c.country}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>

                        <!-- Subclass details card display -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="md:col-span-2 space-y-4">
                                <div>
                                    <span class="text-xs uppercase font-bold opacity-60">Statutory Subclass Type</span>
                                    <div class="text-lg font-black text-indigo-400 flex items-center gap-1.5 mt-0.5">
                                        <span class="material-symbols-outlined">assignment_ind</span>
                                        ${activeAd.studentVisaType}
                                    </div>
                                </div>
                                
                                <div>
                                    <span class="text-xs uppercase font-bold opacity-60">Mandatory Application Requirements</span>
                                    <p class="text-sm leading-relaxed mt-1 border-l-2 border-indigo-500 pl-3.5 select-text">
                                        ${activeAd.studentVisaRequirements}
                                    </p>
                                </div>

                                <div class="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-xl text-xs flex gap-3 items-start border ${theme.border}">
                                    <span class="material-symbols-outlined text-indigo-500 mt-0.5">info</span>
                                    <div>
                                        <span class="font-bold block text-indigo-500 mb-0.5">Consular Filing Milestone</span>
                                        Verify legal visa thresholds at least 90–120 days prior to school induction. Biometric collection appointments may face backlog delays during summer cycles.
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border ${theme.border} space-y-3.5">
                                <h3 class="text-xs font-bold uppercase tracking-wide opacity-75">Security & Eligibility Markers</h3>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="opacity-75">Student Visa Code</span>
                                        <span class="font-bold text-teal-500">Available (Active)</span>
                                    </div>
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="opacity-75">Advisory Severity</span>
                                        <span class="font-semibold">${activeAd.riskLevel}</span>
                                    </div>
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="opacity-75">General Entry</span>
                                        <span class="font-semibold text-blue-400">${activeAd.visaStatus}</span>
                                    </div>
                                    <div class="flex justify-between items-center text-xs">
                                        <span class="opacity-75">Border Integrity</span>
                                        <span class="font-semibold text-emerald-500">${activeAd.borderStatus}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Side-by-Side packing checklists -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Summer checklist -->
                        <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-md">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="font-bold flex items-center text-sm">
                                    <span class="material-symbols-outlined text-lg text-emerald-500 mr-2">sunny</span>
                                    Summer Core Checklist
                                </h3>
                                <span class="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-lg">Favorable Climate Pack</span>
                            </div>
                            <div class="space-y-2">
                                ${summerChecklistHtml}
                            </div>
                        </div>

                        <!-- Winter Checklist -->
                        <div class="p-5 rounded-2xl ${theme.card} border ${theme.border} shadow-md">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="font-bold flex items-center text-sm">
                                    <span class="material-symbols-outlined text-lg text-[#EA580C] mr-2">ac_unit</span>
                                    Winter Core Checklist
                                </h3>
                                <span class="text-[10px] bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-bold px-2 py-0.5 rounded-lg">Low Temperature Pack</span>
                            </div>
                            <div class="space-y-2">
                                ${winterChecklistHtml}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById("visa-country-select").addEventListener("change", (e) => {
                appState.selectedVisaCountry = e.target.value;
                renderContent();
            });
            break;
        }
        case "hub": {
            // Calculator computations
            const cCountry = countriesData.find(c => c.country === appState.calcSelectedCountry) || countriesData[0];
            const rawFee = cCountry.universityFee;
            const singleMoFeeEst = Math.round(rawFee / 12);
            const academicFeeTotal = Math.round((rawFee / 12) * appState.calcDurationMonths);
            
            // Living expense multipliers (per month based on country)
            let rawCostLevel = 800; // default medium cost limit
            if (["Germany", "France", "Spain", "Italy"].includes(cCountry.country)) rawCostLevel = 980;
            if (["United Kingdom", "Singapore", "Australia", "Japan", "South Korea"].includes(cCountry.country)) rawCostLevel = 1450;
            if (["United States", "Canada"].includes(cCountry.country)) rawCostLevel = 1750;
            if (cCountry.country === "South Africa") rawCostLevel = 500;
            
            const livingCostTotal = Math.round(rawCostLevel * appState.calcDurationMonths);
            const grossSumBeforeAid = academicFeeTotal + livingCostTotal;
            const aidSum = Math.round(grossSumBeforeAid * (appState.calcScholarshipPercent / 100));
            const netCapitalSum = grossSumBeforeAid - aidSum;
            
            // Lists of bookmarks/favorites counts
            const bookmarkCount = appState.bookmarkedAdvisories.length;
            const favoritesCount = appState.favoriteUniversities.length;
            
            root.innerHTML = `
                <div class="space-y-6">
                    <!-- Dynamic Calculator Section -->
                    <div class="p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-lg relative overflow-hidden">
                        <div class="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl pointer-events-none"></div>
                        <h2 class="text-base font-bold flex items-center mb-2">
                            <span class="material-symbols-outlined text-xl text-amber-500 mr-2">calculate</span>
                            Interactive Study Expense Estimator
                        </h2>
                        <p class="text-xs text-slate-400 mb-5">Instantly compute a comprehensive student audit modeling institutional tuitions, local lodging variables, and grant adjustments.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <!-- Input forms -->
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs font-bold uppercase opacity-75 mb-1.5">Target Campus Destination</label>
                                    <select id="calc-country" class="w-full text-sm px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none">
                                        ${countriesData.map(c => `
                                            <option value="${c.country}" ${c.country === appState.calcSelectedCountry ? "selected" : ""}>${c.country} (${c.universityName})</option>
                                        `).join("")}
                                    </select>
                                </div>
                                
                                <div>
                                    <label class="block text-xs font-bold uppercase opacity-75 mb-1.5">Duration Segment</label>
                                    <select id="calc-duration" class="w-full text-sm px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:outline-none">
                                        <option value="6" ${appState.calcDurationMonths === 6 ? "selected" : ""}>6 Months Segment (Single Semester)</option>
                                        <option value="12" ${appState.calcDurationMonths === 12 ? "selected" : ""}>12 Months Segment (Full Academic Term)</option>
                                        <option value="24" ${appState.calcDurationMonths === 24 ? "selected" : ""}>24 Months Segment (Double Term Graduate)</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label class="block text-xs font-bold uppercase opacity-75 mb-1 flex justify-between">
                                        <span>Scholarship Grant Support</span>
                                        <span class="font-extrabold text-indigo-500">${appState.calcScholarshipPercent}% Covered</span>
                                    </label>
                                    <input type="range" id="calc-aid" min="0" max="100" step="5" value="${appState.calcScholarshipPercent}" 
                                        class="w-full accent-indigo-600 mt-2 h-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 cursor-pointer" />
                                    <div class="flex justify-between text-[10px] opacity-60 font-semibold px-0.5 mt-1">
                                        <span>Self-Funded (0%)</span>
                                        <span>Partial (50%)</span>
                                        <span>Fully Funded (100%)</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Calculations dashboard displays -->
                            <div class="p-5 rounded-xl bg-slate-100 dark:bg-slate-900/50 block space-y-3.5 md:col-span-2 border ${theme.border}">
                                <h3 class="text-xs font-bold uppercase tracking-wider opacity-60">Estimated Financial Ledger</h3>
                                
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="border-b ${theme.border} pb-2.5">
                                        <span class="block text-[10px] uppercase font-bold opacity-60">Base Tuitions Bill</span>
                                        <span class="text-sm font-bold text-slate-700 dark:text-slate-200">$${academicFeeTotal.toLocaleString()}</span>
                                        <span class="block text-[10px] mt-0.5 opacity-60">$${singleMoFeeEst.toLocaleString()}/mo equivalent</span>
                                    </div>
                                    <div class="border-b ${theme.border} pb-2.5">
                                        <span class="block text-[10px] uppercase font-bold opacity-60">Lifestyle & Lodgings (Est.)</span>
                                        <span class="text-sm font-bold text-slate-700 dark:text-slate-200">$${livingCostTotal.toLocaleString()}</span>
                                        <span class="block text-[10px] mt-0.5 opacity-60">$${rawCostLevel}/mo baseline index</span>
                                    </div>
                                    <div>
                                        <span class="block text-[10px] uppercase font-bold text-red-500 opacity-80">Gross Outlay Capital</span>
                                        <span class="text-sm font-bold text-red-500">$${grossSumBeforeAid.toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <span class="block text-[10px] uppercase font-bold text-emerald-500 opacity-80">Award Scholarship Deduction</span>
                                        <span class="text-sm font-bold text-emerald-500">-$${aidSum.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div class="bg-indigo-600/10 p-3.5 rounded-xl flex items-center justify-between border border-indigo-500/20 mt-2">
                                    <div>
                                        <span class="text-xs font-semibold uppercase opacity-75">Net Sovereign Outlay Required</span>
                                        <span class="block text-[10px] opacity-60 leading-tight">Post-audit capital required for compliance check</span>
                                    </div>
                                    <div class="text-xl font-black text-indigo-500">$${netCapitalSum.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bookmarks Sync Status Center -->
                    <div class="p-6 rounded-2xl ${theme.card} border ${theme.border} shadow-md">
                        <h2 class="text-base font-bold flex items-center mb-1.5">
                            <span class="material-symbols-outlined text-xl text-teal-400 mr-2">folder_special</span>
                            Local Storage Core Backup Sandbox (${bookmarkCount + favoritesCount} items)
                        </h2>
                        <p class="text-xs text-slate-400 mb-4">Advisories saved: <b class="text-indigo-400">${bookmarkCount}</b>, Universities favorited: <b class="text-red-400">${favoritesCount}</b>. Data is locked and stored locally inside your browser container.</p>
                        
                        <div class="flex flex-wrap gap-3">
                            <button onclick="localStorage.clear(); appState.bookmarkedAdvisories=[]; appState.favoriteUniversities=[]; renderContent();" 
                                class="text-xs font-bold py-2 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all">
                                Wipe Browser Persistent Cache
                            </button>
                            <button onclick="alert('Configuration exported successfully: Sultan Backup verified.');" 
                                class="text-xs font-bold py-2 px-4 rounded-xl bg-slate-100 dark:bg-slate-900 border ${theme.border} hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                Backup JSON to Local Logs
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById("calc-country").addEventListener("change", (e) => {
                appState.calcSelectedCountry = e.target.value;
                renderContent();
            });
            document.getElementById("calc-duration").addEventListener("change", (e) => {
                appState.calcDurationMonths = parseInt(e.target.value, 10);
                renderContent();
            });
            document.getElementById("calc-aid").addEventListener("input", (e) => {
                appState.calcScholarshipPercent = parseInt(e.target.value, 10);
                renderContent();
            });
            break;
        }
    }
}

// 8. TICKET DISPLAY COMPONENT
function renderFlightTickets() {
    const listElement = document.getElementById("flight-deal-ticker-container");
    if (!listElement) return;
    
    const theme = appState.themes[appState.selectedTheme];
    
    listElement.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${appState.flights.map(flight => {
                const trendIcon = flight.trend === "dropping" 
                    ? `<span class="material-symbols-outlined text-emerald-500 animate-bounce">trending_down</span>` 
                    : flight.trend === "rising"
                        ? `<span class="material-symbols-outlined text-red-500">trending_up</span>`
                        : `<span class="material-symbols-outlined text-slate-400">trending_flat</span>`;
                
                const percentSaved = Math.round(((flight.basePrice - flight.currentPrice) / flight.basePrice) * 100);
                
                return `
                    <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border ${theme.border} shadow-sm relative flex flex-col justify-between overflow-hidden">
                        ${flight.dealOfTheDay ? `
                            <div class="absolute -right-14 -top-1 px-14 py-1.5 rounded bg-amber-500 text-slate-950 text-[8px] tracking-wider uppercase font-extrabold rotate-45 transform">
                                Core Deal
                            </div>
                        ` : ""}
                        
                        <div>
                            <div class="flex justify-between items-center text-xs opacity-60 mb-2">
                                <span>✈️ ${flight.airline}</span>
                                <div>
                                    ${flight.seats <= 3 ? `<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">Only ${flight.seats} Seats Left</span>` : `<span>Available</span>`}
                                </div>
                            </div>
                            
                            <h4 class="text-sm font-black mb-1.5 truncate">
                                ${flight.departure} &rarr; ${flight.destination}
                            </h4>
                            
                            <div class="flex gap-2.5 items-end justify-between py-1 border-t border-dashed ${theme.border} mt-2.5">
                                <div>
                                    <span class="block text-[9px] opacity-60 uppercase font-semibold">Live Quotation</span>
                                    <div class="flex items-center gap-1">
                                        <span class="text-xl font-bold font-mono">$${flight.currentPrice}</span>
                                        <span class="text-[10px] line-through opacity-40">$${flight.basePrice}</span>
                                    </div>
                                </div>
                                <div class="text-right flex flex-col items-end">
                                    <div class="flex items-center gap-0.5 font-bold text-xs ${flight.trend === 'dropping' ? 'text-emerald-500' : 'text-slate-400'}">
                                        ${trendIcon}
                                        <span>${flight.trend === 'dropping' ? '-' + percentSaved + '%' : 'Market'}</span>
                                    </div>
                                    <span class="text-[8px] opacity-60 tracking-tight leading-none">${flight.lastUpdatedText}</span>
                                </div>
                            </div>
                            
                            <button onclick="openRealFlightSearch('${flight.departure}', '${flight.destination}')" class="w-full mt-3 text-xs py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm hover:shadow-md">
                                <span class="material-symbols-outlined text-[14px]">flight_takeoff</span>
                                <span>Book Real Airfare</span>
                            </button>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

// Global real flight booking redirector
function openRealFlightSearch(origin, destination) {
    const originEncoded = encodeURIComponent(origin);
    const destinationEncoded = encodeURIComponent(destination);
    const searchUrl = `https://www.google.com/travel/flights?q=Flights%2520from%2520${originEncoded}%2520to%2520${destinationEncoded}`;
    window.open(searchUrl, "_blank");
}

// 9. RE-INVENT BRAND PRE-SETUP HANDLERS
function setupEventHandlers() {
    // Theme Choice Buttons inside Sidebar Modal and Hub Drawer
    document.querySelectorAll("[data-theme-btn]").forEach(btn => {
        btn.addEventListener("click", () => {
            selectTheme(btn.getAttribute("data-theme-btn"));
        });
    });

    // Top Navigation Tabs
    document.querySelectorAll("[data-tab-trigger]").forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active style classes from all tab targets
            document.querySelectorAll("[data-tab-trigger]").forEach(t => {
                t.className = "flex flex-col md:flex-row items-center gap-2 px-3 py-2 text-xs font-bold opacity-60 hover:opacity-100 transition-all rounded-xl";
            });
            
            // Set active state styling
            btn.className = "flex flex-col md:flex-row items-center gap-2 px-3 py-2 text-xs font-extrabold transition-all rounded-xl bg-indigo-600 text-white shadow-md opacity-100";
            
            appState.activeTab = btn.getAttribute("data-tab-trigger");
            renderContent();
            window.scrollTo(0, 0);
        });
    });

    // Auto flight dynamic sync listener
    const syncToggler = document.getElementById("tickets-sync-toggle");
    if (syncToggler) {
        syncToggler.addEventListener("change", (e) => {
            appState.autoSync = e.target.checked;
            if (appState.autoSync) {
                appState.syncInterval = setInterval(simulateFlightTickers, 4000);
            } else {
                clearInterval(appState.syncInterval);
            }
        });
    }
}

// 10. ENTRY CONTEXT INITIALIZER
window.addEventListener("DOMContentLoaded", () => {
    // Initialize persistent state blocks
    loadStateFromStorage();
    
    // Set dynamic custom layout visuals
    applyThemeStyles();
    
    // Configure event bindings and UI tabs
    setupEventHandlers();
    
    // Fire up active view render loop
    renderContent();
    renderFlightTickets();
    
    // Start active real-time airline ticket simulators
    if (appState.autoSync) {
        appState.syncInterval = setInterval(simulateFlightTickers, 5000);
    }
    
    // Inject active theme initial selections in buttons
    const activeText = document.getElementById("active-theme-text-display");
    if (activeText) {
        activeText.textContent = appState.selectedTheme;
    }
});

// Student Advisory Modal Handlers
function openStudentAdvisoryModal(countryName) {
    const item = countriesData.find(c => c.country === countryName);
    if (!item) return;
    
    // Create or locate the modal element
    let modal = document.getElementById("student-advisory-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "student-advisory-modal";
        modal.className = "fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-150 opacity-0 pointer-events-none";
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto text-slate-100 flex flex-col gap-4 transform scale-95 transition-all duration-150">
            <div class="flex justify-between items-start">
                <div>
                    <span class="text-[10px] uppercase font-bold tracking-widest text-indigo-400">${item.region} DIRECTORY</span>
                    <h3 class="text-lg font-black flex items-center gap-1.5 mt-0.5">
                        <span class="material-symbols-outlined text-indigo-400">school</span>
                        ${item.country} Student Hub
                    </h3>
                </div>
                <button onclick="closeStudentAdvisoryModal()" class="p-2 rounded-xl bg-slate-800/40 hover:bg-slate-800 text-slate-400 transition-all">
                    <span class="material-symbols-outlined text-sm">close</span>
                </button>
            </div>
            
            <div class="space-y-4">
                <!-- Segment 1: Consular Visa advisory -->
                <div class="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                    <div class="flex items-center gap-2 text-indigo-400">
                        <span class="material-symbols-outlined text-sm font-bold animate-pulse">explore</span>
                        <h4 class="text-xs uppercase font-extrabold tracking-wider">Consular Study Visa Profile</h4>
                    </div>
                    <p class="text-xs font-bold text-slate-300">Type: <b class="text-indigo-400">${item.studentVisaType}</b></p>
                    <p class="text-xs text-slate-300 leading-relaxed">${item.studentVisaRequirements}</p>
                </div>
                
                <!-- Segment 2: Student Survival Guide -->
                <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/25 space-y-2">
                    <div class="flex items-center gap-2 text-emerald-400">
                        <span class="material-symbols-outlined text-sm font-bold">explore_compass</span>
                        <h4 class="text-xs uppercase font-extrabold tracking-wider">Student Survival Guide 🗺️</h4>
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">${item.studentGuide}</p>
                </div>
                
                <!-- Segment 3: Housing & Lodging Guide -->
                <div class="p-4 rounded-xl bg-teal-950/20 border border-teal-500/25 space-y-2">
                    <div class="flex items-center gap-2 text-teal-400">
                        <span class="material-symbols-outlined text-sm font-bold">home</span>
                        <h4 class="text-xs uppercase font-extrabold tracking-wider">Accommodation & Student Housing Guide 🏠</h4>
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">${item.housingGuide}</p>
                </div>
            </div>
            
            <div class="pt-2 flex justify-end gap-3 border-t border-slate-800">
                <button onclick="openRealFlightSearch('Origin', '${item.country}')" class="text-xs font-bold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all flex items-center gap-1.5 shadow-md">
                    <span class="material-symbols-outlined text-xs">flight_takeoff</span>
                    Search Student Flights
                </button>
                <button onclick="closeStudentAdvisoryModal()" class="text-xs font-bold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all">
                    Dismiss
                </button>
            </div>
        </div>
    `;
    
    // Animate open
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
    setTimeout(() => {
        modal.firstElementChild.classList.remove("scale-95");
        modal.firstElementChild.classList.add("scale-100");
    }, 10);
}

function closeStudentAdvisoryModal() {
    const modal = document.getElementById("student-advisory-modal");
    if (!modal) return;
    modal.firstElementChild.classList.remove("scale-100");
    modal.firstElementChild.classList.add("scale-95");
    setTimeout(() => {
        modal.classList.remove("opacity-100", "pointer-events-auto");
        modal.classList.add("opacity-0", "pointer-events-none");
    }, 150);
}
