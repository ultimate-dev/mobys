import { Card, Col, Row, CardBody, Container } from "reactstrap";
class ErrorPageProps {
  code: number;
  text: string;
}
const ErrorPage = ({ code, text }: ErrorPageProps) => {
  return (
    <div className="account-pages my-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="6" xl="5">
            <Card className="overflow-hidden shadow">
              <CardBody className="pt-0">
                <div className="ex-page-content text-center">
                  <h1 className="text-dark">{code}!</h1>
                  <h3 className="">{text}</h3>
                  <br />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ErrorPage;
