import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
    return (
        <div
            key={employee.id}
            id={employee.id}
            className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"}
            style={{ cursor: "pointer" }}
            onClick={handleEmployeeCardClick}
        >
            {
                employee.gender === "male" ?
                    <img src={femaleProfile} className="card-img-top" alt="femaileProfile" /> :
                    <img src={maleProfile} className="card-img-top" alt="maileProfile" />
            }

            <div className="card-body">
                <h5 className="card-title">Full Name:<br></br>{employee.fullName}</h5>
                <p className="card-text"><b>Designation:</b><br></br>{employee.designation}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard;