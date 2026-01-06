const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_STRAVA_REFRESH_TOKEN;
const CLUB_ID = import.meta.env.VITE_STRAVA_CLUB_ID;

let accessToken = null;

const getAccessToken = async () => {
    if (accessToken) return accessToken;

    try {
        const response = await fetch('https://www.strava.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                refresh_token: REFRESH_TOKEN,
                grant_type: 'refresh_token',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to refresh Strava token');
        }

        const data = await response.json();
        accessToken = data.access_token;
        return accessToken;
    } catch (error) {
        console.error("Auth Error:", error);
        return null;
    }
};

export const getClubActivities = async () => {
    const token = await getAccessToken();
    if (!token) return [];

    try {
        const response = await fetch(`https://www.strava.com/api/v3/clubs/${CLUB_ID}/activities`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            console.error("Strava API Error:", response.statusText);
            return [];
        }

        const activities = await response.json();
        return activities;
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
};
