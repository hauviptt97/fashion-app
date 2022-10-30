<template>

    <a-row class="banner">
        <a-col :span="24">
            <Carousel :autoplay="3000" :wrap-around="true" pause-autoplay-on-hover>
                <Slide v-for="item in data" :key="item.id">
                    <div class="carousel__item"><img :src="item.img" alt=""></div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </a-col>
    </a-row>
<div class="groupItems">

    <a-row>
        <a-col class="cattitle" :span="16">
            <h1 id="salett">Sản phẩm khuyến mãi
                <thunderbolt-filled />
                <thunderbolt-filled />
                <thunderbolt-filled />
            </h1>

        </a-col>
        <a-col class="countdown" :span="8">
            <a-row align="middle" justify="center">
                <p>20 Ngày</p>
                <p>12 Giờ</p>
                <p>22 Phút</p>
                <p>30 Giây</p>
            </a-row>

        </a-col>
    </a-row>
    <a-row>
        <a-col :span="24">
            <Carousel :items-to-show="5" :itemsToScroll="5" :wrap-around="true" :mouseDrag="false">
                <Slide v-for="item in productsStore.products.filter(product=>product.saleValue>40)" :key="productsStore.products.id">
                    <div class="carousel__item">
                        <product-card :product="item"/>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </a-col>
    </a-row>
</div>
<div class="groupItems">

    <a-row>
        <a-col class="cattitle" :span="24">
            <h1>Sản phẩm bán chạy  
                <fire-two-tone two-tone-color="#ed0909" />
                <fire-two-tone  two-tone-color="#ed0909" />
                <fire-two-tone two-tone-color="#ed0909" />
            </h1>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="24">
            <Carousel :items-to-show="5" :itemsToScroll="5" :wrap-around="true" :mouseDrag="false">
                <Slide v-for="item in productsStore.products.filter(product=>product.vote>=4)" :key="productsStore.products.id">
                    <div class="carousel__item">
                        <product-card :product="item"/>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </a-col>
    </a-row>
</div>
<div class="groupItems">

    <a-row>
        <a-col class="cattitle" :span="24">
            <h1>Sản phẩm mới  
                <skin-two-tone two-tone-color="#f00ac2"/>
                <skin-two-tone two-tone-color="#f00ac2"/>
                <skin-two-tone two-tone-color="#f00ac2"/>
            </h1>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="24">
            <Carousel :items-to-show="5" :itemsToScroll="5" :wrap-around="true" :mouseDrag="false">
                <Slide v-for="item in productsStore.products.filter(product=>product.vote>=4)" :key="productsStore.products.id">
                    <div class="carousel__item">
                        <product-card :product="item"/>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </a-col>
    </a-row>
</div>
</template>

<script setup>
import {
    ThunderboltFilled,FireTwoTone,SkinTwoTone
} from "@ant-design/icons-vue";
import 'vue3-carousel/dist/carousel.css';
import {
    Carousel,
    Slide,
    Pagination,
    Navigation
} from 'vue3-carousel';
import {
    useProductsStore
} from "@/stores/product.store";

import ProductCard from "@/components/ProductCard.vue";

const data = [{
        id: 1,
        img: "src/assets/images/banner/banner1.jpg",
    }, {
        id: 2,
        img: "src/assets/images/banner/banner2.jpg",
    }, {
        id: 3,
        img: "src/assets/images/banner/banner3.jpg",
    },
    {
        id: 4,
        img: "src/assets/images/banner/banner4.jpg",
    },
    {
        id: 5,
        img: "src/assets/images/banner/banner5.jpg",
    },
];

        const productsStore = useProductsStore();

        productsStore.getAll();
        const saleItems =  productsStore.products.filter((product) => product.saleValue > 0)
</script>

<style>
.groupItems {
    margin-bottom: 40px;
}

.banner .carousel__item {
    width: 100%;
    height: 500px;
}

.banner .carousel__item img {
    width: 100%;
    height: 500px;
}

.banner .carousel__pagination-button {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #D4C9C9;
}

.banner .carousel__pagination-button--active {
    background-color: #807474;
}

.cattitle{
    font-size: x-large;
    margin-bottom: 20px;
}

.cattitle h1 {
    text-align: center;
}

.cattitle #salett {
    text-align: end;
}

.cattitle h1 span {
    color: gold;
}

.countdown p {
    border: 1px solid #fff;
    border-radius: 20%;
    background-color: #D4C9C9;
    width: 40px;
    height: 50px;
    margin-left: 10px;
    text-align: center;
    font-weight: 600;
}

.groupItems .ant-row .carousel__item  {
    margin-left: 20px;    
}

.ant-row .carousel .carousel__prev,
.ant-row .carousel .carousel__next {
    background-color: #fff;
    color: gray;
    width: auto;
    height: auto;
    margin: -30px;
}

.ant-row .carousel .carousel__prev .carousel__icon,
.ant-row .carousel .carousel__next .carousel__icon {
    width: 50px;
    height: 50px;
}


</style>
