import '@awesome.me/webawesome/dist/components/button/button.js';

(function() {
    const isIframe = window.name === 'editor-canvas';

    // Early exit for the iframe to avoid any main-window logic
    if (isIframe) {
        //console.log('WA: Shadow DOM active.');
        return; 
    }

    /**
     * 2. NATIVE INITIALIZATION
     * We use native browser events instead of @wordpress/dom-ready
     */
    const initInjection = () => {
        // Access the PHP variables passed via wp_localize_script
        const vars = window.waEditorSyncVars;
        if (!vars || !vars.script_url) return;

        const inject = () => {
            const iframe = document.querySelector('iframe[name="editor-canvas"]');
            const iframeDoc = iframe?.contentDocument || iframe?.contentWindow?.document;
            
            if (iframeDoc && iframeDoc.head && !iframeDoc.getElementById('wa-iframe-bridge')) {
                const script = iframeDoc.createElement('script');
                script.id = 'wa-iframe-bridge';
                script.type = 'module';
                script.crossOrigin = 'anonymous';
                script.src = vars.script_url;
                
                iframeDoc.head.appendChild(script);
                //console.log('WA: Bridge injected into iframe.');
            }
        };

        // Run immediately
        inject();
        
        // Watch for Gutenberg re-rendering the iframe
        setInterval(inject, 2500); 
    };

    // 3. LISTEN FOR LOAD (Native replacement for domReady)
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initInjection();
    } else {
        document.addEventListener('DOMContentLoaded', initInjection);
    }
})();