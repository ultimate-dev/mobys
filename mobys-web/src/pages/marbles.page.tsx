import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Col, Row } from "reactstrap";
import { Button, Card, Drawer, Image, Tabs } from "antd";
import _ from "lodash";
import i18n from "i18n";
// Components
import DataTable from "components/common/DataTable";
import Breadcrumb from "components/common/Breadcrumb";
// Controllers
import MarbleController from "controllers/marbles.controller";
// Constants
import { Status } from "constants/statuses";
import { useParams } from "react-router-dom";
import MarbleBlock from "components/3D/MarbleBlock";
import Scene from "components/3D/Scene";
import DataForm, { controlForm } from "components/common/DataForm";
import { RULES } from "constants/forms";

const FORM: any[] = [
  {
    span: 4,
    label: "X(metre)",
    key: "x",
    type: "number",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 4,
    label: "Y(metre)",
    key: "y",
    type: "number",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 4,
    label: "Z(metre)",
    key: "z",
    type: "number",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 12,
    label: "Ağırlık",
    key: "weight",
    type: "number",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 6,
    label: "Ön",
    key: "front",
    type: "image",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 6,
    label: "Arka",
    key: "back",
    type: "image",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 6,
    label: "Üst",
    key: "top",
    type: "image",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 6,
    label: "Alt",
    key: "bottom",
    type: "image",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 6,
    label: "Sağ",
    key: "right",
    type: "image",
    rules: [RULES["REQUIRED"]],
  },
  {
    span: 6,
    label: "Sol",
    key: "left",
    type: "image",
    rules: [RULES["REQUIRED"]],
  },
];

const DEFAULT: any = {
  status: Status["ACTIVE"],
};

const SuppliersPage = () => {
  let { id }: any = useParams();
  let [marbleC] = useState(new MarbleController());

  useEffect(() => {
    marbleC.get();
  }, []);

  return (
    <>
      <Breadcrumb title={"Ürünler"} />
      <Row>
        <Col>
          <Tabs type="card">
            <Tabs.TabPane tab={"Mermerler"} key="marbles">
              <Card
                extra={
                  <Button className="btn btn-primary" onClick={() => marbleC.setMarbleBlock({})}>
                    Mermer Ekle
                  </Button>
                }
              >
                <Row>
                  {marbleC.marbleBlocks.map((marbleBlock: any) => (
                    <Col md={4} className="mb-3">
                      <Button
                        className="btn btn-primary mb-1"
                        onClick={() =>
                          marbleC.setMarbleBlock({
                            ...marbleBlock,
                            ...marbleBlock.marbleBlockImages.reduce(
                              (sum: any, marbleBlockImage: any) => ({
                                ...sum,
                                [String(marbleBlockImage.type).toLowerCase()]:
                                  marbleBlockImage.image,
                              }),
                              {}
                            ),
                          })
                        }
                      >
                        Düzenle
                      </Button>
                      <Scene>
                        <MarbleBlock
                          {...marbleBlock}
                          dices={marbleBlock.marbleBlockImages.map(
                            (marbleBlockImage: any) => marbleBlockImage.image
                          )}
                        />
                      </Scene>
                      <div className="d-flex justify-content-center">
                        {Object.keys(marbleBlock.colors).map((color) => (
                          <div className="d-flex m-2">
                            <div
                              className="rounded me-1"
                              style={{ width: 20, height: 20, backgroundColor: color }}
                            />
                            <small>{color}</small>
                          </div>
                        ))}
                      </div>
                      <div className="d-flex justify-content-start text-muted">
                        <small className="me-2">Ağırlık:</small>
                        <small className="text-primary">{marbleBlock.weight}ton</small>
                      </div>
                      <div className="d-flex justify-content-start text-muted">
                        <small className="me-2">Kırık:</small>
                        <small className="text-primary">---</small>
                      </div>
                      <div className="d-flex justify-content-start text-muted">
                        <small className="me-2">Mineraller:</small>
                        <small className="text-primary">---</small>
                      </div>
                      <div className="d-flex justify-content-start text-muted">
                        <small className="me-2">Desen:</small>
                        <small className="text-primary">---</small>
                      </div>
                      <div className="d-flex justify-content-start text-muted">
                        <small className="me-2">Konum:</small>
                        <small className="text-primary">Elazığ/Türkiye</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Drawer
          title={!marbleC.marbleBlock?.id ? "Mermer Oluştur" : "Mermer Bilgileri"}
          open={!_.isNull(marbleC.marbleBlock)}
          onClose={() => marbleC.setMarbleBlock(null)}
        >
          <DataForm
            defaultValues={{ ...DEFAULT, ...marbleC.marbleBlock }}
            form={controlForm(FORM)}
            buttons={
              !marbleC.marbleBlock?.id
                ? [
                    {
                      text: "İptal",
                      color: "secondary",
                      onClick: (values: any) => marbleC.setMarbleBlock(null),
                    },
                    {
                      text: "Oluştur",
                      color: "primary",
                      submit: true,
                      onClick: (values: any) =>
                        marbleC.create({ ...values, type: "TABLE" }, () => {
                          marbleC.setMarbleBlock(null);
                          marbleC.get();
                        }),
                    },
                  ]
                : [
                    {
                      text: "Sil",
                      color: "danger",
                      onClick: (values: any) =>
                        marbleC.delete(values, () => {
                          marbleC.setMarbleBlock(null);
                          marbleC.get();
                        }),
                    },
                    {
                      text: "İptal",
                      color: "secondary",
                      onClick: (values: any) => marbleC.setMarbleBlock(null),
                    },
                    {
                      text: "Kaydet",
                      color: "primary",
                      submit: true,
                      onClick: (values: any) =>
                        marbleC.update(values, () => {
                          marbleC.setMarbleBlock(null);
                          marbleC.get();
                        }),
                    },
                  ]
            }
          />
        </Drawer>
      </Row>
    </>
  );
};

export default observer(SuppliersPage);
