import { useState } from "react";
import { Styled } from "./App.styled";
import { useLazyQuery } from "@apollo/client";
import { GET_DOGS_NAMES, GET_DOG } from "../../graphql/dog.graphql";
import { GET_CAT, GET_CATS_NAMES } from "../../graphql/cat.graphql";
import {
  GET_ELEPHANT,
  GET_ELEPHANTS_NAMES,
} from "../../graphql/elephant.graphql";
import { GET_OWNER, GET_OWNERS_NAMES } from "../../graphql/owner.graphql";
import { Results } from "../../components/Results/Results";
import { QueriesContainer } from "../../components/QueriesContainer/QueriesContainer";
import { Entities } from "./App.types";

const App = () => {
  const [parsedResults, setParsedResults] = useState<unknown[] | unknown[][]>(
    []
  );

  const [getDog, { data: dog }] = useLazyQuery(GET_DOG);
  const [getCat, { data: cat }] = useLazyQuery(GET_CAT);
  const [getElephant, { data: elephant }] = useLazyQuery(GET_ELEPHANT);
  const [getOwner, { data: owner }] = useLazyQuery(GET_OWNER);

  const [getDogsNames, { data: { dogs: allDogs = [] } = {} }] =
    useLazyQuery(GET_DOGS_NAMES);
  const [getCatsNames, { data: { cats: allCats = [] } = {} }] =
    useLazyQuery(GET_CATS_NAMES);
  const [getElephantsNames, { data: { elephants: allElephants = [] } = {} }] =
    useLazyQuery(GET_ELEPHANTS_NAMES);
  const [getOwnersNames, { data: { owners: allOwners = [] } = {} }] =
    useLazyQuery(GET_OWNERS_NAMES);



  const entities: Entities = {
    dog: {
      getNames: getDogsNames,
      names: allDogs || [],
      getByName: getDog,
      result: dog || {},
    },
    cat: {
      getNames: getCatsNames,
      names: allCats || [],
      getByName: getCat,
      result: cat || {},
    },
    elephant: {
      getNames: getElephantsNames,
      names: allElephants || [],
      getByName: getElephant,
      result: elephant || {},
    },
    owner: {
      getNames: getOwnersNames,
      names: allOwners || [],
      getByName: getOwner,
      result: owner || {},
    },
  };

  return (
    <div className="App">
      <Styled.MainContainer>
        <Styled.Header>Animals</Styled.Header>
        <Styled.Section>
          <QueriesContainer entities={entities} setParsedResults={setParsedResults}/>
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
