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
import OrderController from "controllers/order.controller";
// Constants
import { Status } from "constants/statuses";
import { StatusColor } from "constants/colors";
import { useNavigate } from "react-router-dom";
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
    type: "number",
    key: "marbleBlockId",
    title: "Mermer ID",
  },
  ...(IStore.user?.company.type == "CUSTOMER"
    ? [
        {
          type: "text",
          key: "customer.name",
          title: "Müşteri Adı",
        },
      ]
    : []),
  {
    type: "date",
    key: "createdAt",
    title: "Sipariş Tarihi",
  },
];

const SuppliersPage = () => {
  let navgate = useNavigate();
  let [orderC] = useState(new OrderController());

  useEffect(() => {
    orderC.get();
  }, []);

  return (
    <>
      <Breadcrumb title={"Tedarikçiler"} />
      <Row>
        <Col>
          <Tabs type="card">
            <Tabs.TabPane tab={"Siparişler"} key="suppliers">
              <DataTable
                columns={SUPPLIER_COLUMNS}
                data={orderC.orders}
                buttons={[
                  {
                    text: "Yenile",
                    color: "secondary",
                    onClick: () => orderC.get(),
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
