import React, { useState } from 'react'
import { Entities } from '../../modules/app/App.types';
import { recursivelyParseObject } from '../../modules/app/utils';
import { Select } from '../Select'
import { entityOptions } from './QueriesContainer.consts';
import { Styled } from './QueriesContainer.styled'

interface Props {
  entities: Entities;
  setParsedResults: Function;
}

export const QueriesContainer: React.FC<Props> = ({ entities, setParsedResults }) => {
  const [currentEntity, setCurrentEntity] = useState<string>("");
  const [currentName, setCurrentName] = useState<string>("")

  const onEntityChoose = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedEntity = event?.target?.value;
    setCurrentEntity(selectedEntity);
    entities[selectedEntity].getNames();
  };

  const onNameChoose = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event?.target?.value;

    setCurrentName(selectedName)

    const result = await entities[currentEntity].getByName({
      variables: { name: selectedName },
    });
    const { data: { [currentEntity]: objectToParse = {} } = {} } = result;

    const parsedObjectTo2dArray = recursivelyParseObject(objectToParse);

    setParsedResults(parsedObjectTo2dArray);
  };

  return (
    <Styled.QueriesContainer>
    <Styled.QueryLine>
      Get the{" "}
      <Select
        name="entity"
        value={currentEntity}
        options={entityOptions}
        onChangeHandler={onEntityChoose}
      />{" "}
      with the name:{" "}
      {
        <Select
        name="name"
        value={currentName}
        onChangeHandler={onNameChoose}
        options={
          (entities &&
          entities[currentEntity] &&
          entities[currentEntity].names.length &&
          entities[currentEntity].names.map((animal) => animal.name)) || []
        }
        />
      }
    </Styled.QueryLine>
  </Styled.QueriesContainer>
  )
}
