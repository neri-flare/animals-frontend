import React from 'react';
import { Styled } from './App.styled';

const App = () => {
  return (
    <div className="App">
      <Styled.MainContainer>
        <Styled.Header>Animals</Styled.Header>
        <Styled.Section>

        <Styled.QueriesContainer>
          Get x by y
        </Styled.QueriesContainer>
        <Styled.ResultsContainer>
          Results:
        </Styled.ResultsContainer>
        </Styled.Section>
      </Styled.MainContainer>
    </div>
  );
}

export default App;
