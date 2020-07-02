<template>
    <div id="app">
        <Header id="header"></Header>
        <main id="main">
            <aside id="aside">
                <nav id="pricing-page-container" class="InPageNav">
                    <ul class="InPageNav-list">
                        <li>
                            <a
                                href="#base"
                                class="nav-link"
                                :class="{
                                    'InPageNav-list-li': selectedView == 'base',
                                }"
                                data-target-id="base"
                                @click.self="scroll"
                                >基础版宣传片 - 10000</a
                            >
                        </li>
                        <li>
                            <a
                                href="#pro"
                                class="nav-link"
                                :class="{
                                    'InPageNav-list-li': selectedView == 'pro',
                                }"
                                data-target-id="pro"
                                @click.self="scroll"
                                >专业版宣传片 - 20000</a
                            >
                        </li>
                        <li>
                            <a
                                href="#pre"
                                class="nav-link"
                                :class="{
                                    'InPageNav-list-li': selectedView == 'pre',
                                }"
                                data-target-id="pre"
                                @click.self="scroll"
                                >高级版宣传片 - 30000</a
                            >
                        </li>
                        <li>
                            <a
                                href="#mov"
                                class="nav-link"
                                :class="{
                                    'InPageNav-list-li': selectedView == 'mov',
                                }"
                                data-target-id="mov"
                                @click.self="scroll"
                                >>电影级宣传片 - 40000</a
                            >
                        </li>
                    </ul>
                </nav>
            </aside>
            <div id="detail">
                <section class="InPageDetail-container" data-el-target="base">
                    <h3 id="base">
                        企事业单位宣传片、专题片、汇报片、震撼开场
                    </h3>
                    <ul class="InPageDetail-list">
                        <li>画质级别：1920x1080 HD全高清</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>后期团队：剪辑师/特效师/调色</li>
                        <li>
                            音频剪辑：资深播音员解说配音，震撼背景音乐、特效音响
                        </li>
                        <li>
                            特效剪辑：专业PC机非线性精细剪辑，简单特效包装，简单logo演绎
                        </li>
                        <li>影片全长：2~8分钟</li>
                        <li>制作周期：确定脚本后，后期制作 5～10个工作日</li>
                    </ul>
                </section>
                <section class="InPageDetail-container" data-el-target="pro">
                    <h3 id="pro">
                        企事业单位广告宣传片、专题片、形象片、招商参展影片
                    </h3>
                    <ul class="InPageDetail-list">
                        <li>
                            设备配置：专业级佳能5D套机+灯光+录音设备+滑轨+独脚架等辅助器材
                        </li>
                        <li>拍摄团队：制片/摄像师/灯光师/录音师/拍摄助理</li>
                        <li>画质级别：1920x1080 HD全高清</li>
                        <li>脚本策划：编导参与脚本创作</li>
                        <li>后期团队：编导/剪辑师/特效师/调色</li>
                        <li>
                            音频剪辑：播音员解说配音，震撼背景音乐、特效音响
                        </li>
                        <li>
                            特效剪辑：专业PC机非线性精细剪辑，多种剪辑手法组合；二维三维整体特效包装，三维logo演绎、整体调色
                        </li>
                        <li>影片全长：2~8分钟logo演绎、整体调色></li>
                        <li>
                            制作周期：确定脚本后，拍摄 1-3个工作日，后期制作
                            6～15个工作日
                        </li>
                    </ul>
                </section>
                <section class="InPageDetail-container" data-el-target="pre">
                    <h3 id="pre">
                        企事业单位广告宣传片、专题片、形象宣传片、影视MV
                    </h3>
                    <ul class="InPageDetail-list">
                        <li>
                            设备配置：索尼fx7同级别+专业灯光+专业录音设备+滑轨+独脚架+大型摇臂等辅助器材
                        </li>
                        <li>
                            拍摄团队：导演/电影摄像师/高级灯光师/录音师/拍摄助理/场务
                        </li>
                        <li>画质级别：1920x1080 HD全高清或2K高清</li>
                        <li>脚本策划：资深编导参与脚本创作</li>
                        <li>拍摄设备：电影级全高清摄像机</li>
                        <li>后期团队：编导/剪辑师/特效师/调色师/动画设计师</li>
                        <li>
                            特效剪辑：电影级视觉特效、三维场景应用，深刻挖掘企业的文化、历史和品牌内涵的基础上展开策划和创意，强调影片的整体原创性和个性化，
                            镜头拍摄强调光影效果、画面精致唯美。视觉冲击力强。
                        </li>
                        <li>
                            音频剪辑：央视播音员解说配音，震撼背景音乐、特效音效
                        </li>
                        <li>
                            视频剪辑：苹果系统非线性编辑，电影级视频剪辑，多种剪辑手法组合；视觉特效、以三维场景特效为主；整体达芬奇调色
                        </li>
                        <li>影片全长：2~8分钟</li>
                        <li>
                            制作周期：确定脚本后，拍摄1-3个工作日，后期制作
                            10～20个工作日
                        </li>
                    </ul>
                </section>
                <section class="InPageDetail-container" data-el-target="mov">
                    <h3 id="mov">
                        影视广告、品牌故事、城市形象片、户外大型媒介播放
                    </h3>
                    <ul class="InPageDetail-list">
                        <li>
                            备配置：电影机+灯光+录音设备+大型摇臂+航拍等等辅助器材
                        </li>
                        <li>
                            拍摄团队：特约导演/电影摄像师/知名灯光师/造型师/录音师/助理
                        </li>
                        <li>画质级别：1920x1080 HD全高清或2K高清或4K高清</li>
                        <li>脚本策划：资深专业编导参与脚本创作</li>
                        <li>拍摄设备：电影级摄影机epic或爱丽莎同级别</li>
                        <li>
                            后期团队：导演/剪辑总监/特效总监/调色总监/三维动画设计师
                        </li>
                        <li>
                            特效剪辑：电影级视觉特效、全新三维场景应用，全新电影特效包装
                        </li>
                        <li>
                            音频剪辑：央视播音员解说配音，震撼背景音乐、特效音响
                        </li>
                        <li>
                            视频剪辑：深刻挖掘企业品牌展开创意，电影级视频剪辑系统，多种剪辑视广告、品牌故事、城市形象片、户外大型媒介播放手法组合，达芬奇调色
                        </li>
                        <li>
                            制作周期：确定脚本后，拍摄1-3个工作日，后期制作
                            10～40个工作日
                        </li>
                    </ul>
                </section>
            </div>
        </main>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Footer from 'components/footer/footer.vue'
import Header from 'components/header/header.vue'
import scrollSmoothTo from 'modules/scrollSmoothTo'

if (!window.IntersectionObserver) {
    require('intersection-observer')
}

export default {
    data() {
        return {
            selectedView: '',
        }
    },
    computed: {
        hasScrollBehavior: () => {
            return (
                typeof window.getComputedStyle(document.body).scrollBehavior ==
                'undefined'
            )
        },
        selectedClass: function () {
            return {}
        },
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        scroll(event) {
            // set style of selected li
            this.selectedView = event.target.dataset.targetId

            if (this.hasScrollBehavior) {
                event.preventDefault()
                scrollSmoothTo(event.target.dataset.targetId)
            }
        },
    },
    mounted: function () {
        this.$nextTick(function () {
            let vmData = this

            let ioOpts = {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: 1.0,
            }

            let io = new IntersectionObserver(function (entries) {
                for (const entry of entries) {
                    // console.log(`
                    // ${entry.target.dataset.elTarget}
                    // ${entry.isIntersecting}
                    // ${JSON.stringify(entry.boundingClientRect)}`)

                    if (entry.isIntersecting) {
                        vmData.selectedView = entry.target.dataset.elTarget
                    }
                }
            }, ioOpts)

            io.observe(document.querySelector('#detail>section:nth-child(1)'))
            io.observe(document.querySelector('#detail>section:nth-child(2)'))
            io.observe(document.querySelector('#detail>section:nth-child(3)'))
            io.observe(document.querySelector('#detail>section:nth-child(4)'))
        })
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

#aside {
    flex-basis: 25%;
    max-width: 25%;
}

#pricing-page-container {
    position: fixed;
    top: 20% !important;
}

#detail {
    flex-basis: 75%;
    max-width: 75%;
}

#detail .InPageDetail-container {
    margin-bottom: 100px;
}

.InPageNav-list {
    list-style: none;
}

.InPageNav-list-li {
    border-left: 1px solid red;
}

.InPageDetail-list {
    list-style: none;
}

#footer {
    display: flex;
    flex: 0 0 auto;
}
</style>
