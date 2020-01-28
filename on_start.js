let pairs = [['Sládek Vojtěch', 'Hanzlíková Adéla'], ['SLADEVO1', 'HANZLAD1']];

let observer = new MutationObserver(mutations =>
    mutations.forEach(m =>
        m.addedNodes.forEach(n =>
            n.nodeType === document.TEXT_NODE && (n.textContent = pairs.reduce((acc, [p, s]) => acc.replace(p, s), n.textContent))
        )
    )
);

observer.observe(document.getRootNode(), {childList: true, subtree: true});