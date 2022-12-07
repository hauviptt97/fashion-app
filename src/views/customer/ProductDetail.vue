<template>
  <a-layout>
    <a-layout-header>
      <a-row>
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link to="/">Trang chủ</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/product">Sản phẩm</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
           {{ productsStore.product.title }}
          </a-breadcrumb-item>
        </a-breadcrumb>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <div class="p-info">
        <a-row>
          <a-col :span="10">
            <image-thumbnail :imgList="productsStore.product.img" />
          </a-col>
          <a-col :span="14">
            <a-row class="title">
              <h2>
                {{ productsStore.product.title }}
              </h2>
            </a-row>

            <a-row align="bottom">
              <a-col :span="8">
                <a-rate
                  :value="productsStore.product.vote"
                  disabled
                  style="font-size: 2vw"
                />
              </a-col>
              <a-col :span="8"
                >{{ productsStore.product.comments.length }} đánh giá</a-col
              >
              <a-col :span="8"
                >{{ productsStore.product.soldQty }} Đã bán</a-col
              >
            </a-row>
            <a-row>
              <a-col :span="8" class="price">{{
                productsStore.product.defaultPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })
              }}</a-col>
              <a-col :span="8" class="price">{{
                productsStore.product.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })
              }}</a-col>
              <a-col :span="8"
                >{{ productsStore.product.saleValue }} % giảm</a-col
              >
            </a-row>
            <a-row>
              <a-col :span="4">Màu sắc</a-col>
              <a-col :span="20">
                <a-radio-group v-model:value="colorValue">
                  <a-radio
                    v-for="(item, index) in productsStore.product.color"
                    :style="radioStyle"
                    :value="index"
                    >{{ item }}</a-radio
                  >
                </a-radio-group>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">Kích cỡ</a-col>
              <a-col :span="20">
                <a-radio-group
                  size="large"
                  buttonStyle="solid"
                  v-model:value="sizeValue"
                >
                  <a-radio
                    v-for="(item, index) in productsStore.product.size"
                    :style="radioStyle"
                    :value="index"
                    >{{ item }}</a-radio
                  >
                </a-radio-group>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">Số lượng</a-col>
              <a-col :span="8">
                <a-input-number
                  id="inputNumber"
                  v-model:value="qtyValue"
                  :min="1"
                  :max="productsStore.product.qty"
                />
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="8"
                ><a-button type="">Thêm vào giỏ hàng</a-button></a-col
              >
              <a-col :span="8"><a-button type="">Mua ngay</a-button></a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { useProductsStore } from "@/stores/product.store";
import { onBeforeMount, ref, onMounted } from "vue";
import ImageThumbnail from "../../components/ImageThumbnail.vue";

var url = window.location.pathname;
var id = url.substring(url.lastIndexOf("/") + 1);

const productsStore = useProductsStore();

productsStore.getProductById(id);

// const pd = productsStore.product;
// alert(pd.id);

const colorValue = ref(1);
const sizeValue = ref(1);
const qtyValue = ref(1);
</script>

<style>
.p-info .ant-row {
  margin: 5vh 2vw;
}

.p-info .ant-row {
  font-size: 1.5vw;
}

.p-info .ant-row .title {
  margin-top: 0;
}
</style>
