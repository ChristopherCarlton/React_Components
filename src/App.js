import "./styles.css";
import styled from "styled-components";

import Card from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <h1>Ecommerce Card</h1>
      <CardLayout>
        <Card
          name="Potted plant"
          price="60$"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ro99lpIEVnuPw_llvXQ13Lg1gQckVp-HFA&usqp=CAU"
        />
        <Card
          name="Cactus"
          price="60$"
          type="Sale"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ro99lpIEVnuPw_llvXQ13Lg1gQckVp-HFA&usqp=CAU"
          // photo="https://i.ebayimg.com/images/g/c90AAOSwHhhhrOel/s-l500.jpg"
        />
        <Card
          name="Redwood tree"
          price="60$"
          type="BackOnStock"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ro99lpIEVnuPw_llvXQ13Lg1gQckVp-HFA&usqp=CAU"
          // photo="https://cdn.britannica.com/43/82543-050-38EBCF52/sequoias-tourists-California-Sequoia-National-Park.jpg"
        />
      </CardLayout>
    </div>
  );
}

const Title = styled.h1`
  color: red;
  font-size: 4rem;
`;

const CardLayout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
