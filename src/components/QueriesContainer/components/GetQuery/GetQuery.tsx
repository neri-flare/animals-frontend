import React, { useState } from "react";
import { Entities } from "../../../../modules/app/App.types";
import { recursivelyParseObject } from "../../../../modules/app/utils";
import { Select } from "../../../Select";
import { entityOptions } from "../../QueriesContainer.consts";
import { Styled } from "../../QueriesContainer.styled";

interface Props {
  entities: Entities;
  setParsedResults: Function;
}

export const GetQuery: React.FC<Props> = ({ entities, setParsedResults }) => {
  const [entityToGet, setEntityToGet] = useState<string>("");
  const [nameToGet, setNameToGet] = useState<string>("");

  const onEntityChoose = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedEntity = event?.target?.value;
    setEntityToGet(selectedEntity);
    entities[selectedEntity].getNames();
  };

  const onNameChoose = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event?.target?.value;

    setNameToGet(selectedName);

    const result = await entities[entityToGet].getByName({
      variables: { name: selectedName },
    });
    console.log("result", result);
    const { data: { [entityToGet]: objectToParse = {} } = {} } = result;

    const parsedObjectTo2dArray = recursivelyParseObject(objectToParse);

    setParsedResults(parsedObjectTo2dArray);
  };
  return (
    <Styled.QueryLine>
      Get the{" "}
      <Select
        name="entity"
        value={entityToGet}
        options={entityOptions}
        onChangeHandler={onEntityChoose}
      />{" "}
      with the name:{" "}
      {
        <Select
          name="name"
          value={nameToGet}
          onChangeHandler={onNameChoose}
          options={
            (entities &&
              entities[entityToGet] &&
              entities[entityToGet].names.length &&
              entities[entityToGet].names.map((animal) => animal.name)) ||
            []
          }
        />
      }
    </Styled.QueryLine>
  );
};
