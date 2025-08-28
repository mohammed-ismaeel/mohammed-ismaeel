import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";

const Details = ({ onClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${theme} dark:bg-darkybg`}>
      <ProjectDetails onClick={onClick} />
    </div>
  );
};

export default Details;
