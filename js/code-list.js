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
  docs: 'https://vuejs.org/v2/guide/list.html#v-for',
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
heading: 'Directives',
angular: {
  title: 'ng-*',
  description: '<p>Directives allow Angular to attach specific behavior to a DOM element.</p><p>Read more <a href="https://docs.angularjs.org/guide/directive">here</a>.',
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
  title: 'v-*',
  description: '<p>Directives in VueJS are very similar to AngularJS, except with simpler syntax.</p><p>Read more <a href="https://vuejs.org/v2/guide/custom-directive.html">here</a>.</p>',
  docs: 'https://vuejs.org/v2/guide/list.html#v-for',
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


]