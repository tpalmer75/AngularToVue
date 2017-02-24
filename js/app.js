Vue.directive('highlightjs', {
  deep: true,
  bind: function(el, binding) {
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.innerHTML = binding.value
      }
      hljs.highlightBlock(target)
    })
  }
})

Vue.component('code-sample', {
    template: `<div class="code-sample">
      <h3>{{content.heading}}</h3>
      <div class="column angular">
        <h4>{{content.angular.title}}</h4>
        <p v-html="content.angular.description"></p>
        <div v-if="content.angular.html">
          <h5>HTML</h5>
          <pre v-highlightjs><code class="html">{{content.angular.html}}</code></pre>
        </div>
        <div v-if="content.angular.css">
          <h5>CSS</h5>
          <pre v-highlightjs><code class="css">{{content.angular.css}}</code></pre>
        </div>
        <div v-if="content.angular.js">
          <h5>JavaScript</h5>
          <pre v-highlightjs><code class="js">{{content.angular.js}}</code></pre>
        </div>
      </div>
      <div class="column">
        <h4>{{content.vue.title}}</h4>
        <p v-html="content.vue.description"></p>
        <div v-if="content.vue.html">
          <h5>HTML</h5>
          <pre v-highlightjs><code class="html">{{content.vue.html}}</code></pre>
        </div>
        <div v-if="content.vue.css">
          <h5>CSS</h5>
          <pre v-highlightjs><code class="css">{{content.vue.css}}</code></pre>
        </div>
        <div v-if="content.vue.js">
          <h5>JavaScript</h5>
          <pre v-highlightjs><code class="js">{{content.vue.js}}</code></pre>
        </div>
      </div>`,
    props: {
        content: {
            type: Object,
            required: true
        }
    }
})

new Vue({
    el: '#app',
    methods: {
    },
    data: {
        codeList: codeList,
        searchTerm: ''
    },
    computed: {
      filteredSamples: function() {
        var searchTerm = this.searchTerm.toLowerCase();

        if (searchTerm !== '') {
          return this.codeList.filter(function(item) {
            return item.heading.toLowerCase().indexOf(searchTerm) !== -1 || item.angular.title.toLowerCase().indexOf(searchTerm) !== -1 || item.angular.description.toLowerCase().indexOf(searchTerm) !== -1 || item.vue.title.toLowerCase().indexOf(searchTerm) !== -1 || item.vue.description.toLowerCase().indexOf(searchTerm) !== -1
            //return true
          })
        } else {
          return codeList
        }
      }
    }
})

