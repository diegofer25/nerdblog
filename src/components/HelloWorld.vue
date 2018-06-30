<template>
  <div>
    <input v-model='blog.name' type='text'>
    <button @click.stop='createBlog'>Criar Blogue</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      blog: {
        name: ''
      }
    }
  },
  methods: {
    createBlog () {
      alert(this.blog.name)
    }
  }
}
</script>
