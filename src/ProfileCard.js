const skillst = [
  { skill: "HTML+CSS", level: "advanced", color: "orangered" },
  { skill: "React", level: "intermediate", color: "blue" },
  { skill: "JS", level: "beginner", color: "skyblue" },
  { skill: "C#", level: "advanced", color: "yellow" },
  { skill: "Asp.Net ", level: "intermediate", color: "pink" },
  { skill: "Asp.Net Core", level: "loved", color: "orange" },
  { skill: "TSql", level: "advanced", color: "cyan" },
];

function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillist />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="./Ujjawal.jpg" alt="Ujjawal"></img>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h2>Ujjawal Sharma</h2>
      <p>
        My name is Ujjawal Sharma, working as a full Stack developer at{" "}
        <b>Infosys Limited</b> majorly working in the healthCare domain for one
        of the largest healthcare service proivder of USA.
      </p>
    </div>
  );
}

function Skillist() {
  return (
    <ul>
      {skillst.map((item) => (
        <Skill
          skill={item.skill}
          level={item.level}
          color={item.color}
          key={item.skill}
        />
      ))}
    </ul>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>
        {props.level === "advanced" && "💪"}
        {props.level === "intermediate" && "🔰"}
        {props.level === "beginner" && "😵"}
        {props.level === "loved" && "❤️"}
      </span>
    </li>
  );
}

export default ProfileCard;
