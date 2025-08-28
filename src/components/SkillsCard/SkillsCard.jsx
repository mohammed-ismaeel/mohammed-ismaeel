import "./SkillsCardStyle.css";
const SkillsCard = ({ icon, title, desc }) => {
  return (
    <div className="skills-card w-60 h-52">
      <i className={icon}></i>
      <h3 className="text-blacky text-xl">{title}</h3>
      <p className="text-mygray text-sm pt-1 ">{desc} </p>
    </div>
  );
};

export default SkillsCard;
