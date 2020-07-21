<template>
    <div class="list container text-center m-5" style="max-width: 720px;">
        <img class="float-right" :src="require('@/assets/close.png')" @click="$router.push('/')">
        <h1 class="mb-5 font-weight-bold">ADD</h1>

        <form @submit.prevent="submit">
            <div class="form-group text-left">
                <label for="title">Title</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="title"
                    id="title"
                    required
                >
            </div>

            <div class="form-group text-left">
                <label for="content">Content</label>
                <textarea
                    class="form-control"
                    id="content"
                    rows="3"
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
                required>
            </div>

            <button type="submit" class="btn btn-outline-primary float-right">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Add',

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

	methods: {
		submit () {
			const id = this.list.length + 1
			this.$store.commit('add', {
				id: id,
				title: this.title,
				content: this.content,
				date: this.date
			})
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
.card, img, .date{
    cursor: pointer;
}
</style>
