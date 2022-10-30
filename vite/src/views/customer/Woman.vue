<template>
<a-layout style="background: #fff; min-height: 100vh; flex-direction: column">
    <a-layout-header style="background: #fff; padding: 0">
        <a-row>
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>
                    <router-link to="/">Trang chủ</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>Sản phẩm</a-breadcrumb-item>
            </a-breadcrumb>
        </a-row>
    </a-layout-header>
    <a-layout-content>
        <a-row :gutter="[48, 8]">
            <a-col :span="4" class="sidebar">
                <a-row>
                    <p>Danh mục sản phẩm</p>
                    <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllCatChange">
                        Tất cả
                    </a-checkbox>
                    <a-checkbox-group :value="value" v-model:value="checkedList" :options="catOptions" />
                </a-row>
                <a-row>
                    <p>Thương hiệu</p>
                    <a-checkbox v-model:checked="checkAll1" :indeterminate="indeterminate1" @change="onCheckAllBrandChange">
                        Tất cả
                    </a-checkbox>
                    <a-checkbox-group v-model:value="checkedList1" :options="brandOptions" />
                </a-row>
                <a-row>
                    <p>Khoảng giá</p>
                    <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllCatChange">
                        Tất cả
                    </a-checkbox>
                    <a-checkbox-group v-model:value="checkedList" :options="catOptions" />
                </a-row>
                <a-row>
                    <p>Đánh giá</p>
                    <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllCatChange">
                        Tất cả
                    </a-checkbox>
                    <a-checkbox-group v-model:value="checkedList" :options="catOptions" />
                </a-row>
            </a-col>
            <a-col :span="20" >
                <a-row align="middle" justify="end" class="sort-tab">
                    <a-col :span="20">
                    <div>
                      Sắp xếp theo
                        <a-button autofocus @click="handleSortBySaleClick" >Khuyến mãi</a-button>
                        <a-button>Mới nhất</a-button>
                        <a-button>Bán chạy</a-button>
                        <a-dropdown>
                            <template #overlay>
                                <a-menu @click="handleMenuClick">
                                    <a-menu-item key="1" @click="handleSortByPriceIncClick">Thấp đến cao</a-menu-item>
                                    <a-menu-item key="2" @click="handleSortByPriceDecClick">Cao đến thấp</a-menu-item>
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
                <a-list :grid="{ column: 5 }" :data-source="productsStore.products" :pagination="pagination">
                    <template #renderItem="{ item }">
                        <product-card :product="item" />
                    </template> </a-list>
            </a-col>
        </a-row>
        <div>

        </div>
    </a-layout-content>
</a-layout>
</template>

<script>
import {
    StarFilled,
    DownOutlined
} from "@ant-design/icons-vue";
import {
    defineComponent,
    ref,
    reactive,
    watch,
    toRefs
} from "vue";
import {
    useProductsStore
} from "@/stores/product.store";
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
    components: {
        StarFilled,DownOutlined,
        ProductCard
    },
    setup() {
        const collapsed = ref(false);
        const selectedKeys = ref(["1"]);

        const pagination = {
            onChange: page => {
                console.log(page);
            },
            defaultPageSize: 25,
            showSizeChanger: true,
            pageSizeOptions: ['25', '50', '100'],

        };

        const catOptions = [
            "Thời trang nam",
            "Thời trang nữ",
            "Thời trang trẻ em",
        ];

        const brandOptions = [
            "OWEN",
            "M.RO",
            "MANDO",
            "DMIJ",
            "ADIDAS",
            "NIKE",
            "GUUCHI",
            "CHANEL",
            "LOUIS VUITTON",
            "DIOR",
            "HERMÈS",
            "DOLCE & GABBANA",
            "VERSACE"
        ];

        const priceOptions = [
            "Dưới 300.000đ",
            "300.000đ - 1.000.000đ",
            "1.000.000đ - 3.000.000đ",
            "3.000.000đ - 5.000.000đ",
            "Trên 5.000.000đ",
        ];

        const voteOptions = [
            "5 sao",
            "4 sao trở lên",
            "3 sao trở lên",
            "2 sao trở lên",
            "1 sao trở lên",
        ];

        const catState = reactive({
            indeterminate: false,
            checkAll: false,
          checkedList: [],
            value:[]
        });

        const onCheckAllCatChange = (e) => {
            catState.indeterminate = false;
            catState.checkAll = e.target.checked;
            catState.checkedList = e.target.checked ? catOptions : [];
        };

        watch(
            () => catState.checkedList,
            (val) => {
                catState.indeterminate = !!val.length && val.length < catOptions.length;
                catState.checkAll = val.length === catOptions.length;
            }
        );

        const brandState = reactive({
            indeterminate1: false,
            checkAll1: false,
            checkedList1: [],
        });

        const onCheckAllBrandChange = (e1) => {
            brandState.indeterminate1 = false;
            brandState.checkAll1 = e1.target.checked;
            brandState.checkedList1 = e1.target.checked ? brandOptions : [];
        };

        watch(
            () => brandState.checkedList1,
            (val) => {
                brandState.indeterminate1 = !!val.length && val.length < brandOptions.length;
                brandState.checkAll1 = val.length === brandOptions.length;
            }
        );

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

        return {
            productsStore,
            ...toRefs(catState),
            ...toRefs(brandState),
            catOptions,
            brandOptions,
            voteOptions,
            priceOptions,
            onCheckAllCatChange,
            onCheckAllBrandChange,
            pagination,
          handleSortBySaleClick,
          handleSortByPriceIncClick,
            handleSortByPriceDecClick
        };
    },
});
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

.sidebar .ant-row {
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    padding: 15px;
    border: 1px solid white;
    background-color: #def0de;
    border-radius: 5%;
    margin-bottom: 15px;
}

.sidebar .ant-checkbox-group {
    display: flex;
    flex-direction: column;
}

.sidebar .ant-row p {
    font-size: small;
    font-weight: bold;
}

.sidebar .ant-row .ant-checkbox-wrapper {
    margin-bottom: 12px;
    font-size: small;
}

.ant-row .ant-card {
    margin: 0 10px 10px 0px;
}

.ant-list-pagination .ant-pagination {
    padding: 20px;
    text-align: center;
}

.sort-tab{
  padding-right: 10px;
  padding-bottom: 20px;
  text-align: end;
}

.sort-tab button{
  margin-left: 1.5vw;
  border-radius: 30px;
}

.sort-tab button:hover{
  background-color: #CBDE57;
  color: #771414;
}

.sort-tab button:focus{
  background-color: #CBDE57;
  color: #771414;
}
</style>
