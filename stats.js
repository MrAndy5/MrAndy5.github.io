const API_TOKEN = '07df963ab6b34f7e96598a942f436799';
const TEAM_NAME = 'Atletico Madrid';
const SEASON = '2024'; // Season year
const COMPETITION_CODE = 'PD'; // La Liga competition code

// API Endpoints
const TEAMS_URL = `https://api.football-data.org/v4/competitions/${COMPETITION_CODE}/teams?season=${SEASON}`;
const MATCHES_URL = `https://api.football-data.org/v4/teams/{teamId}/matches?season=${SEASON}`;
const STANDINGS_URL = `https://api.football-data.org/v4/competitions/${COMPETITION_CODE}/standings?season=${SEASON}`;

async function fetchTeamStats() {
    try {
        // Fetch teams in the competition
        const teamsResponse = await fetch(TEAMS_URL, {
            headers: {
                'X-Auth-Token': API_TOKEN
            }
        });

        if (!teamsResponse.ok) {
            throw new Error(`HTTP error! status: ${teamsResponse.status}`);
        }

        const teamsData = await teamsResponse.json();
        const atleticoMadrid = teamsData.teams.find(team => team.name === TEAM_NAME);

        if (!atleticoMadrid) {
            console.log(`${TEAM_NAME} not found in the ${SEASON}/${SEASON + 1} season.`);
            return;
        }

        // Display team details
        document.getElementById('team-name').textContent = atleticoMadrid.name;
        document.getElementById('team-founded').textContent = atleticoMadrid.founded;
        document.getElementById('team-venue').textContent = atleticoMadrid.venue;
        document.getElementById('team-website').href = atleticoMadrid.website;
        document.getElementById('team-website').textContent = atleticoMadrid.website;

        // Fetch matches for Atlético Madrid
        const matchesResponse = await fetch(MATCHES_URL.replace('{teamId}', atleticoMadrid.id), {
            headers: {
                'X-Auth-Token': API_TOKEN
            }
        });

        if (!matchesResponse.ok) {
            throw new Error(`HTTP error! status: ${matchesResponse.status}`);
        }

        const matchesData = await matchesResponse.json();
        const matches = matchesData.matches;

        const matchesList = document.getElementById('matches-list');
        matches.forEach(match => {
            const matchItem = document.createElement('li');
            matchItem.textContent = `${match.homeTeam.name} ${match.score.fullTime.home} - ${match.score.fullTime.away} ${match.awayTeam.name} (${new Date(match.utcDate).toLocaleDateString()})`;
            matchesList.appendChild(matchItem);
        });

        // Fetch standings for the competition
        const standingsResponse = await fetch(STANDINGS_URL, {
            headers: {
                'X-Auth-Token': API_TOKEN
            }
        });

        if (!standingsResponse.ok) {
            throw new Error(`HTTP error! status: ${standingsResponse.status}`);
        }

        const standingsData = await standingsResponse.json();
        const standings = standingsData.standings[0].table;

        const teamStanding = standings.find(standing => standing.team.id === atleticoMadrid.id);

        if (teamStanding) {
            document.getElementById('team-position').textContent = teamStanding.position;
            document.getElementById('team-points').textContent = teamStanding.points;
            document.getElementById('team-goals-for').textContent = teamStanding.goalsFor;
            document.getElementById('team-goals-against').textContent = teamStanding.goalsAgainst;
        } else {
            console.log(`No standing data available for ${TEAM_NAME} in ${SEASON}/${SEASON + 1}.`);
        }

    } catch (error) {
        console.error('Error fetching team stats:', error);
    }
}

// Run the function when the page loads
window.onload = fetchTeamStats;