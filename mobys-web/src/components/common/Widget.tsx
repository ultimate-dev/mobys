import { Col, Row } from "reactstrap";
import MStore from "store/main.store";

class WidgetBoxProps {
  color: string;
  title: string;
  value: number;
  icon: string;
  percent: number;
  label: string;
}
const Box = ({ color, title, value, icon, label, percent }: WidgetBoxProps) => {
  return (
    <div className={"mini-stat card bg-" + color}>
      <div className="card-body mini-stat-img card-body">
        <div className="mini-stat-icon">
          <i className={"float-end ri-" + icon + "-fill"}></i>
        </div>
        <div className="text-white">
          <h6 className="mb-3 font-size-16 text-white">{title.toLocaleUpperCase(MStore.locale)}</h6>
          <h2 className="mb-4 text-white">{Number(value).toFixed(2) + " TL"}</h2>
          <span
            className={
              "badge bg-dark" +
              (percent == 0 ? " text-white" : percent > 0 ? " text-success" : " text-danger")
            }
          >
            {(percent >= 0 ? "+" : "-") + Number(Math.abs(percent)).toFixed(2) + "%"}
          </span>
          <span className="ms-2 text-dark">{label}</span>
        </div>
      </div>
    </div>
  );
};

class WidgetProgressProps {
  color: string;
  title: string;
  valueSize?: number;
  values: { label: string; value: any }[];
  percent: number;
}

const Progress = ({ color, title, valueSize = 18, values, percent }: WidgetProgressProps) => {
  return (
    <div className="card align-self-stretch">
      <div className="card-body">
        <h6 className={"mb-2 font-size-16 text-" + color}>
          {title.toLocaleUpperCase(MStore.locale)}
        </h6>
        <Row className="text-center justify-content-center">
          {values.map(({ value, label }) => (
            <Col md={6}>
              <h3 className="fw-bold m-0 p-0" style={{ lineHeight: 1, fontSize: valueSize }}>
                {value}
              </h3>
              <div className="text-muted">
                <small>{label.toLocaleUpperCase(MStore.locale)}</small>
              </div>
            </Col>
          ))}
        </Row>
        <div className="progress mt-2">
          {/* @ts-ignore */}
          <div
            className={"progress-bar bg-" + color}
            role="progressbar"
            style={{ width: Math.abs(percent) + "%" }}
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className={"text-end text-" + color}>
          <small>Toplam %{Number(percent).toFixed(2)}</small>
        </div>
      </div>
    </div>
  );
};

class WidgetChartProps {
  title?: string;
  values?: { label: string; value: any }[];
  children: any;
}

const Chart = ({ title, values, children }: WidgetChartProps) => {
  return (
    <div className="card">
      <div className="card-body">
        {title && <h6 className="font-size-16">{title}</h6>}
        <div className="border-bottom my-3" />
        {values && (
          <>
            <Row className="text-center">
              {values.map(({ value, label }) => (
                <Col>
                  <h3 className="fw-bold m-0 p-0" style={{ lineHeight: 1 }}>
                    {value}
                  </h3>
                  <div className="text-muted">
                    <small>{label.toLocaleUpperCase(MStore.locale)}</small>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="border-bottom my-3" />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default { Progress, Box, Chart };
