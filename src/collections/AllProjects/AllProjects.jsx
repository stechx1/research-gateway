import { AllProjectsContainer, ProjectInfo, ProjectInfoBar } from './elements';
import { FiltersContainer } from './FiltersContainer';

export const AllProjects = ({ allProjects, active, paused }) => {
  return (
    <AllProjectsContainer>
      <ProjectInfoBar>
        <ProjectInfo>
          <h1>All projects ({allProjects})</h1>
          <p>
            You currently have <span>{active} active</span> &{' '}
            <span>{paused} paused</span> projects
          </p>
        </ProjectInfo>
        <FiltersContainer />
      </ProjectInfoBar>
    </AllProjectsContainer>
  );
};
