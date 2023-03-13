import React, { useState } from "react";
import {
  Elephant,
  ElephantInput,
  useCreateElephantMutation,
} from "../../../../../../generated/graphql";
import { recursivelyParseObject } from "../../../../../../modules/app/utils";
import { onPropertiesChange } from "../../CreateQuery.utils";

interface Props {
  setParsedResults: Function;
}

export const CreateElephantQuery: React.FC<Props> = ({ setParsedResults }) => {
  const [elephantProperties, setElephantProperties] = useState<ElephantInput>({
    name: "",
    gender: "",
    trunkLength: 0,
    ownerId: "",
  });

  const [createElephantMutation, { data: createdElephant }] =
    useCreateElephantMutation({
      variables: {
        createElephantInput: {
          ...elephantProperties,
          trunkLength: parseInt("" + elephantProperties.trunkLength),
        },
      },
    });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPropertiesChange<Elephant>(event, setElephantProperties);
  };

  const onCreateSubmit = async () => {
    await createElephantMutation();

    if (createdElephant) {
      const parsedObjectTo2dArray = recursivelyParseObject(createdElephant);
      setParsedResults(parsedObjectTo2dArray);
    }
  };

  return (
    <>
      named: <input type="text" name="name" onChange={onChangeHandler}></input>{" "}
      with a trunk length:{" "}
      <input type="text" name="trunkLength" onChange={onChangeHandler}></input>{" "}
      of the gender:{" "}
      <input type="text" name="gender" onChange={onChangeHandler}></input> and
      ownerId (optional):{" "}
      <input type="text" name="ownerId" onChange={onChangeHandler}></input>{" "}
      <button onClick={onCreateSubmit}>Create</button>
    </>
  );
};
