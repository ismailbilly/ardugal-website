

const ProjectCard = ({ data }) => {
    <div key={data.id}>
      <div>
        <img src={data.img} alt="" w={200} h={500} />
        </div>
        <div>
            <p>{data.text}</p>
        </div>
    </div>;
};

export default ProjectCard;
