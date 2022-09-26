import Calendar from "common/assets/icons/calendar.svg";
import LeftArrow from "common/assets/icons/left-arrow.svg";
import MapPin from "common/assets/icons/map-pin.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetEventById } from "services/event";
import styled from "styled-components";

const Event = () => {
  const router = useRouter();
  const { data } = useGetEventById(router.query.id);

  return (
    <Div>
      {data && (
        <>
          <Link href="/">
            <div className="back-btn d-flex align-items-center gap-1">
              <Image src={LeftArrow} alt="Back" />
              <p className="back-text">Events</p>
            </div>
          </Link>
          <div className="page-title mb-3">{data.title}</div>
          <div className="d-flex gap-5 mb-3">
            <div className="d-flex gap-1">
              <Image
                src={Calendar}
                width={20}
                height={20}
                className="event-image"
              />
              <div className="event-date">{data.date}</div>
            </div>
            <div className="d-flex gap-1">
              <Image src={MapPin} width={20} height={20} />
              <div className="event-location">{data.location}</div>
            </div>
          </div>
          <p className="event-organizer mb-5">
            Event posted by <Link href="/organizer">{data.owner}</Link>
          </p>
          <div className="d-flex w-75 gap-4">
            <div className="event-image">
              <Image src={data.image} alt="Event" width={500} height={300} />
              <p className="event-image-description">{data.title}</p>
            </div>

            <div className="event-description flex-column w-75 text-start">
              {data.description}
            </div>
          </div>
        </>
      )}
    </Div>
  );
};

export default Event;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};

  .event-date,
  .event-location,
  .event-description {
    font-size: ${({ theme }) => theme.fonts.fontSize.big};
    gap: 0.375rem;

    p {
      margin: 0px;
      margin-bottom: -0.1875rem;
    }
  }

  .event-organizer {
    font-size: ${({ theme }) => theme.fonts.fontSize.big};
  }

  .event-image {
    img {
      border-radius: ${({ theme }) => theme.border.borderRadius.regular};
    }

    .event-image-description {
      font-size: ${({ theme }) => theme.fonts.fontSize.normal};
      font-style: italic;
      text-align: center;
    }
  }
`;
