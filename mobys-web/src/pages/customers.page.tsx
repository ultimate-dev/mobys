import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Col, Row } from "reactstrap";
import { Drawer, Tabs } from "antd";
import _ from "lodash";
import i18n from "i18n";
// Components
import DataTable from "components/common/DataTable";
import Breadcrumb from "components/common/Breadcrumb";
// Controllers
import CustomerController from "controllers/customers.controller";
// Constants
import { Status } from "constants/statuses";
import { StatusColor } from "constants/colors";
import { useNavigate } from "react-router-dom";

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
    title: "Müşteriler Adı",
  },
];

const SuppliersPage = () => {
  let navgate = useNavigate();
  let [customerController] = useState(new CustomerController());

  useEffect(() => {
    customerController.get();
  }, []);

  return (
    <>
      <Breadcrumb title={"Müşteriler"} />
      <Row>
        <Col>
          <Tabs type="card">
            <Tabs.TabPane tab={"Müşteriler"} key="suppliers">
              <DataTable
                columns={SUPPLIER_COLUMNS}
                data={customerController.customers}
                actions={[]}
                buttons={[
                  {
                    text: "Yenile",
                    color: "secondary",
                    onClick: () => customerController.get(),
                  },
                ]}
              />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default observer(SuppliersPage);
