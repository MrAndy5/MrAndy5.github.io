const API_URL = 'https://v3.football.api-sports.io';
const API_KEY = '89145378487ac5b3b446de6d5a85bd6b'; // Your API key

const LEAGUE_ID = 140; // La Liga
const SEASON = 2021; // Change back to 2024 when data is available

async function fetchLaLigaStats() {
    try {
        // Fetch Standings
        const standingsResponse = await fetch(`${API_URL}/standings?league=${LEAGUE_ID}&season=${SEASON}`, {
            headers: { 'x-apisports-key': API_KEY }
        });

        const standingsData = await standingsResponse.json();
        console.log("Standings API Response:", standingsData);



        const leagueData = standingsData.response[0]?.league;

        const standings = leagueData.standings[0]; // First group

        const standingsTable = document.getElementById('standings-table');
        standingsTable.innerHTML = '<tr><th>Pos</th><th>Equipo</th><th>Puntos</th><th>GF</th><th>GC</th></tr>';
        
        standings.forEach(team => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${team.rank}</td>
                <td>${team.team.name}</td>
                <td>${team.points}</td>
                <td>${team.all.goals.for}</td>
                <td>${team.all.goals.against}</td>
            `;
            standingsTable.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching La Liga stats:", error);
    }
}

// Run the function when the page loads
window.onload = fetchLaLigaStats;
