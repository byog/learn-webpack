<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <div class="main-item">
                <div class="item-intr">
                    <img src="" alt="宣传片制作" />
                    <p>宣传片制作</p>
                </div>
                <div class="item-intr">
                    <img src="" alt="广告片制作" />
                    <p>广告片制作</p>
                </div>

                <div class="item-intr">
                    <img src="" alt="微电影制作" />
                    <p>微电影制作</p>
                </div>
            </div>
            <div class="main-item" id="reviews">
                <p>custom reviews</p>
            </div>
            <div class="main-item" id="customs">
                <span>custom name</span>
                <span>custom name</span>
                <span>custom name</span>
                <span>custom name</span>
                <span>custom name</span>
                <span>custom name</span>
                <span>custom name</span>
                <span>custom name</span>
            </div>
        </main>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'

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

#reviews {
    display: flex;
    justify-content: center;
}

#customs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

#customs > span {
    width: 15%;
    margin: 1em 6em;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
