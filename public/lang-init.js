// Set lang and dir on first paint before React hydration
(function() {
  try {
    var lng = localStorage.getItem('i18nextLng') || 'ar';
    var dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', lng);
    document.documentElement.setAttribute('dir', dir);
  } catch(e) {}
})();