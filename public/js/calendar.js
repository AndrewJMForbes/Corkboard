import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    // editable: true,
    // selectable: true,
    // selectMirror: true,
    // dayMaxEvents: true,
    // select: function(info) {
    //     const title = prompt('Event Title:');
    //     const calendarApi = info.view.calendar;
    //     calendarApi.unselect(); // clear date selection
    //     if (title) {
    //         calendarApi.addEvent({
    //             id: Date.now(),
    //             title,
    //             start: info.startStr,
    //             end: info.endStr,
    //             allDay: info.allDay
    //         });
    //     }
    // },
    // eventClick: function(info) {
  });
  calendar.render();
});
