import Footer from '../components/Footer'
import React, {useState, useEffect} from 'react'

export default function OurTeam() {
    const [getTeam, setGetTeam] = useState({ teamMembers: []});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    const fetchTeam = async () => {
        try {
        const response = await fetch(`http://localhost:8000/team`) // req to BE's route for teams
        const data = await response.json()
        setGetTeam(data);
        } catch (error) {
        setError(error);
        } finally {
        setIsLoading(false);
        }
    };
    fetchTeam();
    }, []);
    //acts like a catch error
    if (isLoading) {
    return <p>Loading team data...</p>;
    }
    if (error) {
    return <p>Error fetching data: {error.message}</p>;
    }
    return (
    <div>
        <div className="teamBlurb">
        <h1>Our Team</h1>
            <p>Introducing our team of versatile full-stack developers, each bringing unique expertise from front-end, back-end, and dev ops. Learn more about us below and don't hesitate to reach out - let's connect and make positive impacts together!</p>
        </div>
        <div className="memberCardContainer">
        {getTeam.teamMembers
            .slice() 
            .sort((a, b) => a.firstName.localeCompare(b.firstName)) // using localeCompare instead of - cause it's not a num but a str
            .map((member) => (
                <div className="memberCard" key={member._id}>
                    <div className="memberCard--header">
                        <h2>{member.firstName} {member.lastName}</h2>
                        <h3>{member.role}</h3>
                    </div>
                    <img src={member.profilePhoto} alt={`${member.firstName}'s profile`} />
                    <div className="memberSocials">
                            <a href={`mailto:${member.email}`}><img src="../Icons/icons8-mail-48.png" alt="Email" /></a>
                            <a href={member.github} target="_blank"><img src="../Icons/icons8-github-50.png" alt="GitHub" /></a>
                            <a href={member.linkedin} target="_blank"><img src="../Icons/icons8-linkedin-50.png" alt="LinkedIn" /></a>
                        </div>
                    <div className="memberText">
                        <p>{member.bio}</p>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
    )
}