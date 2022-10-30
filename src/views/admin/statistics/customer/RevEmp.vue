<template>
  <div class="rev-time">
    <a-row>
      <a-col :span="6">
        <a-typography>
          <a-typography-title :level="2">123.456.789 VNĐ</a-typography-title>
          <a-typography-paragraph>
            Doanh thu
          </a-typography-paragraph>
        </a-typography>
      </a-col>
      <a-col :span="6">
        <a-typography>
          <a-typography-title :level="2">80.456.789 VNĐ</a-typography-title>
          <a-typography-paragraph>
            Tổng vốn (Trừ vốn hàng trả)
          </a-typography-paragraph>
        </a-typography>
      </a-col>
      <a-col :span="6">
        <a-typography>
          <a-typography-title :level="2">12.456.789 VNĐ</a-typography-title>
          <a-typography-paragraph>
            Trả hàng
          </a-typography-paragraph>
        </a-typography>
      </a-col>
      <a-col :span="6">
        <a-typography>
          <a-typography-title :level="2">43.000.000 VNĐ</a-typography-title>
          <a-typography-paragraph>
            Lợi nhuận
          </a-typography-paragraph>
        </a-typography>
      </a-col>
    </a-row>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tổng quan" forceRender>
        <a-row>
          <a-col :span="12">
            <HorizontalBarChart :titleChart="title[0]" :color="color4[0]" :listData="listData4[0].sort(a,b=>a-b).reverse()"
              :listLabel="listLabel4" />
          </a-col>
          <a-col :span="12">
            <HorizontalBarChart1 :titleChart="title[1]" :color="color4[1]" :listData="listData4[1].sort(a,b=>a-b).reverse()"
              :listLabel="listLabel4" />
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Chi tiết" forceRender>
        <a-table size="small" :row-selection="rowSelection" :rowKey="(record) => record.id" :columns="columns"
          :data-source="listBranchDataByMonth" :pagination="pagination" @change="handleTableChange" id="empTable"
          bordered="true">
          <template #bodyCell="{ column, record }">
            <!-- <template v-if="column.key === 'avt'">
                            <a-image :src="$image(baseUrl, record.avt)" style="width: 3vw" />
                        </template> -->
          </template>
        </a-table>
    
      </a-tab-pane>
    </a-tabs>
      
  </div>
</template>

<script setup>
import {
  ref,
  reactive
} from "vue";

import HorizontalBarChart from '@/components/HorizontalBarChart.vue'; import HorizontalBarChart1 from '@/components/HorizontalBarChart.vue';

const employeeStore = ["Nguyễn Văn A", "Trần Văn B", "Nguyễn Thị C", "Trần D","Bùi Nguyên D", "Phan Thị E", "Hoàng Văn F", "Nguyễn Tiến G", "Trần Như H","Nguyễn Văn I"];

const title = ["Tổng giá trị đơn hàng", "Tổng số đơn hàng"]


const color4 = ["#0a9df2", "#0af20a"];

const listLabel4 = employeeStore;
const listData4 = [[40000000, 20000000, 12000000, 39000000, 10000000, 40000000, 39000000, 81000000, 40000000, 20000000, ], [400, 200, 300, 590, 200, 400, 850, 800, 400, 200]];

const listBranchDataByMonth = [];
for (let i = 0; i < 10; i++) {
  listBranchDataByMonth.push({
    empName: employeeStore[Math.floor(Math.random() * employeeStore.length)],
    month: "08/2022",
    sold: 42004003,
    tax: 0,
    funds: 15000000,
    refunds: 0,
    revenue: 42004003,
    profit: 42004003 - 15000000,
    profitPercent: (42004003 - 15000000) / 42004003 * 100
  })
}


let listBranchFilter;

const columns = [{
  title: "Tên nhân viên",
  dataIndex: "empName",
  key: "empName",
  align: "center",
},
{
  title: "Tháng",
  dataIndex: "month",
  key: "month",
  align: "center",
},
{
  title: "Bán Hàng",
  dataIndex: "sold",
  key: "sold",
  align: "center",
  sorter: {
    compare: (a, b) => a.sold - b.sold,
    multiple: 1,
  },
},
{
  title: "Tiền thuế",
  dataIndex: "tax",
  key: "tax",
  align: "center",
  sorter: {
    compare: (a, b) => a.tax - b.tax,
    multiple: 6
  },
},
{
  title: "Tiền vốn",
  align: "center",
  dataIndex: "funds",
  key: "funds",
  sorter: {
    compare: (a, b) => a.funds - b.funds,
    multiple: 4
  },
},
{
  title: "Trả hàng",
  dataIndex: "refunds",
  key: "refunds",
  align: "center",
  sorter: {
    compare: (a, b) => a.refunds - b.refunds,
    multiple: 5
  },
},
{
  title: "Doanh thu",
  dataIndex: "revenue",
  key: "revenue",
  align: "center",
  sorter: {
    compare: (a, b) => a.revenue - b.revenue,
    multiple: 2
  },
},
{
  title: "Lợi nhuận",
  dataIndex: "profit",
  key: "profit",
  align: "center",
  sorter: {
    compare: (a, b) => a.profit - b.profit,
    multiple: 2
  },
}, {
  title: "Lợi nhuận (%)",
  dataIndex: "profitPercent",
  key: "profitPercent",
  align: "center",
  sorter: {
    compare: (a, b) => a.profitPercent - b.profitPercent,
    multiple: 3
  },
}
];

const pagination = {
  defaultPageSize: 10,
  showSizeChanger: true,
  pageSizeOptions: ["10", "20", "30"],
  showTotal: () => {
    if (!listBranchFilter)
      return `Có tổng cộng ${listBranchDataByMonth.length} nhân viên`;
    return `Có tổng cộng ${listBranchFilter.length} nhân viên`;
  },
};

const handleTableChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
  listBranchFilter = extra.currentDataSource;
};

</script>

<style >

</style>
