<template>
    <div class="list container text-center m-5" style="max-width: 720px;">
        <img class="float-right" :src="require('@/assets/close.png')" @click="$router.go(-1)">
        <h1 class="mb-5 font-weight-bold">UPDATE</h1>

        <form @submit.prevent="lala()">
            <div class="form-group text-left">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" required>
            </div>

            <div class="form-group text-left">
                <label for="content">Content</label>
                <textarea class="form-control" id="content" rows="3" style="resize: none;" required></textarea>
            </div>

            <div class="form-group text-left mb-5">
                <label for="date">Date</label>
                <input type="date" class="form-control date" id="date" required>
            </div>

            <button type="submit" class="btn btn-outline-primary float-right">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
	name: 'Update',

	methods: {
		lala () {
			alert(111)
		}
	}
}
</script>

<style lang="scss" scoped>
.card, img, .date{
    cursor: pointer;
}
</style>
