<template>
<div class="revenue">
    <a-layout>
        <a-row>
            <a-col :span="24">
                Thống kê doanh thu
            </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
        <a-form ref="formRef" name="advanced_search" class="ant-advanced-search-form" :model="formState" @finish="onFinish">
            <a-row :gutter="24" justify="">
                <a-col :span="5">
                    <a-form-item :name="`reportType`" :label="`Loại báo cáo`" has-feedback
                        :rules="[{ required: true, message: 'Vui lòng chọn loại báo cáo' }]">
                        <a-select v-model:value="formState[`reportType`]" placeholder="Chọn loại báo cáo">
                            <a-select-option value="1"><router-link  :to="{ name: 'RevTime'}">Báo cáo theo thời gian</router-link></a-select-option>
                            <a-select-option value="2"><router-link :to="{ name: 'RevEmp', params: { status: formState[`statusOrder`] }}">Báo cáo theo nhân viên</router-link></a-select-option>
                            <a-select-option value="3"><router-link to="/admin/statistic/revenue/customer">Báo cáo theo khách hàng</router-link></a-select-option>
                            <a-select-option value="4"><router-link to="/admin/statistic/revenue/product">Báo cáo theo sản phẩm</router-link></a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                    <a-col :span="5">
                        <a-form-item :name="`timeType`" :label="`Loại báo cáo`" has-feedback
                            :rules="[{ required: true, message: 'Vui lòng chọn loại báo cáo' }]" >
                            <a-select v-model:value="formState[`timeType`]" placeholder="Chọn loại báo cáo" >
                                <a-select-option value="1">Báo cáo theo ngày</a-select-option>
                                <a-select-option value="2">Báo cáo theo tháng</a-select-option>
                                <a-select-option value="3">Báo cáo theo năm</a-select-option>
                            </a-select>
                            </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item :name="`branch`" :label="`Chi nhánh`" has-feedback
                            :rules="[{ required: true, message: 'Vui lòng chọn loại báo cáo' }]">
                            <a-select v-model:value="formState[`branch`]" placeholder="Chọn chi nhánh">
                                <a-select-option value="1">Đà Nẵng</a-select-option>
                                <a-select-option value="2">Hồ Chí Minh</a-select-option>
                                <a-select-option value="3">Hà Nội</a-select-option>
                            </a-select>
                        </a-form-item>
                       
                    </a-col>
                    <a-col :span="5">
                        <template v-if="formState[`reportType`]==2">
                            <a-form-item :name="`statusOrder`" :label="`Trạng thái đơn hàng`" has-feedback
                                :rules="[{ required: true, message: 'Vui lòng chọn loại trạng thái' }]">
                                <a-select v-model:value="formState[`statusOrder`]" placeholder="Chọn trạng thái đơn">
                                    <a-select-option value="1">Tất cả</a-select-option>
                                    <a-select-option value="2">Đã hoàn thành</a-select-option>
                                    <a-select-option value="3">Chờ xử lý</a-select-option>
                                    <a-select-option value="4">Đã Hủy</a-select-option>
                                </a-select>
                            </a-form-item>
                        </template>
                    </a-col>
                            <a-col :span="4" style="text-align: right">
                                <a-button type="primary" html-type="submit">Hiển thị dữ liệu</a-button>
                            </a-col>
                            </a-row>
                    <template v-if="formState[`timeType`]==1">
                    <a-row>
                    <a-col :span="5">
                        <a-form-item name="startDate" label="Ngày bắt đầu" v-bind="config" :rules="[{ required: true, message: 'Vui lòng chọn ngày bắt đầu' }]">
                            <a-date-picker v-model:value="formState[`startDate`]" value-format="dd-MM-yyyy" placeholder="Chọn ngày" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item name="endDate" label="Ngày kết thúc" v-bind="config" :rules="[{ required: true, message: 'Vui lòng chọn ngày kết thúc' }]">
                            <a-date-picker v-model:value="formState[`endDate`]" value-format="dd-MM-yyyy" placeholder="Chọn ngày"/>
                        </a-form-item>
                    </a-col>
                    </a-row>
                    </template>
                    <template v-if="formState[`timeType`]==2">
                        <a-row>
                    <a-col :span="5">
                        <a-form-item name="startMonth" label="Tháng bắt đầu" v-bind="config" :rules="[{ required: true, message: 'Vui lòng chọn tháng bắt đầu' }]">
                            <a-date-picker v-model:value="formState[`startMonth`]" value-format="MM-YYYY" picker="month" placeholder="Chọn tháng"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item name="endMonth" label="Tháng kết thúc" v-bind="config" :rules="[{ required: true, message: 'Vui lòng chọn tháng kết thúc' }]">
                            <a-date-picker v-model:value="formState[`endMonth`]" value-format="MM-YYYY" picker="month" placeholder="Chọn tháng"/>
                        </a-form-item>
                    </a-col>
                        </a-row>
                    </template>
           
            
        </a-form>
        </a-col>
        </a-row>
        <a-row>
            <a-col :span="24"><RouterView /></a-col>
        </a-row>

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
    DownOutlined,
    UpOutlined
} from "@ant-design/icons-vue";
import {
    ref, reactive
} from "vue";

const expand = ref(false);
const formRef = ref();
const formState = reactive({});

const onFinish = values => {
    console.log('Received values of form: ', values);
    console.log('formState: ', formState);
};
</script >

<style>
.revenue {
    width: 100%;
    padding: 1vw 1vw;
}

.revenue .ant-layout {
    flex-direction: column !important;
    background-color: #E4E8EF !important;
}

.revenue .ant-layout-header {
    line-height: normal
}

.revenue .ant-form-item-control-input{
    width: fit-content;
}

.revenue .ant-row{
    margin-bottom: 1.2vh;
}
</style>
