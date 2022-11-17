import { Card, Table as AntdTable, Button, Checkbox, Tag, Image, Popover, Input } from "antd";
import moment from "moment";
import _, { some } from "lodash";
import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import MStore from "store/main.store";
import { Observer, observer } from "mobx-react-lite";
import { Loader } from "components/Loading";

class ColumnProps {
  search: boolean;
  key: string;
  title: string;
  type: string;
  tags?: { label: string; color: string; value: string | number }[];
}
class ActionProps {
  icon: string;
  color: string;
  onClick: (record: any, index: number) => void;
}
class ButtonProps {
  text: string;
  color: string;
  onClick: (initial?: any) => void;
}

type ButtonElementType = ButtonProps | JSX.Element;

class ExpandedProps {
  name: string;
  columns: ColumnProps[];
  actions?: ActionProps[];
  expanded?: ExpandedProps;
}
class DataTableProps {
  columns?: ColumnProps[];
  actions?: ActionProps[];
  buttons?: ButtonElementType[];
  data?: any[];
  expanded?: ExpandedProps;
}
const DataTable = ({
  columns = [],
  actions = [],
  buttons = [],
  data = [],
  expanded,
}: DataTableProps) => {
  let [columnKeys, setColumnKeys]: any = useState([]);
  let [search, setSearch]: any = useState();
  useEffect(() => {
    setColumnKeys(columns.map(({ key }) => key));
  }, [columns]);
  let initial = {};
  return (
    <Loader>
      <Card
        className="rounded overflow"
        title={
          <div className="d-flex flex-wrap">
            <Popover
              placement="bottomLeft"
              trigger="click"
              content={
                <Checkbox.Group
                  value={columnKeys}
                  onChange={(e) => setColumnKeys(e)}
                  className="d-flex flex-column"
                  options={columns.map((col) => ({ label: col.title, value: col.key }))}
                />
              }
            >
              <Button className="btn me-2 btn-secondary">
                <i className="ri-table-alt-fill" />
              </Button>
            </Popover>
            <CSVLink
              data={generateCSVData(
                columns.filter((column) => columnKeys.includes(column.key)),
                data
              )}
            >
              <Button className="btn me-2 btn-secondary">
                <i className="ri-download-fill" />
              </Button>
            </CSVLink>
            <div>
              <Input
                placeholder="Ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        }
        extra={
          <div className="d-flex align-items-center">
            {buttons.map((button: any) => {
              if (typeof button == "object" && button.onClick)
                return (
                  <Button
                    className={"btn ms-2 btn-" + button.color}
                    onClick={() => button.onClick(initial)}
                  >
                    {button.text}
                  </Button>
                );
              else return button ? <div className=" ms-2">{button}</div> : null;
            })}
          </div>
        }
        bodyStyle={{ padding: 0 }}
      >
        <Table
          columns={columns.filter((column) => columnKeys.includes(column.key))}
          data={data.filter((item) => searchData(search, columns, item))}
          expanded={expanded}
          actions={actions}
        />
      </Card>
    </Loader>
  );
};
class TableProps {
  columns: ColumnProps[];
  data: any[];
  expanded?: ExpandedProps;
  actions?: ActionProps[];
}
const Table = ({ columns = [], data = [], expanded, actions = [] }: TableProps) => {
  return (
    <AntdTable
      scroll={{ x: 800 }}
      bordered
      columns={[...actionRenderer(actions), ...columns.map((column) => columnRenderer(column))]}
      dataSource={[...data.map((item, index) => dataRenderer(item, index))]}
      pagination={{ className: "mt-4 px-2 pb-2 m-0" }}
      expandable={
        expanded
          ? {
              expandedRowRender: (record) => (
                <Table {...expanded} data={[...record[expanded.name]]} />
              ),
            }
          : undefined
      }
    />
  );
};

const searchData = (search: string, columns: ColumnProps[], item: any) => {
  return (
    !search ||
    some(
      columns.map(
        (column) =>
          column.search &&
          String(_.get(item, column.key))
            .toLocaleLowerCase(MStore.locale)
            .indexOf(search.toLocaleLowerCase(MStore.locale)) > -1
      )
    )
  );
};
const dataRenderer = (item: any, index: number) => {
  return { ...item, key: index };
};
const columnRenderer = (column: ColumnProps) => {
  let _column: any = {};
  _column["dataIndex"] = column.key;
  const getValue = (record: any) => _.get(record, column.key);
  switch (column.type) {
    case "text":
      _column["render"] = (value: any, record: any, index: number) => getValue(record);
      _column["sorter"] = (a: any, b: any) => sorter.DEFAULT(a, b, column.key);
      break;
    case "number":
      _column["width"] = 120;
      _column["align"] = "center";
      _column["render"] = (value: any, record: any, index: number) => getValue(record);
      _column["sorter"] = (a: any, b: any) => sorter.DEFAULT(a, b, column.key);
      break;
    case "float":
      _column["width"] = 120;
      _column["align"] = "center";
      _column["render"] = (value: any, record: any, index: number) =>
        Number(getValue(record)).toFixed(2);
      _column["sorter"] = (a: any, b: any) => sorter.DEFAULT(a, b, column.key);
      break;
    case "price":
      _column["width"] = 140;
      _column["align"] = "right";
      _column["render"] = (value: any, record: any, index: number) =>
        Number(getValue(record)).toFixed(2) + " TL";
      _column["sorter"] = (a: any, b: any) => sorter.DEFAULT(a, b, column.key);
      break;
    case "date":
      _column["width"] = 200;
      _column["align"] = "right";
      _column["render"] = (value: any, record: any, index: number) =>
        moment(getValue(record)).format("DD.MM.YYYY - HH:mm");
      _column["sorter"] = (a: any, b: any) => sorter.DATE(a, b, column.key);
      break;
    case "tag":
      _column["width"] = 140;
      _column["align"] = "center";
      _column["render"] = (value: any, record: any, index: number) => {
        let tag = column.tags?.find((tag) => tag.value == getValue(record));
        return (
          <Tag color={tag?.color} className="px-2">
            {tag?.label}
          </Tag>
        );
      };
      _column["sorter"] = (a: any, b: any) => sorter.TAG(a, b, column.key, column.tags);
      _column["filterMode"] = "menu";
      _column["filters"] = column.tags?.map((tag) => ({ text: tag.label, value: tag.value }));
      _column["onFilter"] = (value: string, record: any) =>
        record[column.key].includes(getValue(record));
      break;
    case "image":
      _column["width"] = 120;
      _column["render"] = (value: any, record: any, index: number) => (
        <Image
          src={getValue(record)}
          width="100%"
          height={80}
          style={{ objectFit: "contain" }}
          preview={{ mask: <i className="ri-eye-fill" /> }}
        />
      );
      break;

    default:
      _column["render"] = (value: any, record: any, index: number) => getValue(record);
      _column["sorter"] = (a: any, b: any) => sorter.DEFAULT(a, b, column.key);
      break;
  }

  _column = { ..._column, ...column };

  return _column;
};
const actionRenderer = (actions: ActionProps[]) => {
  if (actions.length > 0)
    return [
      {
        key: "id",
        dataIndex: "id",
        width: actions.length * 58,
        fixed: "left",
        render: (text: any, record: any, index: number) => (
          <Observer
            render={() => (
              <div
                className="d-flex justify-content-center"
                style={{ minWidth: actions.length * 58, paddingRight: 31 }}
              >
                {actions.map((action) => (
                  <Button
                    color={action.color}
                    className={"btn mx-1 btn-" + action.color}
                    onClick={() => action.onClick(record, index)}
                  >
                    <i className={"ri-" + action.icon + "-fill"} />
                  </Button>
                ))}
              </div>
            )}
          />
        ),
      },
    ];
  else return [];
};
const sorter = {
  DEFAULT: (a: any, b: any, key: string) => {
    return String(_.get(a, key)).localeCompare(_.get(b, key));
  },
  DATE: (a: any, b: any, key: string) => moment(a[key]).diff(moment(b[key])),
  TAG: (a: any, b: any, key: string, tags: ColumnProps["tags"]) => {
    let atag = tags?.find((tag) => tag.value == a[key])?.label || a[key];
    let btag = tags?.find((tag) => tag.value == b[key])?.label || b[key];
    return String(atag).localeCompare(btag);
  },
};

const generateCSVData = (columns: ColumnProps[], data: any[]) => {
  let csv: string[][] = [columns.map(({ title }) => title)];
  data.map((item) => {
    let csv_item: any[] = [];
    columns.map((col) => {
      csv_item.push(item[col.key]);
    });
    csv.push(csv_item);
  });
  return csv;
};

export default observer(DataTable);
