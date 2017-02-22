const codeList = [

{
heading: 'Repeated Lists',
angular: {
  title: 'ng-repeat',
  description: 'The ng-repeat directive is the backbone of AngularJS, and is used to create lists.',
  html: `<ul ng-controller="example">
  <li ng-repeat="item in items">
    {{ item.message }}
  </li>
</ul>`,
  css: '',
  js: `.controller('example', function($scope) {
  $scope.items = [
    { message: 'Foo' },
    { message: 'Bar' }
  ];
});`
},
vue: {
  title: 'v-for',
  description: '<p>The v-for directive is structured nearly the exact same way as an ng-repeat, with a few less options (like filters).</p><p>You can read more about v-for in <a href="https://vuejs.org/v2/guide/list.html#v-for">the docs</a>.</p>',
  html: `<ul id="example">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>`,
  css: '',
  js: `var example = new Vue({
  el: '#example',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})`, 
}
}, 


{
heading: 'Custom Directives',
angular: {
  title: 'Angular Directives',
  description: '<p>Custom directives allow Angular to attach specific behavior to a DOM element.</p><p>Read more <a href="https://docs.angularjs.org/guide/directive">here</a>.',
  html: `app.directive("`,
  css: '',
  js: ``
},
vue: {
  title: 'Vue Directives',
  description: '<p>Custom directives in VueJS are very similar to AngularJS, except with simpler syntax. For most behavior, however, the docs recommend that you use components.</p><p>Read more <a href="https://vuejs.org/v2/guide/custom-directive.html">here</a>.</p>',
  html: `<input v-focus>`,
  css: '',
  js: `// Register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})`, 
}
}, 

{
heading: 'Event Handling',
angular: {
  title: 'Title',
  description: 'Description here.',
  html: ``,
  css: '',
  js: ``
},
vue: {
  title: 'Title',
  description: 'click, scroll, etc.',
  html: ``,
  css: '',
  js: ``, 
}
}, 

{
heading: 'Filtered Lists',
angular: {
  title: 'Angular Filters',
  description: '<p>Creating a simple search is as easy as using a scope variable as a filter. Angular will do the leg work for you.</p>',
  html: `<ul>
  <li ng-repeat="item in items | searchTerm">{{item}}</li>
</ul>`,
  css: '',
  js: `.controller('example', function($scope) {
  $scope.items = [
    { message: 'Foo' },
    { message: 'Bar' }
  ];
  $scope.searchTerm = '';
});`
},
vue: {
  title: 'Computed Properties',
  description: '<p>As Vue is less opinionated than Angular, version 2.x does not include filters. Instead, it uses <a href="https://vuejs.org/v2/guide/computed.html">computed properties</a> to run complex actions over data to avoid mutating the original data.</p><p>You can easily leverage the native Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter</a> function to create a filtered list.</p>',
  html: `<ul>
  <li v-for="item in filteredItems">{{item}}</li>
</ul>`,
  css: '',
  js: `var example = new Vue({
  el: '#example',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    searchTerm: ''
  },
  computed: {
    filteredItems: function() {
      return this.items.filter(function(item) {
        return item.indexOf(this.searchTerm) !== -1
      })
    }
  }
})`, 
}
}, 

{
heading: 'Ordered Lists',
angular: {
  title: 'Angular Filters',
  description: 'Angular makes ordering a list simple with the orderBy filter.',
  html: `<ul>
  <li ng-repeat="item in items | orderBy: 'message'">{{item}}</li>
</ul>`,
  css: '',
  js: `.controller('example', function($scope) {
  $scope.items = [
    { message: 'Foo' },
    { message: 'Bar' }
  ];
});`
},
vue: {
  title: 'Computed Properties',
  description: `Once again, Vue requires a bit of extra effort, but exposes the mechanics to allow for more complex manipulation. Similar to a filtered list, this idea uses <a href="https://vuejs.org/v2/guide/computed.html">computed properties</a>.</p><p>Using the native Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort</a> function, or the simple syntax of <a href="https://lodash.com/">lodash</a>, we can create a new, ordered array.</p></p><aside>Note: Don't worry about bloating your app with <a href="https://lodash.com/">lodash</a>. Vue is small and slim because it doesn't include some of the bulkier features of Angular. Lodash can make your app simpler without being much bigger.</aside></p>`,
  html: `<ul>
  <li v-for="item in orderedItems">{{item}}</li>
</ul>`,
  css: '',
  js: `var example = new Vue({
  el: '#example',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  computed: {
    orderedItems: function() {
      // Using native Javasript sort
      return this.items.sort(function(a, b) {
        var nameA = a.message.toLowerCase(); // ignore upper and lowercase
        var nameB = b.message.toLowerCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })

      // Or using lodash
      return _.orderBy(this.items, 'message');
      })
    }
  }
})`, 
}
}, 

{
heading: 'State Routing',
angular: {
  title: 'Angular Router',
  description: 'Description here.',
  html: ``,
  css: '',
  js: ``
},
vue: {
  title: 'Vue Router',
  description: '',
  html: ``,
  css: '',
  js: ``, 
}
}, 

]