import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { TextControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const FrenchTitlePanel = () => {
    // 1. Get the current value from meta
    const meta = useSelect((select) => 
        select('core/editor').getEditedPostAttribute('meta')
    );
    
    // 2. Setup the save function
    const { editPost } = useDispatch('core/editor');

    return (
        <PluginDocumentSettingPanel
            name="fr-title-panel"
            title="Language Options"
            icon="translation"
        >
            <TextControl
                label="Titre Français"
                value={meta?.fr_title || ''}
                onChange={(value) => {
                    editPost({ meta: { ...meta, fr_title: value } });
                }}
                help="This title will be used when ?lang=fr is active."
            />
        </PluginDocumentSettingPanel>
    );
};

registerPlugin('wa-language-sidebar', {
    render: FrenchTitlePanel,
});