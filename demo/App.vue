<template>
  <div id="app">
    <div class="container py-3">
      <h1>Vue minesweeper</h1>
      <p class="lead">
        A simple minesweeper game.
      </p>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <div class="btn-group">
          <router-link href="#" class="btn btn-outline-success" :to="{name: 'game', params: {
            rows: 9,
            cols: 9,
            bombs: 10,
          }}">
            Beginner
          </router-link>
          <router-link href="#" class="btn btn-outline-success" :to="{name: 'game', params: {
            rows: 16,
            cols: 16,
            bombs: 40,
          }}">
            Intermediate
          </router-link>
          <router-link href="#" class="btn btn-outline-success" :to="{name: 'game', params: {
            rows: 16,
            cols: 30,
            bombs: 99,
          }}">
            Expert
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="bg-light">
      <div class="container py-3">
        <h3 class="m-1">Helpful links</h3>
        <a class="btn btn-outline-secondary m-1" href="#" @click.prevent="share()">
          <i class="fa fa-share-alt"></i> share
        </a>
        <a class="btn btn-outline-secondary m-1" href="https://github.com/disjfa/vue-minesweeper">
          <i class="fab fa-github"></i> github
        </a>
        <a class="btn btn-outline-secondary m-1" href="https://www.npmjs.com/package/vue-minesweeper">
          <i class="fab fa-npm"></i> npm
        </a>
        <a class="btn btn-outline-secondary m-1" href="https://codepen.io/disjfa/pen/axdmob">
          <i class="fab fa-codepen"></i> codepen
        </a>
        <a class="btn btn-outline-secondary m-1" href="https://medium.com/@disjfa/vue-creating-custom-component-bc939e40421a">
          <i class="fab fa-medium"></i> medium
        </a>
        <a class="btn btn-outline-secondary m-1" href="https://github.com/disjfa/vue-minesweeper/issues">
          <i class="fa fa-exclamation-circle"></i> issues?
        </a>
      </div>
    </div>
    <br><br><br><br><br><br>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    share() {
      console.log(document.location);
      navigator.share({
        title: 'Vue minesweeper',
        text: 'A simple minesweeper game.',
        url: document.location,
      });
    },
  },
};
</script>
