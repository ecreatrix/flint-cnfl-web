/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { SelectControl, PanelBody } from '@wordpress/components'
import { 
  InnerBlocks,
  BlockControls,
  AlignmentControl,
  InspectorControls, 
  useBlockProps, 
  useInnerBlocksProps,
  store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export default function Edit( props ) {
  const { 
    attributes, 
    attributes: { language },
    setAttributes, 
    clientId,
    className,
  } = props
  
  const isEnglish = language === 'en';
  //console.log(props)

  const blockProps = useBlockProps( {
    className: clsx( 
      'wa-block-lang',
    {
      //[ `has-text-align-${ align }` ]: align,
    } ),
  } );

  const { hasInnerBlocks } = useSelect(
    ( select ) => {
      const { getBlock } = select( blockEditorStore );
      const block = getBlock( clientId );
      return {
        hasInnerBlocks: !! ( block && block.innerBlocks.length ),
      };
    },
    [ clientId ]
  );

  const innerBlocksProps = useInnerBlocksProps(
    { 
      ...blockProps, 
      className: clsx(blockProps.className, 'wa-lang-inner-content'),
      style: {
        ...blockProps.style,
        padding: '10px',
      },
      template: [['core/paragraph']],
      renderAppender: hasInnerBlocks 
        ? undefined 
        : InnerBlocks.ButtonBlockAppender,
    }
  );

  return (
    <div className="wa-lang-container-editor" style={{
      border: `1px solid`,
      borderLeft: `5px solid ${isEnglish ? '#000000' : '#ffffff'}`,
      margin: '10px 0'
    }}>
      <InspectorControls>
        <PanelBody title="Language Selection">
          <SelectControl
            label="Display this content for:"
            value={attributes.language}
            options={[
              { label: '🇬🇧 English', value: 'en' },
              { label: '🇫🇷 French', value: 'fr' },
            ]}
            onChange={(val) => setAttributes({ language: val })}
          />
        </PanelBody>
      </InspectorControls>

      {/* Helper label for the editor to distinguish containers at a glance */}
      <div style={{ padding: '5px 10px', fontSize: '11px', textTransform: 'uppercase' }}>
        <strong>{isEnglish ? 'English Content' : 'Contenu Français'}</strong>
      </div>
      <div { ...blockProps }>
        <div { ...innerBlocksProps } />
      </div>
    </div>
  );
}
