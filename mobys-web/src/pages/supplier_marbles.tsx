import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Col, Row } from "reactstrap";
import { Card, Drawer, Image, Tabs } from "antd";
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
  let navgate = useNavigate();
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

              
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default observer(SuppliersPage);
