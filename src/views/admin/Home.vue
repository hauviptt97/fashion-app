<template>
  <a-layout class="content">
    <a-layout-header style="background: #e4e8ef; padding: 0">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Admin</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
      </a-breadcrumb>
    </a-layout-header>
    <a-layout-content style="margin: 0 16px">
      <a-row align="middle">
        <a-col :span="14"> </a-col>
        <a-col :span="6">
          <h5>28 jan, 2021 - 28 Dec, 2021</h5>
        </a-col>
        <a-col :span="4">
          <div style="display: flex; justify-content: end">
            <span>
              <a-badge :count="1">
                <a-avatar shape="square">
                  <template #icon> <UserOutlined /></template>
                </a-avatar>
              </a-badge>
              Văn Hậu
            </span>
          </div>
        </a-col>
      </a-row>
      <a-row align="middle" :gutter="[28, 12]">
        <a-col :span="12">
          <div class="chartDN">
            <a-row align="middle">
              <a-col :span="14">
                <a-typography>
                  <a-typography-title :level="4"
                    >Bán hàng hôm nay</a-typography-title
                  >
                  <a-typography-paragraph>
                    <a-typography-text strong>
                      8.000.000 VNĐ
                    </a-typography-text>
                  </a-typography-paragraph>
                  <a-typography-paragraph>
                    <a-typography-text> Đã bán 245 mặt hàng </a-typography-text>
                  </a-typography-paragraph>
                </a-typography>
              </a-col>
              <a-col :span="10">
                <DoughnutChart
                  :color="color1"
                  :listData="listData1"
                  :listLabel="listLabel1"
                />
              </a-col>
            </a-row>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="chartDN">
            <a-row align="middle">
              <a-col :span="14">
                <a-typography>
                  <a-typography-title :level="4"
                    >Doanh thu hôm nay</a-typography-title
                  >
                  <a-typography-paragraph>
                    <a-typography-text strong>
                      5.200.000 VNĐ
                    </a-typography-text>
                  </a-typography-paragraph>
                  <a-typography-paragraph>
                    <a-typography-text> Đã bán 245 mặt hàng </a-typography-text>
                  </a-typography-paragraph>
                </a-typography>
              </a-col>
              <a-col :span="10">
                <DoughnutChart
                  :color="color2"
                  :listData="listData2"
                  :listLabel="listLabel2"
                />
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
      <a-row align="Top" :gutter="[28, 12]">
        <a-col :span="12">
          <a-row>
            <a-col :span="24">
              <div class="chartDN">
                <a-row align="middle">
                  <a-col :span="14">
                    <a-typography>
                      <a-typography-title :level="4"
                        >Lượng khách truy cập</a-typography-title
                      >
                      <a-typography-paragraph>
                        <a-typography-text strong>
                          353 Người dùng
                        </a-typography-text>
                      </a-typography-paragraph>
                      <a-typography-paragraph>
                        <a-typography-text>
                          Đã có 165 khách đã mua hàng
                        </a-typography-text>
                      </a-typography-paragraph>
                    </a-typography>
                  </a-col>
                  <a-col :span="10">
                    <DoughnutChart
                      :color="color3"
                      :listData="listData3"
                      :listLabel="listLabel3"
                    />
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <div class="chartDN">
                <a-row align="middle">
                  <a-col :span="14">
                    <a-typography>
                      <a-typography-title :level="4"
                        >Lượng khách truy cập</a-typography-title
                      >
                      <a-typography-paragraph>
                        <a-typography-text strong>
                          353 Người dùng
                        </a-typography-text>
                      </a-typography-paragraph>
                      <a-typography-paragraph>
                        <a-typography-text>
                          Đã có 165 khách đã mua hàng
                        </a-typography-text>
                      </a-typography-paragraph>
                    </a-typography>
                  </a-col>
                  <a-col :span="10">
                    <DoughnutChart
                      :color="color3"
                      :listData="listData3"
                      :listLabel="listLabel3"
                    />
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </a-col>

        <a-col :span="12">
          <div class="chartDN">
            <a-typography>
              <a-typography-title :level="4"
                >Danh mục mặt hàng bán được</a-typography-title
              >
              <a-typography-paragraph>
                <a-typography-text strong> Đồ phụ nữ: 129 </a-typography-text>
              </a-typography-paragraph>

              <a-typography-paragraph>
                <a-typography-text strong> Đồ đàn ông: 85 </a-typography-text>
              </a-typography-paragraph>
              <a-typography-paragraph>
                <a-typography-text strong> Đồ trẻ em: 31 </a-typography-text>
              </a-typography-paragraph>
            </a-typography>
            <PieChart
              :color="color5"
              :listData="listData5"
              :listLabel="listLabel5"
            />
          </div>
        </a-col>
      </a-row>

      <a-row align="middle">
        <a-col :span="24">
          <div class="chartDN">
            <a-typography>
              <a-typography-title :level="4">Tổng doanh thu</a-typography-title>
              <a-typography-paragraph>
                <a-typography-text strong> 65.000.000 VNĐ </a-typography-text>
                <a-typography-text style="color: #6ee763">
                  <arrow-up-outlined /> Tăng 5% so với tháng trước
                </a-typography-text>
              </a-typography-paragraph>
            </a-typography>
            <BarChart
              :titleChart ="title" 
              :color="color4"
              :listData="listData4"
              :listLabel="listLabel4"
            />
          </div>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { UserOutlined, ArrowUpOutlined } from "@ant-design/icons-vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import HorizontalBarChart from "@/components/HorizontalBarChart.vue";

const title = "Doanh thu theo tháng"

const color1 = ["#475BE8", "#E4E8EF"];
const color2 = ["#E4E8EF", "#4CE13F"];
const color3 = ["#F29A2E", "#FF0035", "#E4E9EF"];
const color4 = ["#272de6"];
const color5 = ["#41B883", "#E46651", "#cfd973"];

const listLabel1 = ["Đã bán", "Tồn kho"];
const listLabel2 = ["Chi phí", "Lợi nhuận"];
const listLabel3 = ["Khách đã mua", "Khách hủy đơn", "Khách không mua"];
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
  "Tháng 12",
];
const listLabel5 = ["Đồ phụ nữ", "Đồ đàn ông", "Đồ trẻ em"];

const listData1 = [245, 155];
const listData2 = [150, 430];
const listData3 = [205, 18, 130];
const listData4 = [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11];
const listData5 = [129, 85, 31];
</script>

<style>
.admin .ant-layout .content {
  padding: 0 2vw;
  flex-direction: column !important;
}

.admin .ant-layout .content .ant-row .chartDN {
  background-color: #fff;
  padding-left: 1vw;
  padding-top: 1.5vh;
  border: 3px solid #fff;
  border-radius: 5px;
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
