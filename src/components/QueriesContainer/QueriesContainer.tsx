import React from "react";
import { Entities } from "../../modules/app/App.types";
import { CreateQuery } from "./components/CreateQuery/CreateQuery";
import { GetQuery } from "./components/GetQuery/GetQuery";
import { Styled } from "./QueriesContainer.styled";

interface Props {
  entities: Entities;
  setParsedResults: Function;
}

export const QueriesContainer: React.FC<Props> = ({
  entities,
  setParsedResults,
}) => {
  return (
    <Styled.QueriesContainer>
      <GetQuery entities={entities} setParsedResults={setParsedResults} />
      <CreateQuery entities={entities} setParsedResults={setParsedResults} />
    </Styled.QueriesContainer>
  );
};
