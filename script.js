// ===== EQUIPMENT DATA =====
const equipment = [
    {
        id: 1,
        name: "Apollo Lunar Roving Vehicle",
        destination: "Moon",
        mission: "Apollo 15, 16, 17",
        launchDate: "July 26, 1971",
        landingDate: "July 30, 1971",
        purpose: "Lunar surface transportation for astronauts",
        achievements: [
            "Traveled 95 kilometers across the Moon",
            "Allowed astronauts to explore 20 times more area than on foot",
            "Collected 380 kg of lunar samples",
            "Proved vehicles could operate on the Moon"
        ],
        status: "Abandoned on the Moon",
        legacy: "The LRV proved that motorized vehicles could work on other worlds, paving the way for future Mars rovers.",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop",
        details: "The Apollo Lunar Roving Vehicle was a battery-powered four-wheeled rover used to transport astronauts across the lunar surface. It could travel at speeds up to 13 km/h and had a range of about 65 km. Three LRVs were used during the Apollo missions, and they remain on the Moon today as monuments to human exploration."
    },
    {
        id: 2,
        name: "Sojourner Mars Rover",
        destination: "Mars",
        mission: "Mars Pathfinder",
        launchDate: "December 4, 1996",
        landingDate: "July 4, 1997",
        purpose: "First rover to explore Mars surface",
        achievements: [
            "Traveled 100 meters across Mars",
            "Analyzed rocks and soil composition",
            "Sent back 550 images",
            "Proved small rovers could operate on Mars"
        ],
        status: "Lost contact in September 1997",
        legacy: "Sojourner demonstrated that small, autonomous rovers could survive and operate on Mars, leading to larger rovers like Spirit and Opportunity.",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
        details: "Sojourner was a small, six-wheeled rover about the size of a microwave oven. It was the first wheeled vehicle to operate on another planet. Despite its small size, it traveled 100 meters and conducted important geological experiments, proving that Mars rovers were feasible for future exploration."
    },
    {
        id: 3,
        name: "Mars Pathfinder Lander",
        destination: "Mars",
        mission: "Mars Pathfinder",
        launchDate: "December 4, 1996",
        landingDate: "July 4, 1997",
        purpose: "First successful Mars lander in 20 years",
        achievements: [
            "Deployed Sojourner rover",
            "Measured Martian atmosphere",
            "Analyzed soil and rocks",
            "Sent 16,500 images"
        ],
        status: "Lost contact in September 1997",
        legacy: "Pathfinder revived Mars exploration after a 20-year gap and proved that low-cost missions could be successful.",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
        details: "Mars Pathfinder was a revolutionary mission that proved low-cost, efficient Mars exploration was possible. It landed using an innovative airbag system and deployed the Sojourner rover. The mission exceeded all expectations and paved the way for future Mars missions."
    },
    {
        id: 4,
        name: "Spirit Mars Rover",
        destination: "Mars",
        mission: "Mars Exploration Program",
        launchDate: "June 10, 2003",
        landingDate: "January 4, 2004",
        purpose: "Long-term Mars surface exploration",
        achievements: [
            "Operated for 6 years (planned 2 years)",
            "Traveled 4.8 miles across Mars",
            "Discovered evidence of past water",
            "Sent 128,000 images"
        ],
        status: "Lost contact in March 2010",
        legacy: "Spirit proved rovers could survive much longer than expected and made crucial discoveries about Mars' geological history.",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
        details: "Spirit was one of two Mars Exploration Rovers sent to Mars. It far exceeded its planned 2-year mission, operating for nearly 6 years. During its mission, Spirit discovered evidence of past water activity on Mars and analyzed hundreds of rock samples."
    },
    {
        id: 5,
        name: "Opportunity Mars Rover",
        destination: "Mars",
        mission: "Mars Exploration Program",
        launchDate: "July 7, 2003",
        landingDate: "January 25, 2004",
        purpose: "Long-term Mars surface exploration",
        achievements: [
            "Operated for 15 years (planned 2 years)",
            "Traveled 45 kilometers across Mars",
            "Discovered evidence of ancient water",
            "Sent 217,000 images"
        ],
        status: "Lost contact in June 2018",
        legacy: "Opportunity became the longest-operating rover on Mars and revolutionized our understanding of the Red Planet.",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
        details: "Opportunity was the most successful Mars rover in history. Landing on the opposite side of Mars from Spirit, it explored Meridiani Planum for 15 years. It discovered evidence of ancient water, analyzed thousands of rocks, and traveled farther than any other rover on Mars."
    }
];

// ===== FUN FACTS =====
const funFacts = [
    "The Apollo Lunar Roving Vehicle could reach speeds of 13 km/h on the Moon!",
    "Sojourner was only 65 cm long and weighed 11.5 kg, about the size of a microwave.",
    "Spirit and Opportunity were designed to last 2 years but operated for much longer.",
    "Opportunity traveled 45 kilometers on Mars - farther than any rover in history.",
    "The Moon rovers are still on the Moon today, abandoned but not forgotten.",
    "Mars rovers must operate with a 20-minute communication delay from Earth.",
    "Spirit discovered evidence of ancient hot springs on Mars.",
    "Opportunity discovered rocks that proved water once flowed on Mars.",
    "The Curiosity rover is still exploring Mars today!",
    "Early rovers had to be completely autonomous - they couldn't be controlled in real-time."
];

// ===== VOCABULARY =====
const vocabulary = [
    { term: "Rover", definition: "A wheeled vehicle designed to explore the surface of another planet or moon." },
    { term: "Lander", definition: "A spacecraft designed to land on and explore the surface of a celestial body." },
    { term: "Autonomous", definition: "Able to operate independently without real-time control from Earth." },
    { term: "Regolith", definition: "The layer of loose rock and dust that covers the surface of the Moon and Mars." },
    { term: "Payload", definition: "The scientific instruments and equipment carried by a spacecraft." },
    { term: "Telemetry", definition: "Data transmitted from a spacecraft back to Earth about its systems and discoveries." },
    { term: "Orbit", definition: "The curved path an object follows around a planet or star." },
    { term: "Descent Stage", definition: "The part of a lander that slows the spacecraft and controls its landing." }
];

let currentFactIndex = 0;
let currentVocabIndex = 0;

// ===== INITIALIZE PAGE =====
document.addEventListener('DOMContentLoaded', function() {
    loadEquipment();
    loadTimeline();
    loadQuiz();
    displayFact();
    displayVocab();
    updateComparisonSelects();
});

// ===== LOAD EQUIPMENT CARDS =====
function loadEquipment() {
    const grid = document.getElementById('equipmentGrid');
    grid.innerHTML = '';
    
    equipment.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const destination = item.destination === 'Mars' ? 'mars' : 'moon';
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="equipment-card-image">
            <div class="equipment-card-content">
                <h3>${item.name}</h3>
                <p>${item.mission}</p>
                <div>
                    <span class="equipment-badge ${destination}">${item.destination}</span>
                    <span class="equipment-badge">${item.status.includes('Lost') ? '⚠️ Lost' : '✓ Complete'}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(item));
        grid.appendChild(card);
    });
}

// ===== MODAL FUNCTIONS =====
function openModal(item) {
    const modal = document.getElementById('equipmentModal');
    const modalBody = document.getElementById('modalBody');
    
    const achievementsList = item.achievements.map(a => `<li>${a}</li>`).join('');
    
    modalBody.innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.image}" alt="${item.name}" class="modal-detail-image">
        
        <div class="modal-detail-section">
            <h3>Mission Overview</h3>
            <p><strong>Mission:</strong> ${item.mission}</p>
            <p><strong>Destination:</strong> ${item.destination}</p>
            <p><strong>Launch Date:</strong> ${item.launchDate}</p>
            <p><strong>Landing Date:</strong> ${item.landingDate}</p>
            <p><strong>Status:</strong> ${item.status}</p>
        </div>
        
        <div class="modal-detail-section">
            <h3>Purpose</h3>
            <p>${item.purpose}</p>
        </div>
        
        <div class="modal-detail-section">
            <h3>Scientific Achievements</h3>
            <ul class="achievement-list">
                ${achievementsList}
            </ul>
        </div>
        
        <div class="modal-detail-section">
            <h3>About This Machine</h3>
            <p>${item.details}</p>
        </div>
        
        <div class="modal-detail-section">
            <h3>Why It Matters Today</h3>
            <p>${item.legacy}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('equipmentModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('equipmentModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ===== SCROLL TO EXPLORER =====
function scrollToExplorer() {
    document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
}

// ===== TIMELINE FUNCTIONS =====
function loadTimeline() {
    const select = document.getElementById('timelineSelect');
    
    equipment.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
    });
}

function updateTimeline() {
    const select = document.getElementById('timelineSelect');
    const selectedId = parseInt(select.value);
    const timelineDiv = document.getElementById('timeline');
    
    if (!selectedId) {
        timelineDiv.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Select a mission to view its timeline</p>';
        return;
    }
    
    const item = equipment.find(e => e.id === selectedId);
    
    const events = [
        { date: item.launchDate, title: '🚀 Launch', description: 'Mission begins from Earth' },
        { date: 'Travel', title: '🌌 Journey', description: 'Spacecraft travels through space' },
        { date: item.landingDate, title: '🛬 Landing', description: 'Successful landing on ' + item.destination },
        { date: 'Operations', title: '🔬 Scientific Work', description: 'Exploration and data collection' },
        { date: 'End', title: '⭐ Legacy', description: item.status }
    ];
    
    timelineDiv.innerHTML = events.map(event => `
        <div class="timeline-event">
            <div class="timeline-content">
                <h4>${event.title}</h4>
                <p class="timeline-date">${event.date}</p>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
}

// ===== FUN FACTS =====
function displayFact() {
    document.getElementById('currentFact').textContent = funFacts[currentFactIndex];
}

function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    displayFact();
}

// ===== VOCABULARY =====
function displayVocab() {
    const vocab = vocabulary[currentVocabIndex];
    document.getElementById('currentVocab').innerHTML = `
        <strong>${vocab.term}:</strong> ${vocab.definition}
    `;
}

function nextVocab() {
    currentVocabIndex = (currentVocabIndex + 1) % vocabulary.length;
    displayVocab();
}

// ===== COMPARISON TOOL =====
function updateComparisonSelects() {
    const select1 = document.getElementById('compare1');
    const select2 = document.getElementById('compare2');
    
    equipment.forEach(item => {
        const option1 = document.createElement('option');
        option1.value = item.id;
        option1.textContent = item.name;
        select1.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = item.id;
        option2.textContent = item.name;
        select2.appendChild(option2);
    });
}

function updateComparison() {
    const select1 = document.getElementById('compare1');
    const select2 = document.getElementById('compare2');
    const result = document.getElementById('comparisonResult');
    
    const id1 = parseInt(select1.value);
    const id2 = parseInt(select2.value);
    
    if (!id1 || !id2) {
        result.innerHTML = '<p>Select two missions to compare</p>';
        return;
    }
    
    const item1 = equipment.find(e => e.id === id1);
    const item2 = equipment.find(e => e.id === id2);
    
    result.innerHTML = `
        <div style="text-align: left;">
            <p><strong>${item1.name}</strong> vs <strong>${item2.name}</strong></p>
            <p>🌍 <strong>Destination:</strong> ${item1.destination} vs ${item2.destination}</p>
            <p>📅 <strong>Launch:</strong> ${item1.launchDate} vs ${item2.launchDate}</p>
            <p>🎯 <strong>Mission:</strong> ${item1.mission} vs ${item2.mission}</p>
            <p>📊 <strong>Status:</strong> ${item1.status} vs ${item2.status}</p>
        </div>
    `;
}

// ===== QUIZ FUNCTIONS =====
const quizQuestions = [
    {
        question: "Which rover traveled the farthest on Mars?",
        options: ["Sojourner", "Spirit", "Opportunity", "Curiosity"],
        correct: 2
    },
    {
        question: "What was the primary purpose of the Apollo Lunar Roving Vehicle?",
        options: ["To collect rocks", "To transport astronauts", "To measure gravity", "To drill for water"],
        correct: 1
    },
    {
        question: "How long was Sojourner rover?",
        options: ["1 meter", "65 centimeters", "2 meters", "50 centimeters"],
        correct: 1
    },
    {
        question: "Which mission first successfully landed a rover on Mars?",
        options: ["Mars Pathfinder", "Viking 1", "Spirit", "Opportunity"],
        correct: 0
    },
    {
        question: "What did Mars rovers discover that proved water once existed on Mars?",
        options: ["Ice caps", "Rocks with mineral evidence", "Underground lakes", "Frozen oceans"],
        correct: 1
    },
    {
        question: "How many Apollo Lunar Rovers were used on the Moon?",
        options: ["One", "Two", "Three", "Five"],
        correct: 2
    },
    {
        question: "What is the main reason rovers must be autonomous on Mars?",
        options: ["They are cheaper", "Communication delay makes real-time control impossible", "Mars has no radio signals", "They need to be independent"],
        correct: 1
    },
    {
        question: "Which rover operated longer than its original mission plan?",
        options: ["Sojourner", "Spirit and Opportunity", "Apollo Rover", "All of them"],
        correct: 1
    }
];

function loadQuiz() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        const optionsHtml = q.options.map((option, i) => `
            <label class="quiz-option">
                <input type="radio" name="question${index}" value="${i}">
                ${option}
            </label>
        `).join('');
        
        questionDiv.innerHTML = `
            <h4>Question ${index + 1}: ${q.question}</h4>
            <div class="quiz-options">
                ${optionsHtml}
            </div>
        `;
        
        container.appendChild(questionDiv);
    });
    
    const submitBtn = document.createElement('button');
    submitBtn.className = 'quiz-submit-btn';
    submitBtn.textContent = 'Submit Quiz';
    submitBtn.onclick = submitQuiz;
    container.appendChild(submitBtn);
}

function submitQuiz() {
    let score = 0;
    
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    
    showResults(score);
}

function showResults(score) {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    
    let message = '';
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage === 100) {
        message = "🌟 Perfect! You're a space exploration expert!";
    } else if (percentage >= 75) {
        message = "🚀 Excellent! You know your space history!";
    } else if (percentage >= 50) {
        message = "👍 Good job! Keep learning about space!";
    } else {
        message = "📚 Keep exploring! There's so much to learn!";
    }
    
    document.getElementById('scoreMessage').textContent = message;
}

function retakeQuiz() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    loadQuiz();
}

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});