<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <div class="main-item" id="about-intr">
                <img src="" alt="company Profile" />
                <p>
                    杭州疯智影视传媒有限公司(CRAZYMAN
                    MEDIA)以互联网思维及新潮流为驱动，以长三角及浙江卫视顶尖影视精英为核心团队，凭借专业的艺术触觉，敢于打破常规，探索新媒体时代影视创作的潮流，创造中国制作新影像。疯智传媒坚持每一部片子都能打动且鼓舞人心，既能娱乐大众又不失说服力，不仅能抓住眼球更能引起共鸣。长期以来，疯智致力于影视广告、微电影、形象宣传片、网络剧、电影策划制作，为众多知名企业集团、电视频道提供了卓有成效的影视服务。疯智用心对待每一个项目，相信在市场的不停进化和改变中，客户的需求需要更好的配合和更多的创意建议。疯智心无旁骛专注影视制作、敢于挑战并提出独到想法、不畏艰难只为完美影像。疯智凭借对影视创意的发挥以及精湛的制作，在赢得众多客户信赖的同时也获得了大量专业奖项。
                </p>
            </div>
            <div class="main-item" id="features">
                <div class="feature">
                    <span>fsjlfdsjl</span>
                    <p>
                        完美影像。疯智凭借对影视创意的发挥以及精湛的制作，在赢得众多客户信
                    </p>
                </div>
                <div class="feature">
                    <span>fsjlfdsjl</span>
                    <p>
                        完美影像。疯智凭借对影视创意的发挥以及精湛的制作，在赢得众多客户信
                    </p>
                </div>
                <div class="feature">
                    <span>fsjlfdsjl</span>
                    <p>
                        完美影像。疯智凭借对影视创意的发挥以及精湛的制作，在赢得众多客户信
                    </p>
                </div>
                <div class="feature">
                    <span>fsjlfdsjl</span>
                    <p>
                        完美影像。疯智凭借对影视创意的发挥以及精湛的制作，在赢得众多客户信
                    </p>
                </div>
            </div>
            <div class="main-item" id="flows">
                <div class="flow">
                    <a href="">icon</a>
                    <p>
                        f流程 <br />
                        合f作fds流程 <br />
                        合作流程 <br />
                    </p>
                </div>
                <div class="flow">
                    <a href="">icon</a>
                    <p>
                        f流程 <br />
                        合f作fds流程 <br />
                        合作流程 <br />
                    </p>
                </div>
                <div class="flow">
                    <a href="">icon</a>
                    <p>
                        f流程 <br />
                        合f作fds流程 <br />
                        合作流程 <br />
                    </p>
                </div>
                <div class="flow">
                    <a href="">icon</a>
                    <p>
                        f流程 <br />
                        合f作fds流程 <br />
                        合作流程 <br />
                    </p>
                </div>
                <div class="flow">
                    <a href="">icon</a>
                    <p>
                        f流程 <br />
                        合f作fds流程 <br />
                        合作流程 <br />
                    </p>
                </div>
                <div class="flow">
                    <a href="">icon</a>
                    <p>
                        f流程 <br />
                        合f作fds流程 <br />
                        合作流程 <br />
                    </p>
                </div>
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
    flex: 1 0 auto;
    border: 1px solid red;
}

.main-item {
    border: 1px solid blue;
}

#about-intr {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#features {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.feature {
    flex-basis: 40%;
    margin-left: 30px;
}

#flows {
    display: flex;
    justify-content: space-around;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
