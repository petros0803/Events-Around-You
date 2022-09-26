import styled from "styled-components";
import Image1 from "../common/assets/images/Image1.jpeg";
import Image2 from "../common/assets/images/Image2.jpeg";
import Card from "../common/components/EventCard/Card";
import config from "../config";
import { useAllEvents } from "../services/event";

const index = () => {
  const { data } = useAllEvents();
  console.log("data :>> ", data);
  console.log(config);
  console.log(process.env);
  return (
    <Div>
      <div className="cards__container">
        <Card
          title={"First Eveniment"}
          date={"12 October, 2022"}
          address={"Strada Tipografiei nr 1"}
          image={Image1}
        />
        <Card
          title={"Second Eveniment"}
          date={"23 December, 2022"}
          address={"Strada Tipografiei nr 1"}
          image={Image2}
        />
      </div>
    </Div>
  );
};

export default index;

const Div = styled.div`
  .cards__container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
    margin-top: 2rem;
  }
`;
