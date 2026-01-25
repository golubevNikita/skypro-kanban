import styled from "styled-components";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export const PopNewCardCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  margin-bottom: 14px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: ${function ({ theme }) {
      return theme.textColor;
    }};
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const Calendar = styled(DayPicker)`
  .rdp-months {
    margin-bottom: 12px;
    width: 168px;
    height: 172px;

    @media screen and (max-width: 660px) {
      width: 344px;
      height: 386px;
    }
  }

  --rdp-weekday-padding: 0 7px;

  .rdp-weekdays {
    margin: 7px 0;
  }

  .rdp-weekday {
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;

    @media screen and (max-width: 660px) {
      font-size: 14px;
    }
  }

  .rdp-weeks {
    width: 182px;
    height: 126px;

    @media screen and (max-width: 660px) {
      width: 344px;
      height: auto;
    }
  }

  --rdp-day-height: 22px;
  --rdp-day-width: 22px;

  --rdp-day_button-height: 22px;
  --rdp-day_button-width: 22px;

  --rdp-day_button-border-radius: 50%;

  .rdp-day {
    margin: 2px;
    color: #94a6be;
    border-radius: 50%;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;

    &:hover {
      color: #94a6be;
      background-color: #eaeef6;
    }

    @media screen and (max-width: 660px) {
      --rdp-day-height: 42px;
      --rdp-day-width: 42px;

      --rdp-day_button-height: 42px;
      --rdp-day_button-width: 42px;

      font-size: 14px;
    }
  }

  .rdp-selected {
    font-weight: 700;
    color: ${function ({ theme }) {
      return theme.selectedTextColor;
    }};
    background-color: #94a6be;
  }

  --rdp-accent-color: #94a6be;
  --rdp-accent-background-color: #eaeef6;

  .rdp-day_button {
    display: contents;
  }

  .rdp-today {
    color: tomato;
  }

  .rdp-nav {
    width: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rdp-chevron {
    width: 14px;
    height: 10px;
  }

  .rdp-caption_label {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }
`;
