document.addEventListener('DOMContentLoaded', () => {
  const tabs   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 1) reset all tabs to inactive
      tabs.forEach(t => {
        t.classList
         .replace('border-teal-500', 'border-gray-300');
        t.classList
         .replace('bg-teal-100', 'bg-white');
        t.classList
         .replace('text-teal-600', 'text-gray-700');
      });

      // 2) hide all panels
      panels.forEach(panel => panel.classList.add('hidden'));

      // 3) activate clicked tab
      tab.classList
         .replace('border-gray-300', 'border-teal-500');
      tab.classList
         .replace('bg-white', 'bg-teal-100');
      tab.classList
         .replace('text-gray-700', 'text-teal-600');

      // 4) show its panel
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId)
              .classList.remove('hidden');
    });
  });
});
