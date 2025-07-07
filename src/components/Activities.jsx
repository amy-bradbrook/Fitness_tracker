import { useState } from "react";

function Activities() {

    const [selectedSteps, setSelectedSteps] = useState(0);
    const [totalPoints, setTotalPoints] = useState("");

    const handleChange = (event) => {
        setSelectedSteps(event.target.value)
    }

    const activiesList = [
        { activity: "Aerobics, high intensity", points_per_minute: 190 },
        { activity: "Aerobics, low intensity", points_per_minute: 115 },
        { activity: "Aerobics, step", points_per_minute: 145 },
        { activity: "Badminton, game", points_per_minute: 150 },
        { activity: "Badminton, recreational", points_per_minute: 98 },
        { activity: "Basketball, game", points_per_minute: 220 },
        { activity: "Basketball, recreational", points_per_minute: 130 },
        { activity: "Boxing, competitive, in a ring", points_per_minute: 213 },
        { activity: "Boxing, non-competitive", points_per_minute: 131 },
        { activity: "Canoeing", points_per_minute: 70 },
        { activity: "Cycling, 16 km/h", points_per_minute: 93 },
        { activity: "Cycling, 24km/h", points_per_minute: 160 },
        { activity: "Cycling, 32 km/h", points_per_minute: 200 },
        { activity: "Cycling, 8 km/h", points_per_minute: 55 },
        { activity: "Dancing, fast", points_per_minute: 175 },
        { activity: "Dancing, slow", points_per_minute: 55 },
        { activity: "Dancing, socially (rock, disco, etc)", points_per_minute: 100 },
        { activity: "Elliptical, fast", points_per_minute: 270 },
        { activity: "Elliptical, moderate", points_per_minute: 200 },
        { activity: "Firewood, carrying", points_per_minute: 176 },
        { activity: "Firewood, chopping", points_per_minute: 300 },
        { activity: "Firewood, sawing with handsaw", points_per_minute: 113 },
        { activity: "Firewood, stacking", points_per_minute: 89 },
        { activity: "Gardening, heavy", points_per_minute: 155 },
        { activity: "Gardening, moderate", points_per_minute: 93 },
        { activity: "Gardening, weeding (seated/kneeling)", points_per_minute: 73 },
        { activity: "Golfing, walking, no cart", points_per_minute: 100 },
        { activity: "Golfing, with a cart", points_per_minute: 70 },
        { activity: "Handball, competitive", points_per_minute: 230 },
        { activity: "Handball, recreational", points_per_minute: 142 },
        { activity: "Hiking", points_per_minute: 155 },
        { activity: "Hiking with 10 lbs", points_per_minute: 180 },
        { activity: "Hiking with 30 lbs", points_per_minute: 235 },
        { activity: "Horseback riding, leisurely", points_per_minute: 31 },
        { activity: "Horseback riding, trotting", points_per_minute: 102 },
        { activity: "Housework, general", points_per_minute: 90 },
        { activity: "Housework, scrubbing the floor", points_per_minute: 140 },
        { activity: "Pickleball (Doubles)", points_per_minute: 140 },
        { activity: "Pickleball (Singles)", points_per_minute: 156 },
        { activity: "Pilates (Moderate)", points_per_minute: 103 },
        { activity: "Running 8 km/h", points_per_minute: 185 },
        { activity: "Running, 10 km/h", points_per_minute: 230 },
        { activity: "Running, 13 km/h", points_per_minute: 305 },
        { activity: "Running, 16 km/h", points_per_minute: 350 },
        { activity: "Scuba diving", points_per_minute: 190 },
        { activity: "Skipping rope, fast", points_per_minute: 285 },
        { activity: "Skipping rope, moderate", points_per_minute: 167 },
        { activity: "Soccer, competitive", points_per_minute: 195 },
        { activity: "Soccer, recreational", points_per_minute: 144 },
        { activity: "Squash", points_per_minute: 205 },
        { activity: "Stair climbing at a JOG", points_per_minute: 267 },
        { activity: "Stair climbing at a RUN", points_per_minute: 311 },
        { activity: "Stair climbing at leisurely", points_per_minute: 89 },
        { activity: "Stair climbing machine", points_per_minute: 160 },
        { activity: "Stair climbing walking pace", points_per_minute: 133 },
        { activity: "Swimming", points_per_minute: 225 },
        { activity: "Swimming Fast!", points_per_minute: 290 },
        { activity: "Swimming, leisurely", points_per_minute: 120 },
        { activity: "Swimming, treading water", points_per_minute: 98 },
        { activity: "Tai Chi", points_per_minute: 8 },
        { activity: "Tennis, doubles", points_per_minute: 110 },
        { activity: "Tennis, singles", points_per_minute: 160 },
        { activity: "Water Skiing", points_per_minute: 160 },
        { activity: "Weightlifting & Strength Training", points_per_minute: 110 },
        // Note: Wheelchair is given as 1250 / KM, not per minute; excluded or conversion is needed
        { activity: "Yoga (Hot/Vigorous)", points_per_minute: 120 },
        { activity: "Yoga (Restorative/Stretching)", points_per_minute: 50 }
    ];

    function calculate(){

        const val = document.getElementById("minutesSpent").value
        
        setTotalPoints(`You took ${val*selectedSteps} steps!`)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", padding: 20, justifyContent: "flex-start", alignContent: "flex-start"}}>
            <select name="activities" value={selectedSteps} onChange={handleChange}>
                <option value={0} disabled>Select one</option>
                {
                    activiesList.map(item => (
                        <option value={item.points_per_minute} key={item.activity} >{item.activity}</option>
                    ))
                }
            </select>
            <input placeholder="Enter amount of time" id="minutesSpent"></input>
            <button onClick={calculate}>Calculate</button>
            <p id="totalPoints">{totalPoints}</p>
        </div>
    )

}

export default Activities