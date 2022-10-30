<template>
<div class="admin">
    <a-layout>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
      <router-link to="/admin">
        <desktop-outlined />
        <span>Dashboard</span>
      </router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <pie-chart-outlined />
            <span>Thống kê</span>
          </span>
        </template>
        <router-link to="/admin/statistic/revenue">
            <a-menu-item key="2">Thống kê doanh thu</a-menu-item>
        </router-link>
        <router-link to="/admin/statistic/customer">
        <a-menu-item key="3">Thống kê khách hàng</a-menu-item>
        </router-link>
        <a-menu-item key="4">Thống kê kho</a-menu-item>
        
      </a-sub-menu>
      <a-menu-item key="5">
        <PayCircleOutlined />
        <span>Hình thức thanh toán</span>
      </a-menu-item>
      <a-menu-item key="6">
      <router-link to="/admin/employees">
        <user-outlined />
        <span>Nhân viên</span>
      </router-link>
      </a-menu-item>
      <a-menu-item key="7">
      <router-link to="/admin/distributors">
        <SkinOutlined />
        <span>Nhà cung cấp</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
  <RouterView />
  </a-layout>
</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  SkinOutlined,
  PayCircleOutlined,
  ArrowUpOutlined
} from "@ant-design/icons-vue";
import {
  ref
} from "vue";

const collapsed = ref(false);
const selectedKeys = ref(["1"]);
</script >

<style>
.admin .ant-layout {
  flex-direction: row !important;
  background-color: #E4E8EF !important;
}

</style>
