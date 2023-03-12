import React, { useState } from 'react';
import { Styled } from './App.styled';
import { useQuery, gql, useLazyQuery } from '@apollo/client';

interface Dog {
  name: string;
  breed: string;
  gender: string;
  ownerId?: string;
}


const GET_DOG = gql`
query Dog($name: String!) {
  dog(name: $name) {
    name
    breed
    gender
    ownerId
    owner {
      name
      gender
      age
    }
  }
}
`;

const GET_ALL_DOGS = gql`
query Dogs {
  dogs {
    id
    name
    breed
    gender
    ownerId
    owner {
      name
      age
      gender
    }
  }
}
`

const App = () => {
  const [currentEntity, setCurrentEntity] = useState<string>('')
  const [parsedResult, setParsedResult] = useState<unknown[][]>([])
  const [getDog, { data: dog }] = useLazyQuery(GET_DOG);
  const [getAllDogs, { data: { dogs: allDogs = [] } = {} }] = useLazyQuery(GET_ALL_DOGS);

  const entities: {
    [key: string]: { getNames: Function, names: any[], getByName: Function, result: any }
  } = {
    dog: { getNames: getAllDogs, names: allDogs || [], getByName: getDog, result: dog || {} }
    // 'cat': allCats
    // 'elephant': allElephants,
    // 'owner': allOwners
  }

  const onEntityChoose = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEntity = event?.target?.value
    setCurrentEntity(selectedEntity)
    entities[selectedEntity].getNames()
  }

  const onNameChoose = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event?.target?.value
    const result = await entities[currentEntity].getByName({ variables: { name: selectedName }})
    // console.log(result);
    const { data: { [currentEntity]: objectToParse = {} } = {} } = result
    

    let resultArray = []
    for (const [key, value] of Object.entries(objectToParse)) {
      if(key === '__typename' || !value) continue
      resultArray.push([key, value])
    }
    // console.log(resultArray);

    setParsedResult(resultArray)
  }

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
              {parsedResult.map((keyValuePair) => <p key={''+keyValuePair[0]}><Styled.BoldText>{`${keyValuePair[0]}: `}</Styled.BoldText>{`${keyValuePair[1]}`}</p>)}
            </div>
          }
        </Styled.ResultsContainer>
        </Styled.Section>
      </Styled.MainContainer>
    </div>
  );
}

export default App;
