async function loadComponent(selector, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
        const content = await response.text();
        document.querySelector(selector).innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});

export { loadComponent };
