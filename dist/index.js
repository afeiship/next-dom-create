/*!
 * name: @jswork/next-dom-create
 * description: Dom create for next.
 * homepage: https://github.com/afeiship/next-dom-create
 * version: 1.0.0
 * date: 2021-02-05 15:17:09
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var PROP_HOOKS = {
    class: 'className',
    for: 'htmlFor',
    tabindex: 'tabIndex',
    readonly: 'readOnly',
    maxlength: 'maxLength',
    cellspacing: 'cellSpacing',
    cellpadding: 'cellPadding',
    rowspan: 'rowSpan',
    colspan: 'colSpan',
    usemap: 'useMap',
    frameborder: 'frameBorder',
    contenteditable: 'contentEditable'
  };

  var NxDomCreate = nx.declare('nx.DomCreate', {
    statics: {
      element: function (inType, inProps, inChildren) {
        var el = document.createElement(inType);
        var children = typeof inChildren === 'string' ? this.text(inChildren) : inChildren;
        nx.forIn(inProps, function (key, value) {
          var prop = PROP_HOOKS[key];
          prop ? (el[prop] = value) : el.setAttribute(key, value);
        });
        el.appendChild(children);
        return el;
      },
      text: function (inValue) {
        return document.createTextNode(inValue);
      },
      fragment: function () {
        var el = document.createDocumentFragment();
        el.appendChild(inChildren);
        return el;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomCreate;
  }
})();
