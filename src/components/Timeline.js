import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export const Timeline = ({ language }) => {
  // ข้อความตามภาษาที่เลือก
  const textContent = {
    en: {
      time: "Time Line",
      events: [
        { date: "2 June", title: "Event One", description: "It will be as simple as occidental in fact it will be Occidental Cambridge friend", buttonText: "Read more" },
        { date: "5 June", title: "Event Two", description: "Everyone realizes why a new common language one could refuse translators.", buttonText: "Read more" },
        { date: "7 June", title: "Event Three", description: "If several languages coalesce the grammar of the resulting simple and regular", buttonText: "Read more" },
        { date: "8 June", title: "Event Four", description: "Languages only differ in their pronunciation and their most common words.", buttonText: "Read more" }
      ]
    },
    th: {
      time: "ช่วงเวลาการทำงาน",
      events: [
        { date: "2 มิถุนายน", title: "เหตุการณ์ที่หนึ่ง", description: "มันจะง่ายเหมือนกับตะวันตก ในความเป็นจริงมันจะเป็น Occidental Cambridge เพื่อน", buttonText: "อ่านเพิ่มเติม" },
        { date: "5 มิถุนายน", title: "เหตุการณ์ที่สอง", description: "ทุกคนเข้าใจว่าทำไมภาษากลางใหม่จึงสามารถปฏิเสธนักแปลได้", buttonText: "อ่านเพิ่มเติม" },
        { date: "7 มิถุนายน", title: "เหตุการณ์ที่สาม", description: "หากหลายภาษารวมตัวกันไวยากรณ์ของผลลัพธ์ที่ได้จะง่ายและปกติ", buttonText: "อ่านเพิ่มเติม" },
        { date: "8 มิถุนายน", title: "เหตุการณ์ที่สี่", description: "ภาษาจะแตกต่างกันเพียงในการออกเสียงและคำที่ใช้บ่อยที่สุด", buttonText: "อ่านเพิ่มเติม" }
      ]
    }
  };

  const currentText = textContent[language];

  return (
    <div className="skill_timeline">
      <div className="bxskill_timeline ">
        <br></br>
      <h2>{currentText.time}</h2>
        <MDBContainer fluid className="py-5">
          <MDBRow>
            <MDBCol lg="12">
              <div className="horizontal-timeline">
                <MDBTypography listInLine className="items">
                  {currentText.events.map((event, index) => (
                    <li className="items-list" key={index}>
                      <div className="px-4">
                        <div className={`event-date badge bg-${["info", "success", "danger", "warning"][index % 4]}`}>
                          {event.date}
                        </div>
                        <h5 className="pt-2">{event.title}</h5>
                        <p className="text-muted">{event.description}</p>
                        <div>
                          <MDBBtn href="#!" size="sm">{event.buttonText}</MDBBtn>
                        </div>
                      </div>
                    </li>
                  ))}
                </MDBTypography>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};
