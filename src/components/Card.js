import styled from "styled-components";

const STYLES = {
  Sale: {
    "--background": "rgb(233,150,122)",
    "--foreground": "rgb(20 83 45)",
    "border-color": "rgb(233,150,122)"
  },

  BackOnStock: {
    "--background": "rgb(60, 84, 16)",
    "--foreground": "rgb(217 119 6)",
    "border-color": "rgb(60, 84, 16)"
  }
};

export default function Card({ name, price, type, photo }) {
  return (
    <Article style={STYLES[type]}>
      <img src={photo} alt="Plant"></img>
      <div>
        {(type === "Sale" || type == "BackOnStock") && (
          <Message>{type}</Message>
        )}
      </div>
      <Name>{name}</Name>
      <div>
        {type === "Sale" ? (
          <PriceLabel>
            <del>{price}</del>
            <CrossedPrice>$55 </CrossedPrice>
          </PriceLabel>
        ) : (
          <PriceLabel>{price}</PriceLabel>
        )}
      </div>

      <Button primary>Add to Cart</Button>
    </Article>
  );
}

const Article = styled.article`
  position: relative;
  max-height: 600px;
  max-width: 300px;
  border-style: solid;
  border-color: grey;
  border-width: 5px;
  border-radius: 10px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /* background: ${(props) => (props.primary ? "palevioletred" : "white")}; */
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  background-color: rgb(60, 84, 16);

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 2px solid;
  border-radius: 10px;
`;

const Message = styled.p`
  background-color: var(--background);
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  position: absolute;
  top: -10px;
  right: -10px;
  margin: 0;
  font-size: 1.2rem;
  text-align: left;
  color: white;
`;

const Name = styled.h1`
  margin: 0px;
  text-align: left;
  position: relative;
  top: 20px;
  left: 30px;
`;

const PriceLabel = styled.p`
  font-size: 1.5em;
  color: grey;
  position: relative;
  text-align: left;
  left: 30px;
`;

const CrossedPrice = styled.p`
  font-size: 1em;
  color: rgb(233, 150, 122);
  position: relative;
  text-align: left;
  top: -29px;
  left: 50px;
  margin: 0;
`;

// props
// for the plant inage
// plant name
// plant price
// sale or on stock
