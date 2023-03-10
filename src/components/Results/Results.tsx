import React from "react";
import { Styled } from "./Results.styled";

interface Props {
  results: unknown[];
}

export const Results: React.FC<Props> = ({ results = [] }) => {
  return (
    <div>
      {results.map((keyValuePair) => {
        if (Array.isArray(keyValuePair)) {
          return (
            <Styled.Result key={"" + keyValuePair[0]}>
              <Styled.BoldText>{`${keyValuePair[0]}: `}</Styled.BoldText>
              {Array.isArray(keyValuePair[1]) ? (
                <Results results={keyValuePair[1]} />
              ) : (
                `${keyValuePair[1]}`
              )}
            </Styled.Result>
          );
        }
        return <></>;
      })}
    </div>
  );
};
