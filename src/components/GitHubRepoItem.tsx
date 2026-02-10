interface Props {
  owner: string;
  repo: string;
}

export default function GitHubRepoItem({ owner, repo }: Props) {
  const repoData = { stargazers_count: 133, forks_count: 32 };
  const release = { tag_name: 'v2.5.9' };

  return (
    <a href={`https://github.com/${owner}/${repo}`} className="github-repo md-source" target="_blank" rel="noopener noreferrer" title="GitHub repository">
      <div className="md-source__icon md-icon"></div>
      <div className="md-source__repository md-source__repository--active">
        {owner}/{repo}
        <ul className="md-source__facts">
          {release && (
            <li className="md-source__fact md-source__fact--version">
              {release?.tag_name ?? 'v2.5.9'}
            </li>
          )}
          <li className="md-source__fact md-source__fact--stars">
            {repoData?.stargazers_count?.toLocaleString() ?? '133'}
          </li>
          <li className="md-source__fact md-source__fact--forks">
            {repoData?.forks_count?.toLocaleString() ?? '32'}
          </li>
        </ul>
      </div>
    </a>
  );
}
