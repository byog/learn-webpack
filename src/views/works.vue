<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <div class="main-item">
                <div id="filter">
                    <a href="">icon</a>
                    <span>筛选</span>
                </div>
                <div id="filter-options">
                    <div id="time">
                        <span>时间</span>
                        <span>这周</span>
                        <span>上个月</span>
                        <span>今年</span>
                    </div>
                    <div id="type">
                        <span>类型</span>
                        <span>宣传片</span>
                        <span>微电影</span>
                        <span>广告</span>
                    </div>
                </div>
            </div>
            <div class="main-item" id="works">
                <section>
                    <video src=""></video>
                    <h3>放得死死的富婆</h3>
                </section>
                <section>
                    <video src=""></video>
                    <h3>放得死死的富婆</h3>
                </section>
                <section>
                    <video src=""></video>
                    <h3>放得死死的富婆</h3>
                </section>
                <section>
                    <video src=""></video>
                    <h3>放得死死的富婆</h3>
                </section>
            </div>
            <div class="main-item" id="pagination">
                <a href="">上一页</a>
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">...</a>
                <a href="">7</a>
                <a href="">8</a>
                <a href="">...</a>
                <a href="">20</a>
                <a href="">下一页</a>
            </div>
        </main>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from '../components/header/header.vue'
import Footer from '../components/footer/footer.vue'

export default {
    data() {
        return {}
    },
    components: {
        Header,
        Footer,
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
    border: 1px solid red;
}

#filter-options {
    display: flex;
}

#time,
#type {
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    width: 5%;
}

#time > span:first-child {
    border-bottom: 1px solid gray;
}

#type > span:first-child {
    border-bottom: 1px solid gray;
}

#works {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#works > * {
    width: 40%;
    margin-left: 30px;
}

video {
    border: 1px solid purple;
}

#pagination {
    display: flex;
    justify-content: center;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
