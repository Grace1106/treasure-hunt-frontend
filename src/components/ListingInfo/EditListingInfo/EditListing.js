import {
    Input,
    Form,
    Select,
    InputNumber,
    Radio,
    Button,
    Upload,
    Row,
    Col,
    message,
  } from 'antd';
  //import axios from 'axios';
  import { UploadOutlined } from '@ant-design/icons';
  /*import { BASE_URL } from "../constants";
  **/


  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  
 
  
  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const { TextArea } = Input;
  
  const EditListing = (props) => {
    const [form] = Form.useForm();
    function onChange(value) {
      console.log('changed', value);
    }

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
 /*   
      const { category,  title, price,  brand, photo, condition, description} = values;
      const opt = {
         method: 'GET',
         url: `${BASE_URL}/update`,
         data: {
             category: category,
             title: title,
             price: price,
             brand: brand,
             picture_1: photo,
             picture_2: photo,
             condition: condition,
             description: description
         },
         headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`}
     };

     axios(opt)
         .then( response => {
             console.log(response)
             // case1: Update success
             if(response.status === 200) {
                 message.success('Update succeed!');
             }
         })
         .catch( error => {
            // case2: Update failed
             console.log('Update failed: ', error.message);
             message.success('Update failed!');
         })
  **/
    
    };
  
    return (
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        className="form-box"
      >

        <Form.Item name="category" label="CATEGORY" rules={[
            {
              required: true,
              message: 'Please select category!',
            },
          ]}>
        <Radio.Group>
          <Row>
            <Col span={7}>
              <Radio value="A" style={{ lineHeight: '32px' }}>
              Cars
              </Radio>
            </Col>
            <Col span={10}>
              <Radio value="B" style={{ lineHeight: '32px' }}>
              Exercise Equipment
              </Radio>
            </Col>
            <Col span={7}>
              <Radio value="C" style={{ lineHeight: '32px' }}>
              Furniture
              </Radio>
            </Col>
            <Col span={7}>
              <Radio value="D" style={{ lineHeight: '32px' }}>
              Books
              </Radio>
            </Col>
            <Col span={10}>
              <Radio value="E" style={{ lineHeight: '32px' }}>
              Musical Instruments
              </Radio>
            </Col>
            <Col span={7}>
              <Radio value="F" style={{ lineHeight: '32px' }}>
              Electronics
              </Radio>
            </Col>
          </Row>
        </Radio.Group>
      </Form.Item>

        <Form.Item name="title" label="TITLE" rules={[
            {
              required: true,
              message: 'Please input the title!',
            },
          ]}>
          <Input className="title-input"/>
        </Form.Item>

        <Form.Item name="price" label="PRICE"  rules={[
            {
              required: true,
              message: 'Please input the price!',
            },
          ]}>
          <InputNumber 
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={onChange}
              className="input-num"
          />
 
        </Form.Item>
        

        <Form.Item name="brand" label="BRAND">
          <Input className="brand-input"/>
        </Form.Item>

        <Form.Item
          name="upload"
          label="ADD PHOTOS"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: 'Please upload the photos!',
            },
          ]}
        >
          <Upload name="photo" action="/upload.do" listType="picture" className= "upload">
            <Button icon={<UploadOutlined />} className="upload-btn">Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="condition"
          label="CONDITION"
          rules={[
            {
              required: true,
              message: 'Please select condition!',
            },
          ]}
        >
          <Select bordered={false} className="select-input">
            <Option value="new">New</Option>
            <Option value="used - like new">Used - Like new</Option>
            <Option value="used - good">Used - Good</Option>
            <Option value="used - fair">Used - Fair</Option>
          </Select>
        </Form.Item>
        
        
        
        <Form.Item name="desctiption" label="DESCRIPTION">
        <TextArea rows={4} className="textarea-input"/>
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" className="confirm-btn">
            UPDATE
          </Button>
        </Form.Item>
      </Form>
    );
  };

 export default EditListing;

