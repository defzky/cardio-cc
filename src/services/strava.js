const CLUB_ID = '1725785';

// Mock data to ensure the UI looks good even without API keys
const MOCK_ACTIVITIES = [
    { id: 1, name: 'Morning Zwift Island Hop', distance: 25000, moving_time: 3600, type: 'VirtualRide', athlete: { firstname: 'Sarah', lastname: 'L.' } },
    { id: 2, name: 'Lunch Run', distance: 5000, moving_time: 1500, type: 'Run', athlete: { firstname: 'Jenny', lastname: 'C.' } },
    { id: 3, name: 'Full Body Destroy', distance: 0, moving_time: 2700, type: 'WeightTraining', athlete: { firstname: 'Mike', lastname: 'B.' } },
    { id: 4, name: 'Recovery Swim', distance: 1500, moving_time: 2400, type: 'Swim', athlete: { firstname: 'Tom', lastname: 'H.' } },
    { id: 5, name: 'Sunday Cafe Ride', distance: 80000, moving_time: 10800, type: 'Ride', athlete: { firstname: 'Sarah', lastname: 'L.' } },
];

const MOCK_MEMBERS = [
    { firstname: 'Fajrizky', lastname: 'M.', profile: null },
    { firstname: 'Sarah', lastname: 'L.', profile: null },
    { firstname: 'Mike', lastname: 'B.', profile: null },
    { firstname: 'Jenny', lastname: 'C.', profile: null },
    { firstname: 'Tom', lastname: 'H.', profile: null },
];

export const getClubActivities = async () => {
    // In a real app, we would fetch from Strava API here.
    // Requires OAuth token exchange which is complex for a static demo.
    // Returning mock data for the "Cardio Crisis Crew" vibe.
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_ACTIVITIES), 500);
    });
};

export const getClubMembers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_MEMBERS), 500);
    });
};
