import { useContext, useEffect, useState } from "react";

import { TasksContext } from "../../сontext/TasksContext";

import { correctedData } from "../../services/utilities";

import { ru } from "react-day-picker/locale";

import * as S from "./Calendar.styled";

const Calendar = ({ isNewTask, deadline, newTaskDateSelect, handleSelect }) => {
  const { taskById } = useContext(TasksContext);

  useEffect(() => {
    const monthsNavigate = document.querySelectorAll(".rdp-chevron");

    monthsNavigate.forEach((el) => {
      el.removeAttribute("width");
      el.removeAttribute("height");
    });

    const monthsName = document.querySelector(".rdp-caption_label").textContent;

    const monthsByCapital = monthsName.replace(
      monthsName[0],
      monthsName[0].toUpperCase()
    );

    document.querySelector(".rdp-caption_label").textContent = monthsByCapital;
  }, []);

  const [deadlineMonth, setDeadlineMonth] = useState(taskById.date);

  return (
    <S.PopNewCardCalendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.Calendar
          animate
          mode="single"
          locale={ru}
          month={deadlineMonth}
          onMonthChange={setDeadlineMonth}
          selected={deadline}
          onSelect={isNewTask ? newTaskDateSelect : handleSelect}
          weekStartsOn={1}
        />

        <S.CalendarPeriod>
          {taskById.date ? (
            <S.CalendarP>
              Срок исполнения: <span>{correctedData(deadline)}</span>
            </S.CalendarP>
          ) : (
            <S.CalendarP>
              Выберите срок исполнения:
              <span>{deadline ? ` ${correctedData(deadline)}` : ""}</span>
            </S.CalendarP>
          )}
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.PopNewCardCalendar>
  );
};

export default Calendar;
