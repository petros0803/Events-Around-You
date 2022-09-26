import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styled from "styled-components";
import Calendar from "../../assets/icons/calendar.svg";
import MapPin from "../../assets/icons/map-pin.svg";

interface IEventCard {
  title: string;
  date: string;
  address: string;
  image: StaticImageData;
}

const Card: FC<IEventCard> = ({ ...props }) => {
  return (
    <Div>
      <div>
        <Image src={props.image} width={300} height={200} />
      </div>
      <div className="event__card__container">
        <div className="event__card-title">{props.title}</div>
        <div className="event__card-details">
          <Image src={Calendar} />
          <p>{props.date}</p>
        </div>
        <div className="event__card-details">
          <Image src={MapPin} />
          {props.address}
        </div>
        <button className="btn">Explore event</button>
      </div>
    </Div>
  );
};

export default Card;

const Div = styled.div`
  width: min(100%, 700px);
  height: min(200px);
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.border.borderRadius.regular};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;

  .event__card__container {
    width: min(100%, 350px);
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .event__card-title {
      font-size: ${({ theme }) => theme.fonts.fontSize.title};
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
    }

    .event__card-details {
      font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
      font-size: ${({ theme }) => theme.fonts.fontSize.big};
      gap: 0.375rem;
      display: flex;
      align-items: center;

      p {
        margin: 0px;
        margin-bottom: -0.1875rem;
      }
    }
  }
`;
