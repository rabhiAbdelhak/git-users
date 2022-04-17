import styled from "styled-components";
import { useGithubContext } from "../context";
import { Bar3D, Pie3D, Doughnut3D } from "./Charts";

const Repos = () => {
  const { repos } = useGithubContext();

  let { stars, forks } = repos.reduce(
    (accu, repo) => {
      const {name,stargazers_count, forks_count} = repo;
      return {
        stars: [
          ...accu.stars,
          { label: name, value: stargazers_count },
        ],
        forks: [
          ...accu.forks, 
          { label: name, value: forks_count }],
      };
    },
    { stars: [], forks: [] }
  );
  //most popular
  stars = Object.values(stars).sort((a,b) => b.value - a.value).slice(0,5);

  //most forked
  forks = Object.values(forks).sort((a,b) => b.value - a.value).slice(0,5);

  
  //build the array that contains the starsPerLanguages
  let starsPerLanguage = repos.reduce((accu, repo) => {
    const { language, stargazers_count } = repo;
    if (!language) return accu;
    if (accu.hasOwnProperty(language)) {
      accu[language].value += stargazers_count;
    } else {
      accu[language] = { label: language, value: stargazers_count };
    }
    return accu;
  }, {});
  starsPerLanguage = Object.values(starsPerLanguage)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  //build the array that contains the most used languages
  let languages = repos.reduce((accu, repo) => {
    const { language} = repo;
    if (!language) return accu;
    if (accu.hasOwnProperty(language)) {
      accu[language].value += 1;
    } else {
      accu[language] = { label: language, value: 1 };
    }
    return accu;
  }, {});
  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <Wrapper id="charts-container">
      <Pie3D data={languages} />
      <Bar3D
        data={stars}
        caption="Most Popular"
        x="Repos"
        y="Stars"
        type="column3d"
      />
      <Doughnut3D data={starsPerLanguage} />
      <Bar3D
        data={forks}
        caption="Most Forked"
        x="Repos"
        y="Forks"
        type="bar3d"
      />
    </Wrapper>
  );
};

export default Repos;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }

  svg {
    width: 100% !important;
  }
`;
