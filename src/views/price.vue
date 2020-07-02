<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <aside class="main-item" id="aside">
                <nav>
                    <ul>
                        <li>高级版宣传片——方案报价</li>
                        <li>高级版宣传片——方案报价</li>
                        <li>高级版宣传片——方案报价</li>
                        <li>高级版宣传片——方案报价</li>
                    </ul>
                </nav>
            </aside>
            <div class="main-item" id="detail">
                <section>
                    <h3>企事业单位广告宣传片、专题片、形象宣传片、影视MV</h3>
                    <ol>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                    </ol>
                </section>
                <section>
                    <h3>企事业单位广告宣传片、专题片、形象宣传片、影视MV</h3>
                    <ol>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                    </ol>
                </section>
                <section>
                    <h3>企事业单位广告宣传片、专题片、形象宣传片、影视MV</h3>
                    <ol>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                    </ol>
                </section>
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
    display: flex;
    justify-content: center;
    flex: 1 0 auto;
    border: 1px solid red;
}

.main-item {
    margin-left: 80px;
}

ul {
    list-style: none;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
