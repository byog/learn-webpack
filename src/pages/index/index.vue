<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <div class="main-item">
                <div class="item-intr">
                    <video controls>
                        <source
                            src="https://gcs-vimeo.akamaized.net/exp=1558507404~acl=%2A%2F606761037.mp4%2A~hmac=1cdda3054a3b49c279e3bb195d61fe9114f3072ed42bcf4a598150756ee87769/vimeo-prod-skyfire-std-us/01/1845/7/184226677/606761037.mp4?download=1&filename=Video+Wall+-+5366.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <p>宣传片制作</p>
                </div>
                <div class="item-intr">
                    <p>广告片制作d</p>
                    <video controls>
                        <source
                            src="https://gcs-vimeo.akamaized.net/exp=1558507404~acl=%2A%2F606761037.mp4%2A~hmac=1cdda3054a3b49c279e3bb195d61fe9114f3072ed42bcf4a598150756ee87769/vimeo-prod-skyfire-std-us/01/1845/7/184226677/606761037.mp4?download=1&filename=Video+Wall+-+5366.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div class="item-intr">
                    <video controls>
                        <source
                            src="https://gcs-vimeo.akamaized.net/exp=1558507404~acl=%2A%2F606761037.mp4%2A~hmac=1cdda3054a3b49c279e3bb195d61fe9114f3072ed42bcf4a598150756ee87769/vimeo-prod-skyfire-std-us/01/1845/7/184226677/606761037.mp4?download=1&filename=Video+Wall+-+5366.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <p>微电影制作</p>
                </div>
            </div>
            <div class="main-item" id="reviews">
                <el-carousel type="card">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="main-item" id="customs">
                <h3>合作客户</h3>
                <a href="javascript:"><img src="" alt="custom1"/></a>
                <a href="javascript:"><img src="" alt="custom2"/></a>
                <a href="javascript:"><img src="" alt="custom3"/></a>
                <a href="javascript:"><img src="" alt="custom4"/></a>
                <a href="javascript:"><img src="" alt="custom5"/></a>
                <a href="javascript:"><img src="" alt="custom6"/></a>
                <a href="javascript:"><img src="" alt="custom7"/></a>
                <a href="javascript:"><img src="" alt="custom8"/></a>
                <a href="javascript:"><img src="" alt="custom9"/></a>
                <a href="javascript:"><img src="" alt="custom10"/></a>
                <a href="javascript:"><img src="" alt="custom11"/></a>
            </div>
        </main>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from './../../components/header/header.vue'
import Footer from './../../components/footer/footer.vue'
import { Carousel, CarouselItem } from 'element-ui'

export default {
    data() {
        return {}
    },
    components: {
        Header,
        Footer,
        'el-carousel': Carousel,
        'el-carousel-item': CarouselItem,
    },
}
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
}

#header {
    display: flex;
    flex: 0 0 auto;
}

#main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    border: 1px solid red;
}

.main-item {
    border: 1px solid blue;
}

.item-intr {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

video {
    width: 220px;
}

#reviews {
    display: flex;
    justify-content: center;
}

.el-carousel {
    width: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

#customs {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

#customs > h3 {
    order: -1;
    width: 100%;
    text-align: center;
}

#customs > a {
    width: 30%;
    margin: 10px 20px;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
