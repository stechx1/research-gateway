
import { StyledButton } from '../elements';
import { ProjectInfo, ProjectItemContainer, ProjectStatus } from './elements';

export const ProjectItem = ({
  imageSrc,
  projectTitle,
  role,
  status,
  budget,
  desc,
}) => {
  return (
    <ProjectItemContainer>
      <div style={{ display: 'flex', gap: '20px', justifyContent: "space-between" }}>
        <img src={imageSrc} alt='image' />
        <ProjectInfo>
          <h2>{projectTitle}</h2>
          <p>{role}</p>
          <h3>Hewlett Hawking</h3>
        </ProjectInfo>
        <ProjectStatus>
          <p>
            Project Status: <span>{status}</span>
          </p>
          <p>Project Budget</p>
          <h3>{budget}</h3>
        </ProjectStatus>
      </div>
      <p style={{marginTop: "20px"}}>{desc}</p>
      <StyledButton style={{width: "150px"}}>View Details</StyledButton>
    </ProjectItemContainer>
  );
};
