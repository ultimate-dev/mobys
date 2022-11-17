import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesBars } from "react-sparklines";

const Breadcrumb = ({
  title,
  breadcrumbs = [],
}: {
  title: string;
  breadcrumbs?: { title: string; to: string }[];
}) => {
  return (
    <Row>
      <Col sm={6}>
        <div className="page-title-box">
          <h4 className="text-muted">{title}</h4>
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/">Gösterge Paneli</Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} className="breadcrumb-item">
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
            <li className="breadcrumb-item active">{title}</li>
          </ol>
        </div>
      </Col>
      {/*
      <Col sm={6}>
        <div className="state-information d-none d-sm-block">
          <div className="state-graph">
            <Sparklines
              data={[8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]}
              margin={3}
              svgWidth={101}
              svgHeight={32}
            >
              <SparklinesBars
                margin={3}
                style={{
                  strokeWidth: 5,
                  stroke: "#7A6FBE",
                  fill: "#7A6FBE",
                }}
              />
            </Sparklines>
            <div className="info">Balance $ 2,317</div>
          </div>
          <div className="state-graph">
            <Sparklines
              data={[8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]}
              margin={3}
              svgWidth={101}
              svgHeight={32}
            >
              <SparklinesBars
                margin={3}
                style={{
                  strokeWidth: 5,
                  stroke: "#29bbe3",
                  fill: "#29bbe3",
                }}
              />
            </Sparklines>
            <div className="info">Item Sold 1230</div>
          </div>
        </div>
      </Col>
              */}
    </Row>
  );
};

export default Breadcrumb;
