import React, { useState } from "react";
import {
  Dog,
  DogInput,
  useCreateDogMutation,
} from "../../../../../../generated/graphql";
import { recursivelyParseObject } from "../../../../../../modules/app/utils";
import { onPropertiesChange } from "../../CreateQuery.utils";

interface Props {
  setParsedResults: Function;
}

export const CreateDogQuery: React.FC<Props> = ({ setParsedResults }) => {
  const [dogProperties, setDogProperties] = useState<DogInput>({
    name: "",
    breed: "",
    gender: "",
    ownerId: "",
  });

  const [createDogMutation, { data: createdDog }] = useCreateDogMutation({
    variables: { createDogInput: dogProperties },
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPropertiesChange<Dog>(event, setDogProperties);
  };

  const onCreateSubmit = async () => {
    await createDogMutation();

    if (createdDog) {
      const parsedObjectTo2dArray = recursivelyParseObject(createdDog);
      setParsedResults(parsedObjectTo2dArray);
    }
  };

  return (
    <>
      named: <input type="text" name="name" onChange={onChangeHandler}></input>{" "}
      of the breed:{" "}
      <input type="text" name="breed" onChange={onChangeHandler}></input> of the
      gender:{" "}
      <input type="text" name="gender" onChange={onChangeHandler}></input> and
      ownerId (optional):{" "}
      <input type="text" name="ownerId" onChange={onChangeHandler}></input>{" "}
      <button onClick={onCreateSubmit}>Create</button>
    </>
  );
};
