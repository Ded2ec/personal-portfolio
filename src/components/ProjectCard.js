import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link , component }) => {
  return (
   
    <Col size={12} sm={6} md={4}>
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="proj-imgbx" style={{ border: component === 'online' ? '2px solid green' : 'none', position: 'relative' }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description.split("Try Onclick user&pass 123456")[0]}</span>
            {description.includes("Try Onclick user&pass 123456") && (
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                {`Try Onclick user&pass 123456`}
              </span>
            )}
          </div>
          {component === 'online' && (
            <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '5px' }}>
              Online Now
            </div>
          )}
        </div>
      </a>
    </Col>
  )
}
