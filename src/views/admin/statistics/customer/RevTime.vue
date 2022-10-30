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
            <BarChart :titleChart="title" :color="color4" :listData="listData4" :listLabel="listLabel4" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Chi tiết" forceRender>
            <a-table size="small" :row-selection="rowSelection" :rowKey="(record) => record.id" :columns="columns" :data-source="listBranchDataByMonth" :pagination="pagination" @change="handleTableChange" id="empTable" bordered="true">
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
import BarChart from '@/components/BarChart.vue';
import {
    ref,
    reactive
} from "vue";

const activeKey = ref('1')

const listBranchDataByMonth = [{
    branchName: "Hồ Chí Minh",
    month: "08/2022",
    sold: 42004003,
    tax: 0,
    funds: 15000000,
    refunds: 0,
    revenue: 42004003 ,
    profit: 42004003 - 15000000,
    profitPercent: (42004003 - 15000000) / 42004003 * 100
}, {
    branchName: "Đà Nẵng",
    month: "08/2022",
    sold: 15200325,
    tax: 0,
    funds: 5000000,
    refunds: 0,
    revenue: 15200325,
    profit: 10200325,
    profitPercent: 10200325 / 15200325 * 100
}, {
    branchName: "Hà Nội",
    month: "08/2022",
    sold: 28320325,
    tax: 0,
    funds: 10000000,
    refunds: 0,
    revenue: 28320325,
    profit: 28320325 - 10000000,
    profitPercent: (28320325 - 10000000) / 28320325 * 100
}]

let listBranchFilter;

const columns = [{
        title: "Tên chi nhánh",
        dataIndex: "branchName",
        key: "branchName",
        align: "center",
        filters: [{
                text: "Đà Nẵng",
                value: "Đà Nẵng",
            },
            {
                text: "Hồ Chí Minh",
                value: "Hồ Chí Minh",
            },
            {
                text: "Hà Nội",
                value: "Hà Nội",
            },
        ],
        onFilter: (value, record) => !record.branchName.localeCompare(value),
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


const title = ["Doanh thu","Tiền vốn"]

const color4 = ["#272de6","#f20f75"];

const listLabel4 = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
];
const listData4 = [[40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11], [4, 2, 3, 9, 2, 4, 9, 8, 4, 2, 2, 1]];
</script>

<style >

</style>
