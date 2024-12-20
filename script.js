document.addEventListener('DOMContentLoaded', (event) => {
    const gnomes = document.querySelectorAll('img');
    const bench = document.getElementById('bench');

    gnomes.forEach(gnome => {
        gnome.draggable = true;

        gnome.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    bench.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    bench.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const gnome = document.getElementById(id);
        bench.appendChild(gnome);
    });
});
