<template>
  <a-table
    :row-selection="rowSelection"
    :rowKey="(record) => record.id"
    :columns="columns"
    :data-source="cartStore.products"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'price'">
        <span class="newPrice">
          {{
            record.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })
          }}
        </span>
      </template>
      <template v-if="column.key === 'defaultPrice'">
        <span class="oldPrice">
          {{
            record.defaultPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })
          }}
        </span>
      </template>
      <template v-if="column.key === 'total'">
        <span class="newPrice">
          {{
            record.total.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })
          }}
        </span>
      </template>
      <template v-if="column.key === 'img'">
        <img
          :src="getImgUrl(record.img[Math.ceil(Math.random() * 4)])"
          style="width: 7vw"
        />
      </template>
      <template v-if="column.key === 'action'">
        <a>Xoá</a>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { useCartStore } from "@/stores/cart.store";

const baseUrl = "/src/assets/images/";
const getImgUrl = (name) => {
  return new URL(baseUrl + name, import.meta.url);
};

const columns = [
  {
    title: "Tên sản phẩm",
    colSpan: 2,
    dataIndex: "img",
    key: "img",
    sorter: {
      compare: (a, b) => a.title.localeCompare(b.title),
      multiple: 4,
    },
  },
  {
    title: "",
    colSpan: 0,
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Đơn giá",
    colSpan: 2,
    dataIndex: "defaultPrice",
    key: "defaultPrice",
    sorter: {
      compare: (a, b) => a.price - b.price,
      multiple: 2,
    },
  },
  {
    title: "",
    colSpan: 0,
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Số lượng",
    dataIndex: "qty",
    key: "qty",
    align: "center",
    sorter: {
      compare: (a, b) => a.qty - b.qty,
      multiple: 3,
    },
  },
  {
    title: "Số tiền",
    dataIndex: "total",
    key: "total",
    align: "center",
    sorter: {
      compare: (a, b) => a.total - b.total,
      multiple: 1,
    },
  },
  {
    title: "Thao tác",
    key: "action",
    align: "center",
  },
];

const cartStore = useCartStore();

cartStore.getAll();

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const handleTableChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
</script>

<style>
.ant-spin-container .ant-table {
  margin-top: 5vh;
  border: 1px solid orangered;
}

.ant-spin-container .ant-table .ant-table-row {
  border: 1px solid orangered;
}

.ant-table .oldPrice {
  text-align: line-through;
  font-size: 1.2vw;
  color: gray;
}

.ant-table .newPrice {
  font-size: 1.5vw;
  color: red;
}
</style>
