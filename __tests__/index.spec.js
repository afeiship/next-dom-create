(function () {
  const NxDomCreate = require('../src');

  describe('NxDomCreate.methods', function () {
    test('create nomal element', function () {
      var el = NxDomCreate.element(
        'div',
        { id: '1', style: 'color: red; font-size: 12px;' },
        'hello world.'
      );

      expect(el.outerHTML).toBe(
        '<div id="1" style="color: red; font-size: 12px;">hello world.</div>'
      );
    });

    test('create html with hook attribute', ()=>{
      var el = NxDomCreate.element(
        'div',
        { class: 'hello', style: 'color: red; font-size: 12px;' },
        'hello class.'
      );

      expect(el.outerHTML).toBe(
        '<div class="hello" style="color: red; font-size: 12px;">hello class.</div>'
      );
    });
  });
})();
