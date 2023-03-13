import { useState } from "react";
import { Styled } from "./App.styled";
import { Results } from "../../components/Results/Results";
import { QueriesContainer } from "../../components/QueriesContainer/QueriesContainer";
import { Entities } from "./App.types";
import {
  useCatLazyQuery,
  useCatsLazyQuery,
  useDogLazyQuery,
  useDogsLazyQuery,
  useElephantLazyQuery,
  useElephantsLazyQuery,
  useOwnerLazyQuery,
  useOwnersLazyQuery,
} from "../../generated/graphql";

const App = () => {
  const [parsedResults, setParsedResults] = useState<unknown[] | unknown[][]>(
    []
  );

  // get entity hooks
  const [getDog, { data: dog }] = useDogLazyQuery();
  const [getCat, { data: cat }] = useCatLazyQuery();
  const [getElephant, { data: elephant }] = useElephantLazyQuery();
  const [getOwner, { data: owner }] = useOwnerLazyQuery();

  // get entity names hooks
  const [getDogsNames, { data: { dogs: dogsNames = [] } = {} }] =
    useDogsLazyQuery({
      fetchPolicy: "network-only",
    });
  const [getCatsNames, { data: { cats: catsNames = [] } = {} }] =
    useCatsLazyQuery({
      fetchPolicy: "network-only",
    });
  const [getElephantsNames, { data: { elephants: elephantsNames = [] } = {} }] =
    useElephantsLazyQuery({
      fetchPolicy: "network-only",
    });
  const [getOwnersNames, { data: { owners: ownersNames = [] } = {} }] =
    useOwnersLazyQuery({
      fetchPolicy: "network-only", // ?
    });

  const entities: Entities = {
    dog: {
      getNames: getDogsNames,
      names: dogsNames || [],
      getByName: getDog,
      result: dog || {},
    },
    cat: {
      getNames: getCatsNames,
      names: catsNames || [],
      getByName: getCat,
      result: cat || {},
    },
    elephant: {
      getNames: getElephantsNames,
      names: elephantsNames || [],
      getByName: getElephant,
      result: elephant || {},
    },
    owner: {
      getNames: getOwnersNames,
      names: ownersNames || [],
      getByName: getOwner,
      result: owner || {},
    },
  };

  return (
    <div className="App">
      <Styled.MainContainer>
        <Styled.HeaderContainer>
          <img
            src="https://a.storyblok.com/f/106832/x/67ab956c57/bankruptcy.svg"
            alt="pig money box"
          ></img>
          <Styled.Header>Animals</Styled.Header>
        </Styled.HeaderContainer>
        <Styled.Section>
          <QueriesContainer
            entities={entities}
            setParsedResults={setParsedResults}
          />
          <Styled.ResultsContainer>
            <p>
              <Styled.BoldText>Results:</Styled.BoldText>
            </p>
            {<Results results={parsedResults} />}
          </Styled.ResultsContainer>
        </Styled.Section>
      </Styled.MainContainer>
    </div>
  );
};

export default App;
