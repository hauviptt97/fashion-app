<template>
  <a-card href="" hoverable @click="getProductIdClick">
    <template #cover>
      <img alt="imp product" :src="'/images/' + props.product.img[Math.ceil(Math.random() * 4)]" />
    </template>
    <div>
      <p class="title">{{ product.title }}</p>
    </div>
    <a-rate :value="product.vote" disabled style="font-size: 1.2vw" />
    <a-row align="middle" v-if="product.saleValue > 0">
      <a-col class="oldPrice" :span="12">
        <a-card-meta
          :description="
            product.defaultPrice.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })
          "
        />
      </a-col>
      <a-col class="saleValue" :span="12">
        <div>
          <button>{{ "-" + product.saleValue + "%" }}</button>
        </div>
      </a-col>
    </a-row>

    <a-row align="bottom">
      <a-col class="price" :span="12">
        <a-card-meta
          :description="
            product.price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })
          "
        />
      </a-col>

      <a-col class="info" :span="12">
        <a-card-meta :description="'Đã bán ' + product.soldQty" />
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { useProductsStore } from "@/stores/product.store";
import { inject } from "vue";
import { router } from "../router";

const productsStore = useProductsStore();

const props = defineProps({
  product: {
    type: Object,
    require: true,
  },
});

const emitter = inject("emitter");

const getProductIdClick = () => {
  alert(props.product.id);
  emitter.emit("getID", props.product.id);
  //productsStore.getProductById(props.product.id);
  router.push({
    name: "ProductDetail",
    params: { productId: props.product.id },
  });
};

</script>

<style>
.ant-card {
  margin: 0px 10px 10px 0px;
}

.ant-card .ant-card-body {
  padding: 10px;
}

.ant-card .ant-card-body div {
  margin-top: 5px;
}

.ant-card .ant-card-body .title {
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 1.2vw;
  text-overflow: ellipsis;
  white-space: nomal;
}

.ant-card .ant-card-body .price .ant-card-meta-description {
  color: red;
  font-size: 1.3vw;
}

.ant-card .ant-card-body .info .ant-card-meta-description {
  font-size: 1.2vw;
  text-align: end;
}
.oldPrice {
  font-size: 1vw;
  text-decoration: line-through;
  color: red;
}

.saleValue div {
  text-align: end;
}

.saleValue button {
  font-size: 1.1vw;
  font-weight: 400;
  border: 1px solid red;
  padding: 10px;
  border-radius: 100%;
  background-color: red;
  color: aliceblue;
}
</style>
