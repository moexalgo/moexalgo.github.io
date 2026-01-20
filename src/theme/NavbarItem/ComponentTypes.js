import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import GitHubRepoItem from '../../components/GitHubRepoItem';  // Up 2 dirs to src/, then components/

const NewComponentTypes = {
  ...ComponentTypes,
  'custom-github-repo': GitHubRepoItem,
};

export default NewComponentTypes;
