<template>
	<div id="app">
		<h1>hello world</h1>
		<p>
			<router-link to="/foo">go to foo</router-link>
			<router-link to="/bar">go to bar</router-link>
			<router-link to="/user">go to user</router-link>
			<router-link to="/vuextest">go to vuextest</router-link>
			<router-link to="/namedview">named view</router-link>
		</p>
		<router-view />
		<router-view name="a" />
		<router-view name="b" />
		<router-view name="vuexView" :finalCount="finalCount" />
	</div>
</template>

<script>
import VueRouter from 'vue-router'
// import 'css/main.css'
// import 'css/normalize.css'
const NotFoundComponent = { template: '<p>page not found</p>' }
const NamedView = { template: '<div>named view</div>' }
const ViewA = { template: '<div>router-view a</div>' }
const ViewB = { template: '<div>router-view b</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }
const VuexTest = {
	template: '<div>VuexTest: {{ finalCount }}</div>',
	props: {
		finalCount: Number,
	},
}
const User = {
	props: ['id'],
	template: `
        <div class="user">
            <h2>User {{ id }}</h2>
            <router-view/>
        </div>
    `,
}

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar },
	{ path: '/user', component: UserHome },
	{
		path: '/vuextest',
		components: { vuexView: VuexTest },
	},
	{
		path: '/user/:id',
		component: User,
		props: true,
		children: [
			{
				path: 'profile',
				component: UserProfile,
			},
			{
				path: 'posts',
				component: UserPosts,
			},
			{
				path: '',
				component: UserHome,
			},
		],
	},
	{
		path: '/namedview',
		components: {
			default: NamedView,
			a: ViewA,
			b: ViewB,
		},
	},
	{ path: '*', component: NotFoundComponent },
]

const router = new VueRouter({
	routes,
})

export default {
	data() {
		return {}
	},
	computed: {
		username() {
			return this.$route.params.username
		},
		finalCount() {
			return this.$store.state.count * 100
		},
	},
	methods: {
		goBack() {
			window.history.length > 1
				? this.$router.go(-1)
				: this.$router.push('/')
		},
	},
	router,
}
</script>

<style>
#app {
	/* color: yellow; */
}
</style>
