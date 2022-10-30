<template>
  <a-layout>
    <a-layout-header>
      <a-row>
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link to="/">Trang chủ</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>Sản phẩm</a-breadcrumb-item>
        </a-breadcrumb>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <a-row :gutter="[16, 6]">
        <Sidebar
          v-bind="{ catOptions, brandOptions, priceOptions, voteOptions }"
        />
        <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="20">
          <a-row align="middle" justify="end" class="sort-tab">
            <a-col :span="24">
              <div class="border">
                Sắp xếp theo
                <a-button autofocus @click="handleSortBySaleClick"
                  >Khuyến mãi</a-button
                >
                <a-button>Mới nhất</a-button>
                <a-button>Bán chạy</a-button>
                <a-dropdown>
                  <template #overlay>
                    <a-menu @click="handleMenuClick">
                      <a-menu-item key="1" @click="handleSortByPriceIncClick"
                        >Thấp đến cao</a-menu-item
                      >
                      <a-menu-item key="2" @click="handleSortByPriceDecClick"
                        >Cao đến thấp</a-menu-item
                      >
                    </a-menu>
                  </template>
                  <a-button>
                    Giá
                    <DownOutlined />
                  </a-button>
                </a-dropdown>
              </div>
            </a-col>
          </a-row>
          <a-list
            :grid="{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
              xxxl: 2,
            }"
            :data-source="productsStore.products"
            :pagination="pagination"
          >
            <template #renderItem="{ item }">
              <product-card :product="item" @getProductId="getProductById" />
            </template>
          </a-list>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { StarFilled, DownOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useProductsStore } from "@/stores/product.store";
import ProductCard from "@/components/ProductCard.vue";
import Sidebar from "../../components/Sidebar.vue";

const collapsed = ref(false);
const selectedKeys = ref(["1"]);

const pagination = {
  onChange: (page) => {
    console.log(page);
  },
  defaultPageSize: 25,
  showSizeChanger: true,
  pageSizeOptions: ["25", "50", "100"],
};

const catOptions = [
  {
    label: "Thời trang nam",
    value: 1,
  },
  {
    label: "Thời trang nữ",
    value: 2,
  },
  {
    label: "Thời trang trẻ em",
    value: 3,
  },
];

const brandOptions = [
  {
    label: "OWEN",
    value: 1,
  },
  {
    label: "M.RO",
    value: 2,
  },
  {
    label: "MANDO",
    value: 3,
  },
  {
    label: "Thời trang nam",
    value: 4,
  },
  {
    label: "DMIJ",
    value: 5,
  },
  {
    label: "ADIDAS",
    value: 6,
  },
  {
    label: "NIKE",
    value: 7,
  },
  {
    label: "GUUCHI",
    value: 8,
  },
  {
    label: "CHANEL",
    value: 9,
  },
  {
    label: "LOUIS VUITTON",
    value: 10,
  },
  {
    label: "DIOR",
    value: 11,
  },
  {
    label: "HERMÈS",
    value: 12,
  },
  {
    label: "DOLCE & GABBANA",
    value: 13,
  },
  {
    label: "VERSACE",
    value: 14,
  },
];

const priceOptions = [
  {
    label: "Dưới 300.000đ",
    value: 1,
  },
  {
    label: "300.000đ - 1.000.000đ",
    value: 2,
  },
  {
    label: "1.000.000đ - 3.000.000đ",
    value: 3,
  },
  {
    label: "3.000.000đ - 5.000.000đ",
    value: 4,
  },
  {
    label: "Trên 5.000.000đ",
    value: 5,
  },
];

const voteOptions = [
  {
    label: "5 sao",
    value: 1,
  },
  {
    label: "4 sao trở lên",
    value: 2,
  },
  {
    label: "3 sao trở lên",
    value: 3,
  },
  {
    label: "2 sao trở lên",
    value: 4,
  },
  {
    label: "1 sao trở lên",
    value: 5,
  },
];

const productsStore = useProductsStore();

productsStore.getAll();

const handleSortBySaleClick = () => {
  productsStore.sortBySaleValue();
};
const handleSortByPriceIncClick = () => {
  productsStore.sortByPriceInc();
};
const handleSortByPriceDecClick = () => {
  productsStore.sortByPriceDec();
};

const getProductById = async (id) => {};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.ant-layout.ant-layout-has-sider {
  flex-direction: column;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.ant-row .ant-card {
  margin: 0 10px 10px 0px;
}

.ant-list-pagination .ant-pagination {
  padding: 20px;
  text-align: center;
}

.sort-tab {
  padding-right: 10px;
  padding-bottom: 20px;
  text-align: end;
  margin-bottom: 20px;
}

.sort-tab .border {
  border: 1px solid #fff;
  background-color: #dfdff4;
  display: inline;
  padding: 15px;
  font-style: italic;
  border-radius: 10px;
}

.sort-tab button {
  margin-left: 1.5vw;
  border-radius: 30px;
  font-style: italic;
}

.sort-tab button:hover {
  background-color: #cbde57;
  color: #771414;
}

.sort-tab button:focus {
  background-color: #cbde57;
  color: #771414;
}

#app .ant-layout {
  background: #fff;
  min-height: 100vh;
  flex-direction: column;
}

.ant-layout .ant-layout-header {
  background: #fff;
  padding: 0;
}

.ant-row .ant-breadcrumb {
  margin-top: 16px;
}
</style>
