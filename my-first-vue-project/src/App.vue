<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}"
       v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>child tells me: {{childWords}}</p>
    <component-a msgfromfather='you die!'
    v-on:child-tell-me-something='listenToMyBoy'></component-a>
    <div>
      <button v-on:click="show = !show">Toggle</button>
      <div class="ab">
        <transition name="fade" mode="out-in">
          <p v-if="show" key="1">i am show</p>
          <p v-else key="2">not in show</p>
        </transition>
        <transition name="my-trans">
          <p v-show="show">i am show</p>
        </transition>
      </div>
    </div>
    <p v-color="'red'">hello world</p>
    <input type="text" v-focus>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentA'

export default {
  name: 'App',
  data () {
    return {
      title: 'this is a todo list',
      items: Store.fetch(),
      newItem: '',
      childWords: '',
      show: true
    }
  },
  directives: {
    color: function (el, binding) {
      el.style.color = binding.value;
    },
    focus: {
      inserted (el, binding) {
        el.focus();
      }
    }
  },
  components: { ComponentA },
  events: {
    'child-tell-me-something': function (msg) {
      this.childWords = msg;
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished;
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = '';
      this.$broadcast('onAddnew', this.items);
    },
    listenToMyBoy: function (msg) {
      this.childWords = msg;
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.my-trans-enter-active, .my-trans-leave-active {
  transition: all .5s ease-out;
}
.my-trans-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active {
  transform: translateY(500px);
  opacity: 0;
}

.finished {
  text-decoration: underline;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
</style>
