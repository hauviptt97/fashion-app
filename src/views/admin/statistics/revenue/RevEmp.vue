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
      <a-tab-pane key="1" tab="Tất cả" >
      <a-row>
        <a-col :span="12">
        <HorizontalBarChart :titleChart="title[0]" :color="color4[0]" :listData="listData4[0].sort(a,b=>a-b).reverse()" :listLabel="listLabel4" />
        </a-col>
        <a-col :span="12">
          <HorizontalBarChart1 :titleChart="title[1]" :color="color4[1]" :listData="listData4[1].sort(a,b=>a-b).reverse()" :listLabel="listLabel4" />
        </a-col>
      </a-row>
        
      </a-tab-pane>
      <a-tab-pane key="2" tab="Đơn hoàn thành" >
        <a-row>
          <a-col :span="12">
            <HorizontalBarChart :titleChart="title[0]" :color="color4[0]" :listData="listData4[0]"
              :listLabel="listLabel4" />
          </a-col>
          <a-col :span="12">
            <HorizontalBarChart1 :titleChart="title[1]" :color="color4[1]" :listData="listData4[1]"
              :listLabel="listLabel4" />
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Đơn đang xử lý" >
        <a-row>
          <a-col :span="12">
            <HorizontalBarChart :titleChart="title[0]" :color="color4[0]" :listData="listData4[0]"
              :listLabel="listLabel4" />
          </a-col>
          <a-col :span="12">
            <HorizontalBarChart1 :titleChart="title[1]" :color="color4[1]" :listData="listData4[1]"
              :listLabel="listLabel4" />
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="4" tab="Đơn đã hủy" >
        <a-row>
          <a-col :span="12">
            <HorizontalBarChart :titleChart="title[0]" :color="color4[0]" :listData="listData4[0]"
              :listLabel="listLabel4" />
          </a-col>
          <a-col :span="12">
            <HorizontalBarChart1 :titleChart="title[1]" :color="color4[1]" :listData="listData4[1]"
              :listLabel="listLabel4" />
          </a-col>
        </a-row>
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

</script>

<style >

</style>
