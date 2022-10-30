<template>
  <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4" class="sidebar">
    <a-row>
      <p>Danh mục sản phẩm</p>
      <a-checkbox
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="onCheckAllCatChange"
      >
        Tất cả
      </a-checkbox>
      <a-checkbox-group v-model:value="checkedList" :options="catOptions" />
    </a-row>
    <a-row>
      <p>Thương hiệu</p>
      <a-checkbox
        v-model:checked="checkAll1"
        :indeterminate="indeterminate1"
        @change="onCheckAllBrandChange"
      >
        Tất cả
      </a-checkbox>
      <a-checkbox-group v-model:value="checkedList1" :options="brandOptions" />
    </a-row>
    <a-row>
      <p>Khoảng giá</p>
      <a-checkbox
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="onCheckAllCatChange"
      >
        Tất cả
      </a-checkbox>
      <a-checkbox-group v-model:value="checkedList" :options="priceOptions" />
    </a-row>
    <a-row>
      <p>Đánh giá</p>
      <a-checkbox
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="onCheckAllCatChange"
      >
        Tất cả
      </a-checkbox>
      <a-checkbox-group v-model:value="checkedList" :options="voteOptions" />
    </a-row>
  </a-col>
</template>

<script>
import { StarFilled, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, reactive, watch, toRefs } from "vue";

export default defineComponent({
  components: {
    StarFilled,
    DownOutlined,
  },
  props: {
    catOptions: {
      type: Object,
    },
    brandOptions: {
      type: [Number, String],
    },
    priceOptions: {
      type: [Number, String],
    },
    voteOptions: {
      type: [Number, String],
    },
  },
  setup(props) {
    const collapsed = ref(false);
    const selectedKeys = ref(["1"]);

    const catState = reactive({
      indeterminate: false,
      checkAll: false,
      checkedList: [],
    });

    const onCheckAllCatChange = (e) => {
      catState.indeterminate = false;
      catState.checkAll = e.target.checked;
      catState.checkedList = e.target.checked
        ? props.catOptions.map((cat) => cat.value)
        : [];
    };

    watch(
      () => catState.checkedList,
      (val) => {
        catState.indeterminate =
          !!val.length && val.length < props.catOptions.length;
        catState.checkAll = val.length === props.catOptions.length;
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
      brandState.checkedList1 = e1.target.checked
        ? props.brandOptions.map((brand) => brand.value)
        : [];
    };

    watch(
      () => brandState.checkedList1,
      (val) => {
        brandState.indeterminate1 =
          !!val.length && val.length < props.brandOptions.length;
        brandState.checkAll1 = val.length === props.brandOptions.length;
      }
    );

    return {
      ...toRefs(catState),
      ...toRefs(brandState),
      onCheckAllCatChange,
      onCheckAllBrandChange,
    };
  },
});
</script>
<style>
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
</style>
