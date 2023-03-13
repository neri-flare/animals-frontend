import React, { useState } from "react";
import { Entities } from "../../../../modules/app/App.types";
import { Select } from "../../../Select";
import { entityOptions } from "../../QueriesContainer.consts";
import { Styled } from "../../QueriesContainer.styled";
import { CreateCatQuery } from "./components/CreateCatQuery/CreateCatQuery";
import { CreateDogQuery } from "./components/CreateDogQuery/CreateDogQuery";
import { CreateElephantQuery } from "./components/CreateElephantQuery/CreateElephantQuery";

interface Props {
  entities: Entities;
  setParsedResults: Function;
}

export const CreateQuery: React.FC<Props> = ({
  entities,
  setParsedResults,
}) => {
  const [entityType, setEntityType] = useState<string>("");

  const onEntityChoose = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedEntity = event?.target?.value;
    setEntityType(selectedEntity);
    entities[selectedEntity].getNames();
  };

  return (
    <Styled.QueryLine>
      Create a{" "}
      <Select
        name="entity"
        value={entityType}
        options={entityOptions}
        onChangeHandler={onEntityChoose}
      />{" "}
      {entityType === "cat" ? (
        <CreateCatQuery setParsedResults={setParsedResults} />
      ) : (
        <></>
      )}
      {entityType === "dog" ? (
        <CreateDogQuery setParsedResults={setParsedResults} />
      ) : (
        <></>
      )}
      {entityType === "elephant" ? (
        <CreateElephantQuery setParsedResults={setParsedResults} />
      ) : (
        <></>
      )}
      {/* {entityType === "owner" ? <CreateOwnerQuery setParsedResults={setParsedResults} /> : <></>} */}{" "}
    </Styled.QueryLine>
  );
};
