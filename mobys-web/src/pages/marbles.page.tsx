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
import { StatusColor } from "constants/colors";
import { useNavigate, useParams } from "react-router-dom";
import MarbleBlock from "components/3D/MarbleBlock";
import Scene from "components/3D/Scene";
import IStore from "store/instant.store";

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
              <Card>
                <Row>
                  {marbleC.marbleBlocks.map((marbleBlock: any) => (
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
      </Row>
    </>
  );
};

export default observer(SuppliersPage);
