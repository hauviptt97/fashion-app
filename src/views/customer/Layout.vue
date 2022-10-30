<template>
  <a-layout>
    <a-layout-header>
      <a-row type="flex">
        <a-col :flex="2" align="middle" style="margin-right: 5%">
          <a-row type="flex">
            <a-col flex="200px">
              <router-link to="/">
                <img style="width: 200px" :src="getImgUrl('logo.png')" />
              </router-link>
            </a-col>
            <a-col flex="auto"
              ><a-input-search
                style="vertical-align: middle"
                placeholder="Bạn muốn tìm gì đó..."
                @search="onSearch"
            /></a-col>
          </a-row>
        </a-col>
        <a-col :flex="3">
          <a-row>
            <a-col :span="14">HOTLINE: 1900 800 008 <PhoneOutlined /></a-col>
            <a-col :span="8">
              <a-row>
                <a-col>
                  <router-link to="/account/login"> Đăng nhập </router-link>
                </a-col>
                <a-col>
                  <router-link to="/cart">
                    <shopping-cart-outlined
                      style="font-size: 22px; color: #ad1313"
                    />
                    <strong style="font-size: 12px">{{
                      cartStore.products.length
                    }}</strong>
                  </router-link>
                </a-col>
              </a-row>
            </a-col>

            <a-col :span="2">
              <img :src="getImgUrl('lang_vi.jpg')" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>

      <a-row justify="space-around" class="menu">
        <p><router-link to="/">Trang chủ</router-link></p>
        <p><router-link to="/products">Sản phẩm</router-link></p>
        <p><router-link to="/woman">Phụ nữ</router-link></p>
        <p><router-link to="/man">Đàn ông</router-link></p>
        <p><router-link to="/kid">Trẻ em</router-link></p>
        <p><router-link to="/support">Hỗ trợ</router-link></p>
        <p><router-link to="/aboutme">Về chúng tôi</router-link></p>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { ShoppingCartOutlined, PhoneOutlined } from "@ant-design/icons-vue";
import { RouterView } from "vue-router";
import { useCartStore } from "@/stores/cart.store";

const cartStore = useCartStore();

cartStore.getAll();

const baseUrl = "/src/assets/images/";
const getImgUrl = (name) => {
  return new URL(baseUrl + name, import.meta.url);
};
</script>

<style scoped>
.ant-layout .ant-layout-header {
  background-color: white;
  height: fit-content;
  font-size: 1.5vw;
  padding: 0 50px;
}
.ant-layout-header .menu {
  margin-top: 15px;
  line-height: inherit;
  border: none;
  background-color: #28210d;
}

.ant-layout-header .menu p {
  margin: 0;
}

.ant-layout-header .menu p a {
  color: #fff;
  font-size: 1.5vw;
}

.ant-layout-header .menu p a:hover {
  border-bottom: 2px solid #7ea16e;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
  padding: 0 20px;
  margin-right: 30px;
}

.ant-input-group-wrapper {
  vertical-align: middle;
}

.ant-layout-content {
  flex: auto;
  min-height: 0;
  padding: 0px 50px;
  background: #fff;
}
</style>
