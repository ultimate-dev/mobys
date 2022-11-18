import { Form, Input, Button, Switch, Select, DatePicker } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ImagePicker from "./ImagePicker";
import _ from "lodash";
import { useState } from "react";
import { Loader } from "components/Loading";
import moment from "moment";
import { Col, Row } from "reactstrap";

class FormProps {
  label: string;
  key: string;
  type: string;
  rules: any[];
  props: any;
  render: (props: any) => any;
  transform: { from: string; to: string }[];
  renderKey: string;
  span?: number;
  include?: string;
  control?: (values: any) => boolean;
}
class DataFormProps {
  defaultValues?: any;
  form?: FormProps[];
  buttons?: {
    text: string;
    color: string;
    submit?: boolean;
    onClick: (data?: any, form?: any) => void;
  }[];
}
const DataForm = ({ form = [], buttons = [], defaultValues = null }: DataFormProps) => {
  let [FORM, SET_FORM] = useState(form);
  let [_form] = Form.useForm();
  useEffect(() => {
    _form.setFieldsValue({});
    defaultValues && _form.setFieldsValue(valuesControl(defaultValues, false));
  }, [defaultValues]);

  useEffect(() => {
    SET_FORM(
      form.filter((item) => !item.control || (item.control && item.control(_form.getFieldsValue())))
    );
  }, [form, _form.getFieldsValue()]);

  const valuesControl = (values: any, reverse: boolean) => {
    let _values = { ...defaultValues, ...values };
    FORM.map(({ key, type, transform, renderKey }) => {
      if (transform)
        _.set(
          _values,
          key,
          !reverse
            ? transform.find((tran) => tran.to == _.get(_values, key))?.from || false
            : transform.find((tran) => tran.from == _.get(_values, key))?.to ||
                transform[0]?.to ||
                _.get(_values, key)
        );
      if (renderKey)
        !reverse
          ? _.set(_values, key, _.get(_values, renderKey))
          : _.set(_values, renderKey, _.get(_values, key));
      if (type == "price") _.set(_values, key, Number(_.get(_values, key)).toFixed(2));
      else _.set(_values, key, _.get(_values, key) || undefined);
    });
    return _values;
  };

  return (
    <Loader>
      <Form
        form={_form}
        layout="vertical"
        onFinish={(values) =>
          buttons.find((button) => button.submit)?.onClick(valuesControl(values, true), _form)
        }
        className="row"
      >
        <Row className="m-0">
          {FORM.map((item: FormProps, index: number) => {
            return (
              <Col key={index} md={item.span || 12}>
                <ItemRender name={item.key} {...item} />
              </Col>
            );
          })}
        </Row>
        <div className="text-end w-100 mt-3">
          {buttons.map((button, index) => (
            <Button
              key={index}
              className={"btn btn-" + button.color + " mx-1"}
              htmlType={button.submit ? "submit" : "button"}
              onClick={() =>
                !button.submit && button.onClick(valuesControl(defaultValues, false), _form)
              }
            >
              {button.text}
            </Button>
          ))}
        </div>
      </Form>
    </Loader>
  );
};

class ItemRenderProps extends FormProps {
  name: string;
}
const ItemRender = (_item: ItemRenderProps) => {
  let [item, setItem] = useState(_item);
  useEffect(() => {
    setItem({ ..._item });
  }, [_item]);
  switch (item.type) {
    case "text":
      return (
        <Form.Item {...item}>
          <Input {...item.props} />
        </Form.Item>
      );
    case "password":
      return (
        <Form.Item {...item}>
          <Input.Password {...item.props} />
        </Form.Item>
      );
    case "email":
      return (
        <Form.Item {...item}>
          <Input type="email" {...item.props} />
        </Form.Item>
      );
    case "button":
      return (
        <Form.Item {...item}>
          <FormButton {...item.props} />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item {...item}>
          <Input.TextArea {...item.props} />
        </Form.Item>
      );
    case "switch":
      return (
        <Form.Item {...item} valuePropName="checked">
          <Switch id={_.uniqueId(item.name)} {...item.props} />
        </Form.Item>
      );
    case "image":
      return (
        <Form.Item {...item}>
          <ImagePicker.Single {...item.props} />
        </Form.Item>
      );
    case "number":
      return (
        <Form.Item {...item}>
          <Input {...item.props} type="number" placeholder="0" />
        </Form.Item>
      );
    case "price":
      return (
        <Form.Item {...item}>
          <Input {...item.props} type="number" addonBefore="TL" placeholder="0,00" />
        </Form.Item>
      );
    case "select":
      return (
        <Form.Item {...item}>
          <Select {...item.props} />
        </Form.Item>
      );
    case "date":
      return (
        <Form.Item {...item}>
          <DateInput {...item.props} />
        </Form.Item>
      );
    case "custom":
      return (
        <Form.Item {...item}>
          <item.render />
        </Form.Item>
      );
    default:
      return (
        <Form.Item {...item}>
          <Input {...item.props} />
        </Form.Item>
      );
  }
};

const DateInput = (props: any) => {
  return <DatePicker {...props} value={props.value ? moment(props.value) : null} />;
};
const FormButton = (props: any) => {
  return (
    <Button
      {...props}
      block
      className={"btn btn-" + props.color}
      onClick={() => props.onClick(props.value, {})}
    />
  );
};

export const controlForm = (FORM: FormProps[], includes?: any) => {
  return FORM.map((form) => {
    let obj: any = {
      ...form,
      props: {
        ...form.props,
      },
    };
    switch (form.type) {
      case "select":
        obj["props"]["options"] =
          form.props?.options || (form.include && includes[form.include]) || [];
        break;

      case "button":
        obj["props"]["onClick"] = form.props?.onClick || (form.include && includes[form.include]);
        break;
    }

    return { ...obj };
  });
};

export default observer(DataForm);
