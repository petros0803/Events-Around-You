import Card from "common/components/EventCard/Card";
import { useAllEvents } from "services/event";
import styled from "styled-components";

const index = () => {
  const { data } = useAllEvents();

  return (
    <Div>
      <div className="cards__container">
        {data?.map((event, index) => (
          <Card {...event} key={index} />
        ))}
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
  }
`;
