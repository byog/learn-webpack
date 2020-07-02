<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <div class="main-item">
                <span>position</span>
                <ol>
                    <li>fdsfsfs</li>
                    <li>fdsfsfs</li>
                    <li>fdsfsfs</li>
                </ol>
                <span class="requirement">jobs requirement</span>
                <ol>
                    <li>fdsfsfds</li>
                    <li>fdsfsfds</li>
                    <li>fdsfsfds</li>
                </ol>
            </div>
            <div class="main-item">
                <span>position</span>
                <ol>
                    <li>fdsfsfs</li>
                    <li>fdsfsfs</li>
                    <li>fdsfsfs</li>
                </ol>
                <span class="requirement">jobs requirement</span>
                <ol>
                    <li>fdsfsfds</li>
                    <li>fdsfsfds</li>
                    <li>fdsfsfds</li>
                </ol>
            </div>
            <div class="main-item">
                <span>position</span>
                <ol>
                    <li>fdsfsfs</li>
                    <li>fdsfsfs</li>
                    <li>fdsfsfs</li>
                </ol>
                <span class="requirement">jobs requirement</span>
                <ol>
                    <li>fdsfsfds</li>
                    <li>fdsfsfds</li>
                    <li>fdsfsfds</li>
                </ol>
            </div>
        </main>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from './../../components/header/header.vue'
import Footer from './../../components/footer/footer.vue'

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
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    border: 1px solid red;
}

.main-item {
    box-shadow: 2px 2px 10px gray;
    margin-top: 20px;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
