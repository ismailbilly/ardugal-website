import projectImg1 from "../../assets/projects/transformer.jpeg";
import projectImg2 from "../../assets/projects/caterpillar.jpg";
import projectImg3 from "../../assets/projects/motherboard.jpg";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    img: projectImg1,
    text: "Electrical",
  },

  { id: 2, img: projectImg2, text: "Construction" },
  { id: 3, img: projectImg3, text: "Computer" },
];

const Projects = () => {
    <div
        className="h-screen flex gap-6">
        {projectData.map((data, _idx) => {
         return <div key={data.id}>
           <div>
             <img src={data.img} alt="" w={200} h={500} />
           </div>
           <div>
             <p>{data.text}</p>
           </div>
         </div>;
        }
    )}</div>;
};

export default Projects;
