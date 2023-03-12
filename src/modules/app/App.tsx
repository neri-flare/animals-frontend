import React, { useState } from 'react';
import { Styled } from './App.styled';
import { useLazyQuery } from '@apollo/client';
import { GET_DOGS_NAMES, GET_DOG } from '../../graphql/dog.graphql';
import { GET_CAT, GET_CATS_NAMES } from '../../graphql/cat.graphql';
import { GET_ELEPHANT, GET_ELEPHANTS_NAMES } from '../../graphql/elephant.graphql';
import { GET_OWNER, GET_OWNERS_NAMES } from '../../graphql/owner.graphql';
import { recursivelyParseObject } from './utils';



const App = () => {
  const [currentEntity, setCurrentEntity] = useState<string>('')
  const [parsedResults, setParsedResults] = useState<unknown[] | unknown[][]>([])
  
  const [getDog, { data: dog }] = useLazyQuery(GET_DOG);
  const [getCat, { data: cat }] = useLazyQuery(GET_CAT);
  const [getElephant, { data: elephant }] = useLazyQuery(GET_ELEPHANT);
  const [getOwner, { data: owner }] = useLazyQuery(GET_OWNER);

  const [getDogsNames, { data: { dogs: allDogs = [] } = {} }] = useLazyQuery(GET_DOGS_NAMES);
  const [getCatsNames, { data: { cats: allCats = [] } = {} }] = useLazyQuery(GET_CATS_NAMES);
  const [getElephantsNames, { data: { elephants: allElephants = [] } = {} }] = useLazyQuery(GET_ELEPHANTS_NAMES);
  const [getOwnersNames, { data: { owners: allOwners = [] } = {} }] = useLazyQuery(GET_OWNERS_NAMES);

  const entities: {
    [key: string]: { getNames: Function, names: any[], getByName: Function, result: any }
  } = {
    dog: { getNames: getDogsNames, names: allDogs || [], getByName: getDog, result: dog || {} },
    cat: { getNames: getCatsNames, names: allCats || [], getByName: getCat, result: cat || {} },
    elephant: { getNames: getElephantsNames, names: allElephants || [], getByName: getElephant, result: elephant || {} },
    owner: { getNames: getOwnersNames, names: allOwners || [], getByName: getOwner, result: owner || {} },
  }

  const onEntityChoose = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEntity = event?.target?.value
    setCurrentEntity(selectedEntity)
    entities[selectedEntity].getNames()    
  }

  const onNameChoose = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event?.target?.value
    const result = await entities[currentEntity].getByName({ variables: { name: selectedName }})
    const { data: { [currentEntity]: objectToParse = {} } = {} } = result

    const parsedObjectTo2dArray = recursivelyParseObject(objectToParse)

    setParsedResults(parsedObjectTo2dArray)
  }

  const renderResults = (results: unknown[] = []) => (results.map((keyValuePair) => {
      if (Array.isArray(keyValuePair)) {
        return (<Styled.Result key={''+keyValuePair[0]}>
          <Styled.BoldText>{`${keyValuePair[0]}: `}</Styled.BoldText>
          {
            Array.isArray(keyValuePair[1])
            ?
            renderResults(keyValuePair[1])
            :
          `${keyValuePair[1]}`
          }
          </Styled.Result>)
      }
      return <></>
  }))

  return (
    <div className="App">
      <Styled.MainContainer>
        <Styled.Header>Animals</Styled.Header>
        <Styled.Section>

        <Styled.QueriesContainer>
          <Styled.QueryLine>
            Get the {' '}
          <select name="entity" id="entity-select"
                  onChange={onEntityChoose}
                  value={currentEntity}
                  >
            <option value="">Choose an entity</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="elephant">Elephant</option>
            <option value="owner">Owner</option>
          </select>
          {' '} with the name: {' '}
          <select name="name" id="name-select"
                  onChange={onNameChoose}
                  value={currentEntity}
                  >
            <option value="">Choose a {currentEntity}</option>
            {
              entities && entities[currentEntity] && entities[currentEntity].names.length && entities[currentEntity].names.map((dog) => <option key={dog.name} value={dog.name}>{dog.name}</option>)
            }
          </select>
            </Styled.QueryLine>
        </Styled.QueriesContainer>
        <Styled.ResultsContainer>
          <p>
            <Styled.BoldText>
            Results:
              </Styled.BoldText>
            </p>
          {
            <div>
              {renderResults(parsedResults)}
            </div>
          }
        </Styled.ResultsContainer>
        </Styled.Section>
      </Styled.MainContainer>
    </div>
  );
}

export default App;
