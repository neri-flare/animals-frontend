import React, { useState } from "react";
import {
  Cat,
  CatInput,
  useCreateCatMutation,
} from "../../../../../../generated/graphql";
import { recursivelyParseObject } from "../../../../../../modules/app/utils";
import { onPropertiesChange } from "../../CreateQuery.utils";

interface Props {
  setParsedResults: Function;
}

export const CreateCatQuery: React.FC<Props> = ({ setParsedResults }) => {
  const [catProperties, setCatProperties] = useState<CatInput>({
    name: "",
    color: "",
    ownerId: "",
  });

  const [createCatMutation, { data: createdCat }] = useCreateCatMutation({
    variables: { createCatInput: catProperties },
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPropertiesChange<Cat>(event, setCatProperties);
  };

  const onCreateSubmit = async () => {
    await createCatMutation();

    if (createdCat) {
      const parsedObjectTo2dArray = recursivelyParseObject(createdCat);
      setParsedResults(parsedObjectTo2dArray);
    }
  };

  return (
    <>
      named: <input type="text" name="name" onChange={onChangeHandler}></input>{" "}
      with the color:{" "}
      <input type="text" name="color" onChange={onChangeHandler}></input> and
      ownerId (optional):{" "}
      <input type="text" name="ownerId" onChange={onChangeHandler}></input>
      <button onClick={onCreateSubmit}>Create</button>
    </>
  );
};
