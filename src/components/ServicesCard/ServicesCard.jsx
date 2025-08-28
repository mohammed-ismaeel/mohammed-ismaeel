import "./ServicesCardStyle.css";

const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card w-full bg-white h-72 dark:bg-slate-200 rounded-lg text-center py-10 px-2 hover:border-2 hover:border-blue hover:border-solid hover:scale-110">
      <div className="flex justify-center items-center ">
        <div className="w-20 h-20 flex justify-center items-center">{icon}</div>
      </div>
      <h2 className="text-blacky text-lg">{title}</h2>
      <p className="text-mygray pt-3 text-[15px]">{desc} </p>
    </div>
  );
};

export default ServicesCard;