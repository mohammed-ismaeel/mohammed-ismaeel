import { Link, Navigate } from 'react-router-dom'
import './ProjectCardStyle.css'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
const ProjectCard = ({
  keyy,
  projectImg,
  // projectType,
  // projectTitle,
  // description,
  // projectTools,
}) => {
  return (
    <div
      className="project-card h-full pb-8 relative
     text-left border border-solid  rounded-tr-lg rounded-tl-lg bg-gray-100 relative"
    >
      <div className="over flex gap-5 justify-between items-center w-full rounded-tr-lg rounded-tl-lg absolute top-0 left-0 z-20 h-full">
        <Link
          to={`/Details/${keyy}`}
          className="view-more flex text-2xl text-nowrap max-sm:text-lg text-blue font-bold z-50 bg-white px-2 py-1 rounded-md border-2 border-blue border-solid "
        >
          <span>View More</span>
          <LuArrowUpRightFromCircle className="inline-block ml-2" />
        </Link>
      </div>
      {/* <div className="cover-image absolute top-0 w-full h-full overflow-y-scroll">
        <img
          src={projectImg}
          className="w-full h-full overflow-hidden"
          alt=""
        />
      </div> */}
      <div
        className="img overflow-hidden rounded-t-lg border-b border-b-gray-300  "
        id="proj-img"
      >
        {/* overflow-y-scroll scroll-smooth */}
        <img src={projectImg} alt="" className="w-full" />
      </div>
      {/* <div className="desc">
        <p className="type-project text-xs font-semibold text-mygray uppercase">
          {projectType}
        </p>
        <h2 className="text-blue text-xl font-semibold -mt-1 pb-1">
          {projectTitle}
        </h2>
        description
        <p className="description text-sm pb-6 text-zinc-700">{projectTools}</p>
        <Link to={`/Details/${keyy}`}>View More</Link>
      </div> */}
    </div>
  )
}

export default ProjectCard
