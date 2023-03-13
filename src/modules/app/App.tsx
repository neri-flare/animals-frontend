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

  const [getDog, { data: dog }] = useDogLazyQuery();
  const [getCat, { data: cat }] = useCatLazyQuery();
  const [getElephant, { data: elephant }] = useElephantLazyQuery();
  const [getOwner, { data: owner }] = useOwnerLazyQuery();

  const [getDogsNames, { data: { dogs: dogsNames = [] } = {} }] =
    useDogsLazyQuery();
  const [getCatsNames, { data: { cats: catsNames = [] } = {} }] =
    useCatsLazyQuery();
  const [getElephantsNames, { data: { elephants: elephantsNames = [] } = {} }] =
    useElephantsLazyQuery();
  const [getOwnersNames, { data: { owners: ownersNames = [] } = {} }] =
    useOwnersLazyQuery();

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
        <Styled.Header>Animals</Styled.Header>
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
