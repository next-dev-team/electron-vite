import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Layout,
  Modal,
  Popconfirm,
  Select,
  Table,
  message,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { userService } from '../../services/userService';
import type { User } from './types';

const { Header, Content } = Layout;
const { Option } = Select;

interface UserFormValues {
  name: string;
  email: string;
  gender: 'male' | 'female';
  status: 'active' | 'inactive';
}

const Index = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm<UserFormValues>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
    } catch {
      message.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (values: UserFormValues) => {
    try {
      await userService.createUser(values);
      message.success('User created successfully');
      fetchUsers();
      handleModalCancel();
    } catch {
      message.error('Failed to create user');
    }
  };

  const handleUpdate = async (values: UserFormValues) => {
    if (!editingUser) return;
    try {
      await userService.updateUser(editingUser.id, values);
      message.success('User updated successfully');
      fetchUsers();
      handleModalCancel();
    } catch {
      message.error('Failed to update user');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await userService.deleteUser(id);
      message.success('User deleted successfully');
      fetchUsers();
    } catch {
      message.error('Failed to delete user');
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
    form.resetFields();
  };

  const columns: ColumnsType<User> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: User) => (
        <div>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingUser(record);
              form.setFieldsValue(record);
              setIsModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              style={{ marginLeft: 8 }}
            >
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#fff',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: '0 20px' }}>User</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setEditingUser(null);
            setIsModalVisible(true);
          }}
          style={{ marginLeft: 'auto' }}
        >
          Create User
        </Button>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Table
          columns={columns}
          dataSource={users}
          loading={loading}
          rowKey="id"
        />
      </Content>

      <Modal
        title={editingUser ? 'Edit User' : 'Create User'}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={editingUser ? handleUpdate : handleCreate}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter email' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please select gender' }]}
          >
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingUser ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Index;
