import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { APP_NAME, OWNER_NAME } from "configs";
import i18n from "i18n";
import { Button, Checkbox, Form, Input } from "antd";
import { RULES } from "constants/forms";
import AuthController from "controllers/auth.controller";
import IStore from "store/instant.store";
import { observer } from "mobx-react-lite";

const LoginPage = () => {
  let navigate = useNavigate();
  let [c] = useState(new AuthController(navigate));
  let [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(c.login);
  }, []);

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <CardBody className="pt-0">
                  <h3 className="text-center mt-5">
                    <img
                      src={require("assets/images/logo-dark.png")}
                      height="120"
                      className="auth-logo-dark"
                    />
                  </h3>
                  <div className="p-3">
                    <h4 className="text-muted font-size-18 mb-1 text-center">
                      {i18n.t("auth.welcome")}
                    </h4>

                    <Form
                      form={form}
                      layout="vertical"
                      className="form-horizontal mt-4"
                      onFinish={() => c.onLogin(c.login)}
                      onValuesChange={(e) => c.setLogin({ ...c.login, ...e })}
                    >
                      <Form.Item label={i18n.t("auth.email")} name="email" rules={[RULES.REQUIRED]}>
                        <Input type="email" />
                      </Form.Item>
                      <Form.Item
                        label={i18n.t("auth.password")}
                        name="password"
                        rules={[RULES.REQUIRED, RULES.PASSWORD]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <div className="mb-3 row mt-4">
                        <Form.Item className="col-6" name="rememberme" valuePropName="checked">
                          <Checkbox id="rememberme">
                            <label htmlFor="rememberme" className="text-muted form-check-label">
                              {i18n.t("auth.rememberMe")}
                            </label>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item className="col-6 text-end">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="btn btn-primary w-md waves-effect waves-light"
                            loading={IStore.loading}
                          >
                            {i18n.t("auth.login")}
                          </Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  {APP_NAME} için
                  <Link to="/auth/register" className="ms-2 text-primary">
                    Hesap Oluştur
                  </Link>
                </p>
                <p>
                  © 2022 {OWNER_NAME}
                  <span className="d-none d-sm-inline-block">- {APP_NAME}</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default observer(LoginPage);
