import HeaderCell from "@/components/common/table/components/header-cell";
import { OrderStatusCell } from "@/components/common/table/components/order-status-cell";

export const TestColumns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    width: 50,
  },
  {
    title: <HeaderCell title="ORDER DATE" sortable={true} />,
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: <HeaderCell title="ORDER ID" sortable={true} />,
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: <HeaderCell title="CUSTOMER NAME" sortable={true} />,
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: <HeaderCell title="PICKUP METHOD" sortable={true} />,
    dataIndex: "pickupMethod",
    key: "pickupMethod",
  },
  {
    title: <HeaderCell title="PAYMENT METHOD" sortable={true} />,
    dataIndex: "paymentMethod",
    key: "paymentMethod",
  },
  {
    title: <HeaderCell title="TOTAL PRODUCT COUNT" sortable={true} />,
    dataIndex: "totalProductCount",
    key: "totalProductCount",
  },
  {
    title: <HeaderCell title="TOTAL AMOUNT" sortable={true} />,
    dataIndex: "totalAmount",
    key: "totalAmount",
  },
  {
    title: <HeaderCell title="ORDER STATUS" sortable={true} />,
    dataIndex: "orderStatus",
    key: "orderStatus",
    render: (text, record) => <OrderStatusCell status={record.orderStatus} />,
  },
  {
    title: <HeaderCell title="STATUS DATE" sortable={true} />,
    dataIndex: "statusDate",
    key: "statusDate",
  },
];

export const TestData = [
  {
    id: 1,
    orderDate: "28 Mar 2025",
    orderId: "207758",
    customerName: "John Doe",
    pickupMethod: "Mega Mall",
    paymentMethod: "Cash On Delivery",
    totalProductCount: 4,
    totalAmount: "AED 24.96",
    orderStatus: "2",
    statusDate: "28 Mar 2025",
  },
  {
    id: 2,
    orderDate: "27 Mar 2025",
    orderId: "207757",
    customerName: "Jane Doe",
    pickupMethod: "Home Delivery",
    paymentMethod: "Credit Card",
    totalProductCount: 3,
    totalAmount: "AED 17.97",
    orderStatus: "1",
    statusDate: "27 Mar 2025",
  },
  {
    id: 3,
    orderDate: "26 Mar 2025",
    orderId: "207756",
    customerName: "John Smith",
    pickupMethod: "Mega Mall",
    paymentMethod: "Cash On Delivery",
    totalProductCount: 2,
    totalAmount: "AED 11.99",
    orderStatus: "3",
    statusDate: "26 Mar 2025",
  },
  {
    id: 4,
    orderDate: "25 Mar 2025",
    orderId: "207755",
    customerName: "Jane Smith",
    pickupMethod: "Home Delivery",
    paymentMethod: "Credit Card",
    totalProductCount: 5,
    totalAmount: "AED 29.95",
    orderStatus: "4",
    statusDate: "25 Mar 2025",
  },
  {
    id: 5,
    orderDate: "24 Mar 2025",
    orderId: "207754",
    customerName: "John Doe",
    pickupMethod: "Mega Mall",
    paymentMethod: "Cash On Delivery",
    totalProductCount: 3,
    totalAmount: "AED 17.97",
    orderStatus: "2",
    statusDate: "24 Mar 2025",
  },
  {
    id: 6,
    orderDate: "23 Mar 2025",
    orderId: "207753",
    customerName: "Jane Doe",
    pickupMethod: "Home Delivery",
    paymentMethod: "Credit Card",
    totalProductCount: 2,
    totalAmount: "AED 11.99",
    orderStatus: "1",
    statusDate: "23 Mar 2025",
  },
  {
    id: 7,
    orderDate: "22 Mar 2025",
    orderId: "207752",
    customerName: "John Smith",
    pickupMethod: "Mega Mall",
    paymentMethod: "Cash On Delivery",
    totalProductCount: 4,
    totalAmount: "AED 24.96",
    orderStatus: "3",
    statusDate: "22 Mar 2025",
  },
  {
    id: 8,
    orderDate: "21 Mar 2025",
    orderId: "207751",
    customerName: "Jane Smith",
    pickupMethod: "Home Delivery",
    paymentMethod: "Credit Card",
    totalProductCount: 5,
    totalAmount: "AED 29.95",
    orderStatus: "4",
    statusDate: "21 Mar 2025",
  },
  {
    id: 9,
    orderDate: "20 Mar 2025",
    orderId: "207750",
    customerName: "John Doe",
    pickupMethod: "Mega Mall",
    paymentMethod: "Cash On Delivery",
    totalProductCount: 3,
    totalAmount: "AED 17.97",
    orderStatus: "2",
    statusDate: "20 Mar 2025",
  },
  {
    id: 10,
    orderDate: "19 Mar 2025",
    orderId: "207749",
    customerName: "Jane Doe",
    pickupMethod: "Home Delivery",
    paymentMethod: "Credit Card",
    totalProductCount: 2,
    totalAmount: "AED 11.99",
    orderStatus: "1",
    statusDate: "19 Mar 2025",
  },
];

