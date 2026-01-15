import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { createElement } from '@wordpress/element';

/**
 * Filter 1: The Wrapper Class (Prevents layout break)
 */
const withButtonClass = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        if (props.name !== 'core/button') return <BlockListBlock {...props} />;
        return <BlockListBlock {...props} className={`${props.className || ''} button`.trim()} />;
    };
}, 'withButtonClass');

/**
 * Filter 2: The Visual Wrap (Sync the Editor view to match the exact frontend HTML structure.)
 */
const withWaButtonVisual = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (props.name !== 'core/button') return <BlockEdit {...props} />;

        const { attributes } = props;
        
        // Match the logic you used in your PHP frontend filter
        const isOutline = attributes.className?.includes('is-style-outline');
        
        return (<>
            <wa-button 
                variant={isOutline ? 'outline' : 'brand'} 
                appearance="accent" // Hardcoded to match your frontend example
                size="medium"       // Hardcoded to match your frontend example
                style={{ display: 'inline-block' }} // Change to inline-block to match button feel
            >
                {/* WordPress MUST render its <div> here to keep it editable.
                  We use CSS (Step 2) to hide that div's styling.
                */}
                <BlockEdit {...props} />
            </wa-button>
        </>);
    };
}, 'withWaButtonVisual');

// Apply both filters
addFilter('editor.BlockListBlock', 'wa/button-class', withButtonClass);
addFilter('editor.BlockEdit', 'wa/button-visual', withWaButtonVisual);