<template>
    <div v-if="data" class="list container text-center m-5" style="max-width: 720px;">
        <img class="float-right" :src="require('@/assets/close.png')" @click="$router.go(-1)">
        <h1 class="mb-5 font-weight-bold">UPDATE</h1>

        <form @submit.prevent="submit">
            <div class="form-group text-left">
                <label for="title">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="title"
                    required
                >
            </div>

            <div class="form-group text-left">
                <label for="content">Content</label>
                <textarea
                    class="form-control"
                    id="content" rows="3"
                    style="resize: none;"
                    v-model="content"
                    required
                ></textarea>
            </div>

            <div class="form-group text-left mb-5">
                <label for="date">Date</label>
                <input
                    type="date"
                    class="form-control date"
                    id="date"
                    v-model="date"
                    required
                >
            </div>

            <button type="submit" class="btn btn-outline-primary float-right">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: ['id'],
	name: 'Update',

	data () {
		return {
			title: '',
			content: '',
			date: ''
		}
	},

	computed: mapGetters({
		list: 'getList'
	}),

	created () {
		const data = this.list.find(i => i.id === parseInt(this.id))
		if (!data) this.$router.push('/notfound')
		else {
			this.title = data.title
			this.content = data.content
			this.date = data.date
		}
	},

	methods: {
		submit () {
			this.$store.commit('update', {
				id: parseInt(this.id),
				title: this.title,
				content: this.content,
				date: this.date
			})
			this.$router.push(`/view/${this.id}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.card, img, .date{
    cursor: pointer;
}
</style>
