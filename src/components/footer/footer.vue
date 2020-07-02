<template>
    <footer>
        <address>
            <div id="footer-left">
                <span id="weixin">
                    <span>官方微信</span>
                    <img
                        id="myweixin"
                        src="~assets/images/iconfinder_Wechat_2744979.svg"
                        alt="致橡树微信"
                    />
                </span>

                <p>©2019 zxs. All rights reserved.</p>
            </div>
            <div id="footer-right">
                <p>
                    <span class="contact-name">地址</span>
                    <span class="contact-desc"
                        >云南省昆明市西山区云山路云投景苑5栋3304室</span
                    >
                </p>
                <p>
                    <span class="contact-name">电话</span>
                    <span class="contact-desc">
                        <a href="tel:18987252140">18987252140</a>
                    </span>
                </p>
                <p>
                    <span class="contact-name">email</span>
                    <span cass="contact-desc">
                        <a href="mailto:18987252140@qq.com"
                            >18987252140@qq.com</a
                        >
                    </span>
                </p>
            </div>
        </address>
    </footer>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style scoped>
address {
    display: flex;
    justify-content: space-around;
    border: 1px solid red;
    width: 100%;
}

#footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#footer-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.contact-name {
    margin-right: 2em;
}

#weixin span {
    display: block;
}
</style>
