import Breadcrumb from "components/common/Breadcrumb";
import DataForm, { controlForm } from "components/common/DataForm";
import { RULES } from "constants/forms";
import AccountController from "controllers/account.controller";
import i18n from "i18n";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Avatar, Card, Tabs } from "antd";
import IStore from "store/instant.store";
import { Button, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

const INFO_FORM: any[] = [
  {
    label: "Ad",
    key: "name",
    type: "text",
    rules: [RULES["REQUIRED"]],
    span: 6,
  },
  {
    label: "Soyad",
    key: "surname",
    type: "text",
    rules: [RULES["REQUIRED"]],
    span: 6,
  },
];
const EMAIL_FORM: any[] = [
  {
    label: "Mevcut E-Posta",
    key: "current",
    type: "email",
    rules: [RULES["REQUIRED"]],
  },
  {
    label: "Yeni E-Posta",
    key: "new",
    type: "email",
    rules: [RULES["REQUIRED"]],
  },
  {
    label: "Yeni E-Posta Tekrar",
    key: "newTry",
    type: "email",
    rules: [RULES["REQUIRED"]],
  },
];
const PASSWORD_FORM: any[] = [
  {
    label: "Mevcut Şifre",
    key: "current",
    type: "password",
    rules: [RULES["REQUIRED"], RULES["PASSWORD"]],
  },
  {
    label: "Yeni Şifre",
    key: "new",
    type: "password",
    rules: [RULES["REQUIRED"], RULES["PASSWORD"]],
  },
  {
    label: "Yeni Şifre Tekrar",
    key: "newTry",
    type: "password",
    rules: [RULES["REQUIRED"], RULES["PASSWORD"]],
  },
];

const AccountPage = () => {
  let navigate = useNavigate();

  const TABS = [
    {
      label: "Hesap Bilgileri",
      key: "info",
      children: <InfoTab />,
    },
    {
      label: "E-Posta Değiştir",
      key: "email",
      children: <EmailTab />,
    },
    {
      label: "Şifremi Değiştir",
      key: "password",
      children: <PasswordTab />,
    },
  ];

  return (
    <>
      <Breadcrumb title={i18n.t("routes.account")} />
      <Row>
        <Col>
          <Card>
            <Tabs tabBarStyle={{ width: 250 }} tabPosition="left" items={TABS} />
          </Card>
          <Card className="mt-3">
            <Row className="w-full d-flex">
              <Col>
                <Button block className="btn btn-danger" onClick={() => navigate("/auth/login")}>
                  Çıkış Yap
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default AccountPage;

const InfoTab = observer(() => {
  let [accountC] = useState(new AccountController());
  let navigate = useNavigate();

  return (
    <Row className="m-0">
      <Col md={3}>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <Avatar shape="square" size={120} className="bg-secondary text-dark">
            {IStore.user?.letters}
          </Avatar>
        </div>
      </Col>
      <Col md={9}>
        <DataForm
          defaultValues={IStore.user}
          form={INFO_FORM}
          buttons={[
            {
              text: "Sıfırla",
              color: "secondary",
              onClick: (values, form) => form.setFieldsValue(IStore.user),
            },
            {
              text: "Kaydet",
              color: "primary",
              submit: true,
              onClick: (values) =>
                accountC.update(values, (err) => !err && navigate("/auth/login")),
            },
          ]}
        />
      </Col>
    </Row>
  );
});

const EmailTab = observer(() => {
  let [accountC] = useState(new AccountController());
  let navigate = useNavigate();

  return (
    <Row className="m-0">
      <Col>
        <DataForm
          form={EMAIL_FORM}
          buttons={[
            {
              text: "Temizle",
              color: "secondary",
              onClick: (values, form) => form.resetFields(),
            },
            {
              text: "Kaydet",
              color: "primary",
              submit: true,
              onClick: (values) =>
                accountC.updateEmail(values, (err) => !err && navigate("/auth/login")),
            },
          ]}
        />
      </Col>
    </Row>
  );
});
const PasswordTab = observer(() => {
  let [accountC] = useState(new AccountController());
  let navigate = useNavigate();

  return (
    <Row className="m-0">
      <Col>
        <DataForm
          form={PASSWORD_FORM}
          buttons={[
            {
              text: "Temizle",
              color: "secondary",
              onClick: (values, form) => form.resetFields(),
            },
            {
              text: "Kaydet",
              color: "primary",
              submit: true,
              onClick: (values) =>
                accountC.updatePassword(values, (err) => !err && navigate("/auth/login")),
            },
          ]}
        />
      </Col>
    </Row>
  );
});
