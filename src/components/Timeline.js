import React, { useState } from "react";

import {

  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export const Timeline = ({ language }) => {
  const textContent = {
    en: {
      time: "Work Experience",
      events: [
        { 
          date: "2017 - 2018", 
          title1: "Planing Engineering & imprement ",
          title2: "Jasmine International Public Company Limited",
          description: "Responsible for managing the in-house installation team and local contractors in the province for installing internet and VoIP phone systems, resolving customer issues, and overseeing the migration from VDSL to fiber optic systems", 
          // buttonText: "Read more", 
          // imgPath: p4 // ใช้ภาพที่นำเข้ามาจาก p4
        },
        { 
          date: "2018 - 2019", 
          title1: "Teacher", 
          title2: "Interpattanasat College", 
          description: "Head of Information Technology and Public Relations Department Responsible for the college's website, installing the college's network system, and developing software for internal use.", 
         
        },
        { 
          date: "2020 - 2023", 
          title1: "Maintenance", 
          title2: "The Yamato Transport Company, Ltd.", 
          description: "Responsible for machine maintenance and troubleshooting within the company.", 
        
        },
        { 
          date: "2023 - now", 
          title1: "Production", 
          title2: "Fuji Electric CO. LTD (TOKYO)", 
          description: "Responsible for the production of electronic circuit boards, electrical circuits, and PLC (Programmable Logic Controller) control systems.", 
        
        }
      ]
    },
    th: {
      time: "ประสบการณ์การทํางาน",
      events: [
        { 
          date: "2017 - 2018", 
          title1: "วิศวกรรมการวางแผน", 
          title2: "บริษัทจัสมิน อินเตอร์เนชั่นแนล จำกัด (มหาชน)", 
          description: "แก้ไขปัญหาควบคุมดูแลงานติดตั้งทีมช่างและผู้รับเหมางานติดตั้งเปลี่ยนจาก vdsl เป็น internet fiber optic ในจังหวัดสกลนครทั้งหมด.", 
        
        },
        { 
          date: "2019 - 2020", 
          title1: "ครู", 
          title2: "วิทยาลัยเทคโนโลยีอินเตอร์พัฒนศาสตร์", 
          description: "วิทยาลัยอินเตอร์พัฒนาศาสตร์ หัวหน้าฝ่ายสารสนเทศและประชาสัมพันธ์ รับผิดชอบเว็บไซต์วิทยาลัย ติดตั้งระบบเครือข่ายวิทยาลัย และพัฒนาซอฟต์แวร์สำหรับใช้ในวิทยาลัย.", 
        
        },
        { 
          date: "2020 - 2023", 
          title1: "การบำรุงรักษาเครื่องจักร", 
          title2: "บริษัท ยามาโตะ ทรานสปอร์ต จำกัด", 
          description: "ดูแลบำรุงรักษาเครื่องจักรและการแก้ไขปัญหาภายในบริษัท", 
         
        },
        { 
          date: "2023 - ปัจจุบัน", 
          title1: "ผลิตแผงวงจรอิเล็กทรอนิกส์", 
          title2: "บริษัท ฟูจิ อิเล็กทริค จำกัด (โตเกียว)", 
          description: "รับผิดชอบการผลิตแผงวงจรอิเล็กทรอนิกส์ วงจรไฟฟ้า และการควบคุมด้วย PLC", 
       
        }
      ]
    },
    jp: {
      time: "職務経験",
      events: [
        { 
          date: "2017 - 2018", 
          title1: "計画エンジニアリングと実施", 
          title2: "JASMINE INTERNATIONAL PUBLIC COMPANY LIMITED", 
          description: "インターネットおよびVoIP電話の設置作業における、社内のインストールチームと県内の請負業者の責任を負い、顧客の問題を解決し、VDSLから光ファイバーへの移行作業を担当します。", 
        
        },
        { 
          date: "2019 - 2020", 
          title1: "コンピューターの先生", 
          title2: "インターパッタナーサート工業専門学校（ナコンパノム）", 
          description: "コンピューター科の授業を担当し、カレッジの広報および情報管理業務を行う。学費支払いシステムと会計管理ソフトウェアを開発し、カレッジのサーバーシステムを設計する。", 
         
        },
        { 
          date: "2020 - 2023", 
          title1: "機械のメンテナンス", 
          title2: "ヤマト運輸株式会社", 
          description: "会社内の機械のメンテナンスおよびトラブルシューティングを行う", 
        
        },
        { 
          date: "2023 - ปัจจุบัน", 
          title1: "電子基板を製造", 
          title2: "富士電機株式会社 (東京)", 
          description: "	電子基板、電気回路、およびPLCの製造を担当する", 
        
        }
      ]
    }
  };

  const [selectedEventIndex] = useState(0);

  const currentText = textContent[language];

 

  return (
    <div className="skill_timeline">
      <div className="bxskill_timeline">
        <br />
        <h2>{currentText.time}</h2>
        <MDBContainer fluid className="py-5">
          <MDBRow>
            <MDBCol lg="12">
              <div className="horizontal-timeline">
                <MDBTypography listInLine className="items">
                  {currentText.events.map((event, index) => (
                    <li className="items-list" key={index}>
                      <div className="d-flex align-items-center justify-content-between px-4">
                        <div className={`event-date badge bg-${["info", "success", "danger", "warning"][index % 4]}`} style={{ whiteSpace: 'nowrap' }}>
                          {event.date}
                        </div>
                        <div className="flex-grow-1 px-3">
                          <h5 className="pt-2">{event.title1}</h5>
                          <h5 className="pt-2">{event.title2}</h5>
                          <p className="text-muted">{event.description}</p>
                          <div>
                           
                          </div>
                          {selectedEventIndex === index && (

                            
                            <div
                              className="fade-in-image"
                              style={{
                                opacity: selectedEventIndex === index ? 1 : 0,
                                transform: selectedEventIndex === index ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                                marginTop: '20px',
                              }}
                            >
                              {/* <img 
                                src={event.imgPath} 
                                alt={event.title1} 
                                style={{ width: "50%", borderRadius: "60px" }}  
                              /> */}
                            </div>
                          )}
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
