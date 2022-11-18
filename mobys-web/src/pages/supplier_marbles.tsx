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
import SupplierController from "controllers/supplier.controller";
// Constants
import { Status } from "constants/statuses";
import { StatusColor } from "constants/colors";
import { useNavigate, useParams } from "react-router-dom";
import MarbleBlock from "components/3D/MarbleBlock";
import Scene from "components/3D/Scene";
import IStore from "store/instant.store";

const SUPPLIER_COLUMNS: any[] = [
  {
    key: "status",
    title: "Durum",
    type: "tag",
    tags: Object.values(Status).map((status: any) => ({
      label: i18n.t("status." + status),
      value: status,
      color: StatusColor[status],
    })),
  },
  {
    type: "image",
    key: "logo",
    title: "Logo",
  },
  {
    type: "text",
    key: "name",
    title: "Tedarikçi Adı",
  },
];

const SuppliersPage = () => {
  let { id }: any = useParams();
  let [supplierC] = useState(new SupplierController());

  useEffect(() => {
    supplierC.getSupplier(id);
  }, []);

  return (
    <>
      <Breadcrumb title={supplierC.supplier?.name} />
      <Row>
        <Col>
          <Tabs type="card">
            <Tabs.TabPane tab={supplierC.supplier?.name} key="supplier">
              <Card>
                <Row>
                  <Col md={4}>
                    <Image
                      src={supplierC.supplier?.logo}
                      width={"100%"}
                      height={200}
                      style={{ objectFit: "contain" }}
                    />
                  </Col>
                  <Col md={8}>
                    <h3 className="border-bottom">{supplierC.supplier?.name}</h3>
                    <p className="text-muted">{supplierC.supplier?.dec}</p>
                    <div className="text-primary">
                      <i className="fa fa-phone me-2" />
                      <i>{supplierC.supplier?.phone}</i>
                    </div>
                    <div className="text-primary">
                      <i className="fa fa-envelope me-2" />
                      <i>{supplierC.supplier?.email}</i>
                    </div>
                    <div className="text-primary">
                      <i className="fa fa-map me-2" />
                      <i>{supplierC.supplier?.address}</i>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab={"Mermerler"} key="marbles">
              <Card>
                <Row>
                  {supplierC.supplier?.marbleBlocks.map((marbleBlock: any) => (
                    <Col md={4} className="mb-3">
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
                      {IStore.user?.company.type == "CUSTOMER" && (
                        <Button
                          className="btn btn-primary btn-block w-100 mt-2"
                          onClick={() =>
                            supplierC.orderBlock(marbleBlock.id, () => {
                              supplierC.getSupplier(id);
                            })
                          }
                        >
                          Sipariş Ver
                        </Button>
                      )}
                    </Col>
                  ))}
                </Row>
              </Card>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default observer(SuppliersPage);
