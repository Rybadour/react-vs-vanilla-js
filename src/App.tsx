import styled from "styled-components";

const tiles: number[] = [];
for (let i = 0; i < 1000; i++) {
  tiles.push(Math.round(Math.random() * 10));
}

export default function App() {
  return <Container>
    {tiles.map((tile, i) => 
      <Tile key={i}>{tile}</Tile>
    )}
  </Container>;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tile = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
`;